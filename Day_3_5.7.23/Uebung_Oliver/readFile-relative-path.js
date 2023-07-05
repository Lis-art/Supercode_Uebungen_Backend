import fs from "node:fs/promises";

console.log(import.meta.url);

const filePath = new URL("../../input.txt", import.meta.url);
// erste Param string URL, zweite Basis
console.log({metaPath: import.meta.url, 
    filePath
});
// ergibt absoluten Pfad komplett bis zur datei 
// mit ../../ kann man relativ arbeiten und zwischen ordnern navigieren
// sichere variante für realtiven datei pfad da man nicht weiß wo node ausgeführt wird deshalb über ../ überordner anwählen damit abgedeckt ist wo code ausgeführt wird
const fsPromiseData = await fs.readFile("./input.txt",
{encoding: "utf-8"});

console.log(fsPromiseData);
// für realtiven Pfad muss man im direkten Ordner sein
// pfad nicht realtiv zur Datei in der wir sind sondern relativ dazu wo node script ausgeführt wird
// um zu sagen guck von hier und nicht von node ausfühtung => input meta url