import express from "express";
import {} from "./services/contacts.js";
const PORT = 3001;
const app = express();

// ... Routen - kann man erstmal alle so runterschreiben

// alle contacts
app.get("/contacts", (req,res) => {
    // TODO: Implement
    res.send("not implemented")
});


// bestimmten contact
app.get("/contacts/:id", (req,res) => {
    // TODO: Implement
    res.send("not implemented")
});


// contact hinzufügen
app.post("/contacts", (req,res) => {
    // TODO: Implement
    res.send("not implemented")
});


// ändere einen contact
app.put("/contacts/:id", (req,res) => {
   // TODO: Implement
    res.send("not implemented")
});


// lösche einen contact
app.delete("/contacts/:id", (req,res) => {
    // TODO: Implement
    res.send("not implemented")
});









app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
}) 