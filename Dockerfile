### Use a multi-stage build for a smaller final image
# Build stage
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files first to leverage caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM node:18 AS runner

# Set working directory
WORKDIR /app

# Install pnpm in the production image
RUN npm install -g pnpm
# RUN apk add --no-cache bash libc6-compat

# Copy only the built assets and necessary files
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the application port
EXPOSE 3333

# Start the Next.js application
CMD ["pnpm", "next", "start", "-p", "3333", "--hostname", "0.0.0.0"]
