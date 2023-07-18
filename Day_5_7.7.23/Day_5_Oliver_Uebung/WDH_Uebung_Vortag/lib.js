
import fs from "node:fs/promises";

// # async => AWAIT verwenden

// async => use case abhängig aber in meisten Fällen angebracht  ==> wenn viele Personen auf den Code zugreifen müssen - dann besser synchron, sonst asynchron

const logFolder = new URL ("./logs", import.meta.url);
const logFile = new URL ("./logs/logs.txt", import.meta.url);

//ZU 3:
/* const warnFile = new URL ("./logs/warn.txt", import.meta.url);
const errorFile = new URL ("./logs/error.txt", import.meta.url);
const infoFile = new URL ("./logs/info.txt", import.meta.url); */



// um sich fehler als wert ausgeben zu lassen und zu viel try catch zu vermeiden

const exists = async (path) => {
    let exists;
    try{
    await fs.access(path, fs.constants.W_OK)  
    //access methode prüft welche rechte man an einer datei hat, W OK steht für write erlaubt - Check existiert Ordner + dürfen wir schreiben?
    exists = true;   
    } catch(err){
        exists = false;
    }
    return exists;
}

export const log = async (logtxt) => {
    //existiert log folder?
    const hasFolder = await exists(logFolder);
    
    // existiert log file?
    // const hasFile = await exists(logFile); ====> kann gelöscht werden da automatisch mit append file geprüft wird ob datei existiert
    if(!hasFolder){
        //Ordner erstellen (wenn nicht vorhanden):
        await fs.mkdir(logFolder);
    }

    const date = new Date().toUTCString();
    console.log(date);
    
    // write log
    await fs.appendFile(logFile, `${logtxt}\n :: ${date}\n`, {encoding: "utf-8"});
    // default flag -a (options object - siehe doku) => sagt aus öffne eine datei zum text anhängen und wenn es die nicht gibt erstelle sie
}

//==================================

//TEIL 3
let isSetup = false;
 const setup = async () => {
    if(isSetup) return;
    const hasFolder = await exists(logFolder);

    if(!hasFolder){
        await fs.mkdir(logFolder);
    }
    isSetup = true;
}

const createLogMessage = (txt, logLevel) => {
    const date = new Date().toUTCString();
    let message = `${logtxt}\n :: ${date}\n`
    if(logLevel){
        let message = `${logLevel}\n :: ${message}\n`
    }
    return message;
}

// Log Funktion
export const log2 = async (logtxt) => {
    await setup();
    const message = createLogMessage(logtxt, logLevel);
    await fs.appendFile(logFile, `${logtxt}\n :: ${date}\n`, {encoding: "utf-8"})
}

// geben infos hier rein um messages zu erstellen
log.error = async (logtxt) => {
    await setup();
    await log2(logtxt, "ERROR");
    await fs.appendFile(errorFile, message, {encoding: "utf-8"});
};
log.warn = async (logtxt) => {
    await setup();
    await log2(logtxt, "WARN");
    await fs.appendFile(warnFile, message, {encoding: "utf-8"});
};
log.info = async (logtxt) => {
    await setup();
    await log(logtxt, "INFO");
    await fs.appendFile(infoFile, message, {encoding: "utf-8"});
};


// EXTRA: Currying - um factories zu erstellen, function die hilft functions zu erstellen 
// Ziel: die drei Funktionen oben drüber abstrahieren und dynamisch machen
// wir haben ERROR und error also muss text angepasst werden mit lowerCase
// Funktion die LOG LEVEL akzeptiert die wiederum lowerCase macht und logMessage akzeptiert

