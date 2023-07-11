import express from "express";

const app = express()

app.use((req, res, next)=> {
    console.log(req.method, req.url);
    
    next()
    // ohne next würde request middelware nicht finden

})


app.get('/', (req, res)=>{
        res.send('Hallo Welt')
})

app.get('cars', (req,res) => {
    res.send('In cars')
})

app.get('cars', (req,res) => {
    res.send('In cars')
})

app.post('cars', (req,res) => {
    res.send('danke für das auto')
})

app.use((req, res, next) => {
    res.send('Keiner mag dich haben')
})
// req, res, next => request handler
// bei Routen ohne next
// bei middleware mit next
// wenn man am "Ende" keine midedelware hat und kein Pfad zum request passt entseht 404 Fehler
app.listen(9898, () => console.log('Ich stehe wieder vor der Tür'))
