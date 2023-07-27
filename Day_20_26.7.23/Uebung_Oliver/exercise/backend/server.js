import express from "express";
import dotenv from "dotenv";
import data from "./data.json" assert {type:"json"};

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

const PORT = process.env.PORT || 3000;
const app = express();

const ReactAppDistPath = new URL("../frontend/dist/", import.meta.url);
const ReactAppIndex = new URL("../frontend/dist/index.html", import.meta.url);

app.use(express.json());
app.use(express.static(ReactAppDistPath.pathname));
/*
 * express.static matched auf jede Datei im angegebenen Ordner
 * und erstellt uns einen request handler for FREE
 * app.get("/",(req,res)=> res.sendFile("path/to/index.html"))
 * app.get("/index.html",(req,res)=> res.sendFile("path/to/index.html"))
 */

app.get("/nobel-prize", (req, res) => {
  res.json(data.prizes)
});

/* // mit Routen Parameter
app.get("/nobel-prize/:id", (req, res) => {
  res.json(data.prizes)
}); */

//mit Query Parameter - wir wollen bestimmtes Jahr und sortiert
app.get("/nobel-prize", (req, res) => {
  
  //console.log({query: req.query});
  let responseData =[...data.prizes]

  const {year, sortBy} = req.query;
  console.log(year, sortBy);

  if(year){
    let responseData = responseData.filter((prize) => {
    return prize.year === year //weil 2022 schon in Q.Para, übergeben
  });
  }

  if(sortBy){
      responseData.sort((prizeA, prizeB) => {
      if(prizeA[sortBy] <= prizeB[sortBy]){
        return -1;
      } else if (prizeA[sortBy] >= prizeB[sortBy]){
        return 1;
      } else {
        return 0;
      }
    })
  }
  

  res.json(responseData)
});




app.get("/*", (req, res) => {
  res.sendFile(ReactAppIndex.pathname);
});

app.listen(PORT, () => {
  console.log("Server running on Port: ", PORT);
});
