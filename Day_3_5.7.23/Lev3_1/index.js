import fsPromise from "node:fs/promises";
import fs from "node:fs";

//Pfad für Unterordner
const neueDatei = new URL ("./Unterordner", import.meta.url);
//Pfad für Text Datei
const txtPath = new URL ("./Unterordner/textDatei.txt", import.meta.url);

//Unterordner erstellen
await fsPromise.mkdir(neueDatei, {recursive: true, encoding: "utf8"}),
(error) => {
    if(error){
        console.log(error);
    }
};

//Function mit Parameter
function gibParam(param) {
    //gibt es TextParth datei?
    //wenn nicht erstelle TextFile mit übergebenem Parameter
    if(fs.existsSync(txtPath)){
        fs.appendFileSync(txtPath, `\${param}`, {encoding: "utf8"})
        console.log("Inhalt zugefügt");
    } else {
        // schreibe Parameter Inhalt in Text Datei
        fsPromise.writeFile(txtPath, param, 
        {encoding: "utf8"}),
        (error) => {
            if(error){
                console.log(error);
            }
        }
    }
}
//Funktion mit übergebenem Parameter aufrufen
gibParam("Moinsen");