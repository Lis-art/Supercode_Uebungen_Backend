import {arrayCars}  from "./data.js";
import {arrayNumbers} from "./data.js";

//console.log(arrayCars);

function sortFunction() {
    const sortCars = arrayCars.sort();
    //console.log(sortCars);
    return sortCars
}
export default sortFunction;


export const sortNumbersFunction = () => {
    const sortNumbers = arrayNumbers.sort((a, b) => a - b);
    return sortNumbers
}
