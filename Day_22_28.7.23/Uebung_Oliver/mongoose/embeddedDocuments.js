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
    inventory: [inventorySchema]
})

const User =mongoose.model("User", userSchema)

await Inventory.findOneAndUpdate({name:"Couch"}, 
{name:"Couch", category:"bigstuff"}, 
{upsert:true});

// !couch in inventoty und couch in im user array haben nichts miteinander zu tun, unterschiedliche IDs!

await User.findOneAndUpdate({name:"Bernd"}, 
{name:"Bernd", inventory: [{name:"Couch", category:"bigstuff"}]}, 
{upsert:true});
// erste param: suche nach obj was name bernd hat
// zweite param: das update, packe bernd darein
// dritte param: wie verhält sich findoneandupdate (=OPTION)
// wenn er eintrag mit name bernd nicht findet zum updaten, inserte/erstelle ihn
// upsert = update or insert

await mongoose.disconnect()
// disconnect = oben promise mit connect, node würde sonst nie aufhören