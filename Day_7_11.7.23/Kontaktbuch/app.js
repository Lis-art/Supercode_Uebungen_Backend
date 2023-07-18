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
  //Hier wird die ID aus den Anfrageparametern extrahiert (req.params.id). Der Wert wird mit der Number-Funktion in eine Zahl umgewandelt und der Variablen id zugewiesen.
	const { name, tel } = req.body;
  // Hier werden die Werte name und tel aus dem Anfragekörper (req.body) extrahiert. Diese Werte werden den Variablen name und tel zugewiesen.
	const index = contacts.findIndex((contact) => {
		return contact.id === id;
    //Hier wird der Index des Kontakts in einem Array namens contacts gesucht. Die findIndex-Funktion wird verwendet, um den Index des ersten Elements im Array zu finden, für das die angegebene Bedingung (contact.id === id) erfüllt ist. Der Parameter (contact) => { ... } ist eine ArrowFunktion, die die Bedingung definiert.
	});
	if (index !== -1) {
   //Diese Bedingung überprüft, ob der Index des Kontakts im Array gefunden wurde. Wenn der Index ungleich -1 ist, bedeutet das, dass ein Kontakt mit der gegebenen ID gefunden wurde.
		contacts[index].name = name ? name : contacts[index.name];
    //Hier wird der Name des Kontakts aktualisiert. Wenn name einen Wert hat (truthy), wird der Wert verwendet, andernfalls wird der ursprüngliche Name beibehalten.
		contacts[index].tele = tel ? tel : contacts[index.tele];
    //Hier wird die Telefonnummer des Kontakts aktualisiert. Wenn tel einen Wert hat (truthy), wird der Wert verwendet, andernfalls wird die ursprüngliche Telefonnummer beibehalten.
	}
	res.json(contacts);
  //Die Antwort wird als JSON zurückgegeben. Hier wird das contacts-Array als JSON-Objekt zurückgegeben, um den aktualisierten Zustand aller Kontakte zu übermitteln.
});
//Die gegebene Code-Zeile behandelt also eine PUT-Anfrage an den "/contacts/:id"-Endpunkt. Sie erwartet eine ID, den Namen und die Telefonnummer eines Kontakts im Anfragekörper und aktualisiert den entsprechenden Kontakt im contacts-Array. Schließlich gibt sie das aktualisierte Array als JSON-Antwort zurück.





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








