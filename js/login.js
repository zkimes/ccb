$( function() {
	$("#login").submit( function() {
		var username, password;
		username = $("#username").val();
		password = $("#password").val();
		console.log(username, password);
		$.ajax({
			type: 'POST',
			url: './php/login.php',
			data: {
				username: username,
				password: password
			}
		}).done( function(data) {
			console.log(data);
			if (data === "success") {

			}
		});
		return false;
	});
});