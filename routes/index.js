var express = require('express');
var router = express.Router();

const api_controller = require('../controllers/apiController');

// api routes

router.get('/sign_up', api_controller.sign_up_get);

router.post('/sign_up', api_controller.sign_up_post);


router.get('/log_in', api_controller.log_in_get);

router.post('/log_in', api_controller.log_in_post);


router.get('/', api_controller.home);


router.get('/posts', api_controller.posts_get);

router.get('/posts/:postid', api_controller.post_get)

module.exports = router;
