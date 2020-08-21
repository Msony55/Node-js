const events = require("events");
const event = new events.EventEmitter();

const first_event = function(n1,n2){
    console.log(n2*n1);
    event.emit('click2'); //calling second function for continous
}

const Second_event = function(){
    console.log("Second event Trigger");
    event.emit('click3');// its your choice to add at first function or second
}

const third_event = function(){
    console.log("Third event Trigger");
}

event.on('click3',third_event);
event.on('click2',Second_event);
event.on('click',first_event);
event.emit('click',4,5); // id use by # calling

// in js 
// $("your id").on('click',function(){//you can use click move etc
//     console.log("call event in js");
// });