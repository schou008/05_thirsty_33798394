//Create a new router 
const express = require("express"); 
const router = express.Router(); 

//Define the Shops Data 
var shopData = {
  shopName: "Simply Drinks",
  productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],

//Defines a list of shops with managers and addresses
  shops: [
    { manager: "Thomas Johnson", address: "12 High Street, London" },
    { manager: "Ben Smith", address: "22 Baker Street, London" },
    { manager: "Carla Gomez", address: "5 Kings Road, London" },
    { manager: "David Lee", address: "89 Queen's Avenue, London" },
    { manager: "Emily Brown", address: "301 Oxford Street, London" }
  ]
};

//Handle the main routes
router.get("/", function (req, res) { 
    res.render("index.ejs", shopData) 
});     

//Handles the about page
router.get("/about", function (req, res) { 
    res.render("about.ejs", shopData) 
});

//Handles the search page
router.get("/search", function (req, res) { 
    res.render("search.ejs", shopData); 
});

//Handles the search results
router.get('/search_result', function (req, res) {  
    res.send("You searched for " + req.query.search_text + " in " + req.query.category); 
});

//Handles the register page
router.get("/register", (req,res) => { 
    res.render("register.ejs",  shopData);  
});  

//Handles the user being registered
router.post("/registered", (req, res) => {  
  res.send(
    'Hello ' + req.body.first + ' ' + req.body.last + 
    ', you are now registered! We will send you a verification email shortly at ' + req.body.email + '.'
  );   
}); 

//Handles the survey form
router.get('/survey', (req, res) => {
    res.render('survey', { 
        shopName: shopData.shopName,
        productCategories: shopData.productCategories
    });
});

//Handles survey results
router.post('/survey', (req, res) => {
    const response = req.body;
    res.render('surveyResult', { 
        response,
        shopName: shopData.shopName
    });
});

//Export the router object so index.js can access it 
module.exports = router; 