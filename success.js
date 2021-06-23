var urlParams = new URLSearchParams(window.location.search);
var sessionId = urlParams.get('session_id');
var email = urlParams.get('email');
var backEndUrl = 'https://stripe.downloadpdf.org';

if (email){
   document.getElementById("update").innerHTML = email;
}