var express = require('express')
var app = express();
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html', {headers: {'Content-Type': 'text/html'}});
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.get("/profile/:name", (req, res) => {
    var data = {age: 29, job: 'ninja'};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);

/*
var server = http.createServer(function(req,res){
    if (req.url === "/" || req.url === "/home"){
        res.writeHead("200", {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === "/contact"){
        res.writeHead("200", {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === "/api/ninjas"){
        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}]
        res.writeHead("200", {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    }else{
        res.writeHead("200", {'Content-Type': 'text/plain'});
        res.end("404");
    }
    
    Serve JSON
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    res.end(JSON.stringify(myObj));

    Serve HTML
    var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
    myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("Listening on port 3000.");


Manual method of reading a file with a read stream 
and writing it to another file using a write stream.
The pipe() function can accomplish the same thing simpler.

myReadStream.on("data", function(chunk){
    myWriteStream.write(chunk);
    console.log("New chunk received");
});
*/