const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
import {secret} from '..'

exports.registerUser = async (req:any,res:any) => {
    const {username,email, password} = req.body;
    try {
        const userDoc = await User.create({
             username,
             password: bcrypt.hashSync(password, salt),
             email
         })
         res.json(userDoc)
    } catch (error) {
        res.status(400).json(error)
    }
  }

  exports.loginUser = async (req:any, res:any) => {
    const {email, password} = req.body
    const userDoc = await User.findOne({email})
    if(userDoc === null) {
        res.status(400).json('Wrong credentials')
    }

    const passOk = bcrypt.compareSync(password,userDoc.password)
    if(passOk) {
       await jwt.sign({
            username: userDoc.username,
            id: userDoc._id,
        },
        secret,
        {},
        (error: never, token: string) => {
            if(error) throw error
            res.cookie('token', token).json('success')
        })
    } else {
        res.status(400).json('Wrong credentials')
    }
}

exports.getUserInfo = (req: any, res:any) => {
    const {token} = req.cookies
    jwt.verify(token, secret, {}, (error:never, info:string) => {
        if(error) throw error
       return res.json(info)
    })
}

exports.logoutUser = (req:any, res:any) => {
    res.cookie('token', '').json('logout')
}

export {}