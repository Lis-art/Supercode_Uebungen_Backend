import fsPromise from "node:fs/promises";
import fs from "node:fs";

const content = "Ich bin ein Webdeveloper";

const filePath = new URL('./blog1.txt', import.meta.url);
 await fsPromise.writeFile(filePath, content, err =>{
    if(err){
        console.error(err);
    }
}, { encoding: 'utf8' });


//# 2
const filePath2 = new URL('./blog22.txt', import.meta.url);
await fsPromise.writeFile(filePath2, content, err =>{
    if(err){
        console.error(err);
    }
}, { encoding: 'utf8' });



// # 3
/* fs.readFile("./assets", {encoding: "utf8"},(err, data)=>{
    if(err) console.error("Nooooo");
    console.log("Async data");
    console.log(data);
}) */

// # 4

const assetPath = new URL('./assets', import.meta.url);

if(fs.existsSync(assetPath)){
    await fsPromise.rmdir(assetPath);
} else {
    await fsPromise.mkdir(assetPath, {encoding: "utf8"}),
    (error) => {
        if(error){
            console.log(error);
        }
    }
}



// # 5 + 6
const deletePath = new URL('./delete.txt', import.meta.url);

if(fs.existsSync(deletePath)){
    await fsPromise.unlink(deletePath);
} else {
    await fsPromise.writeFile(deletePath, "", {encoding: "utf8"}),
    (error) => {
        if(error){
            console.log(error);
        }
    }
}


// # 7

const neueHelloDatei = new URL ("./Hello.txt", import.meta.url);

if(fs.existsSync(neueHelloDatei)){
    await fsPromise.unlink(neueHelloDatei);
} else {
    await fsPromise.writeFile(neueHelloDatei, "Moinsen", 
    {encoding: "utf8"}),
    (error) => {
        if(error){
            console.log(error);
        }
    }
    fs.rename("./Hello.txt", "./HelloWorld.txt", (err) => {
        if(err){
            console.log(err);
        }
    })
}
