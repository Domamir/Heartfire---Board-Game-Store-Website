document.addEventListener("DOMContentLoaded", function() {

    function preloadImage(url, callback) {
        var img = new Image();
        img.src = url;
        img.onload = callback;
    }

    // Zmienne z ścieżkami do obrazów
    var imagePaths = [
        "/pictures/banner1.jpg",
        "/pictures/banner2.jpg",
        "/pictures/banner3.jpg",
        "/pictures/banner4.jpg"
    ];

    // Funkcja do przewijania przez tablicę ścieżek obrazów
    function loadImagesSequentially(index) {
        if (index < imagePaths.length) {
            preloadImage(imagePaths[index], function() {
                console.log("Image loaded:", imagePaths[index]);
                // Zastosuj obraz do elementu na stronie, np. do elementu o id "myImage"
                document.getElementById("myImage").src = imagePaths[index];
                // Wywołaj rekurencyjnie dla następnego obrazu
                loadImagesSequentially(index + 1);
            });
        }
    }

    // Rozpocznij ładowanie obrazów od pierwszego indeksu
    loadImagesSequentially(0);

});