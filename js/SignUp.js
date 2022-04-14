function signUp() {
    alert("Registrarse");
    register_Username = prompt("Ingrese un nombre de usuario:");
    register_Password = prompt("Ingrese una contrasena:");

    while (register_Username.length < 1 || register_Password.length < 1) {
        alert("Debes ingresar por lo menos un caracter");
        register_Username = prompt("Ingrese un nombre de usuario:");
        register_Password = prompt("Ingrese una contrasena:");
    }

    newUser = new User(register_Username, register_Password);
    
    pushUserData(newUser);

    alert("Felicidades, has sido registrado. Ahora debes iniciar sesion en el DOM con tu cuenta")
    login();

    //Recorriendo y mostrando objeto NewUser y array de objetos users_data en consola.
    console.log("El nuevo usuario creado es:");
    for (let prop in newUser) {
        console.log(newUser[prop]);
    }
    console.log("La base de datos de los usuarios registrados es: ");
    users_data.forEach((bloque) => console.log(bloque));
}