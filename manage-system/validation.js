const Registered = document.getElementById('Registered-form');
const logins = document.getElementById('Login');

const txtfirstname = document.getElementById('txtfirstname');
const lastname = document.getElementById('lastname');

const email = document.getElementById('email');
const email1 = document.getElementById('email1');

const pass = document.getElementById('pass');
const pass_login = document.getElementById('pass1');
const checkpass = document.getElementById('checkpass');

const date = document.getElementById('date');

const txtNationality = document.getElementById('txtNationality');


logins.addEventListener('submit',(event)=>
{
    event.preventDefault();
    validatelogin();
},false);

function validatelogin()
{
    const emailValue1 = email1.value.trim();
    const pass_log = pass_login.value.trim();
    //   username
    if(emailValue1 === "")
    {
        setError(email1 ,"username cannot be empty");
        return false;
    }
    else if(!alphabetforusername(emailValue1))
    {
        setError(email1 , "format not valid");
        return false;
    }
    else
    {
        setSucess(email1);
    }

    // password login
    if(pass_log === "")
    {
        setError(pass_login,"password cannot be empty");
        return false;
    }
    else if(pass_log.length < 8)
    {
        setError(pass_login,"password must more than 8 characters !!!");
        return false;
    }
    else if(pass_log.length > 20)
    {
        setError(pass_login,"password less than 20 characters !!!");
        return false;
    }
    else if(!pass_log.includes("1") && !pass_log.includes("2") && !pass_log.includes("3") && !pass_log.includes("4")
            && !pass_log.includes("5") && !pass_log.includes("6") && !pass_log.includes("7") && !pass_log.includes("8")
            && !pass_log.includes("9") && !pass_log.includes("0"))
    {
        setError(pass_login,"at least one number and one capital characters");
        return false;
    }
    else if(!pass_log.includes("A") && !pass_log.includes("B") && !pass_log.includes("C") && !pass_log.includes("D")
            && !pass_log.includes("E") && !pass_log.includes("F") && !pass_log.includes("G") && !pass_log.includes("H")
            && !pass_log.includes("I") && !pass_log.includes("J") && !pass_log.includes("K") && !pass_log.includes("L")
            && !pass_log.includes("M") && !pass_log.includes("N") && !pass_log.includes("O") && !pass_log.includes("P")
            && !pass_log.includes("Q") && !pass_log.includes("R") && !pass_log.includes("S") && !pass_log.includes("T")
            && !pass_log.includes("U") && !pass_log.includes("V") && !pass_log.includes("W") && !pass_log.includes("X")
            && !pass_log.includes("Y") && !pass_log.includes("Z") )
    {
        setError(pass_login,"at least one number and one capital characters");
        return false;
    }
    else
    {
        setSucess(pass_login);
    }
    $(".lds-ring ").css("display","flex");
    $(".bggg").css("display","block");
    
    setTimeout(function()
    {
        if(pass_log != "" && emailValue1 != "")
        {
            window.location.href = 'index.html';
        }
    },5000);
}

Registered.addEventListener('submit',(event)=>{
        event.preventDefault();
        validateInput();
    },false);

