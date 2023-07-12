import express from "express";

const app = express();
const PORT = 3000;

const contacts = [];
let id = 0;

const getId = (contact) => {
  id += 1;
  contact.id = id;
};

// Middelware
app.use(express.json());

// Alle Kontakte auslesen
app.get("/contacts", (req, res) => {
  res.json(contacts);
});

// Bestimmten Kontakt anhand der ID aufrufen
app.get("/contacts/:id", (req, res) => {
  const contactId = req.params.id;
  const selectedContact = contacts.find(
    (contact) => contact.id.toString() === contactId
  );
  console.log(selectedContact);
  if (!selectedContact) {
    return res.status(404).json({ error: "Kontakt nicht gefunden" });
  }
  res.json(selectedContact);
});

// Kontakt erstellen
app.post("/contacts", (req, res) => {
  const contact = { name: "Paula", age: 22 };
  getId(contact);
  contacts.push(contact);
  res.json(contacts);
});


// Vorlage
app.post("/contacts", (req, res) => {
	const contact = {
		name: req.body.name,
		tel: req.body.tel,
	};
	//const contact = { name: "Nina", tel: "xyz" };
	getId(contact);
	contacts.push(contact);
	res.json(contacts);
});
// Kontakt anhand einer Id aktualisieren
/* app.put("/contacts/:id", (req, res) => {
  const contactId = req.params.id;
  const selectedContact = contacts.find(
    (contact) => contact.id.toString() === contactId
  );
  selectedContact.name = "Udo";
  selectedContact.age = 47;
  if (!selectedContact) {
    return res.status(404).json({ error: "Kontakt nicht gefunden" });
  }
  res.json(selectedContact);
});
 */


// Kontakt anhand einer Id aktualisieren
app.put("/contacts/:id", (req, res) => {
	const id = Number(req.params.id);
	const { name, tel } = req.body;
	const index = contacts.findIndex((contact) => {
		return contact.id === id;
	});
	if (index !== -1) {
		contacts[index].name = name ? name : contacts[index.name];
		contacts[index].tele = tel ? tel : contacts[index.name];
	}

	res.json(contacts);
});






// Bestimmten Kontakt anhand der ID löschen
app.delete("/contacts/:id", (req, res) => {
  const contactId = Number(req.params.id);
  contacts.map((item, key, arr) => {
    if (item.id === contactId) {
      arr.splice(key, 1);
    }
  });
  res.json(contacts);
});
// die eins gibt die Länge an wieviel gelöscht werden soll
// Browser dings localhost:3000/contacts/3 -> gibt an welche id gelöscht werden soll



// # 3
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/submit", (req, res) => {
  let contactInfo = req.body.Name + " " + req.body.Tel + " " + req.body.Email;

  console.log(contactInfo);
  res.send(contactInfo + " Submitted Successfully!");
});

app.listen(PORT, () => console.log("LÄUFT...", PORT));








