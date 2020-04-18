const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();

connecDb = require('./db/connection');

const connection = mysql.createConnection(
    connecDb
)

connection.connect()

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// query db for pages
app.get('/api/getPages', async (req,res) => {
    //return new Promise((resolve, reject) => {
        connection.query('SELECT * from pages', (err, results) => {
            if(err) {
                return reject(err);
            }
            //resolve(results);
            res.json(results);
            console.log(results);
        });
        //connection.end()
    //});
});


// query db for blogs
app.get('/api/getBlogs', async (req,res) => {
    //return new Promise((resolve, reject) => {
        connection.query('SELECT * from blogs', (err, results, fields) => {
            if (err) throw err
            //resolve(results);
            res.json(results);
            console.log(results);
        });
        //connection.end()
    //});
});

// Test api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);