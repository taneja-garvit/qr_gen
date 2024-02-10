let qrtext = document.getElementById("qrtext");
let qrbox = document.getElementById("qrbox");
let qrimg = document.getElementById("qrimg");

function qrgenerate(){
qrimg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value
}