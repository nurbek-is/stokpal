firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
     $(".login-cover").hide();
   } else {
     alert('You are not loged in');
     $(".login-cover").show();
      var dialog = document.querySelector("loginDialog");
      if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
   }
 });
