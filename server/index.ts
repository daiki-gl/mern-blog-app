const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const cookieParser = require('cookie-parser');
require('dotenv').config();
export const secret = process.env.SECRET

const commentRouter = require('./routes/Comment.router')
const userRouter = require('./routes/User.router')
const postRouter = require('./routes/Post.router')

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json())
app.use(cookieParser())
app.use('/uploads',express.static(__dirname + '/uploads'))
mongoose.connect(process.env.MONGODB_URL)

app.use('/', commentRouter)
app.use('/', userRouter)
app.use('/', postRouter)

const PORT = process.env.PORT
app.listen(PORT);

export {}