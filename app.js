const express = require('express')
var expressEjsLayouts = require('express-ejs-layouts')
const {default : mongoose} = require('mongoose')
const App = express()
const dotenv = require('dotenv')
const AllRoutes = require('./Routes/index')
const flash = require('express-flash')
const session = require('express-session')
dotenv.config()

mongoose.connect("mongodb://localhost:27017/passport", {}).then(() => {
    console.log("dataBase conected!!");
})


App.use(express.static("public"))
App.use(express.json());
App.use(express.urlencoded({extended : false}))
App.use(expressEjsLayouts);
App.use(flash())
App.set("view engine" , "ejs");
App.set("layout", "./layout/main.ejs")


App.use(session({
    secret : "secret key",
    saveUninitialized : false,
    resave : false
}))

// Routes
App.use(AllRoutes)


const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
    console.log(`server runned in ${PORT} port!!`);
})


