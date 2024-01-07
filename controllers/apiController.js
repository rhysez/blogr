require('dotenv').config();
const User = require('../models/user');
const Post = require('../models/post');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const { DateTime } = require('luxon');

// app controller functions

// READ THIS!!!!!
// to make this project work (roughly)
// set up rest api routes (shown below) and ensure they work
// then focus on building front end, make it look cool or whatever
// to get data from back end, you need to use the fetch() function 
// e.g fetch('/post/:postID').then(response => response.json()).then(do something with the post data)
// this will send the data to you using res.json() instead of rendering a new view like in previous projects
// remember to implement CORS, look at odin project for this
// remember to implement JWT, look at odin project for this

// home controller
exports.home = asyncHandler(async (req, res, next) => {
    // test query
    const posts = await Post.find({}).exec();
    return res.json(posts);
});

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

// post controllers
exports.posts_get = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: posts_get')
})

exports.post_get = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: posts_view_get')
})



