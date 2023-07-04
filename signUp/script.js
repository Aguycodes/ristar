//show password
const showPass = () => {
    let x = document.getElementById('floatingPassword');
    if(x.type === 'password'){
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}

//form validation
const input1 = document.getElementById('floatingInput');
const input2 = document.getElementById('floatingEmail');
const input3 = document.getElementById('floatingPassword');
const input4 = document.getElementById('check');
const submitbtn = document.getElementById('link');

input1.addEventListener('input', checkFormCompletion);
input2.addEventListener('input', checkFormCompletion);
input3.addEventListener('input', checkFormCompletion);
input4.addEventListener('change', checkFormCompletion);

function checkFormCompletion() {
  if (input1.value !== '' && input2.value !== '' && input3.value !== '' && input4 === 'checked') {
    submitbtn.classList.remove('disabled');
  } else {
    submitbtn.classList.add('disabled');
  }
}