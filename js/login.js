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
			if (data[1] === "success") {
				localStorage["userId"] = data[2];
				console.log(localStorage["userId"])
			}
		});
		return false;
	});
});