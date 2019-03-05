FROM node:10.12.0-alpine

COPY package*.json ./

ENV NODE_ENV=production

RUN npm install

COPY . .

RUN npm run build:prod

EXPOSE 3001

CMD [ "npm", "start" "--ignore-scripts"]
