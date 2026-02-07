// console.log("Going to start Promises:- ");
// function callback(){
//     console.log("All files cleaned up!");
// }

// function random(resolve){
//     setTimeout(resolve, 5000);
// }

// const p = new Promise(random);
// p.then(callback);


const fs =  require('fs');
function readTheFile(sendTheValueHere){

    fs.readFile('a.txt', 'utf8', function(err, data) {
        if(err){
            console.log("Error in reading file");
        } else {
            sendTheValueHere(data); 
        }
    });
}

function readFile(filename){
    //return the fie and its content
    return new Promise(readTheFile);
}

const p = readFile();

function callback(data){
    console.log("File content is: ", data);
}

p.then(callback);


// console.log("start");

// Promise.resolve().then(() => {
//   console.log("promise");
// });

// console.log("end");

