
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
        console.log(myJsonObj);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);

                 console.log(data.id);
            }
          };

            
           xhttp.open("POST", "http://rest.learncode.academy/api/learncode/friends", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(myJsonObj);
           console.log(myJsonObj, "myjsonobject");
          
          
    //     fetch('http://rest.learncode.academy/api/learncode/friends', {
    //      method: "POST",
    //      headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(obj),
    // })
    // .then(response => response.json()) // response.json() returns a promise
    // .then((response) => {
    //   console.log("You saved this item", response); //returns the new item along with its ID
    // })

        }
