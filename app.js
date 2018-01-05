var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var patients = [
        {name: "Mr. A", image: "https://images.unsplash.com/photo-1497414146483-5bcafdccfdff?auto=format&fit=crop&w=750&q=80"},
        {name: "Ran Man", image: "https://images.unsplash.com/photo-1479492591199-eb2492814e73?auto=format&fit=crop&w=750&q=80"},
        {name: "Mountain Goat", image: "https://images.unsplash.com/photo-1504676232785-213e681eeabb?auto=format&fit=crop&w=750&q=80"},
        {name: "Ronny", image: "https://images.unsplash.com/photo-1508343451540-5e50f1592671?auto=format&fit=crop&w=750&q=80"}
];
    
app.get("/", function(req, res){
    res.render("landing.ejs");
});

app.get("/patients", function(req, res){
    res.render("patients.ejs",{patients: patients});
});

app.post("/patients", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newpatient = {name: name, image: image}
    patients.push(newpatient);
    //redirect back to campgrounds page
    res.redirect("/patients");
});

app.get("/patients/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Mochi Server Has Started!");
});