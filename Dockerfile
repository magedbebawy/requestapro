# Use official Node.js 18 image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile || npm install

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Production image, copy built assets and only necessary files
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Install only production dependencies
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile --production || npm install --production

# Copy built app and public files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/.env.local ./.env.local
COPY --from=builder /app/src ./src

EXPOSE 3000

CMD ["npm", "start"] 