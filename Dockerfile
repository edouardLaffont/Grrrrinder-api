FROM node:10-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN pnpm install

COPY . /app/

EXPOSE 3000
CMD ["pnpm", "run", "start:dev"]