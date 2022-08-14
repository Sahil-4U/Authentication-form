const DB_USERS = [];

const resetSingupFields = () => {
    document.getElementById('singup-first-name').value = '';
    document.getElementById('singup-last-name').value = '';
    document.getElementById('singup-email').value= '';
    document.getElementById('singup-phone-number').value = '';
    document.getElementById('singup-password').value = '';
}

const resetLoginFields = () => {
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}


const singup = () => {
    let firstName =document.getElementById('singup-first-name').value
    let lastName = document.getElementById('singup-last-name').value
    let email =    document.getElementById('singup-email').value
    let phone =    document.getElementById('singup-phone-number').value
    let password = document.getElementById('singup-password').value
    let singupAlert = document.getElementById('singup-alert');

 let userDetails = {
    firstName,
    lastName,
    email,
    phone,
    password
 } 
 

 DB_USERS.push(userDetails);
 singupAlert.style.display = "block";
 resetSingupFields();
}

const login = () => {
    let enterdEmail = document.getElementById('login-email').value;
    let enterdpassword = document.getElementById('login-password').value;
    let loginSuccessAlert = document.getElementById('login-success-alert');
    let loginFailureAlert = document.getElementById('login-failure-alert');

    let currentUser = DB_USERS.find((element) => element.email === enterdEmail && element.password === enterdpassword);
    if(currentUser)
    {
        loginSuccessAlert.style.display = "block";
        loginFailureAlert.style.display = "none";
    }
    else 
    {
        loginFailureAlert.style.display = "block";
        loginSuccessAlert.style.display = "none";
    }

    resetLoginFields();
}
