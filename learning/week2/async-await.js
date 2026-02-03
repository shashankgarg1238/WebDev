/*
Q: Write a function that
Reads the contents of a file
Trims the extra space from the left and right
Writes it back to the file
*/

// function setTimeoutPromise(ms){
//     return new Promise((resolve => settimeout(resolve, ms)));
// }


//1.callback approach:-

// const fs = require("fs");
// function cleanFile(filePath, cb) {
//   fs.readFile(filePath, "utf-8", function (err, data) {
//     data = data.trim();
//     fs.writeFile(filePath, data, function () {
//       cb();
//     });
//   });
// }

// function onDone() {
//   console.log("file has been cleaned");
// }
// cleanFile("a.txt", onDone);


//2. async-await approach

const fs = require('fs')
function cleanFile(filepath,cb){
  return new Promise(function(resolve){
    fs.readFile(filepath,'utf-8',function(err, data){
      data=data.trim();
      fs.writeFile(filepath,data,function(){
        resolve();
      });
    });
  });
};

async function main(){
  await cleanFile("a.txt");
  console.log("Done cleaning file");
}

main();


//3. function(resolve,reject)

/*
const fs = require("fs");

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

readFilePromisified("a.txt").then(onDone).catch(onError);

*/
