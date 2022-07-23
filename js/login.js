const userEmail = document.getElementById('user-email');
const userPass = document.getElementById('user-pass');
document.getElementById('login-submit').addEventListener('click', function(){
    if(userEmail.value == 'sontan.baap@gmail.com' && userPass.value == 'mypassword'){
        // console.log('valid user');
        window.location.href = 'banking.html';
    }
    else
    alert('invalid user');
})