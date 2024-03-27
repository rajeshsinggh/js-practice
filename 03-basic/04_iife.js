// Immediately Invoked Function Expression (IIFE) // For immediate action and Dont want pollution by global function

(function connect() {  //syntex of iife // and this is named iife
    console.log("BD Connected");
})(); // to end iffe ;


( ()=>{ //without named iife
    console.log("Rajesh Singh Connected to BD");
})();

( (name) =>{ // fat arrow syntex // passing parameter and argument in iife
    console.log(`DB Connected To ${name}`);
})('Rajesh');

