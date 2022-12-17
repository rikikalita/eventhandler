let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('pwd');
let button = document.getElementById('btn');
let emaildiv = document.getElementById('emailMsg');
let passdiv = document.getElementById('passMsg');

emailInput.addEventListener('change',validate1)
passwordInput.addEventListener('change',validate2)

let flag1=true;
function validate1()
{
let email = emailInput.value;
  
    if(email.length <= 3 || !email.includes('@') || !email.includes('.')){
    console.log("Make sure email is more than 3 character and has @ and a.");
    emaildiv.innerText="Make sure email is more than 3 character and has @ and a.";
    emaildiv.style.color="red";
    }

    else{
    emaildiv.innerText="";
    flag1=false;
    }
}


let flag2=true
function validate2()
    {
    let password = passwordInput.value;
    
        if(password.length <= 8){
        console.log("Make sure your password is more than 8 character");
        passdiv.innerText="Make sure your password is more than 8 character";
        passdiv.style.color="red";
        
        }
        else{
        passdiv.innerText="All good to go!";
        passdiv.style.color="green";
        flag2=false;

        }
    }
    
function react()
{
    if(emailInput.value== '' &&passwordInput.value== ''){
        passdiv.innerText="Make sure your password is more than 8 character";
        passdiv.style.color="red";
        emaildiv.innerText="Make sure email is more than 3 character and has @ and a.";
        emaildiv.style.color="red";
        return;
      }
      
      else{
      confirm("Do you want to signing")
      alert("successfull signup!");
      }
}
button.onclick= react;