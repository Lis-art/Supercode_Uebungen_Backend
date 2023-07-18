// # Objects

const person_name = "Frida Kahlo";
const person_age = 33;

// primitive Werte (number, string,..) !alles andere unter der Haube Object, auch Functions => wir möchten aber eine Kollektion an Daten haben

// # Short notation for.. -> {} => synt.sugar

const person_object = {
    // Object Literal
    name: "Frida Kahlo",
    age: 33
};

// e.g. readFile ("../file.txt", options) == auch literal

// # lange Schreibweise -> this, dot notation => 
// # kommt nicht mit allen Var Namen klar, e.g. nimmt leerzeichen nicht
const person_object_2 = new Object();
person_object_2.age = 100;
person_object_2.name = "Frida Kahlo";

// # Bracket notation -> WERDEN WIR VIEL VERWENDEN!
myObj["job title"] = "This is bracket notation/Dev";

myObj2[0] = "Something";
myObj2[1] = "Something else";
console.log({myObj2});

// # geschweifte Klammern hier haben alle einen Context/Function Body -> Code Block
//function(){}
//try{}


// if else -> braucht Block statement
let isGoodDay = false;
const day = "Monday";
if (day === "Monday") {
    isGoodDay = false
} 

// Function als Object
function newDev(name){
    return {name, dev: true};
}

newDev["is cool function"] = true;

const dev = newDev("Frida Kahlo");
console.log({ dev, isIt: newDev["is cool function"] });

const aObj = { name: "Frida Kahlo" }; // RAM Platz Nr. 1
aObj.age = 18;

// ist Const aber änderbar -> man kann zwar keinen neuen Wert zuschreiben ABER der Wert des Objects trotzdem veränderbar(mutable) // # not reassignable aber mutable (age) !!

// {} === {} -> ist false WEIL Object ist wie eine Adresse eines Speichers (mit daten) 

console.log(aObj);


const bObj = {...aObj}; // bObj zeigt auf RAM Platz nr. 1
const otherCopy = Object.assign({}, bObj) 
// erste Argument Target, alle anderen Source ! um Objects zusammen zu kopieren
bObj.name = "Bernd",
bObj.age = 19;

console.log(aObj);

// Was ist aObj? -> da beides auf RAM Platz 1 liegt wird beides verändert ==> deshalb Zeile 58 false, denn gleicher Speicherplatz

console.log(aObj, aObj === bObj);

//# Objekte und auch Arrays verstecken sich im Speicher und Variable zeigt den Ort des Speicherplatzes auf - spread Operator oder Object Assignment um neuen Platz zuzuschreiben bzw. rüber zu reichen

// # Array Methoden - 2 Arten 
// 1. Aktion macht was und gibt Kopie zurück - e.g. Map
const sourceArr = [1, 2, 3];
const arr = sourceArr.map((num) => + 2)
console.log({ sourceArr, arr });

//[...unsorted].sort() ->

// 2. Aktion verändert Ursprungsarray - e.g. sort

const arrayMap = (arr, mapFn) => {
    //const newArr = [];
    
    // FÜR FOR IN:
    const newArr = new Array(arr.length);
    
    
    // Computer hier kommt Liste mit Elementen mit Länge von xy
    // er würde dann Speicherplatz für diese Liste reservieren

    // for of - wert der elemente
    for(let element of arr){
        //console.log(element);
        //mapFn benutzen 
        const mapFnResult = mapFn(element);
        //resultat in neues Array pushen
        newArr.push(mapFnResult);
    }
    
    // for in - index
    for(let i = 0; i < arr.length; i++){
        
        const element = arr[i];
        const mapFnResult = mapFn(element, i, arr);
       
        //resultat in neues Array pushen
        newArr[i] = mapFnResult;
    }
    return newArr;
};
// Funktion sehr mächtig weil wir andere übergeben
//keine 1:1 copy 

[1,2,3], ((num, index, array) => num +2);
//callback Funktion mit Parametern
const result = arrayMap([1,2,3], (num) => num +2);
console.log(result);

if(result[0] === 2 && result[1] === 4 && result[2] === 6) {
    console.log("YES");
} else {
    console.log("NOOO");
} 
