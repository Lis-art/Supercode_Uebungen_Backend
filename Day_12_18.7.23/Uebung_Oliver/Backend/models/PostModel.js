import mongoose from "mongoose";

// 2. schema anlegen wie daten gespeichert werden - keys + typ 
const postSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true
    },
    content: String,
    author: String,
    views: Number,
})

export const Post = mongoose.model("Post", postSchema)