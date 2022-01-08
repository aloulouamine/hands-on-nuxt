FROM node:lts-alpine
LABEL maintaner="amine.aloulou.tn@gmail.com"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install
RUN npm run build
EXPOSE 5000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000
CMD ["npm", "start"]
