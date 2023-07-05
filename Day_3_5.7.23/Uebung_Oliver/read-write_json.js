import fs from "node:fs/promises";



const filePath = new URL('./package.json', import.meta.url);
const contents = await fs.readFile(filePath, { encoding: 'utf8' });

//console.log(JSON.parse(contents), contents); 

/* console.log(typeof contents); */
// gibt string zurück => SCHWARZ
// müssen darus selber JS Object machen => zeile 8 GRÜN

const packageJSON = JSON.parse(contents);

packageJSON.author = "Frida Kahlo <fridaKahlo@gmail.com>";

console.log(packageJSON);

// jetzt möchten wir das in datei speichern

await fs.writeFile(filePath, JSON.stringify
(packageJSON, null, 2), 
    {encoding: "utf-8"});
// kommt aneinandergereiht als string raus unformatiert - dafür space parameter null und 2



