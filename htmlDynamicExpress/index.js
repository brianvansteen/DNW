const express = require("express");
const app = express();
const port = 8085;

require("./routes/main")(app);

app.set("views", __dirname+ "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.listen(port, () => console.log('Example web site is listening on port: ' + port + '!'));