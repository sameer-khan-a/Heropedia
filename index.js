import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const apiUrl = 'https://superheroapi.com/api/63702722841990ae62b631cd705cf830';

let content;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.post('/', async (req, res) => {
    var response = await axios.get(apiUrl + `/search/${req.body.name}`);
    console.log(response.data.response);
    if(response.data.response == 'error'){
        res.render('index.ejs', {content: {msg: "Superhero not found!!!", not_found: true}});
    }
    else {
                console.log(response.data.results[response.data.results.length-1].id);
                response = await axios.get(apiUrl + `/${response.data.results[response.data.results.length-1].id}`);
                // res.json(response.data);
                content = response.data;
                res.render('index.ejs', {content});
    }
    // res.render('index.js', {content});
})
app.post('/powerstats/:id', async (req, res) => {
    var response = await axios.get(apiUrl + `/${req.params.id}`);
    res.json(response.data.powerstats);
    content = response.data;
    res.json(content);
    res.render('index.js', {content});
    // res.render('index.js', {content});
})
app.post('/biography/:id', async (req, res) => {
    var response = await axios.get(apiUrl + `/${req.params.id}`);
    res.json(response.data.biography);
    content = response.data;
    res.json(content);
    res.render('index.js', {content});
    // res.render('index.js', {content});
})
app.post('/appearance/:id', async (req, res) => {
    var response = await axios.get(apiUrl + `/${req.params.id}`);
    res.json(response.data.appearance);
    content = response.data;
    res.json(content);
    res.render('index.js', {content});
    // res.render('index.js', {content});
})
app.listen(port, () => {
    console.log(`app listening on ${port}`);
})