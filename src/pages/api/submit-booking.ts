import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type BookingData = {
  service: {
    title: string;
    slug: string;
  };
  date: string;
  timeSlot: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    notes?: string;
  };
  total: number;
  tvDetails?: {
    tvSizeRange: string;
    exactTVSize: string;
    wireManagement: string;
    liftingHelp: string;
  };
  smartHomeDetails?: {
    deviceType: string;
    deviceCount: number;
    deviceBrand: string;
    networkSetup: string;
    mountingType: string;
    additionalDevices?: string;
  };
  furnitureDetails?: {
    jobSize: string;
    itemCount: number;
    itemDescription: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean } | { error: string }>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Verify environment variables
  const requiredEnvVars = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASSWORD",
    "SMTP_FROM",
    "ADMIN_EMAIL",
  ];

  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingEnvVars.length > 0) {
    console.error("Missing environment variables:", missingEnvVars);
    return res.status(500).json({
      error: "Email configuration is incomplete. Please check server logs.",
    });
  }

  try {
    const bookingData: BookingData = req.body;

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP connection verification failed:", verifyError);
      return res.status(500).json({
        error: "Failed to connect to email server. Please check SMTP settings.",
      });
    }

    // Send email to admin
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #2563eb;
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              margin-bottom: 20px;
            }
            .content {
              background-color: #ffffff;
              padding: 20px;
              border: 1px solid #e5e7eb;
              border-radius: 0 0 8px 8px;
            }
            .section {
              margin-bottom: 24px;
              padding-bottom: 16px;
              border-bottom: 1px solid #e5e7eb;
            }
            .section:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            h2 {
              margin: 0;
              font-size: 24px;
              font-weight: bold;
            }
            h3 {
              color: #2563eb;
              font-size: 18px;
              margin: 0 0 16px 0;
              padding-bottom: 8px;
              border-bottom: 2px solid #e5e7eb;
            }
            .total-cost {
              background-color: #f3f4f6;
              padding: 16px;
              border-radius: 6px;
              margin: 16px 0;
              font-size: 18px;
              font-weight: bold;
            }
            .detail-row {
              margin-bottom: 12px;
            }
            .label {
              color: #4b5563;
              font-weight: 600;
              margin-right: 8px;
            }
            .value {
              color: #111827;
            }
            .notes {
              background-color: #f9fafb;
              padding: 12px;
              border-radius: 6px;
              margin-top: 8px;
            }
            .service-details {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 6px;
              padding: 16px;
              margin-top: 8px;
            }
            .service-details h4 {
              color: #1e40af;
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 12px;
            }
            .service-details-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 12px;
            }
            .service-detail-item {
              margin-bottom: 8px;
            }
            .service-detail-label {
              color: #4b5563;
              font-weight: 500;
              margin-right: 8px;
            }
            .service-detail-value {
              color: #111827;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>New Booking Request</h2>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="detail-row">
                <span class="label">Service:</span>
                <span class="value">${bookingData.service.title}</span>
              </div>
              <div class="detail-row">
                <span class="label">Date:</span>
                <span class="value">${new Date(
                  bookingData.date
                ).toLocaleDateString()}</span>
              </div>
              <div class="detail-row">
                <span class="label">Time:</span>
                <span class="value">${bookingData.timeSlot}</span>
              </div>
              <div class="total-cost">
                Total Cost: $${bookingData.total}
              </div>
            </div>

            <div class="section">
              <h3>Customer Information</h3>
              <div class="detail-row">
                <span class="label">Name:</span>
                <span class="value">${bookingData.contactInfo.name}</span>
              </div>
              <div class="detail-row">
                <span class="label">Email:</span>
                <span class="value">${bookingData.contactInfo.email}</span>
              </div>
              <div class="detail-row">
                <span class="label">Phone:</span>
                <span class="value">${bookingData.contactInfo.phone}</span>
              </div>
              <div class="detail-row">
                <span class="label">Address:</span>
                <span class="value">${bookingData.contactInfo.address}</span>
              </div>
              ${
                bookingData.contactInfo.notes
                  ? `
                <div class="notes">
                  <span class="label">Notes:</span>
                  <span class="value">${bookingData.contactInfo.notes}</span>
                </div>
              `
                  : ""
              }
            </div>

            ${
              bookingData.tvDetails
                ? `
              <div class="section">
                <h3>TV Mounting Details</h3>
                <div class="service-details">
                  <div class="service-details-grid">
                    <div class="service-detail-item">
                      <span class="service-detail-label">TV Size Range:</span>
                      <span class="service-detail-value">${bookingData.tvDetails.tvSizeRange}</span>
                    </div>
                    <div class="service-detail-item">
                      <span class="service-detail-label">Exact TV Size:</span>
                      <span class="service-detail-value">${bookingData.tvDetails.exactTVSize}</span>
                    </div>
                    <div class="service-detail-item">
                      <span class="service-detail-label">Wire Management:</span>
                      <span class="service-detail-value">${bookingData.tvDetails.wireManagement}</span>
                    </div>
                    <div class="service-detail-item">
                      <span class="service-detail-label">Lifting Help:</span>
                      <span class="service-detail-value">${bookingData.tvDetails.liftingHelp}</span>
                    </div>
                  </div>
                </div>
              </div>
            `
                : ""
            }

            ${
              bookingData.smartHomeDetails
                ? `
              <div class="section">
                <h3>Smart Home Installation Details</h3>
                <div class="service-details">
                  <div class="service-details-grid">
                    <div class="service-detail-item">
                      <span class="service-detail-label">Device Type:</span>
                      <span class="service-detail-value">${
                        bookingData.smartHomeDetails.deviceType
                      }</span>
                    </div>
                    <div class="service-detail-item">
                      <span class="service-detail-label">Device Brand:</span>
                      <span class="service-detail-value">${
                        bookingData.smartHomeDetails.deviceBrand
                      }</span>
                    </div>
                    <div class="service-detail-item">
                      <span class="service-detail-label">Number of Devices:</span>
                      <span class="service-detail-value">${
                        bookingData.smartHomeDetails.deviceCount
                      }</span>
                    </div>
                    <div class="service-detail-item">
                      <span class="service-detail-label">Network Setup:</span>
                      <span class="service-detail-value">${
                        bookingData.smartHomeDetails.networkSetup
                      }</span>
                    </div>
                    <div class="service-detail-item">
                      <span class="service-detail-label">Mounting Type:</span>
                      <span class="service-detail-value">${
                        bookingData.smartHomeDetails.mountingType
                      }</span>
                    </div>
                    ${
                      bookingData.smartHomeDetails.additionalDevices
                        ? `
                      <div class="service-detail-item md:col-span-2">
                        <span class="service-detail-label">Additional Devices Description:</span>
                        <span class="service-detail-value">${bookingData.smartHomeDetails.additionalDevices}</span>
                      </div>
                    `
                        : ""
                    }
                  </div>
                </div>
              </div>
            `
                : ""
            }

            ${
              bookingData.furnitureDetails
                ? `
              <div class="section">
                <h3>Furniture Assembly Details</h3>
                <div class="service-details">
                  <div class="service-details-grid">
                    <div class="service-detail-item">
                      <span class="service-detail-label">Job Size:</span>
                      <span class="service-detail-value">${bookingData.furnitureDetails.jobSize}</span>
                    </div>
                    <div class="service-detail-item">
                      <span class="service-detail-label">Number of Items:</span>
                      <span class="service-detail-value">${bookingData.furnitureDetails.itemCount}</span>
                    </div>
                    <div class="service-detail-item md:col-span-2">
                      <span class="service-detail-label">Item Description:</span>
                      <span class="service-detail-value">${bookingData.furnitureDetails.itemDescription}</span>
                    </div>
                  </div>
                </div>
              </div>
            `
                : ""
            }
          </div>
        </body>
      </html>
    `;

    try {
      // Send email to admin only
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.ADMIN_EMAIL,
        subject: `New Booking Request - ${bookingData.service.title}`,
        html: adminEmailHtml,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending admin email:", error);
      return res
        .status(500)
        .json({ error: "Failed to send booking notification" });
    }
  } catch (error) {
    console.error("Error submitting booking:", error);
    res.status(500).json({ error: "Failed to submit booking" });
  }
}
