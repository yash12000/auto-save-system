# docker build -t blk-hacking-ind-yash-janbandhu .

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5477

CMD ["node", "src/server.js"]