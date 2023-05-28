const router = require('express').Router()
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const {createPost, updatePost, getPosts, getLatestPosts, getPostById, deletePost, getPostsByCategory} = require('../controllers/Post.controller')

router.route('/post').get(getPosts).put(upload.single('thumbnail'), updatePost);
router.get('/post/latest', getLatestPosts)
router.get('/post/:id', getPostById)
router.get('/category/:cat', getPostsByCategory)
router.post('/create', upload.single('thumbnail'), createPost) 
router.delete('/delete/:id', deletePost)

module.exports = router

export {}