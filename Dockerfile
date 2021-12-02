FROM --platform=$BUILDPLATFORM node:16

WORKDIR /usr/src/app

COPY *json ./
RUN npm install

COPY *.js ./

EXPOSE 3000

CMD [ "node", "proxy.js" ]
