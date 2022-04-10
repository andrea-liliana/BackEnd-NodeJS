// Exportando funciones entre scripts con CommonJS

// logger.js

// Esta es una función que se guardara en este módulo como info
exports.info = (message) => {
    console.log(`info: ${message}`)
}
  
// Esta es una función que se guardara en este módulo como verbose
// This type of message is used to deliver more in depth information about command processing
exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}

/*
const logger = require('./logger')
logger.info('This is an informational message')
logger.verbose('This is a verbose message')
*/