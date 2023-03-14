FROM node:alpine:18.14.2
COPY ../ ../
CMD [ "node ./dist/main.js"]