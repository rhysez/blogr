require('dotenv').config();
const User = require('../models/user');
const Post = require('../models/post');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

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
exports.post_like = asyncHandler(async (req, res, next) => {
    // increments likes by 1
    await Post.updateOne({_id: req.params.id}, {$inc: {likes: 1}});
    // returns a 200 http status (successful)
    return res.status(200).json({msg: "OK"});
})

exports.post_dislike = asyncHandler(async (req, res, next) => {
    // increments dislikes by 1
    await Post.updateOne({_id: req.params.id}, {$inc: {dislikes: 1}});
    // returns a 200 http status (successful)
    return res.status(200).json({msg: "OK"});
})

// COMMENT CONTROLLERS

// adds comment to a post
exports.comment_post = [
    body('comment_text', 'Comment must not be empty')
    .trim()
    .notEmpty()
    .isString(),

    body('comment_user', 'Comment must have a name attached')
    .trim()
    .notEmpty()
    .isString(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        await Post.updateOne({_id: req.params.id}, 
        { $push: { "comments": { text: req.body.comment_text, user: req.body.comment_user } } } );

        if (!errors.isEmpty()) {
            console.log(errors)
        }
    }),
]

// CREATE_POST CONTROLLERS

// gets create post form
exports.create_post_get = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: create_post_get')
})

// sends create post form data and creates post
exports.create_post_post = asyncHandler(async (req, res, next) => {
    return res.json('NOT IMPLEMENTED: create_post_post')
})
