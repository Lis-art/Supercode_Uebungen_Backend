import fs from "node:fs"; // # Callback/ Synchrone Methoden importiert
console.log(fs);

//#SYNCHRON
const data = fs.readFileSync("input.txt", {encoding: "utf8"});
console.log(data);
console.log(data.toString());
console.log("Program ended");

//read file sync methode um Pfad zu lesen 
//was zurückkommt hat methode to string und ergebnis bringt inhalt zurück
//buffer = rohdaten aus arbeitsspeicher, puffer der schon mal daten zwischenspeichert
//hier wird text datei gepuffert
//0 und 1 en werden in diesem kontext interpretiert => encoding
// nach encoding mit UTF8 kein Buffern mehr - String kommt direkt zurück

//#ASYNCHRON
fs.readFile("./input.txt", {encoding: "utf8"},(err, data)=>{
    if(err) console.error("Nooooo");
    console.log("Async data");
    console.log(data);
})



//#Promisify Callback Function
const readFilePromise = (filePath) => 
new Promise ((resolve, reject) => {
    fs.readFile(filePath, {encoding: "utf8"}, (err, data) => {
        //Innerhalb der Promise-Funktion wird die Funktion fs.readFile aufgerufen, um eine Datei mit dem angegebenen filePath zu lesen
        if(err) reject(err);
        //Wenn beim Lesen der Datei ein Fehler (err) auftritt, wird die Promise abgelehnt (rejected), indem die reject-Funktion mit dem Fehler als Argument aufgerufen wird.
        resolve(data);
        //Wenn das Lesen der Datei erfolgreich abgeschlossen wurde, wird die Promise erfüllt (resolved), indem die resolve-Funktion mit den gelesenen Daten (data) als Argument aufgerufen wird.
    });
});
console.log(readFilePromise("./input.txt"));
//Hier wird die readFilePromise-Funktion aufgerufen und der Dateipfad ./input.txt übergeben.
readFilePromise("./input.txt").then((data)=> console.log({promiseData: data}));
//Anschließend wird die then-Methode auf der zurückgegebenen Promise aufgerufen, um eine Funktion zu registrieren, die aufgerufen wird, sobald die Promise erfüllt ist. In diesem Fall wird die Funktion (data) => console.log({promiseData: data}) übergeben, die die Daten data mit console.log ausgibt


// nicht auf reihenfolge der Logs bei asynchronem code verlassen!
// um Problem zu umgehen: console.log({promiseData: data}) als Object machen und man weiß welche daten zurückkommen
// File system api können direkt von fs importiert werden


import fsPromises from "node:fs/promises"; // # Promise / Asynchrone Methoden importiert

const fsPromiseData = fsPromises
    .readFile("./input.txt", {encoding: "utf-8"})
    .then((fsPromiseData) => console.log({ fsPromiseData}));

console.log({fsPromiseData});

/* const fsPromiseData = fsPromises
    .readFile("./input.txt", {encoding: "utf-8"})
    .then((fsPromiseData) => fetch(data));
    .then ((data) => console.log("HI")) */
// then kette ==> aber sehr unübersichtlich, dafür gibt async await


//# Async / Await ==== Promises

const prom = () => new Promise()
const prom2 = async (filePath) => {
    // async macht aus Funktion ein Promise!!!! 
    if(!filePath){
        //Promise rejected bei Error . catch
        throw new Error("Please define a filePath.")
    }

    let data = await fsPromises.readFile(filePath, 
        {encoding: "utf-8"});
    // await keyword um auf promise zu warten - asynchroner code kann dadurch genauso geschrieben werden als wäre er synchron
    // nur andere art um promises zu schreiben, anstatt von verkettung auf einer ebene!
    // wenn das fehlschlägt ==> error


    return true //Promise resolved, also (.then) geh in then Callback
}


prom2().catch((e) => console.error("Here: ", e));
//Fehler wird im catch aufgefangen

// # bei Js schwierig zu sagen wo Fehler entsteht deshalb try catch block drum herum machen

// bei fehler wird aus funktion raus gesprungen und wenn dort kein catch ist der fehler auffängt geht er immer weiter ebenen hoch wenn kein catch kommt Absturz
// catch => mit try catch abbilden
// then => mit await 

try {
    await fetch("http://google.com");
} catch (error) {
    console.error("Catch fetch: ", error);
}

// # siehe Code Snippets Übung von Oliver! 

