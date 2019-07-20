var express = require("express");
var app = express();

var PORT = 8080;
app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("You are on PORT " + PORT);
})