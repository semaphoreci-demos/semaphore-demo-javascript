# Semaphore demo CI/CD pipeline using JavaScript (ReactJS/NodeJS)

Example application and CI/CD pipeline showing how to run a JavaScript project which consists of ReactJS client and NodeJS server on Semaphore 2.0.

## Local project setup

This project will require postgresql database. If you don't have one you can launch docker container with db for this app.

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

## CI/CD on Semaphore

Fork this repository and use it to [create a
project](https://docs.semaphoreci.com/article/63-your-first-project):

```
curl https://storage.googleapis.com/sem-cli-releases/get.sh | bash
sem connect <semaphore-organization-link> <semaphore-id> // found in Semaphore Dashboard
cd <project directory>
sem init
```

After that, push to the repository to trigger a workflow on Semaphore.

The CI pipeline will look like this:

![CI pipeline on Semaphore](images/ci-pipeline.png)

The example pipeline contains 6 blocks:

 - Install Dependencies
    -  installs and caches all npm dependencies
 - Run Lint
    - Runs tslint to check project files codestyle
 - Run Unit Tests
    - Runs PHPUnit Unit Tests
 - Run E2E Tests
    - Runs E2E tests through cypress on client.
    - Runs E2E tests through jest on server.
 - Run project Build
    - Runs tsc to build projects and prepare them for deploy

## License

Copyright (c) 2019 Rendered Text

Distributed under the MIT License. See the file [LICENSE.md](./LICENSE.md).
