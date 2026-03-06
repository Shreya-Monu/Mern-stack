import express from "express";
const app = express();
app.set("view engine", "ejs")
app.set("views", "./views")
app.listen(8080, ()=> console.log("server started"));

// app.get("/", (req, res) => {
//     res.render("login");
// });

app.get("/register", (req, res) => {
    res.render("register");
});

//page34.js & login.ejs or register.ejs
//after server is created
//go to browser and enter http://localhost:8080
//will get the page 
//ctrl+c to stop the server
//after stopping the server if we refresh the page in the browser
//we will get The site can't be reached