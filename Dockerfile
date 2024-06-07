FROM node:21.1.0-alpine

WORKDIR /app/
COPY package*.json .babelrc ./

RUN npm install
COPY ./app ./app
COPY swagger.js ./
RUN npm run build

EXPOSE 3001

CMD [ "node", "dist/index.js"]
