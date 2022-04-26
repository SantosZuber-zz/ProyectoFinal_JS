function login() {

    document.getElementById("submit").onclick = function () {
        login_username = document.getElementById("username").value;
        login_password = document.getElementById("password").value;
        //Validacion
        const validateName = users_data.some((user) => user.name == login_username);
        const validatePassword = users_data.some((user) => user.pass == login_password);

        if (validateName && validatePassword) {
            alert("Felicidades " + login_username + " has iniciado sesion exitosamente!")
        }
        else {
            alert("Usuario o contrasena incorrectos")
        }

        return false;
    }
} 