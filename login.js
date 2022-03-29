
  
   $(document).ready(function(){  
    
    if(localStorage.getItem("token"))
    {
      window.location.href = "index.html";
  
    }
  })
  
 //----------------------------------------gLogin starts----------------------------- 
  function gLogin() {
       console.log("login pressed");
       
       var gUserName =$("#lName").val();
       var gPassword =$("#lPwd").val();
       if(gUserName && gPassword)
       { 
        //document.getElementById("welcome").style.display="none";
        getAccess(gUserName,gPassword)
       console.log("login suss "+ gUserName+" passowed= "+gPassword);
      }
    else{
    alert("Enter details");
    }}

    //------------------------------------------gLogin End----------------------------- 
   
    
 function getAccess(zUserName,zPassword){


localStorage.setItem("token",zUserName);


console.log("password is="+zPassword);
document.location.reload()

    }
     //---------------------------getAccess ends ----------------------


