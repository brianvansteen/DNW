const express = require ("express");
const app = express();
const port = 8083;

app.get("/",(req, res) => res.send("<h1><bold>Hello Express World!</bold></h1>"));
app.get("/about",(req, res) => res.send("<h3>This is the about page!</h3>"));
app.get("/search",(req,res) => res.send("<h4><em>What would you like to search for?</em></h4>"));
app.listen(port, () => console.log("Application running, and listening on " + port));
//app.listen(port,() => console.log("Application running, and listening on ${port}."));