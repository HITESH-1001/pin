var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post")
const passport = require('passport');
const localStratergy = require("passport-local")
const upload = require("./multer");

/* GET home page. */
passport.use(new localStratergy(userModel.authenticate()))


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function (req, res, next) {
  res.render('register');
});
router.post('/register', function (req, res, next) {
  const data = new userModel({

    email: req.body.email,
    username: req.body.username,
    contact: req.body.contact,
    name: req.body.fullname

  })
  userModel.register(data, req.body.password).then(function () {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/profile");
    })
  })
});
router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/",
}), function (req, res, next) {

});
router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  })
});
router.get('/profile', isLoggedIn
  , async function (req, res, next) {
    const user = await userModel.findOne({
      username: req.session.passport.user
    }).populate("posts")
    res.render('profile', { user });
  });
router.get('/feed/posts', isLoggedIn
  , async function (req, res, next) {
    const user = await userModel.findOne({
      username: req.session.passport.user
    })
    const posts = await postModel.find().populate("user")
    res.render('feed', { user, posts });
  });

router.get('/show/posts', isLoggedIn
  , async function (req, res, next) {
    const user = await userModel.findOne({
      username: req.session.passport.user
    }).populate("posts")
    res.render('show', { user });
  });

router.get('/add', isLoggedIn
  , async function (req, res, next) {

    const user = await userModel.findOne({
      username: req.session.passport.user
    })
    res.render('add', { user });
  });
router.post('/createpost', isLoggedIn
  , upload.single("postimage"), async function (req, res, next) {

    const user = await userModel.findOne({
      username: req.session.passport.user
    })
    const post = await postModel.create({
      user: user._id,
      title: req.body.title,
      description: req.body.description,
      image: req.file.filename
    })
    user.posts.push(post._id)
    await user.save()
    res.redirect('/profile')
  });
router.post('/fileupload', isLoggedIn
  , upload.single("image"), async function (req, res, next) {
    const user = await userModel.findOne({
      username: req.session.passport.user
    })
    user.profileImage = req.file.filename
    await user.save()
    res.redirect("/profile")
  });
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect("/")
}



module.exports = router;
