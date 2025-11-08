const fs = require('fs');

let sortNames = () => {
    fs.readFile('./data/names.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Could not read file:", err);
            return;
        }
        let names = data.split(', ').sort().join(', ');
        fs.writeFile('./sortedData/sortedNames.txt', names, (err) => {
            if (err) {
                console.error("Could not write file:", err);
                return;
            }
            console.log("Names sorted and saved to sortedNames.txt");
        });
    });
};

sortNames();