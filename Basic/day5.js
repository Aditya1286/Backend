import {EventEmitter} from "events";
//creating object 
const emitter =  new EventEmitter();
//asynchronosuly calling event
emitter.on('sd',()=>{
    setImmediate(()=>console.log('Welcome to Samhit'));
})
// .on used to describe the event;
emitter.on('greet',(name)=>{
    console.log("Good Morning  "+name+"!!!");
})
// we can add multiple listener
emitter.on('greet',(name)=>{
    console.log(name+" "+'Sharma');
})
emitter.on('register',()=>{
    console.log('You are successfuly registerd!!! ');
})
//once is user for emitting only once we call more than once then its not called 
emitter.once('task',()=>{
    console.log("View your email to see the assigned task!!!");
})
//emitting the events
emitter.emit('sd');
emitter.emit('greet','Nanku');
emitter.emit('register');
emitter.emit('task');
emitter.emit('task');//it will fail to work