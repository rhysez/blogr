var express = require('express');
var router = express.Router();

const api_controller = require('../controllers/apiController');

// API ROUTES

// sign_up get/post
router.post('/sign_up', api_controller.sign_up_post);

// log_in get/post
router.get('/log_in', api_controller.log_in_get);
router.post('/log_in', api_controller.log_in_post);

// post get
router.get('/posts', api_controller.posts_get);
router.get('/posts/:id', api_controller.post_get);

// post like/dislike get
router.get('/posts/:id/like', api_controller.post_like)
router.get('/posts/:id/dislike', api_controller.post_dislike)

// comment on a post
router.post('/posts/:id/comment', api_controller.comment_post);

// create_post get/post
router.get('/create_post', api_controller.create_post_get);
router.post('/create_post', api_controller.create_post_post);

module.exports = router;
