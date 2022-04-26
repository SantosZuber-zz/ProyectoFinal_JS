function app() {
    let register_Username;
    let register_Password;
    let confirm_Register_Password
    let login_username;
    let login_password;
    let newUser;
    document.querySelector(".login").style.display = "none";
    signUp();

    document.getElementById("login").onclick = function () {
        registerToLogin();
        login();
    }

    document.getElementById("registrarse").onclick = function () {
        loginToRegister();
    }




    function registerToLogin() {
        document.querySelector(".register").style.display = "none";
        document.querySelector(".login").style.display = "flex";
    }
    function loginToRegister() {
        document.querySelector(".login").style.display = "none";
        document.querySelector(".register").style.display = "flex";
    }

}