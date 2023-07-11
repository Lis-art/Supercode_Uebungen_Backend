import express from "express";

const app = express()
const PORT = 9898


//# Wir wollen einen autohandel simulieren
//# wir brauchen folgende routen
// a wir wollen alle autos
// b wir erzeugen ein neues auto
// c wir wollen ein bestimmtes auto 
app.listen(PORT, () => console.log('Ich stehe vor der tür mit der nummer', PORT));

// GET      -> Read
// POST     -> Create
// PUT      -> Update
// DELETE   -> Delete

const cars = []

let id = 0;
function getID(car){
id += 1
car.id = id
}



//# middelware zum auslesen des bodys wenn dieser daten im JSON format enthält
app.use(express.json())
// aus daten die geschickt werden wird ein Javascript Object => wichtig um daten verarbeiten zu können
// Body Parser -> express.json
// Body ist der Part von dem wir im Backend Daten erhalten, Server liest den aus


// # GET
app.get('/cars', (req, res)=> {
    res.json(cars)
})

// # Post und Create
//ein neues auto erstellen
app.post('/cars',  (req, res)=>{
    const car = {modell:'BMW', farbe: 'lila', preis:780}
    getID(car)
    cars.push(car)
    res.json(cars)
    // können nur strings hin und her schicken => dafür nutzen für stringify methode
})

app.delete('/cars', (req, res) => {
    console.log('Schau dir mal meinen Body id 4 an', req.body);
    
    const {id} = req.body
    // Object destructuring
    // gib mir property id aus object cars
    console.log(id);
    //fehler entsteht
    cars.map((item, key, arr) => {
        if(item.id === id)
        arr.splice(key, 1)
    })
    res.json(cars)
})