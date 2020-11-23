## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Migrations

### Setup
```bash
# setup postgres with TypeORM config
$ cp ormconfig.example.json ormconfig.json
```
_Note_: You must fill in missing config variables

### Run
```bash
# setup tables
$ npm run migration:up

# revert migration:up
$ npm run migration:revet
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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Code Documentation
```bash
# generate code hierarchy documentation
npm run compodoc
```
Accessible at: http://localhost:8080

## Demo
Hosted on Heroku and testable through Swagger docs:
https://nestjs-organization-api.herokuapp.com/api

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
