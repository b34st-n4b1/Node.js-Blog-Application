const express = require('express');
const {
    blog_index,
    blog_create_post,
    blog_create_get,
    blog_detail,
    blog_delete } = require('../controllers/blogControllers')

const router = express.Router();

router.get('/', blog_index);
router.get('/create', blog_create_get);
router.post('/', blog_create_post);
router.get('/:id', blog_detail);                                                                                                
router.delete('/:id', blog_delete);





module.exports = router;