## Description

App is built using [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Configuration

These values should work on development environment without changes

### Copy app config

```bash
$ cp sample.env .env
```

### Copy db config

```bash
$ cp ormconfig.sample.json ormconfig.json
```

### Run migrations

```bash
$ npm run migrate:up
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Lint

Check app code style

```bash
$ npm run lint
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrations

```bash
# up migrations
$ npm run migrate:up

# revert last migration
$ npm run migrate:revert
```

## License

Copyright (c) 2019 Rendered Text

Distributed under the MIT License. See the file [LICENSE.md](../../LICENSE.md) in repo root.