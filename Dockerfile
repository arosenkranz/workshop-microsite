FROM node:alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install --silent
COPY . .
COPY ./.git .
ARG DD_APPLICATION_ID
ARG DD_CLIENT_TOKEN
ARG DD_DISCOUNTS_URL
ARG DD_ADS_URL
ARG STOREDOG_URL
ARG MICROSITE_URL
ARG DATADOG_API_KEY

ENV REACT_APP_DD_APPLICATION_ID=$DD_APPLICATION_ID \
  REACT_APP_DD_CLIENT_TOKEN=$DD_CLIENT_TOKEN \ 
  REACT_APP_DD_DISCOUNTS_URL=$DD_DISCOUNTS_URL \ 
  REACT_APP_DD_ADS_URL=$DD_ADS_URL \
  REACT_APP_STOREDOG_URL=$STOREDOG_URL \
  REACT_APP_MICROSITE_URL=$MICROSITE_URL \
  DATADOG_API_KEY=$DATADOG_API_KEY

RUN npm run build
RUN npx datadog-ci sourcemaps upload ./build \
  --project-path=./src/ \
  --service=storedog-microsite \
  --release-version=1.1 \
  --minified-path-prefix="${REACT_APP_MICROSITE_URL}/static/js" \

  FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
