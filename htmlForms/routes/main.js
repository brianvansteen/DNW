module.exports = function(app) {
    app.get("/", function(req, res){
        res.render('index.html');
    });
    app.get("/search", function(req, res){
        res.render('search.html');
    });
    app.get("/about", function(req, res){
        res.render('about.html');
    })
    app.get("/search-result", function(req, res){
        res.send(req.query);
    })
    app.get("/register", function(req, res){
        res.render('register.html');
    })
    app.post("/registered", function(req, res){
        res.send("Hello " + req.body.first + " " + req.body.last + " " + req.body.other + ", you are now registered!");
    })
}