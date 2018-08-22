var express = require("express"), path = require("path"), bodyParser = require("body-parser"), cons = require("consolidate"), dust = require("dustjs-helpers"), pg = require("pg"), app = express();

var connect = "postgresql://bonifaseorwa:@localhost/recipe";

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
    consol.console.log(("TEST"));   
});