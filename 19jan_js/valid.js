const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("keydown", (string) => {
  if (
    string.match(/[a-z]/g) &&
    string.match(/[0-9]/g) &&
    string.match(/[A-Z]/g) &&
    string.match(/[!@#$%^&*()_+]/g)
  )
    return true;
  else return false;
});
myEmitter.emit("event");
