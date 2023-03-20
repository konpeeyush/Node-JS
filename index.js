const fs= require("fs");

// 
if(!fs.existsSync("Challenge")) {
    fs.mkdir("Challenge", (err) => {
        if(err) console.log(err);
        console.log("Folder Created");
    });
}

// Write a File in Challenge Folder
fs.writeFileSync("Challenge/Challenge.txt", "Hello World, I have accepted the challenge", (err) => {
    if(err) console.log(err);
    console.log("File Created");
});

fs.appendFileSync("Challenge/Challenge.txt", " Added at last.", (err) => {
    if(err) console.log(err);
    console.log("File Created with Append");
});

const data = fs.readFileSync("Challenge/Challenge.txt", "utf-8", (err) => {
    if(err) console.log(err);
});
console.log(` Data is ${data}`);

fs.renameSync("Challenge/Challenge.txt", "Challenge/NewName.txt", (err) => {
    console.log(err);
});