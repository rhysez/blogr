require('dotenv').config();
const User = require('../models/user');
const Post = require('../models/post');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const { DateTime } = require('luxon');

// app controller functions

// READ THIS!!!!!
// To make this project work (roughly)
// set up rest api routes (shown below) and ensure they work
// then focus on building front end, make it look cool or whatever
// to get data from back end, you need to use the fetch() function 
// e.g fetch('/post/:postID').then(response => response.json()).then(do something with the post data)
// remember to implement CORS, look at odin project for this
// remember to implement JWT, look at odin project for this

// sign_up controllers
exports.sign_up_get = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: sign_up_get')
})

exports.sign_up_post = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: sign_up_post')
})

// log_in controllers
exports.log_in_get = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: log_in_get')
})

exports.log_in_post = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: log_in_post')
})

// home controller
exports.home = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: home')
});

// posts/post controllers
exports.posts_get = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: posts_get')
})

exports.post_get = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: posts_view_get')
})



