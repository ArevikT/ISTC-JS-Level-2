function myFunction() {
    var frstname = document.getElementById("frstName").value;
    var lastname = document.getElementById("lastName").value
    var country= document.getElementById("country").value;
    var phone = document.getElementById("phone").value;
    if(frstname!= ""||lastname!= ""||country!= ""||phone ===""){
        document.getElementById("demo1").innerHTML ="Frstname:"+ frstname;
        document.getElementById("demo2").innerHTML = "Lastname:" + lastname;
        document.getElementById("demo3").innerHTML = "Country:" + country;
        document.getElementById("demo4").innerHTML = "Phone Number:"+ phone;
       }
    
  }

//   function myFunction(){
//         var frstname = document.getElementById("frstName").value;
//         var lastname = document.getElementById("lastName").value
//         var country= document.getElementById("country").value;
//         var phone = document.getElementById("phone").value;
//       var tv =[frstname,lastname,country,phone];
        
//       for(var i =0; i <= tv.length; i++){
//         document.getElementById("demo"+i+1).innerHTML = tv[i];
//       }
      
//   }