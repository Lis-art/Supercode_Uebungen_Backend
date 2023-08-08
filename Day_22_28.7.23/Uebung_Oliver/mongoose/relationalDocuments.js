import mongoose from "mongoose";

await mongoose.connect("mongodb://localhost:27017/relation-test");


const inventorySchema = new mongoose.Schema({
    name: String,
    category:{
        type:String,
        enum: ["bigstuff", "smallstuff"]
    }
})

const Inventory = mongoose.model("Inventory", inventorySchema)

const userSchema = new mongoose.Schema({
    name: String,
    inventory: [{type: mongoose.Types.ObjectId, ref: "Inventory"}]
})

const User =mongoose.model("User", userSchema)

const invent = await Inventory.findOneAndUpdate(
{name:"Couch"}, 
{name:"Couch", category:"bigstuff"}, 
{upsert:true});
console.log(invent);


// !couch in inventory und couch in im user array haben nichts miteinander zu tun, unterschiedliche IDs!




await User.findOneAndUpdate(
{name:"Bernd"}, 
/* {name:"Bernd", inventory: [{name:"Couch",category:"bigstuff"}]}, ===> 1. ERSTELLUNG */
{name:"Bernd", inventory: [invent]}, // 2. nun mit Verweis auf entsprechende Collection mit Zuordnung zu gleichen ID
{upsert:true});
// erste param: suche nach obj was name bernd hat
// zweite param: das update, packe bernd darein
// dritte param: wie verhält sich findoneandupdate (=OPTION)
// wenn er eintrag mit name bernd nicht findet zum updaten, inserte/erstelle ihn
// upsert = update or insert

const user = await User.findOne({name:"Bernd"}).populate("inventory") // 
/* user.inventory.push(invent)
await user.save() */
console.log(user);


await mongoose.disconnect();
// disconnect = oben promise mit connect, node würde sonst nie aufhören;

Hashing
// = Hashing bezeichnet die Umwandlung einer Zeichenfolge in einen normalerweise kürzeren, numerischen Wert oder Schlüssel mit fester Länge. Der numerische Wert ist der Hashwert und eine andere Darstellung der ursprünglichen Zeichenfolge. -> hier wird nur verschlüsselt und zwar so das es nie wieder entschlüsselt werden kann
// wenn User PW erstellt wird PW genommen gehasht und hash wird in DB gespeichert und bei nächstem Login mit hash in DB verglichen 
// wie ein Fingerabdruck
// hash map = javascript Objekte 
// bei krypto geschichten alles über hashing

