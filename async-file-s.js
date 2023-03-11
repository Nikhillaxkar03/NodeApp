const {readFile , writeFile} = require('fs')

readFile('content/test.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('content/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result;

    writeFile('content/result2.txt', `here is the result: ${first}, ${second}`, (err, result)=> {
        if(err) {
            return
        }
        else{
            console.log(result);  //It worked as the new file is created and all the data is written in content folder in result2.txt
        }
    })
    })
})