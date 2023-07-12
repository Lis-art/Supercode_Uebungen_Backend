import express from "express";
import fs from "node:fs";
import contacts from "./contacts.json" assert { type: "json" };

console.log(contacts);

const app = express();
const PORT = 9898;

// ! MIDDLEWARE
app.use(express.json());

// ! ALLE CONTACTS
app.get("/contacts", (req, res) => {
  res.json(contacts);
});

// ! EIN BESTIMMTER CONTACT
app.get("/contacts", (req, res) => {
  const { id } = req.body;
  console.log(id);
  contacts.map((item) => {
    if (item.id === id) {
      res.json(item);
    }
  });
});

// ! NEUER CONTACT
app.post("/contacts", (req, res) => {
  const { name, id } = req.body;
  const newContact = { name, id };
  contacts.push(newContact);
  fs.writeFile("./contacts.json", JSON.stringify(contacts), (err) => {
    if (err) {
      console.error(err);
    } else {
      res.json(contacts);
    }
  });
});

// ! CONTACT AKTUALISIEREN
app.put("/contacts", (req, res) => {
  const { name } = req.body;
  const { id } = req.body;
  const { newId } = req.body;
  const { newName } = req.body;
  contacts.map((item) => {
    if (item.id === id) {
      console.log(item);
      item.id = newId;
      item.name = newName;
      console.log(item);
    }
  });
  res.json(contacts);
});

// ! CONTACT LÖSCHEN
app.delete("/contacts", (req, res) => {
  const { id } = req.body;
  contacts.map((item, key, arr) => {
    if (item.id === id) {
      arr.splice(key, 1);
    }
  });
  res.json(contacts);
});

// ! FALLBACK
app.use((req, res, next) => {
  res.send("Request fehlgeschlagen");
});

app.listen(PORT, () =>
  console.log("Ich stehe vor der Tür mit der Nummer", PORT)
);