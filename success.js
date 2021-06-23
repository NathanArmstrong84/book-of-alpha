var urlParams = new URLSearchParams(window.location.search);
var sessionId = urlParams.get('session_id');
var email = urlParams.get('email');
var backEndUrl = 'https://stripe.downloadpdf.org';

console.log(email)

console.log("email")

if (email){
 // document.querySelector('pre').textContent = email;
  document.getElementById("update").innerHTML = email;
}
// if (sessionId) {
//   fetch(backEndUrl+'/checkout-session?sessionId=' + sessionId)
//     .then(function (result) {
//       return result.json();
//     })
//     .then(function (session) {
//       console.log(session)
//       var sessionJSON = JSON.stringify(session, null, 2);
//       document.querySelector('pre').textContent = sessionJSON;
//     })
//     .catch(function (err) {
//       console.log('Error when fetching Checkout session', err);
//     });
// }
