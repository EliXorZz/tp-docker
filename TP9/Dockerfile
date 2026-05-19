FROM node:20-alpine

WORKDIR /app

COPY data .
RUN npm install

USER node
CMD ["node", "app.js"]