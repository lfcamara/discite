//==========LIBS==========

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

//==========DATABASE==========

mongoose.connect("mongodb://localhost/pihc");

var dataSchema = new mongoose.Schema({
    instituicao: String,
    regiao: String,
    estado: String,
    campi: [{ cidade: String, cursos: Array }]
});

var Data = mongoose.model("Data", dataSchema);

//==========ROUTES==========

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/result", function(req, res) {
    var type = req.body.dataType,
        search = req.body.search;
    Data.find({}, function(err, results) {
        if (err) {
            console.log(err);
        } else {
            res.render("result", { results: results });
        }
    });
});


app.listen(3000, function() {
    console.log("Server is Running!");
});