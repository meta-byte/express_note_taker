//Dependencies and Config
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

//Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//Listening
app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
});