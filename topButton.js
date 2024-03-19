document.addEventListener("DOMContentLoaded", function() {

let mybutton = document.getElementById("topScrollButton");


document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if(lastKnownScrollPosition > 1000){
        mybutton.style.display = "block";
    } else{
        mybutton.style.display = "none";
    }
  });

  
  mybutton.onclick = function(){topFunction()};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

});