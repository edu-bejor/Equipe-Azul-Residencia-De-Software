FROM node:lts-alpine3.14 as BUILD

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

FROM nginx:1.21.3-alpine

WORKDIR /etc/nginx

RUN rm -rf /usr/share/nginx/html/*

COPY --from=BUILD /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY /nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 3000 80

CMD ["nginx", "-g", "daemon off;"]
