# Express Routes

## Route Parameter

wir definieren platzhalter in unserem Endpunkt um dynamische routen zu haben
`/api/:placeholder/`

Was machen wir bei filtern, suchen, sortieren, ...
`/api/posts/:search/:filter..`

oder POST `/api/posts` {body:{sort-by: "title"}}
//Frontend

## Query Parameter

`/api/posts?search=my-post`

`````js
app.get("/api/post", (req,res) => {
    console.log(req.query) //{search:"my-post"}
})
```

````js
fetch("/api/posts?" + new URLSearchParams({search: "my-post"}))
//fetch("/api/posts?search=my-post")
```

````js
new URLSearchParams({search: "my-post"}).toString()
//search=my-posts
```

// mit Variable, axios packt Fragezeichen hinten dran und Objekt wird
//all-entries/stuff?titleSearch=${searchForTitle}

//fetch XHR + disable cache
//headers
//accept => dort sieht man die URL
// axios hängt params als request paramter hinten dran
axios.get(`/api/status?search={params {search: "my-post"}})

### Query Parameter müssen URL encoded werden
s.ReadMe Oliver => 03.express routes

`````

# Middelware

// erlaubt uns Logik zu teilen

// middelware kann z.B. schauen ob user identifiziert ist(für logins) wenn nicht schicke Fehler zurück - extra für spezielle Routen definierbar
-> routen können also verschiedene middelwares haben

// unterschied middelware u req handler -
middelware kann res zurückschicken, req macht das immer

get req auf api POST =>

//in klammern rq handler
//next sagt bin fertig schicke zur nächsten middelware
// gibt URL req und Methode an

// MORGAN nachgebaut:

````js
//GLOBAL
app.use(logger())

app.use(logger(req, res, next)  => {
    console.log(`${req.method} request on ${req.url}`)
    next()
})

// für PFAD
app.use("/api/posts", (req, res, next)  => {
    console.log(`${req.method} request on ${req.url}`)
    next()
})

//Explizite ROUTE
app.use("/api/posts", logger, (req, res, next)  => {
    console.log(`${req.method} request on ${req.url}`)
    next()
})


const logger = (req, res, next) => {
    console.log(`${req.method} request on ${req.url}`)
    next()
}
```
localhost://..3001/api/posts
GET request on /api/posts -> in console

// TIPP zur Nachvollziehbarkeit: Morgan Datei relativ einfach, genauer anschauen, Funktion kann Format und Options bekommen, gibt Logger zurück => das ist die MIDDELWARE!
// schickt kein RES! -> deshalb muss ganz unten next mit rein damit zur nächsten Middelware übergegeangen werden kann

// next () immer midddelware


````

## ROUTEN aufräumen

backend
ordner: controller
da rein post.js / push.js / ...

# post.js:

import express from 'express'

const postRouter = express.Router()

POST Routen rein kopieren
und statt app. postRouter.delete verwenden
export default postRouter

postRouter.use("/api/post", postRouter)

postRouter.use("/", logger)

# in server.js importieren:

import postRouter from "./postRouter"

app.use(postRouter)

bzw. mit Funktionsaufruf: app.get("/api/posts", logger, getAll)

# Ordner Strukturen

mit Router wird middelware erstellt die hilft unsere controller zu strukturieren:

// MVC als Domain
backend:

- model
  - posts
- controller
  - posts
- router - posts
  server.js

diese Struktur sieht man häufig ODER
nach domain strukturiert:

//Domain als Ordner Namen
backend:

- Server

  - middelware
  - config

- Posts
  - controller
  - router
  - model
- User - controller - router - model
  server.js

// siehe Express + BSP.: Doku node-express-realworld-example-app

AUFGABE heute:

Home inventar part 2:

user section-
account erstellen können
acc hat profilseite

basic funktionen -HEUTE
abrufen
löschen
ändern

route /beyonce
user model hat dann eigene daten

- name
- descr
- image

s. mongoose realations
