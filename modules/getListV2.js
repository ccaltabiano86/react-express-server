const express = require('express');

const app = express();

let getListArray = {
    list1: ['item 1','item 2','item 3','item 4'],
    list2: ['item 5','item 6','item 7','item 8'],
    list3: ['item 9','item A','item B','item C'],
}


module.exports = getListArray

/*
var log = {
    info: function (info) { 
        console.log('Info: ' + info);
    },
    warning:function (warning) { 
        console.log('Warning: ' + warning);
    },
    error:function (error) { 
        console.log('Error: ' + error);
    }
};

module.exports = log
*/