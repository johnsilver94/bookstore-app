FROM node:12.18.1-alpine3.9 AS builder
WORKDIR /app
COPY bookstore-front/package.json .
RUN npm install

COPY /bookstore-front .
RUN npm run build --prod

FROM nginx:1.19.0-alpine
COPY /bookstore-front/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/bookstore-front /usr/share/nginx/html
