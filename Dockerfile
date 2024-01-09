FROM node:21.1.0-alpine

WORKDIR /app/
COPY package*.json .babelrc .env ./

RUN npm install
COPY ./app ./app
RUN npm run build

CMD [ "node", "dist/index.js", "node—file=.env"]
EXPOSE 3001
