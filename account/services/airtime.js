function submit(){
    let networkN = document.getElementById("netw");
    const user = {
        token: "tlnzyh7jsmfcxdbiviuehvobta52dgxu9w8mfkok0szpwercar",
        network: networkN.value,
        phone: document.getElementById("phoneNo").value,
        amount: document.getElementById("amt").value
    }
    console.log(user);
}
