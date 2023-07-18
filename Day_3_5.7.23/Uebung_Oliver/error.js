function example () {
    if(true){
        throw new Error ("It's true");
        //new Error - ausgabe alles wo node:internal steht kann ignoriert werden, andere fehler nicht - zeigt konkrete stelle an
        
    }
    return "This is a test";
}

//Funktion schlägt fehl - throw wirft fehler raus und stoppt dort
// aber niemand fängt string auf deshalb stoppt script dort
// code muss also umstrukturiert sein - catch fehlt
// mit try catch - versuche folgende aktion und wenn fehlschlägt zeige mir hier einen Fehler an

try {
    const data = example(); 
} catch (e) {
    console.log("Error from catch(): ", e);
}
console.log({data});

