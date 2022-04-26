function app() {
    let register_Username;
    let register_Password;
    let confirm_Register_Password
    let login_username;
    let login_password;
    let newUser;
    document.querySelector(".login").style.display = "none";
    signUp();
    login();


    document.getElementById("login").onclick = function () {
        registerToLogin();
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


    //DarkMode

    let oscuro = localStorage.getItem("darkmode");

    document.getElementById("darkmode").onclick = function () {
        if (oscuro == 'null') {
            localStorage.setItem("darkmode", true);
            document.body.style.backgroundColor = "#062C30"
        } else if (oscuro == 'true') {
            localStorage.setItem("darkmode", false);
            document.body.style.backgroundColor = "#F5F5F5"
        } else if (oscuro == "false") {
            localStorage.setItem("darkmode", true);
            document.body.style.backgroundColor = "#062C30"
        }
        oscuro = localStorage.getItem("darkmode");
    };

}