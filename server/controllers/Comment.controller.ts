const jwt = require('jsonwebtoken');
const CommentSchema =  require('../models/Comment.model');
import { secret } from "..";

exports.createComment = async (req:any, res:any) => {
    const id = req.params.id
    const { token } = req.cookies
    const { comment } = req.body

    jwt.verify(token, secret, {}, async(error:never, info:any) => {
        if(error) throw error

        const commentDoc = await CommentSchema.create({
            comment,
            postId: id,
            author: info.id
        })
        res.json(commentDoc)
    })
}

exports.getComments = async (req:any, res: any) => {
    const id = req.params.id
    const comments = await CommentSchema
        .find({postId: id})
        .populate('author', ['username'])
        res.json(comments)
}