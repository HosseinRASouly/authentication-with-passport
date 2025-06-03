const router = require('express').Router();
const {hashPassword} = require('../utils/auth.index')
const {userModel} = require('../model/user.model')

// render ejs ...

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

// registering ...

router.post('/register' , async (req, res, next) => {
     try {
          const {fullname : fullname, username, password} = req.body;
          const hashigPassword = await hashPassword(password);
          const user = await userModel.findOne({username})
          if (user) {
               const refferrer = req?.header('referrer') ?? req.headers.referer
               req.flash('error', "That name has already been entered!")
               res.redirect(refferrer ?? '/register')
          }else {
               await userModel.create({
                    fullname,
                    username,
                    password : hashigPassword
               })
               res.redirect('/login')
          }
     } catch (error) {
          next(error)
     }
})
module.exports = router
//