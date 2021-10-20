FROM node:15


WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install


EXPOSE 5200
CMD [ "node", "index.js" ]