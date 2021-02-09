FROM mhart/alpine-node AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
COPY ./docker/entrypoint.sh .

CMD ["./entrypoint.sh"]
