
var x = document.getElementsByClassName("toggle");
    x.addEventListener("click", myFunction);

 function myFunction(){
<<<<<<< HEAD
    var y = document.getElementsByClassName("menu");
=======
    var y = document.getElementById("first");
>>>>>>> de9a749fba78f51d7922f44b8a5c0b5dbb585aa3
    if (y.style.display === "none"){
           y.style.display = "block";
    } else {
        y.style.display = "none";

      }
}
