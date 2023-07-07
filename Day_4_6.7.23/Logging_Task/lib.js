import fsPromises from "node:fs/promises";
import fs from "node:fs";

const logPath = new URL ("./logs/log.txt",import.meta.url);
const logPathError = new URL ("./logs/error.txt",import.meta.url);
const logPathWarn =new URL ("./logs/warn.txt",import.meta.url);
const logPathInfo = new URL ("./logs/info.txt",import.meta.url);


    
    // ! FUNCTION !
export const addToLog = async (addText, logLevel) => {
    const date = new Date().toUTCString();
    const ausgabe = `\n${logLevel} - ${date} - ${addText}` ;
  
    // Checken, ob Unterordner existiert. Wenn nicht wird er erstellt.
    const logDirUrl = new URL("./logs", import.meta.url);
    !fs.existsSync(logDirUrl)
      ? await fsPromises.mkdir(logDirUrl, { recursive: true })
      : null;
  
    if (fs.existsSync(logPath)) {
      fs.appendFileSync(logPath, ausgabe, {
        encoding: "utf-8",
      });
      console.log("Inhalt hinzugefügt");
    } else {
      fs.writeFileSync(logPath, ausgabe, { encoding: "utf-8" });
      console.log("Datei erstellt");
    }
  
    // EINORDNUNG IN LOG LEVELS, je nach Parametervergabe
    // Wenn logLevel === "übergebener Parameter im Funktionsaufruf", wird der dynamische Path ausgewählt
    let dynPath;
    if (logLevel === "error") {
      dynPath = errorTxtPath;
    } else if (logLevel === "warn") {
      dynPath = warnTxtPath;
    } else if (logLevel === "info") {
      dynPath = infoTxtPath;
    } else {
      console.error("error: Typ gibt es nicht");
    }
  
    // Wenn die Datei existiert, wird Inhalt hinzugefügt. Wenn nicht wird die Datei mit Inhalt erestellt.
    if (fs.existsSync(dynPath)) {
      fs.appendFileSync(dynPath, ausgabe, { encoding: "utf8" });
      console.log("Inhalt zugefügt");
    } else {
      fs.writeFileSync(dynPath, ausgabe, { encoding: "utf-8" });
      console.log("Datei erstellt");
    }
};

export default addToLog