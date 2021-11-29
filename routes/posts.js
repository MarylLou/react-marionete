import * as dotenv from 'dotenv'
import express from 'express'
// import multer from 'multer'
// import Aws from 'aws-sdk'
import { getPosts , createPost, updatePost, deletePost } from '../controllers/posts.js'

// require('dotenv').config()

const router = express.Router();

router.get('/', getPosts);

router.post('/', createPost);

router.patch('/:id', updatePost);

router.delete('/:id', deletePost);

export default router;