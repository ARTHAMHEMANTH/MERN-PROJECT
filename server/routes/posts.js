const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    addComment
} = require('../controllers/posts');
const { protect } = require('../middleware/auth');

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.route('/')
    .get(getPosts)
    .post(protect, upload.single('image'), createPost);

router.route('/:id')
    .get(getPost)
    .put(protect, updatePost)
    .delete(protect, deletePost);

router.route('/:id/comments')
    .post(protect, addComment);

module.exports = router; 