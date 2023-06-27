const showPass = () => {
    let x = document.getElementById('passw');
    if(x.type === 'password'){
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}