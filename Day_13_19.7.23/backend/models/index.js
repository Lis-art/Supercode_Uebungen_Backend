import mongoose from "mongoose";

//console.log(process.env.MONGO_URI);
// verbindung mit der Datenbank aufbauen (hinter den port kommt der Name der Datenbank)
mongoose.connect(process.env.MONGO_URI)