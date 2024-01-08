FROM node:21.1.0

WORKDIR /app/
COPY package*.json .babelrc ./

RUN npm install
COPY ./app ./app
RUN npm run build

EXPOSE 3001
CMD [ "node", ".env", "dist/index.js" ]