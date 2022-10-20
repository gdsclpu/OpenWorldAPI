FROM node:15


WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install


EXPOSE 1000-65535
CMD [ "node", "index.js" ]