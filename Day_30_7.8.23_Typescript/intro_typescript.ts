//Tuple
let add;
const hello = add("Hello ", "Bernd");

function useState(val:string): [String, ()=>void] {
    const setValFN = ()=> {}
    return [val, setValFN]
}
const state = useState("Hello")