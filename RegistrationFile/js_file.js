function myFunction() {
    var frstname = document.getElementById("frstName").value;
    var lastname = document.getElementById("lastName").value
    var country= document.getElementById("country").value;
    var phone = document.getElementById("phone").value;
    if(frstname!= "" || lastname != "" || country != "" || phone ===""){
        document.getElementById("demo").innerHTML +="Frstname:"+ frstname + "<br>";
        document.getElementById("demo").innerHTML += "Lastname:" + lastname + "<br>";
        document.getElementById("demo").innerHTML += "Country:" + country + "<br>";
        document.getElementById("demo").innerHTML += "Phone Number:"+ phone + "<br>";
       }
  }
