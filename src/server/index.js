let projectData = {};

const path = require('path');
const express = require('express');

const app = express();
app.use(express.static('dist'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('../../dist/index.html');
});

// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, function () {
    console.log(`NLP app listening on port ${port}!`);
});

app.get('/callit', function (req, res) {
    console.log("GET:",projectData);
    res.send(projectData);
});

const dotenv = require('dotenv');
dotenv.config();

const aylien = require("aylien_textapi");
const textapi = new aylien({
    application_id: process.env.APPLICATION_ID,
    application_key: process.env.APPLICATION_KEY
});


// POST route
app.post('/add', add);

async function add (req,res){
    const data_collect = req.body.inputdata;
    console.log(req.body);    
    console.log(data_collect);
    await textapi.sentiment(
        {
        'text': data_collect
        },
        await function(error, response) {
            if (error === null) {
                console.log(response);
                projectData = response;
                console.log(projectData);
            }
            console.log("error is ",error);
        }
    );
    setTimeout(function(){
        console.log("POST: ");
        console.log(projectData);    
    },1000);
}

export default app;

