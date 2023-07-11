import express from 'express';

const app = express()
const PORT = 3000;

app.listen(PORT, () => console.log('Port läuft'));


// # Schritt 1 + 2

const contacts = [];
let id = 0;
function getID(contacts){
    id += 1;
    contacts.id = id
}

app.use(express.json())

// alle Kontakte abrufen
app.get('/contacts', (req, res) => {
    res.json(contacts)
})

// Kontakt hinzufügen
app.post('/contacts', (req, res) => {
    const contact = {name: 'Lisa', age: 31}
    getID(contact)
    contacts.push(contact)
    res.json(contacts)
    console.log(id);
})

// einen kontakt mit bestimmter id holen und als json ausgeben lassen
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


// Kontakt aktualisieren und zurückgeben lassen
app.put('/contacts/:id', (req, res) => {
    const contactId = req.params.id;
    const selectedContact = contacts.find(
      (contact) => contact.id.toString() === contactId
    );
    console.log(selectedContact.name);
    console.log(selectedContact.age);
    selectedContact.name = "Nina";
    selectedContact.age = 29;
    if (!selectedContact) {
      return res.status(404).json({ error: "Kontakt nicht gefunden" });
    } 
    res.json(selectedContact);
})


// Kontakt löschen
app.delete('/contacts/:id', (req, res) => {
    const contactId = Number(req.params.id);

    contacts.map((item, key, arr) =>{
        if(item.id === contactId)
        arr.splice(key, 1)
    });
    res.json(contacts)
    console.log(contactId);
});
// die eins gibt die Länge an wieviel gelöscht werden soll
// Browser dings localhost:3000/contacts/3 -> gibt an welche id gelöscht werden soll



// # Schritt 3

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.post('/submit', function (req, res) {
    let personInfo = req.body.Name + ' ' + req.body.Tel + ' ' + req.body.Email;
    
    res.send(personInfo + Tel ,' Submitted Successfully!');
    console.log(personInfo);
});

