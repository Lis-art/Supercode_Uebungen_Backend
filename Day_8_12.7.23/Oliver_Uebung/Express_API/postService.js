import fs from "node:fs/promises";


const PostsFileURL = new URL("./data/posts.json", 
import.meta.url);
//absoluter Pfad zur JSON

// # zu Level 4
export const getPosts = async () => {
    let fileContent = await fs.readFile(PostsFileURL, 
        {encoding: "utf8"});
    //file content = ganze daten wenn mit warten fertig
    fileContent = JSON.parse(fileContent)
        //ein String der ein JS Object repräsentiert, mit parse sagen wir JSON baue uns daraus eine JS Datenstruktur 
    return fileContent;
};
//await getPosts() --- TEST

//Daten (fileContent) die in Console erscheinen alle in weiß = heißt alles ein String
//deshalb müssen wir parse einbauen - Gegenstück dazu .stringify


