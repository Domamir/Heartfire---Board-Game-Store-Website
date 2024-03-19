$(document).ready(function(){
    // Funkcja dla ciągłej animacji
    function rotateContinuous() {
        $("#animationImg").animate({ deg: 360 }, {
            duration: 5000, // Czas trwania animacji
            easing: "linear", // Easing dla płynności ruchu
            step: function (now) {
                $(this).css({
                    transform: 'rotate(' + now + 'deg)'
                });
            },
            complete: function () {
                // Usunięcie callbacka complete po zakończeniu animacji ciągłej
                $(this).animate({ deg: 0 }, { duration: 0 });
                rotateContinuous(); // Ponowne wywołanie po zakończeniu animacji
            }
        });
    }

    // Funkcja dla szybkiej animacji po kliknięciu
    function rotateOnClick() {
        $("#animationImg").stop().animate({ deg: 360 }, {
            duration: 500, // Szybka animacja po kliknięciu
            step: function (now) {
                $(this).css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
    }

    // Rozpoczęcie ciągłej animacji po załadowaniu strony
    rotateContinuous();

    // Dodanie obsługi zdarzenia kliknięcia
    $("#animationImg").on("click", function() {
        rotateOnClick();
    });
});