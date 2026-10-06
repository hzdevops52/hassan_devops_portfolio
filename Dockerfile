# ==========================================
# Stage 1 — Build React application
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# ==========================================
# Stage 2 — Production Nginx server
# ==========================================
FROM nginx:alpine

LABEL org.opencontainers.image.source="https://github.com/hzdevops52/hassan_devops_portfolio"

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]