const fs = require('fs');

fs.readFile('./myNotes.txt', (err, data) => {
    if (err) {
        console.log("Operation Failed 1");
    } else {
        fs.writeFile('./myNotesCopy.txt', data, (err) => {
            if (err) {
                console.log("Operation Failed 2");
            } else {
                fs.writeFile('./myNotes.txt', '', (err) => {
                    if (err) {
                        console.log("Operation Failed 3");
                    } else {
                        console.log("Operation successfull")
                    }
                })
            }
        })
    }
});