import express from "express";
import { add, getAll, getOneById } from "./services/contacts.js";

const PORT = 3001;
const app = express();

app.use(express.json());

//... Routen
app.get("/contacts", async (req, res) => {
  // TODO: Implement
  const allContacts = await getAll();
  res.send(allContacts);
});

app.get("/contacts/:id", async (req, res) => {
  const contact = await getOneById(req.params.id);
  res.send(contact);
});

app.post("/contacts", async (req, res) => {
  const contact = req.body;
  const createdContact = await add(contact);

  res.send({
    message: "Added contact",
    data: createdContact,
  });
});

app.put("/contacts/:id", (req, res) => {
  // TODO: Implement
  res.send("Not Implemented");
});

app.delete("/contacts/:id", (req, res) => {
  // TODO: Implement
  res.send("Not Implemented");
});

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});