const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

let connection = mysql.createConnection({
    host:process.env.DB_HOST,
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})

let app = express();


app.use(session({
    secret:process.env.SECRET,
    resave:true,
    saveUninitialized:true
}));

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/login.html'))
})

app.post('/auth',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    if(username && password){
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?',[username,password],(err,result,fields)=>{
            if(result.length >0){
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/home');
            } else{
                res.send('Incorrect Password or Username!')
            }
            res.end();
        })
    } else{
        res.send('Please enter a username and password!')
        res.end()
    }
})

app.get('/home',(req,res)=>{
    if(req.session.loggedin){
        res.send(`Welcome back ${req.session.username}!`);
    } else{
        res.send('Please login!')
    }
    res.end()
})


app.listen(process.env.PORT)