FROM node:alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build
RUN npm install -g serve
RUN serve -s build -l 3001
