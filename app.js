let titulo =    document.querySelector("h1");
titulo.innerHTML = "Hora del desafio";
 
function consoleClick() {
    console.log("El boton console fue clickeado");
}

function promptClick() {
    let ciudad =    prompt("Que ciudad de Brasil has visitado?");
    alert("Estuve en " + ciudad + " y me acordé de tí");
}    

function alertClick() {
    alert("Yo amo JS");
}

function sumaClick() {
    let num1 = prompt("ingresa 2 numeros que quieras sumar");
    let num2 = prompt("ahora el segundo numero");
    alert("la suma de esos numeros es igual a " + (parseInt(num1)+parseInt(num2)));
}    
console.log(5+3);