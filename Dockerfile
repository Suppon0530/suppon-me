FROM node:24-bookworm

USER node
WORKDIR /home/node/suppon-me

COPY --chmod=0755 package.json /home/node/suppon-me/ 

RUN npm install