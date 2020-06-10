function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 3) {
        text = "Proszę podaj swoje imię";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Proszę podaj swój email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 10) {
        text = "Proszę rozwiń swoją wiadomość, żebym lepiej mogła ją zrozumieć";
        error_message.innerHTML = text;
        return false;
    }
    alert("Dziękuję za wiadomośc. Życzę miłego dnia :3");
    return true;
}