require('dotenv').config();
const User = require('../models/user');
const Post = require('../models/post');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const { DateTime } = require('luxon');

// app controller functions
// remember to follow REST principles
