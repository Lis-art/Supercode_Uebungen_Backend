import axios from "axios"

const CreatePostImageForm = ({setRefresh}) => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        // um eingaben aus form zu erhalten mittels FormData

        const response = await axios.post("/api/addPost", formData)
        // post request mit FormData an backend

        setRefresh(prev => !prev)
        // neu fetchen
        console.log(response);

        e.target.reset()
        // mit reset sagen wir das auf standardwert zurück gesetzt werden soll (Form)
    }

// namen müssen mit schema daten (postmodel) übereinstimmen!
// bei image müssen wir nach upload.single name schauen!
// wichtig das onSubmit auf Form kommt und nicht auf Button
// zum testen bei author im frontend eine id aus mongo verwenden und image hinzufügen
// in console erhält man response mit image + imageId
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" name="title" />
            <input type="text" placeholder="Content" name="content" />
            <input type="text" placeholder="AuthorId" name="author" value="64b65a6af25b0a218610d8ae"/>
            <input type="file" placeholder="Image" name="image" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default CreatePostImageForm