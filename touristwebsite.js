function validate() {
    
    var username=document.getElementById('username').value;
    var numberid=document.getElementById('numberid').value;
    var emailid=document.getElementById('emailid').value;
    var emai=document.getElementById('email').value;
        if(username==""){
            document.getElementById('error').innerHTML="*Please Fill Name";
          
            return false;
        }
        if(username.length<3){
            document.getElementById('error').innerHTML="username must be greater than 3 characters";
           
            return false;
        }
        if(username.length>20){
            document.getElementById('error').innerHTML="username must be less than than 20 characters";
            return false;
        }
        if(!isNaN(username)){
            document.getElementById('error').innerHTML="username must be characters";
             return false;
        }
        
        if(numberid.length!=10){
            document.getElementById('numbererror').innerHTML="Mobile number must be 10 digits and not allows characters";
            return false;
    
        } if(isNaN(numberid)){
            document.getElementById('numbererror').innerHTML="Mobile number allows only numbers not characters";
            return false;
        }
        if(emailid ==""){
            document.getElementById('emailerror').innerHTML="please fill the email id";
            return false;
        }
        if(emai ==""){
            document.getElementById('emailerror1').innerHTML="please fill the Loved Destination";
            return false;
        }
        if(emailid.indexOf('@') <= 0){
            document.getElementById('emailerror').innerHTML="please fill the email id in the proper format @ ";
            return false;
        } 
        
    
        }
    