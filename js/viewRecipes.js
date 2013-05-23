$( function() {
		$.ajax({
			type: 'POST',
			url: './php/viewRecipe.php'
		}).done( function(data) {
			//data array:
			//[id, name, summary, ingredients array, directions array]
			//ingredients array & directions array need to be parsed as below so they can be processed as arrays
			console.log(JSON.parse(data[0][3]));
		});
		return false;

});