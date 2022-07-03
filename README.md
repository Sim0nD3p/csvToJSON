## csvToJSON
Simple code to help convert csv file in JSON format for use in JavaScript

## Usage
The code needs to be run in a parent script to be called from cmd (node.js) with the following:
    const Converter = require('./app.js')
    let converter = new Converter()
    converter.convertCSVToJSON(outputFileName)
    
