// todos estos ejemplo retornaran tru //
console.log(false == "0");

console.log(null == undefined);

console.log(" \t\r\n" == 0);

console.log(" " == 0);


//--- Desafio Nº1 ---//
let numeroUn = 1;

let stringUn = "1";

let numeroTreinta = 30;

let stringTreinta = "30";

let numeroDiez = 10;

let stringDiez = "10";


//-- Condicionales ---//

if(numeroUn == stringUn){
    console.log("Las variables numeroUn y stringUn tienen el mismo valor, pero son tipos diferentes");
} else {
    console.log("Las variables numeroUn y StringUn no tienen el mismo valor");
}

if(numeroTreinta === stringTreinta){
    console.log("Las variables numeroTreinta y StringTreinta, tienen el mismo valor y el mismo tipo");
} else {
    console.log("Las variables numeroTreinta y StringTreinta, no tinen el mismo tipo");
}

if(numeroDiez === stringDiez){
    console.log("Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes");
} else {
    console.log("Las variables numeroDiez y stringDiez no tienen el mismo valor");
}

//-- EXPLICACIÒN--//
/* Explicación:
En las comparaciones donde queremos saber si las variables tienen el mismo valor pero tipos diferentes, 
utilizamos el operador ==. Esto permite comparar los valores después de la conversión implícita de tipos.
En las comparaciones donde queremos asegurar que tanto el valor como el tipo sean los mismos, 
utilizamos el operador ===. Esto asegura que los dos valores comparados sean del mismo tipo y 
tengan el mismo valor.
¡Espero que esto te ayude a seguir adelante con el #7DaysOfCode!*/