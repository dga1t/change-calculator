FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . /usr/src/app

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]