module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index.html", {
            title: "Dynamic Title",
            heading: "This is a dynamic main page!",
            para: "This is the end of the Web page....."
        });
    });
}