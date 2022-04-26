function signUp() {

    document.getElementById("login_submit").onclick = function () {
        register_Username = document.getElementById("username").value;
        register_Password = document.getElementById("password").value;
        confirm_Register_Password = document.getElementById("confirm_password").value;

        if (register_Password === confirm_Register_Password) {
            if (register_Username.length > 1 && register_Password.length > 1) {
                newUser = new User(register_Username, register_Password);
                pushUserData(newUser);

                //Recorriendo y mostrando objeto NewUser y array de objetos users_data en consola.
                console.log("El nuevo usuario creado es:");
                for (let prop in newUser) {
                    console.log(newUser[prop]);
                }
                console.log("La base de datos de los usuarios registrados es: ");
                users_data.forEach((bloque) => console.log(bloque));

            } else {
                document.getElementById("warning").innerHTML = "Su usuario y contrasena deben tener al menos 1 caracter";
            }
        } else {
            document.getElementById("warning").innerHTML = "Sus contrasenas no coinciden"
        }



        return false;
    };


}