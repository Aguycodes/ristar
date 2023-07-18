const token = 'tlnzyh7jsmfcxdbiviuehvobta52dgxu9w8mfkok0szpwercar';
const network = document.getElementById("netw").value;
const phone = document.getElementById("phoneNo").value;
const amount = document.getElementById("amt").value;

function submitOrder(){
fetch('http://datagifting.com.ng/api/airtime.php?token=' + token + '&network=' + network + '&phone_number=' + phone + '&amount=' + amount)
.then(function(response) {
  if (response.ok) {
    // Request was successful
    return response.text();
  } else {
    // Request failed
    throw new Error('Error: ' + response.status);
  }
})
.then(function(data) {
  window.alert(data);
})
.catch(function(error) {
  window.alert(error);
});

}
