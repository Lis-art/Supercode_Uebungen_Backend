import fs from "node:fs/promises";

const contactFileURL = new URL("../data/contacts.json", import.meta.url);


// wieder zu beginn alle exporte aufstellen

// Datei einmal lesen und ddann nur noch schreiben
// denn wir kennen hier im js den aktuellen stand schon
console.log("Contact imported and evaluated?");

let fileContent;
const init = async () => {
    //read contacts.json
    // store value in file scope
    const fileContentString = await fs.readFile(contactFileURL, {encoding: "utf-8"});
    // parse filecontentString Inhalt zu einem JS Object
    // und speichereWert in unsere lokale fileContent Variable
    fileContent = JSON.parse(fileContentString);
};

// Setup contacts file für inhalt
// mit error handling
init().catch(e => {
    console.error("Initialization of contacts service failed with: ", err);
});




export const addContact = async (contact) =>  {
    const allContacts = await getAll();
    res.send(allContacts);
};

export const getAll = async () => {}

export const getOneByID = async (id) => {}

export const updateOneByID = async (id) => {}

export const deleteOneByID = async (id) => {}