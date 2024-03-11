# CA-Microservices-NodeJS

Code Accelerators: Microservices - NodeJS

## Overall

### Description

This initiative aims to expedite the development of applications in their initial stages by providing project templates in various programming languages. These templates will adhere to a hexagonal architecture, enabling efficient and straightforward implementation and customization. This architectural approach promotes greater modularity and maintainability, adhering to best software development practices.

### Purpose

The main purpose of this project is to establish a microservices standard by providing a robust base code that addresses the fundamental needs of any microservices-focused project. It aims to promote good development practices, the adoption of design patterns and architecture specific to microservices. Additionally, there is an intention to encourage the implementation of rigorous processes for code testing and quality assurance, ensuring the reliability and efficiency of the resulting system.

### Cross-Cutting Concerns in the project:
#### What are cross-cutting concerns:
A cross cutting concern is functionality that is apply horizontally across an entire application. This functionality play and essential role in ensuring maintainability and scalability for the system. To know more about check this link: [Cross-Cutting Concerns](https://microservices.io/patterns/microservice-chassis.html)

This application use some cross-cutting concerns, like:

1. Security:
  - REST APIs must be secured by requiring an Access Token
    - Implementation:
      - The application includes the use of a Bearer Token for the paths of the application and the use of [JWT](https://jwt.io/) as the creation of the token.
      - To create the token you can use the path ```http://localhost:3001/auth/token)```
2. Logging:
  - This enabled the examination of application behavior, such as monitoring, debugging, or tracking activities within the app.
    - Implementation:
      - The application use a logger middleware to print in console information during the execution of the app.
3.  Health check:
  -  A url that a monitoring service can “ping” to determine the health of the application
     -  Implementation:
        -  The application includes a path ```http://localhost:3001/health)```  to verify the health of the service
4. Externalized configuration:
  - The application use a configuration to be connected to a Postgresql database using docker.

## Specific

### Content

A Microservice API based on the hexagonal architecture using NodeJS + ExpressJS

### Git

- Source control: [Trunk Based](https://trunkbaseddevelopment.com/)
- [Commit conventions](https://www.conventionalcommits.org/en/v1.0.0/#specification)

### Architecture

<!-- TODO: App diagram or file directory description -->

### Requirements

- [NodeJS](https://nodejs.org/en/) >= v20.1.0
- [Docker](https://www.docker.com/)

## SetUp

### Install

```zsh
npm install
```

## Running

### Local

#### Create environment vars

```zsh
cp .env.example .env
```

#### Run

```zsh
npm run start
```

### Docker

Use the following commands to run the app

```zsh
docker build . -t ca-microservices-nodejs
```

Then:

```zsh
docker-compose up -d
```

Now you can do a HTTP request to:

```zsh
http://localhost:3001/users/123123123
```

## Test

```zsh
npm run test
```

## Any assistance?

### Team Members

- <liliana.fernandez@wizeline.com> - Product Owner
- <diego.lozano@wizeline.com> - Product Owner
- <jose.pereira@wizeline.com> - Technical Lead
- <daniel.flores@wizeline.com> - Software Engineer

### Documentation and Confluence page

[Confluence page](https://wizeline.atlassian.net/wiki/spaces/wiki/pages/3894771727/Microservices)
