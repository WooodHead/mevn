# mevn
MEVN is a framework for an easy starting point with MongoDB, Express, Vue.js, and Node.js based applications. It is designed to give you a quick and organized way to start developing MEVN based web apps with useful modules like Mongoose and Passport pre-bundled and configured. We mainly try to take care of the connection points between existing popular frameworks and solve common integration problems.

## Quick Start

# Install Node.js and then:

```sh
$ git clone https://github.com/mevnio/mevn.git
$ cd mevn
$ sudo npm -g install grunt-cli
$ npm install
$ grunt watch
```

#Configuration

```sh
cp ./config/config.json.template ./config/config.json
```

# Start HTTP Server
Open a new terminal to start a http server.
```sh
npm start
```

visit  http://localhost:3000
Happy hacking!

## Compile the project
```sh
grunt compile
```

## Purpose

`mevn` is designed to make life easy by providing a basic framework
with which to kickstart Vue.js projects. It contains a directory structure to
ensure code reusability and maximum scalability.
All you have to do is clone it and start coding!
