const showPass = () => {
    let x = document.getElementById('floatingPassword');
    if(x.type === 'password'){
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}

const input1 = document.getElementById('floatingInput');
const input2 = document.getElementById('floatingPassword')
const submitbtn = document.getElementById('link');

input1.addEventListener('input', checkFormCompletion);
input2.addEventListener('input', checkFormCompletion);

function checkFormCompletion() {
  if (input1.value !== '' && input2.value !== '') {
    submitbtn.classList.remove('disabled');
  }
}

