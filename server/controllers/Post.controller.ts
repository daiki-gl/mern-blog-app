const fs = require('fs');
const jwt = require('jsonwebtoken');
const Post = require('../models/Post.model')
import { secret } from "..";

exports.createPost = (req:any, res:any) => {
    const { originalname, path } = req.file
    const parts = originalname.split('.')
    const extension = parts[parts.length - 1]
    const newPath = `${path}.${extension}`;
    fs.renameSync(path, newPath)

    const { token } = req.cookies
    jwt.verify(token, secret, {}, async(error:never, info:any) => {
        if(error) throw error

        const { title, summary, content, category } = req.body
        const postDoc = await Post.create({
            title, 
            summary, 
            content, 
            category,
            thumbnail: newPath,
            author: info.id
        })
        res.json(postDoc)
    })
}

exports.updatePost = async(req:any, res:any) => {
    let newPath:string | null = null
    if(req.file) {
        const { originalname, path } = req.file
        const parts = originalname.split('.')
        const extension = parts[parts.length - 1]
        newPath = `${path}.${extension}`;
        fs.renameSync(path, newPath)
    }

    const { token } = req.cookies
    jwt.verify(token, secret, {}, async(error: never, info: any) => {
        if(error) throw error
        const { id, title, summary, content, category } = req.body
        const postDoc = await Post.findById(id)
        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id)
        if(!isAuthor) {
           return res.status(400).json('Invalid author');
        }
        
        postDoc.title = title
        postDoc.summary = summary
        postDoc.content = content
        postDoc.category = category
        postDoc.thumbnail = newPath ? newPath : postDoc.thumbnail

        // await postDoc.update({
        //     title,
        //     summary,
        //     content,
        //     thumbnail: newPath ? newPath : postDoc.thumbnail,
        //   });
        console.log(postDoc);
        await postDoc.save()
        res.json(postDoc);
    });
}

exports.getPosts = async (req:any, res:any) => {
    const posts = await Post
        .find()
        .populate('author', ['username'])
        .sort({createdAt: - 1})
    res.json(posts)
}

exports.getLatestPosts = async (req:any, res:any) => {
    const posts = await Post
        .find()
        .populate('author', ['username'])
        .sort({createdAt: - 1})
        .limit(3)
    res.json(posts)
}

exports.getPostById =  async(req:any, res: any) => {
    const { id } = req.params
    const post = await Post.findById(id).populate('author', ['username'])
    res.json(post)
}

exports.deletePost = async(req: any, res:any) => {
    const param = req.params;
    const deleted = await Post.deleteOne({_id: param.id})

    res.json(deleted)
}

exports.getPostsByCategory = async(req: any, res: any) => {
    const category = req.params.cat
    const posts = await Post
        .find({category})
        .populate('author', ['username'])
    res.json(posts)
}

export {}