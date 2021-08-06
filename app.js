const fs = require('fs')
const csv = require('csv-parser')
const term = require('terminal-kit').terminal

term.on('key', (key) => { if(key === 'CTRL_C'){ process.exit() } })

class csvToJSON{
    constructor(){
    }

    exportJSON(array, fileName){
        term('\nEnter desired path\n')
        term.inputField((error, input) => {
            let jsonString = JSON.stringify(array);
            fs.writeFile(input + '/' + fileName, jsonString, (err) => {
                if(err){ console.log('ERROR ', err) }
                else { console.log('\nFile was exported to ', input) }
            })


        })

    }

    
    /**
     * 
     * @param {*string} folderPath - absolute folder path (including the last "\")
     * @param {*string} fileName - fileName (including the .csv extension)
     * @returns array of object of properties from the csv file
     */
    convertCSVToJSON(outputFileName){
        term(`\nEnter complete file path (including "file.csv"):\n`);
        term.inputField((error, input) => {
            let array = []
            fs.createReadStream(input)
                .pipe(csv({ separator: ',' }))
                .on('data', (data) => { array.push({...data}) })
                .on('end', () => {
                    //console.dir(array, { maxArrayLength: null })
                })
                this.exportJSON(array, outputFileName)
        })
    }




}

module.exports = csvToJSON;