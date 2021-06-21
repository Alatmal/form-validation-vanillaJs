const inputName= document.getElementById('first-name');
const lastName= document.querySelector('#last-name');
const emailAddress= document.querySelector('#email-address');
const passwordInput= document.querySelector('#password');
const form= document.querySelector('.input-container');
const emailRgx= /\w+\@\w+\.com/;

form.addEventListener('submit',(e)=>{
    let errors= 0;
    if(inputName.value==='' || inputName === null){
        errors++;
        inputName.style.backgroundColor='lightcoral';
        inputName.style.borderBottomColor= 'red';
        inputName.style.color='red';
        inputName.placeholder='Name cannot be empty';
    }
    if(lastName.value===''|| lastName ===null){
        errors++;
        lastName.style.backgroundColor='lightcoral';
        lastName.style.borderBottomColor= 'red';
        lastName.style.color='red';
        lastName.placeholder='Last Name cannot be empty';
    }
    if(!emailRgx.test(emailAddress.value)|| emailAddress.value===''){
        errors++;
        emailAddress.style.backgroundColor='lightcoral';
        emailAddress.style.borderBottomColor= 'red';
        emailAddress.style.color='red';
        emailAddress.value= '';
        emailAddress.placeholder='Looks like this is not an email';
    }
    if(passwordInput.value.length<=7){
        errors++;
        passwordInput.style.backgroundColor='lightcoral';
        passwordInput.style.borderBottomColor= 'red';
        passwordInput.style.color='red';
        passwordInput.value='';
        passwordInput.placeholder='Please input more than 7 characters';
    }
    if(errors>0){
        e.preventDefault();
    }
})



