// const http = require('http');
// const fs = require('fs');

// // synchronus - blocking codes
// // const aboutPage = fs.readFileSync('about.html');
// // const contactPage = fs.readFileSync('contact.html');
// // const homePage = fs.readFileSync('home.html');

// const aboutPage = fs.readFile('about.html', (file)=>{

// });
// const contactPage = fs.readFile('contact.html');
// const homePage = fs.readFile('home.html');



// const server = http.createServer((req, res)=>{
//     console.log(req.url);

//     if(req.url==='/about'){
//         return res.end(aboutPage);
//     }

//     else if(req.url==='/contact') return res.end(contactPage);
//     else if(req.url==='/') return res.end(homePage);
//     else {
//     res.writeHead(404);
//     res.end('Page Not Found');
//     }
    

    

    
// })

// server.listen(3000);


// using express

const express = require('express');
const path = require('path');
// var cluster = require('cluster');
const app = express();  // = new express()  giver a brand new server

app.use(express.static('public');

app.get('/', (req, res)=>{

    // res.json({
    //     name: 'Katy france'
    // })
    // --dirname --> current project directory
    // file name
    res.sendFile(path.resolve(__dirname, 'home.html'));

});

app.get('/about', (req,res)=>{
    // res.send({
    //     name: 'katy send function '
    // })
    res.sendFile(path.resolve(__dirname, 'contact.html'));
});


app.listen(3000, ()=>{
    console.log('App listening on port 3000')
});




























