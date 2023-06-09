FROM node:18.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm ci
RUN npm audit
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]