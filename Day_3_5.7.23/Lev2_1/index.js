// # Erstelle dir eine JSON Datei mit dem Code aus dem Kommentarbereich.
// # Importiere die json-Datei in deiner index.js und nutze das File System, um die JSON Datei in eine neue .txt-Datei zu schreiben.


import fsPromise from "node:fs/promises";
import fs from "node:fs";

try {
    const jsonPath = new URL("./data.json", import.meta.url)
    const jsonData = await fsPromise.readFile(jsonPath, {encoding: "utf-8"})
    .then ((fsData) => JSON.parse(fsData))
    console.log(jsonData);
    //Array mit Objecten in fsdata drin durch parsen
    const stringConc = jsonData.map((item) => {
        return `${item.id} - ${item.title}, \n ${item.description}\n\n`;
    }) 
    //dann mappen wir über daten um uns den string passend ausgeben zu lassen
    const filePathJSON = new URL('./json.txt', import.meta.url);
    await fsPromise.writeFile(filePathJSON, stringConc, err =>{
    if(err){
        console.error(err);
    }
    }, { encoding: 'utf8' });
    //hier wird es in die json.txt rein geschrieben
    
} catch(error){
    console.error(error)
}


