function checkInput() {
    const number = document.getElementById("phoneNo");
    const pinP = document.getElementById("pin");
    const btn = document.getElementById("submitBtn");
    
    if (number.value.trim() !== '' && pinP.value.trim() !== '') {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}