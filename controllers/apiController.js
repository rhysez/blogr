require('dotenv').config();
const User = require('../models/user');
const Post = require('../models/post');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const { DateTime } = require('luxon');

// app controller functions

// home controller
exports.home = asyncHandler(async (req, res, next) => {
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



