import fsPromises from "node:fs/promises";


const dataFolder = new URL ("./data", import.meta.url);
const postFile = new URL ("./data/post.json", import.meta.url);
let mydata = "data";
// existiert ordner mit schreib berechtigung? 
const exists = async (path) => {
    let exists;
    try{
        console.log("was geht hier ab");
        await fsPromises.access(path, fsPromises.constants.W_OK)
        exists = true;
    } catch (err){
        exists = false;
    }
    return exists;
}

// wenn ordner nicht existiert - erstelle dataFolder + erstelle datei postFile

export const folder = async (dataFolder) => {
    let folderExists = await exists(dataFolder);
    folderExists = false;
    console.log(folderExists);
    if(!folderExists){
        await fsPromises.mkdir(dataFolder);
    } else {
        console.log("NOPE");
    }
 
/*     fetch("https://jsonplaceholder.typicode.com/")
    .then((response) => response.json())
    .then((data)=> console.log(data))
    .catch((error) => {
        console.log("das war wohl nix mit dem fetch", error);
    });
  */

    await fsPromises.appendFile(postFile, (mydata), {encoding: "utf-8"});

}
folder(dataFolder);