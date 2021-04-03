const express = require('express');
const app = express();
const http = require("http");
const path = require("path")
app.use(express.static(path.join(__dirname,'/')));

const fs = require('fs').promises;

app.get ("/index", (req,res)=> {
    fs.readFile(__dirname + "/index.html")
    .then (contents => {
         res.setHeader("Content-Type", "text/html"  )
    res.writeHead(200);
    res.end(contents);  
})
.catch(err => {
    res.writeHead(500);
    res.end(err);
    return;
});
});
app.get ("/about", (req,res)=> {
    fs.readFile(__dirname + "/about.html")
    .then (contents => {
         res.setHeader("Content-Type", "text/html"  )
    res.writeHead(200);
    res.end(contents);  
})
.catch(err => {
    res.writeHead(500);
    res.end(err);
    return;
});
});

app.get ("/about/team_photo",(req,res)=> {
    res.status(200);
    res.contentType("image/jpeg");
    res.sendFile(path.join(__dirname, "/group.jpg"));
})
app.get("/video",(req, res)=>res.redirect('https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps'))


app.set('port', 3000 || process.env.PORT)

app.listen(app.get("port"),()=> {
    console.log(`Express server is running on localhost:${app.get("port")}. Press CTRL+C to terminate...`)
})