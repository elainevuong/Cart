FROM node:14-alpine3.15

RUN mkdir -p /home/shopping-cart

COPY ./server /home/shopping-cart

WORKDIR /home/shopping-cart

RUN npm ci

CMD ["node", "index.js"]

