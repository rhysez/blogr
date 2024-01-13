var express = require('express');
var router = express.Router();

const api_controller = require('../controllers/apiController');

// api routes

router.get('/sign_up', api_controller.sign_up_get);
router.post('/sign_up', api_controller.sign_up_post);

router.get('/log_in', api_controller.log_in_get);
router.post('/log_in', api_controller.log_in_post);

router.get('/posts', api_controller.posts_get);
router.get('/posts/:id', api_controller.post_get);

router.post('/posts/:postid/like', api_controller.post_like_post)

router.get('/create_post', api_controller.create_post_get);
router.post('/create_post', api_controller.create_post_post);

module.exports = router;
