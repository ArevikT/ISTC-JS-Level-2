
var x = document.getElementsByClassName("toggle");
    x.addEventListener("click", myFunction);

 function myFunction(){
    var y = document.getElementById("first");
    if (y.style.display === "none"){
           y.style.display = "block";
    } else {
        y.style.display = "none";

      }
}
