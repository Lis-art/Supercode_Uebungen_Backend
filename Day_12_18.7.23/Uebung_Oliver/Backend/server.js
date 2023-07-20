import express from "express";
import "./models/index.js"
import {Post} from "./models/PostModel.js"
import { Author } from "./models/AutorModel.js";


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

//post löschen
app.delete("/api/deletePost/:id", async(req,res)=>{
   const postId = req.params.id
    try {
         const dbResponse = await Post.findByIdAndDelete(postId)
        res.send("post deleted")
    } catch (error) {
        console.log(error)
        res.send("post deleted")
    }
})


// user kann keinen falschen author angeben - wenn keine valide id error
app.post("/api/addPost", async (req,res) => {
    try {
        const author = await Author.findById(req.body.author)
        console.log(author);
        if(author === null){
            return res.send("Author is invalid")
        }
        const response = await Post.create(req.body)
        res.json(response)
        console.log(response); 
    } catch (error) {
        console.log("error post");
    }
})

// backend mitteilen welcher post bearbeitet werden soll
app.put("/api/editPost/", async (req,res) =>{
    const edits = req.body
    const postId = req.params.id

    try {
        const dbResponse = await Post.findByIdAndUpdate(postId, newPost, {new:true})
        res.json(dbResponse)
    } catch (error) {
        console.log(error);
        res.send("error passiert")
    }
})

app.get("/api/getPostsByAuthor/:authorId", async (req,res) =>{
    try {
        const authorId = req.params.authorId
        const posts = await Post.find({author:authorId})
        res.json(posts)
    } catch (error) {
        console.log(error);
        res.send("error passiert für alle authors holen")
    }
})

//Routen anlegen für Author
app.post("/api/newAuthor", async (req,res) => {
    try {
        const newAuthor = await Author.create(req.body)
        // kompletter request body wird übergeben
        res.json(newAuthor)
    } catch (error) {
        console.log(err)
        res.send("there is an error")
    }
})
// ThunderC: http://localhost:3001/api/newAuthor -> neuer Author sollte jetzt im Kompass erscheinen
// nur name würde fehler werfen

app.listen(PORT, () => {console.log(`Server läuft auf diesem Port: ${PORT}`)})
