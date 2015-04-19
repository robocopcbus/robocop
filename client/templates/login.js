Template.login.events({
	'submit #loginForm': function (event, t){
		event.preventDefault();

	    var email = trimInput($('#email').val().toLowerCase()),
	          password = $('#password').val();

	    if (isNotEmpty(email) && isEmail(email) && isNotEmpty(password) && isValidPassword(password)) {

	      Meteor.loginWithPassword(email, password, function(err) {
	        if (err) {
	          console.log('These credentials are not valid.');
	        } else {
	          console.log('Welcome back Meteorite!');
	        }
	      });

	    }
	    return false;
	  },
	});