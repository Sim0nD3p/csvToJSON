const fs = require('fs')
const csv = require('csv-parser')

class csvToJSON{
    constructor(){
        this.file;
    }

    test(tes){
        console.log(tes)
    }

    /**
     * 
     * @param {*string} folderPath - absolute folder path (including the last "\")
     * @param {*string} fileName - fileName (including the .csv extension)
     * @returns array of object of properties from the csv file
     */
    importCSV(folderPath, fileName){
        let array = []
        fs.createReadStream(file)
            .pipe(csv({ separator: ',' }))
            .on('data', (data) => {
                console.log(data)

            })
            .on('end', () => {

            })

            return array
    }




}

module.exports = csvToJSON;