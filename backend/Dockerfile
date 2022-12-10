FROM node:16-alpine

WORKDIR /server
COPY ./package.json ./
COPY . .
RUN npm i -g pg pg-hstore
RUN npm install
EXPOSE 3010
CMD ["npm", "run", "start"]