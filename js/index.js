// CONVERSOR DE DIVISAS //
// Declaro la variable opcion para utilizarla en la función menu, y la variable programa para el while principal del programa.
let opcion;
let programa = true;
let montoIngresado;
let montoConvertido;

// Array que almacena los precios de las Monedas. 
const precioDolarBlue = 220;
const precioEuroBlue = 238;
const precioMonedas = [precioDolarBlue, precioEuroBlue];

// While principal para repetir los procesos una y otra vez, hasta que el usuario decida salir del programa.
while (programa == true) {
    // Switch principal para ejecutar las instrucciones correspondientes a la opción elegida por el usuario.
    switch (menu()) {
        /* 1. Dólar a peso */
        case 1:
            console.log(precioMonedas);
            montoIngresado = prompt("# Por favor, ingrese un monto en dólares: ");
            alert("# Usted ingresó " + montoIngresado + " dólares. ");
            montoConvertido = parseInt(montoIngresado) * precioMonedas[0];
            alert("# Si convertimos esa cantidad a pesos, son $" + montoConvertido + " pesos argentinos.");
            break;

        /* 2. Peso a dólar */
        case 2:
            montoIngresado = prompt("# Por favor, ingrese un monto en pesos: ");
            alert("# Usted ingresó " + montoIngresado + " pesos. ");
            montoConvertido = parseInt(montoIngresado) / precioMonedas[0];
            alert("# Si convertimos esa cantidad a pesos, son US$" + montoConvertido + " dólares.");
            break;

        /* 3. Euro a peso */
        case 3:
            montoIngresado = prompt("# Por favor, ingrese un monto en euros: ");
            alert("# Usted ingresó " + montoIngresado + " euros. ");
            montoConvertido = parseInt(montoIngresado) * precioMonedas[1];
            alert("# Si convertimos esa cantidad a pesos, son $" + montoConvertido + " pesos.");
            break;

        /* 4. Peso a euro */
        case 4:
            montoIngresado = prompt("# Por favor, ingrese un monto en pesos: ");
            alert("# Usted ingresó " + montoIngresado + " pesos. ");
            montoConvertido = parseInt(montoIngresado) / precioMonedas[1];
            alert("# Si convertimos esa cantidad a pesos, son €" + montoConvertido + " euros.");
            break;

        /* 0. Salir */
        case 0:
            programa=false;
            break;
    }
}

// Funciones
// Funcion del menú
function menu(){
    // Entrada para elegir la opción deseada (int)
    let opcion = parseInt(prompt("# MENÚ #\nElija el número de la opción que desea realizar: \n1. DÓLAR a PESO\n2. PESO A DÓLAR\n3. EURO A PESO\n4. PESO A EURO\n0. Salir"));
    // While para que sólamente permita elegir una de las 3 opciones disponibles (0, 1 y 2)
    while (opcion != 0 && opcion !=1 && opcion != 2 && opcion != 3 && opcion != 4){
        let opcion = parseInt(prompt("# MENÚ #\nElija el número de la opción que desea realizar: \n1. DÓLAR a PESO\n2. PESO A DÓLAR\n3. EURO A PESO\n4. PESO A EURO\n0. Salir"));
    }
    
    return opcion;
}

// Funcion dolar a peso (en construccion)
function dolarApeso(){

}

// Funcion peso a dolar (en construccion)
function pesoAdolar(){

}