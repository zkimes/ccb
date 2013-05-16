$( function() {
	$("#signUp").submit( function() {
		var username, email, password1, password2, password;
		username = $("#username").val();
		email = $("#email").val();
		password1 = $("#password1").val();
		password2 = $("#password2").val();
		if (password1===password2) {
			password = password1;
		}else {
			password = undefined;
		}
		console.log(username, email, password1, password2, password);
		$.ajax({
			type: 'POST',
			url: './php/signUp.php',
			data: {
				username: username,
				email: email,
				password: password
			}
		}).done( function(data) {
			console.log(data);
		});
		return false;
	});
});