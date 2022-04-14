function app() {
    let register_Username;
    let register_Password;
    let login_username;
    let login_password;
    let notRegistered;
    let newUser;
    
    alert("Bienvenido al simulador de Login!");
    alert("[Nos encontramos en desarrollo]\n Por ahora deberas registrarte por prompt y luego podras iniciar sesion por el formulario");
    notRegistered = confirm("Todavia no tienes una cuenta, para crear una presione Ok");
    if (notRegistered) {
        signUp();
    }
    else {
        login();
    }

}
app();