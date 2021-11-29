import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    console.log(req.file)
    const post = ({
        mame: req.body.name,
        price: req.body.price,
        productImage: req.file.path
    });
    
    const newPost = new PostMessage(post);

    try {
        await newPost.save()
        .then(result => {
            res.status(200).send({
                _id: result._id,
                name: result.name,
                price: result.price,
                productImage: result.productImage,
                request: {
                    request: {
                        type: 'GET',
                        url: `https://lulumarionnettebucket.s3.eu-west-2.amazonaws.com/${req.file.filename}`
                    }
                }
            })
        })
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getSinglePost = async (req, res) => {
    const post = req.body;
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('id not found');

    const singlePost = await PostMessage.findById(_id, post, { new: true });

    res.json(singlePost);
}

export const updatePost = async (req, res) => {
    const post = req.body;
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('id not found');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('id not found');

    await PostMessage.findByIdAndDelete(_id);

    res.json({ message: 'Post deleted successfully' });
}