// funcion datos usuario
function Persona(nombre, apellido, dni, telefono, mail) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.telefono = telefono;
    this.mail = mail;
};
let paso1 = prompt(`Si desea simular un prestamo aprete enter.\nPor favor completar los siguientes datos.\nPara salir escribir ESC`)
let usuario = new Persona(prompt("Indique su nombre"), prompt("Indique su apellido"), parseInt(prompt("Indique su DNI")), parseInt(prompt("Indique su número de teléfono")), prompt("Por favor indique su email"));
const usuarios = [];
while (paso1 != "ESC") {
    usuarios.push(usuario);
    let opcion = prompt(`Hola ${usuario.nombre}.\n1 para continuar con el simulador\n2 Salir`);
    if (opcion == 1) {
        while (opcion != "2") {
            let sueldo = parseInt(prompt("Indique su sueldo"));
            validarSueldo(sueldo);
            opcion = prompt(`${usuario.nombre}.\nOpcion 1 si desea simular otro prestamo\nOpcion 2 Salir`);
        }
        alert(`Hasta luego ${usuario.nombre}!`);
    }
    else {
        alert(`Hasta luego ${usuario.nombre}!`);
    };
    paso1 = prompt(`Si desea simular un prestamo aprete enter.\nPor favor completar los siguientes datos.\nPara salir escribir ESC`)
    usuario = new Persona(prompt("Indique su nombre"), prompt("Indique su apellido"), parseInt(prompt("Indique su DNI")), parseInt(prompt("Indique su número de teléfono")), prompt("Por favor indique su email"));
};
console.log(usuarios);