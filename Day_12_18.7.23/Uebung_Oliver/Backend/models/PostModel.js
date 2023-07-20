import mongoose from "mongoose";

// 2. schema anlegen wie daten gespeichert werden - keys + typ 
const postSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        required: true,
        immutable: true
        // Author dadurch nicht veränderbar
    }
})

export const Post = mongoose.model("Post", postSchema)