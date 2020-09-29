# Semaphore demo CI/CD pipeline using JavaScript (Node.js, TypeScript, Nest.js, React)

Example application and CI/CD pipeline showing how to run a JavaScript project
on Semaphore 2.0. Project consists of a Node.js server based on Nest.js, and a
React client. Code is written in TypeScript.

**Note:** The `fork-and-run` branch contains simplified Semaphore pipeline that doesn't include deployment to Google Cloud. To see more complex Semaphore workflow, please check `master` branch.

## CI/CD on Semaphore

Fork this repository and use it to [create a
project](https://docs.semaphoreci.com/article/63-your-first-project).

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

## License

Copyright (c) 2020 Rendered Text

Distributed under the MIT License. See the file [LICENSE.md](./LICENSE.md).
