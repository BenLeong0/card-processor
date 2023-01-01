#! /bin/sh

(cd mastercard-service && yarn build);
docker-compose build --no-cache;
docker-compose up -d --force-recreate;