function validateInput()
{
    const fnValue = txtfirstname.value.trim();
    const lnValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const checkpassValue = checkpass.value.trim();
    const dateValue = date.value.trim();
    const txtNationalityval = txtNationality.value.trim();
    // first name
    if(fnValue === "")
    {
        setError(txtfirstname , "firstname cannot be empty");
        return false;
    }
    else if(!isNaN(fnValue))
    {
        setError(txtfirstname , "only characters");
        return false;
    }
    else if(!letterText(fnValue))
    {
        setError(txtfirstname , "format not valid");
        return false;
    }
    else if(!alphabet(fnValue))
    {
        setError(txtfirstname , "format not valid");
        return false;
    }
    else
    {
        setSucess(txtfirstname);
    }
    // ---------------------------------------------

    // last name
    if(lnValue === "")
    {
        setError(lastname , "lastname cannot be empty");
        return false;
    }
    else if(!isNaN(lnValue))
    {
        setError(lastname , "only characters");
        return false;
    }
    else if(!letterText(lnValue))
    {
        setError(lastname , "format not valid");
        return false;
    }
    else if(!alphabet(lnValue))
    {
        setError(lastname , "format not valid");
        return false;
    }
    else
    {
        setSucess(lastname);
    }
    // ==============================================

    // email
    if(emailValue === "")
    {
        setError(email ,"email cannot be empty");
        return false;
    }
    else if(!emailValue.includes("@"))
    {
        setError(email ,"email must be add @");
        return false;
    }
    else if(!(emailValue.endsWith(".com") || emailValue.endsWith(".co.id") || emailValue.endsWith(".ac.id")))
    {
        setError(email ,"endsWith (.com) or (.co.id) or (.ac.id)");
        return false;
    }
    else if(emailValue.includes("@."))
    {
        setError(email ,"email not valid");
        return false;
    }
    else if(emailValue.includes(".@"))
    {
        setError(email ,"email not valid");
        return false;
    }
    else if(emailValue.includes(".."))
    {
        setError(email ,"email not valid");
        return false;
    }
    else
    {
        setSucess(email);
    }
    // ================================================

    // password
    if(passValue === "")
    {
        setError(pass,"password cannot be empty");
        return false;
    }
    else if(passValue.length < 8)
    {
        setError(pass,"password must more than 8 characters !!!");
        return false;
    }
    else if(passValue.length > 20)
    {
        setError(pass,"password less than 20 characters !!!");
        return false;
    }
    else if(!passValue.includes("1") && !passValue.includes("2") && !passValue.includes("3") && !passValue.includes("4")
            && !passValue.includes("5") && !passValue.includes("6") && !passValue.includes("7") && !passValue.includes("8")
            && !passValue.includes("9") && !passValue.includes("0"))
    {
        setError(pass,"at least one number and one capital characters");
        return false;
    }
    else if(!passValue.includes("A") && !passValue.includes("B") && !passValue.includes("C") && !passValue.includes("D")
            && !passValue.includes("E") && !passValue.includes("F") && !passValue.includes("G") && !passValue.includes("H")
            && !passValue.includes("I") && !passValue.includes("J") && !passValue.includes("K") && !passValue.includes("L")
            && !passValue.includes("M") && !passValue.includes("N") && !passValue.includes("O") && !passValue.includes("P")
            && !passValue.includes("Q") && !passValue.includes("R") && !passValue.includes("S") && !passValue.includes("T")
            && !passValue.includes("U") && !passValue.includes("V") && !passValue.includes("W") && !passValue.includes("X")
            && !passValue.includes("Y") && !passValue.includes("Z") )
    {
        setError(pass,"at least one number and one capital characters");
        return false;
    }
    else
    {
        setSucess(pass);
    }

    // ==================================================

    // checkpass
    if(checkpassValue === "")
    {
        setError(checkpass,"confirm password cannot be empty");
        return false;
    }
    else if(checkpassValue != passValue)
    {
        setError(checkpass,"password not match");
        return false;
    }
    else 
    {
        setSucess(checkpass);
    }
    // ===================================================

    // date
    if(dateValue === "")
    {
        setError(date,"confirm password cannot be empty");
        return false;
    }
    else
    {
        setSucess(date);
    }
    //  nationality
    if(txtNationalityval === "")
    {
        setError(txtNationality , "Nationality cannot be empty");
        return false;
    }
    else if(!isNaN(txtNationalityval))
    {
        setError(txtNationality , "only characters not number");
        return false;
    }
    else if(!letterText(txtNationalityval))
    {
        setError(txtNationality , "only characters and spaces");
        return false;
    }
    else
    {
        setSucess(txtNationality);
    }

    // check box
    let valid = false;
    let id = randomid(1000 , 9999);
   
    if(document.getElementById('checkbox-terms').checked)
    {
        valid = true;
    }
    
    if(valid === true)
    {
        alert("your account succesfull created " + fnValue + " " + lnValue + " and your ID number is: " + "LF-" + id );
        alert("click ok and please wait...")
        setTimeout(function()
        {

            window.location.href = 'login.html';
          
        },3000);
    }
    else
    {
        alert("please checked box");
        return false;
    }

}

function setError(input , messege ) 
{
    const inputfield = input.parentElement;
    const small = inputfield.querySelector("small");
    small.innerText = messege;
    inputfield.className = 'input-field errors'

}

function setSucess(input)
{
    const inputfield = input.parentElement;

    inputfield.className = 'input-field success '

}

const hide1 = document.querySelector("#hide1");
const hide2 = document.querySelector("#hide2");
const passid = document.querySelector(".passid");
$(".fa-eye , .fa-eye-slash").click(function(event)
{
    event.preventDefault();
   if(passid.type === 'password')
   {
        passid.type = "text";
        hide1.style.display = "block";
        hide2.style.display = "none";
   }
   else
   {
        passid.type = "password";
        hide1.style.display = "none";
        hide2.style.display = "block";
   }
});


function letterText(string) 
{
    string = string.toLowerCase()

    let valid = true;
    Array.from(string).forEach((event) => 
    {
        if(event < 'a' || event > 'z') valid=false
        if(event == ' ') valid = true
    })
    return valid
}

function alphabet(string)
{
    if(typeof(string)!=='string')
    {
        return false;
    }
    for(var i=0;i<string.length;i++)
    {
        if(string.charCodeAt(i)>127)
        {
            return false;
        }
        else if(string.charCodeAt(i) > 32 && string.charCodeAt(i) < 65 )
        {
            return false;
        }
        else if(string.charCodeAt(i) > 90 && string.charCodeAt(i) < 97 )
        {
            return false;
        }
        else if(string.charCodeAt(i) > 122 && string.charCodeAt(i) < 127 )
        {
            return false;
        }
    }
    return true;
}

function alphabetforusername(string)
{
    if(typeof(string)!=='string')
    {
        return false;
    }
    for(var i=0;i<string.length;i++)
    {
        if(string.charCodeAt(i)>127)
        {
            return false;
        }
        else if(string.charCodeAt(i) > 31 && string.charCodeAt(i) < 48 )
        {
            return false;
        }
        else if(string.charCodeAt(i) > 57 && string.charCodeAt(i) < 65 )
        {
            return false;
        }
        else if(string.charCodeAt(i) > 90 && string.charCodeAt(i) < 97 )
        {
            return false;
        }
        else if(string.charCodeAt(i) > 122 && string.charCodeAt(i) < 127 )
        {
            return false;
        }
    }
    return true;
}

const randomid = function (start , range)
{
    let rand = Math.floor((Math.random() * start) + start);

    do
    {
        rand = Math.floor((Math.random() * start) + start);
    }while(rand > range || rand === rand-1);

    return rand;
}

$('.passid').on('keyup', function () 
{
    if ($('.passid').val() == "") 
    {
      $('.eye').css("display","none");
    } 
    else 
    {
        $('.eye').css("display","block");
    }
});