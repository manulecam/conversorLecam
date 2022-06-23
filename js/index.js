// CONVERSOR DE DIVISAS //
// Declaro la variable opcion para utilizarla en la función menu, y la variable programa para el while principal del programa.
var opcion;
var programa = true;

// While principal para repetir los procesos una y otra vez, hasta que el usuario decida salir del programa.
while (programa == true) {
    // Switch principal para ejecutar las instrucciones correspondientes a la opción elegida por el usuario.
    switch (menu()) {
        /* 1. Dólar a peso */
        case 1:
            let dolaresIngresados = prompt("# Por favor, ingrese un monto en dólares: ");
            alert("# Usted ingresó " + dolaresIngresados + " dólares. ");
            var pesosConvertidos = parseInt(dolaresIngresados) * 205;
            alert("# Si convertimos esa cantidad a pesos, son $" + pesosConvertidos + " pesos argentinos.");
            break;

        /* 2. Peso a dólar */
        case 2:
            let pesosIngresados = prompt("# Por favor, ingrese un monto en pesos: ");
            alert("# Usted ingresó " + pesosIngresados + " pesos. ");
            var dolaresConvertidos = parseInt(pesosIngresados) / 205;
            alert("# Si convertimos esa cantidad a pesos, son US$" + dolaresConvertidos + " dólares.");
            break;

        /* 0. Salir */
        case 0:
            alert("# Gracias por utilizar nuestro conversor de divisas. #");
            programa=false;
            break;
    }
}

// Funciones
// Funcion del menú
function menu(){
    // Entrada para elegir la opción deseada (int)
    var opcion = parseInt(prompt("# MENÚ #\nElija el número de la opción que desea realizar: \n1. DÓLAR a PESO\n2. PESO A DÓLAR\n0. Salir"));
    // While para que sólamente permita elegir una de las 3 opciones disponibles (0, 1 y 2)
    while (opcion != 0 && opcion !=1 && opcion != 2){
        var opcion = parseInt(prompt("# MENÚ #\nElija el número de la opción que desea realizar: \n1. DÓLAR a PESO\n2. PESO A DÓLAR\n0. Salir"));
    }
    
    return opcion;
}

// Funcion dolar a peso (en construccion)
function dolarApeso(){

}

// Funcion peso a dolar (en construccion)
function pesoAdolar(){

}