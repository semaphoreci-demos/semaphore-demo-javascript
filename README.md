# Semaphore demo CI/CD pipeline using JavaScript (Node.js, TypeScript, Nest.js, React)

Example application and CI/CD pipeline showing how to run a JavaScript project
on Semaphore 2.0. Project consists of a Node.js server based on Nest.js, and a
React client. Code is written in TypeScript.

## CI/CD on Semaphore

Fork this repository and use it to [create a
project](https://docs.semaphoreci.com/article/63-your-first-project).

The CI pipeline will look like this:

![CI pipeline on Semaphore](images/ci-pipeline.png)

The example pipeline contains 4 blocks:

 - Install Dependencies
    -  installs and caches all npm dependencies
 - Run Lint
    - Runs tslint to check project files codestyle
 - Run Unit Tests
    - Runs Unit Tests
 - Run E2E Tests
    - Runs E2E tests through cypress on client.
    - Runs E2E tests through jest on server.

## Local project setup

This project requires a PostgreSQL database. If you don't have one you can
launch a Docker container to have one.

### Configuration

```bash
$ cp .sample.env .env
```

### Launch db

```bash
$ docker-compose up
```

### Stop db

```bash
$ docker-compose down
```

### Configure and launch server

Steps described in server [README](src/server/README.md)

### Configure and launch client

Steps described in client [README](src/client/README.md)

## License

Copyright (c) 2019 Rendered Text

Distributed under the MIT License. See the file [LICENSE.md](./LICENSE.md).
