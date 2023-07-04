import { data } from "./cities.js";


//#Erstelle eine Funktion, die mit Hilfe von Filter ein Array mit Objekten anhand der Bevölkerungszahl filtert. Sie soll die Städte zurückgeben, die mehr als 100000 Einwohner haben. 


export const aboveNumber = (data) => {
    return data.filter(city => city.population > 100000);
}


//#Erstelle eine weitere Funktion, die die Städte zurückgibt, die weniger als 100000 Einwohner haben.

export const underNumber = (data) => {
    return data.filter(city => city.population < 100000);
}