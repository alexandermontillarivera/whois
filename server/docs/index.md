---
icon: rocket
---

# Welcome to Whois API

## Introduction

Whois API is a publicly accessible implementation of the WHOIS information service. Whoiser package is used to collect domain information from the Whois API. The project is a REST API that allows you to obtain information about a domain.

## Languages and technologies most important

- [Nodejs](https://nodejs.org/en/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Nodejs
- [Retype](https://retype.com/) - Static documentation generator
- [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript
- [Whoiser](https://www.npmjs.com/package/whoiser) - WHOIS information service
- [dns](https://nodejs.org/api/dns.html) - DNS records API for Nodejs
- [Vitest](https://www.npmjs.com/package/vitest) - Testing framework

## Requirements

- [Nodejs](https://nodejs.org/en/) - JavaScript runtime
- [Git](https://git-scm.com/) - Version control system

## Project structure

```bash
server # Project root folder
├── docs # Documentation folder, controls the generation of the documentation and the documentation itself
|-- src # Source code folder
|   |-- controllers # Controllers folder, contains the controllers of the project, the controllers are responsible for managing the requests
|   |-- contracts # Contracts folder, contains the contracts of the project, the contracts are responsible set the structure of objects and functions of the project
|   |-- config # Config folder, contains the configuration files of the project, .env.example file is used to set the environment variables of the project
|   |-- data # Data folder, contains data files of controls the information accepted by the project in the requests
|   |-- routes # Routes folder, contains the routes of the project, the routes are responsible for managing the requests and calling the controllers associated with the requests and middleware
|   |-- utils # Utils folder, is used resuable functions
|   |-- validators # Validators folder, it is a middleware layer for input data validation and sanitization
|   |-- app.ts # App file, is used to start the server and set routes
|   |-- server.ts # Server file, configures the server
|   |-- constants.ts # Constants file, contains the constants of the project of global use
|   |-- handlers # Handlers folder, contains the handlers of the project, the handlers are responsible for managing the errors of the project
|-- tests # Tests folder, contains the tests of the project
|-- .env.example # Environment variables file, is used to set the environment variables of the project
|-- .eslintrc.json # ESLint configuration file, is used to configure the linting of the project
|-- .gitignore # Git ignore file, is used to set the files and folders that will be ignored by Git
|-- nodemon.json # Nodemon configuration file, is used to configure the nodemon of the project
|-- readme.md # Readme file, is used to set the project documentation
|-- tsconfig.json # TypeScript configuration file, is used to configure the TypeScript of the project
|-- tsconfig.eslint.json # TypeScript ESLint configuration file, is used to configure the TypeScript ESLint of the project
|-- package.json # Package file, is used to set the project dependencies and scripts
```


## Project installation

To install the project, you need to clone the repository:

```bash
git clone https://github.com/alexandermontillarivera/whois.git
```

Then, you need enter the project and go to the server folder:

```bash
cd whois/server
```

Then, you need to install the dependencies:

```bash
npm install
```

## Project build

To build the project, you need to enter the server folder and run the following command:

```bash
npm run build
```

## Project execution

To run the project, you need to enter the server folder and run the following command:

```bash
npm start
```


## Project documentation generation

To generate the project documentation, you need to enter the server folder and run the following command:

```bash
npm run docs:build
```

By default, the documentation is generated when server is started. To disable this behavior, you rename the file `.env.example` to `.env` and set the variable `DOCS` to `false`.

## Project testing

To run the project tests, you need to enter the server folder and run the following command:

```bash
npm test
```

## Project linting

To run the project linting, you need to enter the server folder and run the following command:

```bash
npm run lint
```

## Project linting fixing

To run the project linting fixing, you need to enter the server folder and run the following command:

```bash
npm run lint:fix
```

## Build project and generate documentation

To build the project and generate the documentation, you need to enter the server folder and run the following command:

```bash
npm run build:all
```
