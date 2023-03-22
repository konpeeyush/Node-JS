const EventEmitter = require('events');

const event = new EventEmitter();

// Registering for the event to be fired only one time using once
event.on("sayMyName", () => {
    console.log("Your name is Peeyush");
});

event.on("sayMyName", () => {
    console.log("Your name is Kumar");
});

event.emit("sayMyName");

event.on("checkPage",(sc,msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage",200,"ok");