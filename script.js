
function validate() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (
      
      username == "" ||
      password == ""
    ) {
      alert("Please fill all the fields");
      return false;
    } 
    else{
        alert("Your form has been submitted");
            return true;
      
    }
    }
 