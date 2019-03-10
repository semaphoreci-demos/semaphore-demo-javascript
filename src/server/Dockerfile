FROM node:carbon-alpine as dist
WORKDIR /tmp/
COPY package*.json tsconfig*.json *.env ormconfig*.json ./
COPY src/ src/
RUN npm install
RUN npm run build

FROM node:carbon-alpine as node_modules
WORKDIR /tmp/
COPY package.json package-lock.json ./
RUN npm install --production

FROM node:carbon-alpine
WORKDIR /usr/local/nub-api
COPY --from=node_modules /tmp/node_modules ./node_modules
COPY --from=dist /tmp/dist ./dist
COPY --from=dist /tmp/*.env /tmp/ormconfig*.json ./
EXPOSE 3001
CMD ["node", "dist/main.js"]
