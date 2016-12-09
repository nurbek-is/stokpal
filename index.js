// firebase.auth().onAuthStateChanged(function(user) {
//    if (user) {
//      $(".login-cover").hide();
//    } else {
//      alert('You are not loged in');
//      $(".login-cover").show();
//       var dialog = document.querySelector("loginDialog");
//       if (!dialog.showModal) {
//       dialogPolyfill.registerDialog(dialog);
//     }
//     dialog.showModal();
//    }
//  });


// get Elements

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtEmail');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogOut = document.getElementById('btnLogOut');

//Add Login Event
btnLogin.addEventListener ('click', e => {
  // Get Email and pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch (e => console.log (e.message));
});

// Add sign up event
btnSignUp.addEventListener('click', e => {
  // Get Email and pass
  // TODO: Check 4 Real Emails
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // Sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise
        .catch (e => console.log (e.message));
});

//this sign out current authenticated user
btnLogOut.addEventListener('click', e => {
  firebase.auth().signOut();
});

// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log (firebaseUser);
    $("#btnLogOut").show();
  } else {
    console.log ('not logged in');
    $("#btnLogOut").hide();
  }
});
