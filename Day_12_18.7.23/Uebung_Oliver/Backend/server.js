import express from "express";
import "./models/index.js"
import {Post} from "./models/PostModel.js"


const app = express();
const PORT = 3001;

//Middleware
app.use(express.json());

const addPost = async (post) => {
    const newPost = new Post(post)
    const response = await newPost.save()
    //hiermit wird in die Datenbank gepusht
    console.log(response);
}

addPost({
    title:"Mein erster Post",
    content:"Willkommen im Blog",
    author: "Lisa"
})
addPost({
    title:"Mein erster Post",
    content:"Willkommen im Blog",
    author: "Lisa"
})
addPost({
    title:"Mein erster Post",
    content:"Willkommen im Blog",
    author: "Lisa"
})

const findPost = async (searchAuthor) => {
    const posts = await Post.find({author: searchAuthor})
    console.log(posts);
}
findPost("LiZ") 

app.get("/api/posts", async (req,res) => {
    const data = await Post.find()
    res.json(data)
})

app.post("/api/addPost", async (req,res) => {
    const response = await Post.create(req.body)
    res.json(response)
    console.log(response);
})


app.listen(PORT, () => {console.log(`Server läuft auf diesem Port: ${PORT}`)})
