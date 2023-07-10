FROM node:20-alpine as builder
WORKDIR /app
RUN npm i -g yarn
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build


FROM nginx:stable-alpine as runtime

COPY --from=builder /app/dist/angular-boilerplate /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
