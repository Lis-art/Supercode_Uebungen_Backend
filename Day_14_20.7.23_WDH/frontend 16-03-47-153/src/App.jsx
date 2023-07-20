import axios from "axios"
import './App.css'
import UseRefTest from "../components/UseRefTest.jsx"

function App() {
  const car = {
    model:"E-Klasse",
    color:"white",
    wheels:4
  }

  // ? zum VGL axios und fetch
  const sendWithFetch = async () => {
    const res = await fetch("http://localhost:3001/api/v1/createCar", {
      //Options Object
      method:"POST",
      headers: {
        "ContentType": "application/json"
      },
      //json in string umwandeln nötig
      body: JSON.stringify(car)

    });
    const data = await res.json()
    console.log(data);
  }
  //sendWithFetch()


  const sendWithAxios = async () => {
    const res = await axios.post("http://localhost:3001/api/v1/createCar", car)
    console.log(res);
  }
  //sendWithAxios();

  

  return (
    <>
        <div>hi</div>
        <UseRefTest/>
    </>
  )
}

export default App
