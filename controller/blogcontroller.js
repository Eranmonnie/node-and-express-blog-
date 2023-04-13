const Blog = require('../models/blog')

const blog_index = (req, res)=>{
    Blog.find()
    .then((result)=>{
        res.render('home', {title:'All Blogs', blogs:result})
    })
    .catch((err)=>{
        console.log(err)
    })   
}

const go_tocreate =  (req, res)=>{
    res.render('create', {title:'create'})
}

const new_blog = (req, res)=>{  
    const blog = new Blog(req.body)
    blog.save()
    .then(result=>{
        res.redirect('/blogs')
    })
    .catch(err=>{
        console.log(err)
    })
}

const blog_details = (req ,res)=>{
    const id = req.params.id
    Blog.findById(id)
    .then((result)=>{
        res.render('details', {blog:result, title:'blog details'})
    })
    .catch(err=>{
        res.render('404', {title: "blog not found"})
    })
}

const blog_remove = (req, res)=>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(result =>{
        res.json({ redirect: '/blogs'})
    })
    .catch(err =>{
        console.log(err)
    })
}

module.exports= {
    blog_index,
    new_blog,
    blog_details,
    blog_remove,
    go_tocreate
}