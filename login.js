function validateLogin() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if (username === "weliclene" && password === "weliclene10") {

        window.location.href = "/index.html";
    } else {
        alert("Usuário ou senha incorretos.");

    }
}
