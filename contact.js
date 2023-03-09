let email = document.getElementById("email");
let no = document.getElementById("number");
function checkno() {
    if(!(/^\d+/.test(no.value))){
        // console.log(/[0-9]+/.test(no))
        alert("Wrong number");
        return false;
    }
    if(no.length!=10){
        alert("Invalid phone number length");
    }
    // if(!(/^\w+[.com|.in|.org]$/.test(email.value))){
    //     alert("Wrong email");
    //     return false;
    // }
}
function checkemail() {

    var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  
    if (email.value.match(validRegex)) {
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }
