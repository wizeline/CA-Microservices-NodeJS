# CA-Microservices-NodeJS

Code Accelerators: Microservices - NodeJS

## Overall

### Description

This initiative aims to expedite the development of applications in their initial stages by providing project templates in various programming languages. These templates will adhere to a hexagonal architecture, enabling efficient and straightforward implementation and customization. This architectural approach promotes greater modularity and maintainability, adhering to best software development practices.

### Purpose

The main purpose of this project is to establish a microservices standard by providing a robust base code that addresses the fundamental needs of any microservices-focused project. It aims to promote good development practices, the adoption of design patterns and architecture specific to microservices. Additionally, there is an intention to encourage the implementation of rigorous processes for code testing and quality assurance, ensuring the reliability and efficiency of the resulting system.

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

### SetUp

#### Install

```zsh
npm install
```

#### Run using Docker
Use the following commands to run the app
```zsh
docker-compose run --rm express npm install
```
Then:
```zsh
docker-compose up -d
```
Now you can do a HTTP request to:
```zsh
http://localhost:3001/users/123123123
```

#### Test

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
