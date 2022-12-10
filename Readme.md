<img src="./frontend/public/android-chrome-192x192.png" width='80px' />

# Planet Annhiliation

## Table of Content:

- [Tech Stack](#tech-stack)
- [Installation and starting the project](#installation-and-starting-the-project)
- [Documentation](#documentation)
- [Dockerized](#dockerized)
- [Environment Variables](#environment-variables)

## Tech Stack

The following technologies were used to develop this project:

- [Node.js](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/)
- [Passport.js](https://www.passportjs.org/docs/)
- [Sequelize](https://sequelize.org/docs/v6/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Docker](https://docs.docker.com/)
- [Nginx](https://docs.nginx.com/)

[Swagger](https://swagger.io/solutions/api-documentation/) and [Open API](https://spec.openapis.org/oas/latest.html) were used for documenting the API.

## Installation and starting the project

To install the project locally follow these steps:

- You will need to have Node.js installed on your machine
- Also to mention you can run both projects separately, or together with the following commands:
  - Install FE: `npm run install-fe`
  - Run FE: `npm run start-fe`
  - Install BE: `npm run install-be`
  - Run BE: `npm run start-be`
  - Install Both: `npm install`
  - Run Both: `npm start`

Because the project is using PostgreSQL it is necessary to have one locally, the database is mentioned above, follow their documentation for next steps.

There are also some Env variables that will need to be configured, more on that in the [Env](#environment-variables) section.

## Documentation

Describing the project was possible with Swagger and Open API specification. For testing purposes, a postman collection is also provided.

To access the documentation you can use this link `{server-baseUrl}/api-docs`

Also there is a DB diagram, so you can see the process of making the SQL tables [DB Diagram](https://dbdiagram.io/d/6389f6a8bae3ed7c454455c0)

## Dockerized

First Docker is needed on the machine, so it can start it's vm and serve the containers with the images. Docker is mentioned and linked, above in the [Tech Stack](#tech-stack)

Docker compose is used to pull the images, and bundle all the projects.
Running this command `docker compose up --build` will build and start all the containers.

## Environment Variables

These are needed enviorment variables:

```
NODE_ENV="development" // Node enviorment
POSTGRES_USER="postgres" // Postgres database user
POSTGRES_DB="pa-db" // Postgres database name
POSTGRES_PASSWORD="postgres" // Postgres database password
POSTGRES_PORT=5432 // Postgres database port
PORT=3010 // Server port
GOOGLE_PLUS_CLIENT_ID="484655970880-24prmhpqb4vremdpiijkk5tmilj8ir1b.apps.googleusercontent.com" // Google+ Api client
GOOGLE_PLUS_CLIENT_SECRET="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"
SPEC_URL="./backend/open_api.yaml" // Google+ Api secret
REACT_APP_BASE_URL='http://localhost:3010' // Frontend base url
```

## [Author](https://github.com/sstefdev?tab=repositories)
