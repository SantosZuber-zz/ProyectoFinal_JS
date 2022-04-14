function app() {
    let register_Username;
    let register_Password;
    let login_username;
    let login_password;
    let notRegistered;
    let newUser;
    
    alert("Bienvenido al simulador de Login!");
    notRegistered = confirm("Todavia no tienes una cuenta, para crear una presione Ok");
    if (notRegistered) {
        signUp();
    }
    else {
        login();
    }

}