
// ? IMPORTE:
import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./models/index.js";
import {Car} from "./models/CarModel.js"

// ? VARIABLEN:
const app = express();
const PORT = 3001;

// ? MIDDELWARES:
//middelware express - body parser
app.use(express.json())
//middleware morgan - direkte Ausgabe an Infos von Anfragen an Server
app.use(morgan("dev"));
//middelware cors - für Port Kommunikation
app.use(cors());


// ? ROUTEN:
app.get("/status", (req,res) => {
    res.send("Server läuft problemlos")
})

// ? useParams
// use params immer mit : 
// res.send daten an client zurück zu schicken
// req.params enthält Objekt mit Index was zurück kommt
app.get("/car/:index/:index2/:index3", (req,res) => {
    console.log(req.params)
    // Ergebnis Console: { index: 'abc', index2: 'test', index3: 'auto' }
    res.send()
})

// ? Schema benutzen
// post - wollen sachen vom server erhalten u in datenbank speichern
app.post("/api/v1/createCar", async (req,res) => {
    try {
        //console.log(req.body);
        //neuen Post in Var speichern
        //Car Model exportieren
        //()Objekt rein
        // im req.body alles was ins backend geht
        const newPostCar = await Car.create(req.body)
        //als json zurückschicken
        res.json(newPostCar)
    } catch (error) {
        console.log(error);
        res.status(501).end()
        //status damit auch entsprechender code angezeigt wird bei fehler und nicht 200 ok
    }
})


// ? LISTEN:
app.listen(PORT, () => {
	console.log(`Server läuft auf Port: ${PORT}`);
});