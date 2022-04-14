// CONDICIONAL DE CUOTAS
function condicionalCuotas(prestamo, cuotas) {
    if (cuotas <= 12) {
        let intereses = 12 * 6;
        let porcentaje = intereses / 100;
        let ganancia = prestamo * porcentaje;
        let totalPagarSinIVA = ganancia + prestamo;
        let cuotasPagar = totalPagarSinIVA / cuotas;
        let IVA = cuotasPagar * 0.21;
        let cuotaTotal = cuotasPagar + IVA;
        let totalPagar = totalPagarSinIVA * 0.21 + totalPagarSinIVA;
        alert(`Monto solicitado: ${prestamo}\nCuotas seleccionadas: ${cuotas}\n${cuotas} cuotas de: ${cuotaTotal.toFixed(2)} (Incluye IVA)\nTotal a devolver: ${totalPagar} (Incluye IVA)`);
    }
    else if ((cuotas >= 13) && (cuotas <= 24)) {
        let intereses = 12 * 8;
        let porcentaje = intereses / 100;
        let ganancia = prestamo * porcentaje;
        let totalPagarSinIVA = ganancia + prestamo;
        let cuotasPagar = totalPagarSinIVA / cuotas;
        let IVA = cuotasPagar * 0.21;
        let cuotaTotal = cuotasPagar + IVA;
        let totalPagar = totalPagarSinIVA * 0.21 + totalPagarSinIVA;
        alert(`Monto solicitado: ${prestamo}\nCuotas seleccionadas: ${cuotas}\n${cuotas} cuotas de: ${cuotaTotal.toFixed(2)} (Incluye IVA)\nTotal a devolver: ${totalPagar} (Incluye IVA)`);
    }
    else if ((cuotas >= 25) && (cuotas <= 36)) {
        let intereses = 12 * 9;
        let porcentaje = intereses / 100;
        let ganancia = prestamo * porcentaje;
        let totalPagarSinIVA = ganancia + prestamo;
        let cuotasPagar = totalPagarSinIVA / cuotas;
        let IVA = cuotasPagar * 0.21;
        let cuotaTotal = cuotasPagar + IVA;
        let totalPagar = totalPagarSinIVA * 0.21 + totalPagarSinIVA;
        alert(`Monto solicitado: ${prestamo}\nCuotas seleccionadas: ${cuotas}\n${cuotas} cuotas de: ${cuotaTotal.toFixed(2)} (Incluye IVA)\nTotal a devolver: ${totalPagar} (Incluye IVA)`);
    }
    else if ((cuotas >= 37) && (cuotas <= 48)) {
        let intereses = 12 * 11;
        let porcentaje = intereses / 100;
        let ganancia = prestamo * porcentaje;
        let totalPagarSinIVA = ganancia + prestamo;
        let cuotasPagar = totalPagarSinIVA / cuotas;
        let IVA = cuotasPagar * 0.21;
        let cuotaTotal = cuotasPagar + IVA;
        let totalPagar = totalPagarSinIVA * 0.21 + totalPagarSinIVA;
        alert(`Monto solicitado: ${prestamo}\nCuotas seleccionadas: ${cuotas}\n${cuotas} cuotas de: ${cuotaTotal.toFixed(2)} (Incluye IVA)\nTotal a devolver: ${totalPagar} (Incluye IVA)`);
    }
    else {
        alert("Error, opcion no valida");
    }
    return;
}
// CONDICIONAL DONDE VALIDA EL SUELDO
function validarSueldo(sueldo) {
    if (sueldo <= 50000) {
        alert("No podemos ofrecerle ningun prestamo.");
    }
    else if ((sueldo >= 50001) && (sueldo <= 100000)) {
        let prestamo = parseInt(prompt(`Podemos ofrecerle hasta $250.000.\nPor favor indique el monto que desea.`));
        if (prestamo <= 250000) {
            let cuotas = parseInt(prompt("Indique la cantidad de cuotas"));
            condicionalCuotas(prestamo, cuotas);
        }
        else {
            alert("No podemos ofrecerle ese monto.");
        }
    }
    else if ((sueldo >= 100001) && (sueldo <= 200000)) {
        let prestamo = parseInt(prompt(`Podemos ofrecerle hasta $600.000.\nPor favor indique el monto que desea.`));
        if (prestamo <= 600000) {
            let cuotas = parseInt(prompt("Indique la cantidad de cuotas"));
            condicionalCuotas(prestamo, cuotas);
        }
        else {
            alert("No podemos ofrecerle ese monto.");
        }
    }
    else if ((sueldo >= 200001) && (sueldo <= 500000)) {
        let prestamo = parseInt(prompt(`Podemos ofrecerle hasta $1.500.000.\nPor favor indique el monto que desea.`));
        if (prestamo <= 1500000) {
            let cuotas = parseInt(prompt("Indique la cantidad de cuotas"));
            condicionalCuotas(prestamo, cuotas);
        }
        else {
            alert("No podemos ofrecerle ese monto.");
        }
    }
    else if (sueldo >= 500001) {
        let prestamo = parseInt(prompt(`Podemos ofrecerle hasta $3.000.000.\nPor favor indique el monto que desea.`));
        if (prestamo <= 3000000) {
            let cuotas = parseInt(prompt("Indique la cantidad de cuotas"));
            condicionalCuotas(prestamo, cuotas);
        }
        else {
            alert("No podemos ofrecerle ese monto.");
        }
    }
    else {
        alert("Sueldo no valido.")
    }
    return;
}




// funcion datos usuario
function Persona(nombre, apellido, dni, telefono, mail) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.telefono = telefono;
    this.mail = mail;
};

let usuario;
let sueldo;
let opcion;
let paso1;

const usuarios = [];
simulador();
function simulador() {
    paso1 = confirm(`Si desea simular un prestamo seleccione OK.\nPor favor completar los siguientes datos.\nPara salir seleccione cancelar`);
    if (paso1) {

        usuario = new Persona(prompt("Indique su nombre"), prompt("Indique su apellido"), parseInt(prompt("Indique su DNI")), parseInt(prompt("Indique su número de teléfono")), prompt("Por favor indique su email"));
        usuarios.push(usuario);

        opcion = confirm(`Hola ${usuario.nombre}.\nDesea continuar con el simulador?`);
        while (opcion) {
            sueldo = parseInt(prompt("Indique su sueldo"));
            validarSueldo(sueldo);
            opcion = confirm(`Hola ${usuario.nombre}.\nDesea continuar con el simulador?`);
        }

        alert(`Hasta luego ${usuario.nombre}!`);
        simulador();
    }
}


console.log(usuarios);