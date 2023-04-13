const express = require('express')

const router = express.Router()
const blogcontroller = require('../controller/blogcontroller')


router.get('/', blogcontroller.blog_index )

router.post('/', blogcontroller.new_blog )

router.get('/create', blogcontroller.go_tocreate)

//getting data from the frontend 
router.get('/:id',blogcontroller.blog_details )



//delete request
router.delete('/:id',blogcontroller.blog_remove )

module.exports = router