FROM node:alpine

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY ./dist /app
WORKDIR /app
ENV PORT=8000
CMD node app.js

EXPOSE 8000
