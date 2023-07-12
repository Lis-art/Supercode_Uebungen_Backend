import express from 'express';
import axios from 'axios';

//Daten importieren
import {getPosts} from "./postService.js"


//Server einrichten
const PORT = 3001;
const app = express();

//Route/Endpunkt festlegen + Test mit Thunderclient localhost:3001/status
app.get("/status", (req,res)=>{
    res.status(200).send("OK");
    // 200 um sich bestimmten Fehlercode anzeigen zu lassen
})


//# LEVEL 1 und 2 ? - Erstelle einen GET  Endpunkt /status mit dem response-code: 200 der den text zurück gibt OK 
app.get("/post", (req,res)=>{
    // bei fetch .json benutzen
    // man kriegt header oder body daten bei fetch - axios nimmt das ab - s.unten
    // body muss hier extra in json konvertiert werden
/*     fetch("https://jsonplaceholder.typicode.com/posts")
    .then ((res) => {
        console.log(res);
        return res.json()
    })
    .then((data) => {
        console.log(data);
    })
    res.send ("OKI DOKI");
    
    getPosts().then((posts) => {
        console.log(posts);
        res.json(posts);
  });
});
 */

    //Vergleich fetch und axios
    // gibt json response zurück und transformiert body entsprechend
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    //axios konvertiert automatisch in json und macht get req
    .then(({placeholderResponse}) => {
        console.log(placeholderResponse.data);
        //machen Anfrage an Daten
        res.json(placeholderResponse.data);
        // wenn Daten da gib data zurück
    });
})

// Promise mit async und await
app.get("/post-async", async (req,res)=>{
    // wir warten und schreiben bei variablen deklaration await
    const {data} = await axios
    .get("https://jsonplaceholder.typicode.com/posts"
    );

    console.log(data);
    res.json(data);
});


// # LEVEL 3 - Erstelle einen GET Endpunkt der /posts/<id> der nur den post aus mit der id <id>  zurück gibt.
app.get("/post/:id", async (req,res) => {
    //mit Doppelpunkt gibt man einen Platzhalter für die ID
    const id = Number(req.params.id)
    const {data} = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    res.send(data);
});

// # LEVEL 4 - Ändere alle /post… Endpunkte so das die Daten nicht aus der Placeholder API kommen sondern aus einer Lokalen JSON Datei (speicher alle Todos als json).
//Also /post  und /post/<id> benutzen das FS module.
// => andere datei



/* // # fehlt was?? res not definded
getPosts().then((posts) => {
    console.log(posts);
    res.json(posts);
})
app.get("/post-async", async (req,res) => {
    //mit Doppelpunkt gibt man einen Platzhalter für die ID
    const posts = await getPosts();
    console.log(posts);
    res.send(data);
}); */


// # LEVEL 5 
app.get("/post/:id", async (req,res) => {
    const id = Number(req.params.id)
    const data = getPostsByID(id);
    res.send(data);
});


// # zu LEVEL 6  - Füge folgenden Endpunkt: POST /post  hinzu, Daten die übergeben werden sollen. Verwende Postman um Post Requests zu senden. Speichere den post in der post.json
// mit filter kriegt man mehrere Objecte zurück / mit find bestimmtes element was vorgabe matched mit ID
export const getPostsByID = async () => {
    const posts = await getPosts();
    let resultatPost;
    // in diese Variable kommen gematchte daten rein

    for (let i = 0; i < posts.length; index++) {
        const post = posts[i];
        console.log({id, postID: post.id, vergleich: id == post.id});

        if(id == post.id){
            resultatPost = post;
            //ID verglichen und passenden Post erhalten
            continue;
            // mit continue wird Loop gestoppt, wenn Aufgabe erfüllt
        }
    }
    return resultatPost;
}
// Fehler promise pending - promise läuft noch und kann daten noch nicht fertig zurückgeben und server hat schon vorher response geschickt deshalb await 




//Server watchen starten
app.listen(PORT, ()=> {
    console.log(`Server is running on PORT: ${PORT}`);
})