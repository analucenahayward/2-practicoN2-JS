//DECLARAMOS LA VARIABLE SUMA
let suma = 0;
//BUCLE DO WHILE PARA INTRODUCIR VARIOS
do {
    //PEDIMOS EL NÚMERO POR TECLADO
    let numero = prompt("Introduce un numero");
    //COMPROBAMOS QUE LO INTRODUCIDO ES UN NÚMERO
    if (Number(numero) == numero) {
        //CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
        numero = Number(numero);
        //SUMAMOS LO QUE HAY EN LA VARIABLE SUMA CON ESE NÚMERO
        suma = suma + numero;
    }
    //SI LO INTRODUCIDO NO ES UN NÚMERO
    else {
    //SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
        if (numero != undefined){
            alert(numero + " No es un numero");
        }
    }
//VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
} while (numero != undefined);
//SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO
document.write(suma);