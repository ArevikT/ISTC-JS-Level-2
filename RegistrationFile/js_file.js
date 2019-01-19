
function myFunction() {
    var frstname = document.getElementById("frstName").value;
    var lastname = document.getElementById("lastName").value
    var country= document.getElementById("country").value;
    var age = document.getElementById("age").value;
    if(frstname!= "" || lastname != "" || country != "" || phone ===""){
        document.getElementById("demo").innerHTML +="Frstname:"+ frstname + "<br>";
        document.getElementById("demo").innerHTML += "Lastname:" + lastname + "<br>";
        document.getElementById("demo").innerHTML += "Country:" + country + "<br>";
        document.getElementById("demo").innerHTML += "Age:"+ age ;
       }
         var obj = {
           name: frstname,
           age: age
         };
        console.log(obj);
        var myJsonObj = JSON.stringify(obj);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                 console.log(data);
            }
          };
           xhttp.open("POST", "http://rest.learncode.academy/api/learncode/friends", true);
            xhttp.setRequestHeader("Content-type", "application/JSON");
            xhttp.send(myJsonObj);
           console.log(myJsonObj);
    
           

        
  }
  

