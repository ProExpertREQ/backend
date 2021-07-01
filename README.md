# Chronos-Server


This is the back-end of the [Chronos Web App](https://github.com/ProExpertREQ/chronos).

It's a REST API built with NodeJS + Express + MariaDB that receives data related to the departments, courses, subjects, and classes of the University of Brasília and record / provide to logged-in users all this data through a REST API.

## About this Project

This project is part of our studies about Software Requirements, then we'll be happy if you could provide us any feedback about the project, requirements, code, structure, or anything that you can report that could make us a better developer!


Email us at fgachronos@gmail.com


Connect with us at LinkedIn:
  * [Bruno Carmo](ttps://www.linkedin.com)
  * [Douglas Castro](https://www.linkedin.com/in/douglas-castro-461071145/)
  * [Guilherme Peixoto](ttps://www.linkedin.com)
  * [Guilherme Silva](ttps://www.linkedin.com)


## Getting Started

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment with NodeJS 14+ installed. To use the database, you'll need to have MariaDB installed and running on your machine.

### Installing

**Cloning the Repository**

```
$ git clone https://github.com/ProExpertREQ/chronos-server.git

$ cd chronos-server
```

**Installing dependencies**

```
$ yarn
```

_or_

```
$ npm install
```


### Running the Development environment
With all dependencies installed, .env variables set, the Database running, and the environment properly configured, you can now run the server:

```
$ yarn dev
```

_or_

```
$ npm run dev
```

## Route

The base URL is: http://localhost:3080/

## Built With

- [NodeJS](https://nodejs.org/en/) - Build the server
- [express](https://expressjs.com/) - Router of the Application
- [MariaDB](https://mariadb.org/) - Database
- [Sequelize](http://sequelize.org/) - Object Modeling + DB Connector
- [nodemon](https://nodemon.io/) - Process Manager used in the development
- [Google Cloud Platform](https://cloud.google.com/) - Compute Engine used in the production
- [dotenv](https://github.com/motdotla/dotenv) - Environment loader
- [eslint](https://eslint.org/) - JS Linter and code style

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/ProExpertREQ/chronos-server/blob/main/LICENSE) file for details.
