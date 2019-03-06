# FROM node:10.12.0

# COPY package*.json ./

# RUN npm install

# COPY . .

# # ENV NODE_ENV=production

# RUN npm run build:prod

# EXPOSE 3001

# CMD [ "npm", "start" "--ignore-scripts"]

FROM node:carbon-alpine as dist
WORKDIR /tmp/
COPY package*.json tsconfig*.json *.env ormconfig*.json ./
COPY src/ src/
RUN npm install
RUN npm run build:prod

FROM node:carbon-alpine as node_modules
WORKDIR /tmp/
COPY package.json package-lock.json ./
RUN npm install --production

FROM node:carbon-alpine
WORKDIR /usr/local/nub-api
COPY --from=node_modules /tmp/node_modules ./node_modules
COPY --from=dist /tmp/dist ./dist
EXPOSE 3001
CMD ["node", "dist/main.js"]
