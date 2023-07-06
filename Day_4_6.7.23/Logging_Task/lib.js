import fsPromises from "node:fs/promises";
import fs from "node:fs";

const logPath = new URL ("./logs/log.txt",import.meta.url);
const logPathError = new URL ("./logs/error.txt",import.meta.url);
const logPathWarn =new URL ("./logs/warn.txt",import.meta.url);
const logPathInfo = new URL ("./logs/info.txt",import.meta.url);

async function addToLog  (param, logTyp){
    
    const date = new Date().toUTCString();
    const ausgabe = `\n ${logTyp}\n${param}\n ${date}`;

   /*  await fsPromises.writeFile(logPathError, ausgabe, {encoding: "utf8"});
    await fsPromises.writeFile(logPathWarn, ausgabe, {encoding: "utf8"});
    await fsPromises.writeFile(logPathInfo, ausgabe, {encoding: "utf8"}); */

    if (fs.existsSync(logPath)){
        fs.appendFileSync(logPath, ausgabe, {encoding: "utf8"})
        console.log("Inhalt zugefügt");

    } else {
        await fsPromises.writeFile(logPath, ausgabe, {encoding: "utf8"}),
        (error) => {
            if(error){
                console.log(error);
            }
        }
    }

    

    if(logTyp === "error"){
        await fsPromises.writeFile(logPathError, ausgabe, {encoding: "utf8"})
    } else if (logTyp === "warn"){
        await fsPromises.writeFile(logPathWarn, ausgabe, {encoding: "utf8"})
    } else if (logTyp === "info"){
        await fsPromises.writeFile(logPathInfo, ausgabe, {encoding: "utf8"})
    } else {
        console.log("mein Error");
    } 


    let dynPath; 
    if (loglevel === "error"){
        dynPath = logPathError
        if (fs.existsSync(logPathError)){
            fs.appendFileSync(logPathError, ausgabe, {encoding: "utf8"});
        } else {
            console.log("Inhalt zugefügt ERROR")
        }
    } else if (loglevel === "warn"){
        dynPath = logPathWarn
        if (fs.existsSync(logPathWarn)){
            fs.appendFileSync(logPathWarn, ausgabe, {encoding: "utf8"});
        } else {
            console.log("Inhalt zugefügt WARN");
        }
    } else if (loglevel === "info"){
        dynPath = logPathInfo
        if (fs.existsSync(logPathInfo)){
            fs.appendFileSync(logPathInfo, ausgabe, {encoding: "utf8"});
        } else {
            console.log("Inhalt zugefügt INFO");
        }
    } else {
        console.log("SUPER ERROR");
    }

/* 
    if (fs.existsSync(logPathError)){
        fs.appendFileSync(logPathError, ausgabe, {encoding: "utf8"})
        console.log("Inhalt zugefügt ERROR");

    } else if (fs.existsSync(logPathWarn)) {
        fs.appendFileSync(logPathWarn, ausgabe, {encoding: "utf8"})
        console.log("Inhalt zugefügt WARN");

    } else if (fs.existsSync(logPathInfo)) {
        fs.appendFileSync(logPathInfo, ausgabe, {encoding: "utf8"})
        console.log("Inhalt zugefügt INFO");

    } else {
        console.log("error von typen");
    } */

}
export default addToLog



