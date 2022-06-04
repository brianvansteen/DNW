const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 8086;

app.use(bodyParser.urlencoded({extended:true}));

require("./routes/main")(app);

app.set("views", __dirname+ "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.listen(port, () => console.log(`The example application is running on port ` + port));