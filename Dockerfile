FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 5000
ENTRYPOINT ["node", "server.js"]
