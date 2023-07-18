import fs from "node:fs/promises";

const contactFileURL = new URL("../data/contacts.json", import.meta.url);


// wieder zu beginn alle exporte aufstellen

// Datei einmal lesen und dann nur noch schreiben
// denn wir kennen hier im js den aktuellen stand schon
console.log("Contact imported and evaluated?");

let fileContent;
const init = async () => {
    //read contacts.json
    // store value in file scope
    const fileContentString = await fs.readFile(contactFileURL, {encoding: "utf-8"});
    // parse filecontentString Inhalt zu einem JS Object
    // und speichere Wert in unsere lokale fileContent Variable
    fileContent = JSON.parse(fileContentString);
};

// Setup contacts file für inhalt
// mit error handling
init().catch(e => {
    console.error("Initialization of contacts service failed with: ", err);
});


const write = async () => {
    // nehme file content und schreibe das
    // in die json Datei
    const fileContentString = JSON.stringify(fileContent, null, 2);
    await fs.writeFile(contactFileURL, fileContentString, { encoding: "utf-8" });
  };
  
export const add = async (contact) => {
    // give contact a id (uuid = unique identifier)
    contact.id = uuid();
    // push and fileContent
    fileContent.push(contact);
    await write();
  
    return contact;
};

export const getAll = async () => {
    return fileContent;
};

export const getOneById = async (id) => {
    const contact = fileContent.find((contact) => contact.id === id);
    console.log(contact);
    return contact;
};

export const updateOneById = async (id) => {};

export const deleteOneById = async (id) => {};