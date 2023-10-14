function validate()
  {
    let x = document.forms["myform"]["uname"].value;
    let y = document.forms["myform"]["emailid"].value;
    let z = document.forms["myform"]["Password"].value;
    let A = document.forms["myform"]["rePassword"].value;
    let u = document.forms["myform"]["mobileno"].value;

    if ( x =="" ){
      alert("please enter a name");
      return false;
    }
      else if ( y =="" ) {
        alert("please enter a mailid");
        return false; 
      }
      else if (z == ""){
        alert("please enter a password");
        return false;
      }
      else if (A ==""){
        alert("please enter a re enter password");
        return false;
      }
      else if (u ==""){
        alert("please enter a moblieno");
        return false;
      }
    else{
        return true;
    }
  }
  
  let x = document.getElementById("login");
  let y = document.getElementById("signup");
  let z = document.getElementById("btn");

  function signup(){
    x.style.left="-450px";
    y.style.left="50px";
    z.style.left="90px";
  }
  function login(){
    x.style.left="50px";
    y.style.left="500px";
    z.style.left="0px";
  }
  function jai1(){
    window.alert("hi client");
    document.getElementById("form2").style.display="block";
  }
  function login1(){
  let K = document.forms["lform"]["uname"].value;
  let passwordq = document.forms["lform"]["passwordq"].value;
   
   
    if (K == 999 ){
      
           alert("login sucess");
           return false;
    }
   
    else {
      alert("please check username and passowrd");
      return true;
    }
   }
