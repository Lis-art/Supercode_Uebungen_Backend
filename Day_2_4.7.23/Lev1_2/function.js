import {names} from "./data.js";
import {numbers} from "./data.js";

//#Gib nur das ERSTE Element des Arrays zurück - shift

export const firstElementNames = () => {
    const cutFirstName = names[0];
    return cutFirstName
}

export const firstElementNumbers = () => {
    const cutFirstNumber = numbers[0];
    return cutFirstNumber
}
 
//#Gib alle AUSSER dem letzten Element des Arrays zurück - slice
/* 
export const notLastName = (array) => {
    const allWithoutLastName = array.slice(0, -1);
    return allWithoutLastName 

}

export const notLastNumber = () => {
    const allWithoutLastNumber = numbers.slice(0,15);
    return allWithoutLastNumber
}
 */

//#Gib nur das LETZTE Element des Arrays zurück - pop
/* 
export const onlyLastname = () => {
    const lastName = names.pop();
    return lastName
}

export const onlyLastNumber = () => {
    const lastNumber = numbers.pop();
    return lastNumber
}
 */
//#Gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück - slice

export const allMinusLastName = () => {
    const minusLastName = names.slice(0, 3);
    return minusLastName
}

export const allMinusLastNumber = () => {
    const minusLastNumber = numbers.slice(0, 15);
    return minusLastNumber
}

//#ein bestimmtes Element komplett aus deinem Array entfernen

export const removeElement = (array, element) => {
    return array.filter(el => el !== element);
}
//wie map durch alle Elemente durchgehen, gibt alle Elemente zurück die nicht Eric entsprechen

export const removeElement2 = (array, element) => {
    return array.filter(el => el !== element);
}



//#Gib ein Array zurück, das nur aus einzigartigen Werten besteht. Entferne die doppelten Elemente! (1,6,4,2)

export const spreadArray = (array) => {
    return [...new Set(array)]
}


//#Gib die Summe des Arrays “numbers” zurück

export const calcArray = (array) => {
    return array.reduce((a, b) => a + b, 0);
}

//#Die function bekommt zwei Parameter übergeben. Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt

export const randomNumber = (a, b) => {
    return Math.floor(Math.random() * 11 + 1);
}


//#Erstelle eine function, der ein String übergeben wird. Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt.

export const mitString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}


//#Erstelle eine function, der ein String übergeben wird. Sie soll den gesamten String in Großbuchstaben umwandeln
   
export const mitStringAllesGross = (string) => {
    return string.toUpperCase()
}

//#Erstelle eine function, mit zwei Parametern. Sie soll überprüfen ob der letzte Buchstabe von Parameter 1 mit dem Parameter 2 überein stimmt

export const checkParam = (param1, param2) => {
    return param1.charAt(param1.length -1).toLowerCase() === param2.toLowerCase();
}
