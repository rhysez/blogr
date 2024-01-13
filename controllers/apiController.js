require('dotenv').config();
const User = require('../models/user');
const Post = require('../models/post');
const asyncHandler = require('express-async-handler');

// app controller functions

// SIGN_UP CONTROLLERS
exports.sign_up_get = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: sign_up_get')
})

exports.sign_up_post = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: sign_up_post')
})

// LOG_IN CONTROLLERS
exports.log_in_get = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: log_in_get')
})

exports.log_in_post = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: log_in_post')
})

// POST CONTROLLERS

// gets list of all posts
exports.posts_get = asyncHandler(async (req, res, next) => {
    const posts = await Post.find({}).exec();
    return res.json(posts);
})

// gets a specific post
exports.post_get = asyncHandler(async (req, res, next) => {
    const post = await Post.findOne({_id: req.params.id}).exec();
    return res.json(post);
})

// likes a specified post
exports.post_like_post = asyncHandler(async (req, res, next) => {
    const postLiked = await Post.findAndModify({
        query: { _id: req.params.id },
        update: { $inc: { likes: 1 } },
        upsert: true
    }).exec();
    return res.json(postLiked)
})

// CREATE_POST CONTROLLERS

// gets create post form
exports.create_post_get = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: create_post_get')
})

// sends create post form data and creates post
exports.create_post_post = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: create_post_post')
})
