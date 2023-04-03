function myfun(){
    var user=document.getElementById("name");
    if(user.value==""){
         document.getElementById("d1").innerHTML=
         "* please Enter your valid username *";
         user.focus();
         user.style.border="2px solid #ff0000";
         return false;
    }
   
var pass=document.getElementById("pass");
    if(pass.value==""){
         document.getElementById("d2").innerHTML=
         "*Please Enter your  password *";
         pass.focus();
         pass.style.border="2px solid #ff0000";
         return false;
    }
    else if(pass.value.length <8){
         document.getElementById("d2").innerHTML=
         "* The password length valid < 8 *";
         pass.focus();
         pass.style.border="2px solid #ff0000";
         return false;
    }
    else(pass.value.length>8)
    {
         alert("Your Form has been submitted  ")
         return true;
    }

    


}
