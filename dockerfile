FROM node:16-alpine

WORKDIR /src

COPY package*.json ./

COPY . .

RUN npm install

ENV NODE_ENV=producction

EXPOSE 5000

CMD ["npm", "start"]
