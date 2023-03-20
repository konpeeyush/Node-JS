// File Management is Node.js

// Common use for the File System module:

// Read files
// Create files
// Update files
// Delete files
// Rename files
const fs = require('fs');


// Reading files
fs.readFile('./docs/blog.txt', (err, data) => {
    if(err) console.log(err);
    // Will return a buffer
    console.log(data);
    // Will return a string
    console.log(data.toString());
});

// Writing files
fs.writeFile('./docs/blog.txt', 'Hello, Peeyush!', () => {
    console.log('File was written');
});
// Writing a new file
fs.writeFile('./docs/blog2.txt', 'New File Created using writeFile', () => {
    console.log('New File was written');
});

// Directories
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) console.log(err);
        console.log('Folder Created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if(err) console.log(err);
        console.log('Folder Deleted');
    });
}
