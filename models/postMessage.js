import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    description: String,
    descriptionDetails: String,
    material: String,
    closure: String,
    length: Number,
    style: String,
    price: String,
    tags: [String],
    productImage:
    {
        data: Buffer,
        contentType: String
    },
    likeCount: {
        type: Number,
        default: 0,
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);


export default PostMessage;