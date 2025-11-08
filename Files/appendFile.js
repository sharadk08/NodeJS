const fs = require('fs');
function FileAppend() {
    let str = "\nHey, there.. ";
    fs.appendFile('./log.txt', str + " At: " + new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + (new Date().getDate() + 1) + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(), function (err) {
        if (!err)
            console.log('Data Appended!');
        else
            throw err;
    })
}
FileAppend();
