import React from 'react';

function JavaProject() {
    let yourName;
    let myArray = ['jack', 'christian', 'karina'];

    function myFunction(yourName) {
      if( myArray.indexOf(yourName) == 0) {
        console.log(yourName + " came first");
      } else if( myArray.indexOf(yourName) == 1) {
        console.log(yourName + " came second");
      } else if( myArray.indexOf(yourName) == 2) {
        console.log(yourName + " came third");
      } else {
        console.log(yourName + " ran in a race");
      } 
    };
    
    myFunction(yourName);
    
    
    function processUserInput(callback) {
      let yourName = prompt('Please enter your name.');
      callback(yourName);
    }
    
    processUserInput(myFunction);
}

export default JavaProject;


