FROM node:trixie AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run generate
RUN npm run build
CMD ["npm", "run", "start"]