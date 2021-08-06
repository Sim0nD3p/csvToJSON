# csvToJSON
Needs parents script to be called from cmd (node.js) with the following:
    const Converter = require('./app.js')
    let converter = new Converter()
    converter.convertCSVToJSON(outputFileName)