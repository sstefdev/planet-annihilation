FROM node:14-alpine AS builder
ENV NODE_ENV='production'
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]