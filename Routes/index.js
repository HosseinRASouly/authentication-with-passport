const router = require('express').Router();

router.get('/' , (req, res, next) => {
     res.render('./index.ejs', {title : "home"})
})

router.get('/login' , (req, res, next) => {
     res.render('./login.ejs', {title : "login"})
})

router.get('/register' , (req, res, next) => {
     res.render('./register.ejs', {title : "register"})
})

router.get('/profile' , (req, res, next) => {
     res.render('./profile.ejs', {title : "profile", user : {_id : "", userName : "", fullName : "", password : ""}})
})
module.exports = router

//