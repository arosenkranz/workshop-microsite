FROM node:alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
