# Fastify Starter

[![ci status](https://github.com/alexandre-lelain/fastify-starter/workflows/CI/badge.svg)](https://github.com/alexandre-lelain/fastify-starter/actions?query=workflow%3ACI)

## Requirements

### With Docker

You don't have to use **Docker** to run the DB server, you can directly use **mongod** if you have [MongoDB@^4.0.0](https://www.mongodb.com/try/download/community) installed on your machine.

However, if you don't want to bother with mongod, you can use the docker image in the project. All you need:

- Docker server is running
- `docker-compose` is installed on your machine, and is in your `$PATH`.

### Without Docker

If you don't want to use **Docker** because it takes too much memory on your machine (especially Windows') or for any other reasons, you can also run the local DB test server
directly with `mongod`.

You should have [MongoDB@^4.0.0](https://www.mongodb.com/try/download/community) Server installed on your computer. Please make sure that its binaries are added
in your `PATH` variable. On Windows, by default you will find them in `C:\Program Files\MongoDB\Server\4.4\bin`.

## Getting Started

1. Run the DB server:

```
yarn start:db //or yarn start:docker
```

2. Run the API server:

```
yarn start
```

## Todo

- deploy to heroku: https://www.heroku.com/nodejs
