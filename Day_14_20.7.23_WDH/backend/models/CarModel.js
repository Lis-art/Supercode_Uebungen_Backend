import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    model: String,
    color: {
        type: String,
        // enum -> gibt bestimmte werte vor
        enum: ["silver","black","white"],
        required: true
    },
    wheels: {
        type: String || Number,
        required: [true, "Reifen müssen angegeben werden"]
    }
})

export const Car = mongoose.model("Car", carSchema)
//name = collection name
// + schema name