var pat=/^([a-zA-Z0-9\.]+)+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/;
var b=/^[a-zA-Z]$/;
var c="name";
var e="fname";
a.length()=d;

function emailvalidate(a){
      
    if(a.value.match(pat) && a!=""){
            return true;
        }

        else{

            alert("Please check your email again");
        }
    }


    function namevalidate(a){
        
        if(a.value.match(c) || a.value.match(e) ||a.value!=(pat))
        {
            alert('Wrong Credentials Entered!! Please check the Criteria')
            location.replace("file:///C:/Users/GM/Desktop/desktop/desk/bootcamp/project/project/signup.html#");
            
        
        }

        
        else{
            
            location.replace("file:///C:/Users/GM/Desktop/desktop/desk/bootcamp/project/project/home.html");
           
        }
    }


    /*function CheckPassword(inputtxt) 
    { 
        
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(inputtxt.value.match(passw)) 
    { 
        location.replace("file:///C:/Users/GM/Desktop/desktop/desk/bootcamp/project/project/home.html");
    return true;
    }
    else
    { 
    alert('Wrong Credentials Entered!! Please check the Criteria');
        return false;

        }
    }*/