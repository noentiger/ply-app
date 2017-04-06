FROM mhart/alpine-node:6.2.1
WORKDIR /src
ADD . .

RUN npm install

# Build and optimize react app
RUN npm run build

ENV PORT 3000
EXPOSE $PORT

CMD [ "npm", "run", "start:server" ]
