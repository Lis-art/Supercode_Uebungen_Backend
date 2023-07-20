import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    //hier kommen alle keys rein
    name: {
        type: String,
        minlength: 2,
        // mongoose checkt Länge des namens
        maxlength: 30,
        required: true
    },
    email:{
        type: String,
        required: [true, "Email is a required field"],
        // User muss immer Email angeben - eckige Klammern
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        // damit es nur zwei rollen gibt
        default: "user"
    }
})

export const Author = mongoose.model("Author", authorSchema)