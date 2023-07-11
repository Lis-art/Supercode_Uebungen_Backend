let name = "christian";

function changeName(name){
    name = "Peters"
}
changeName(name);
console.log(name);

// Console gibt Christian aus => neue Variable mit Peters wird erstellt, ist nur eine Kopie
// Wertvariable

let person = {name: 'Magda'}

function changePersonName(person){
person.name = 'Cale'
}
changePersonName(person)
console.log(person);

// Console gibt Cale aus => Referenz Variable - Objects werden im Heap gespeichert - Object kein primitiver Datentyp
// es wird nach der Adresse des Objects geschaut und diese dann verändert
