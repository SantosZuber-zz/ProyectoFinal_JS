function app() {
    let register_Username;
    let register_Password;
    let login_username;
    let login_password;
    let newUser;


    document.getElementById("registrarse").onclick = function () {
        alert("Bienvenido al simulador de Login!");
        alert("[Nos encontramos en desarrollo]\n Por ahora deberas registrarte por prompt y luego podras iniciar sesion por el formulario");

        signUp();
        return false;
    }

        

}