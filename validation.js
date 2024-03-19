$(document).ready(function () {
    document.getElementById("contactSubmit").addEventListener("click", validateContactForm);
    document.getElementById("loginSubmit").addEventListener("click", validateLoginForm);


    function validateContactForm() {
        // Pobierz wartości pól formularza
        var email = document.getElementById("emailAdress").value;
        var name = document.getElementById("contactName").value;
        var message = document.getElementById("contactMessage").value;

        if (!email || !name || !message) {
            alert("Wszystkie pola są wymagane");
            return false;
        }

        if (!isNaN(name)) {
            alert("Imie i nazwisko nie mogą zawierać liczb!");
            return false;
        }

        if (message.length > 200) {
            alert("Tekst nie może mieć więcej niż 200 słów.");
            return false;
        } 

        // Wysłanie formularza
        alert("Formularz kontaktowy został wysłany!");
    }

    function validateLoginForm() {
        // Pobierz wartości pól formularza
        var loginEmail = document.getElementById("loginEmail").value;
        var loginPassword = document.getElementById("loginPassword").value;

        if (!loginEmail || !loginPassword) {
            alert("Wszystkie pola są wymagane");
            return false;
        }


        // Wysłanie formularza
        alert("Formularz logowania został wysłany!");
    }
});