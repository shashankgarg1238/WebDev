function run() {
	console.log("I will run after 5s");
}

setTimeout(run, 5000);
console.log("I will run immedietely");
console.log("Waiting for 5s to run the function");

// //How JS executes asynchronous code - http://latentflip.com/loupe/  /visualization
/*console.log("Hi");

function timeOut(){
    console.log("Click the button");
}
setTimeout(timeOut,10000);
console.log("welcome to the loupe . ");*/


