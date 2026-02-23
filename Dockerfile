FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN sed -i 's/listen       80;/listen       6415;/g' /etc/nginx/conf.d/default.conf

EXPOSE 6415

CMD ["nginx", "-g", "daemon off;"]