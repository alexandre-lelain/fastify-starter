# Fastify Starter

An all-in-one **Fastify** starter project. It follows a **MVC** structure.

What's in this pack ?

- A default CRUD model
- Dev DB server: MongoDB
- DB adapter: Mongoose
- A login route using jwt
- Documentation of the API is already set up (using Swagger)
- Unit & Integration tests are set up
- Lint & prettier installed

[![ci status](https://github.com/alexandre-lelain/fastify-starter/workflows/CI/badge.svg)](https://github.com/alexandre-lelain/fastify-starter/actions?query=workflow%3ACI)

## Requirements

### With Docker

If you don't want to bother with **mongod**, you can use the docker image in the project. All you need:

- Docker server is running
- `docker-compose` is installed on your machine, and is in your `$PATH`.

### Without Docker

If you don't want to use **Docker** because it takes too much memory on your machine (especially Windows') or for any other reasons, you can also run the local DB test server
directly with `mongod`.

You should have [MongoDB@^4.0.0](https://www.mongodb.com/try/download/community) Server installed on your computer. Please make sure that its binaries are added
in your `PATH` variable. On Windows, by default you will find them in `C:\Program Files\MongoDB\Server\4.4\bin`.

## Getting Started

1. Install dependencies

```
yarn install
```

2. Run the DB server:

   **With Docker**

```
yarn start:docker
```

**...Or with mongod**

```
yarn start:db
```

> Note: You can run the DB server as a background task if you want, or you can open another terminal for the next operation.

<br/>

3. Run the API server:

```
yarn start
```

## Testing

```
yarn validate
```

This will run both the linter and the test units.
