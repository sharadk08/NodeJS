const fs = require("fs");
let logUser = (username) => {
   //Your implementation goes here

    fs.readFile("./names.txt", "utf8", (err, data) => {

    if(err) {
            console.log("Error reading file for user: " + username);
    } else {
            let names = data.split(", ");
            if(!names.includes(username)) {
                console.log(`User ${username} does not exist. Adding to file.`);

                fs.appendFile("./names.txt", `, ${username}`, (err) => {
                    if(err) {
                        console.log(`Error writing file for user: ${username}`);
                    } else {
                        console.log(`User ${username} added successfully.`);
                    }
                });
            } else {
                console.log(`User ${username} already exists.`);
            }
        }
    });
};
logUser("Sam");
logUser("Nina");