$(document).ready(function () {

    // Po kliknięciu przycisku
    $("#loadDataBtn").on("click", function () {

        $("#dataTable").css("visibility", "visible");
        $("#dataTable").css("height", "100%");

        // Wywołaj funkcję AJAX
        $.ajax({
            type: "GET", // Metoda żądania
            url: "serwer.php", // Ścieżka do skryptu serwera
            success: function (data) {
                // Po udanym zapytaniu
                $("#dataTable").html(data); // Wstrzyknięcie danych do tabelki
            },
            error: function (error) {
                // W przypadku błędu
                console.error("Błąd podczas ładowania danych:", error);
            }
        });
    });
});
