$( function() {
	
	var myArray = [];

	$('#search').focus(function(){
		$('#searchResults').show();
	});

	$('#search').focusout(function(){
		//$('#searchResults');
	});

	var getArray = function(){
		//e.preventDefault();

		var id = 10;
		$.ajax({
			type: 'POST',
			url: './php/searchList.php'
		}).done( function(data) {
			myArray = data;
			// console.log(JSON.parse(data[3]));
			// var vars = {
			// 	name: data[1],
			// 	summary: data[2],
			// 	ingredients: JSON.parse(data[3]),
			// 	directions: JSON.parse(data[4])
			// };
			// $("#container").html(Mustache.to_html("<h3>{{name}}</h3><p>{{summary}}</p><ul class='ingredients'>{{#ingredients}}<li> {{.}} </li>{{/ingredients}}</ul><ul class='directions'>{{#directions}}<li> {{.}} </li>{{/directions}}</ul>", vars)
			// );
		});

	}

	getArray();
	var $resultsList = $("#searchResults");



	$('#search').on("keypress", function(){
		var query = $(this).val().toLowerCase();
		$resultsList.empty();
		// console.log(myArray[3]);

		var len = myArray.length;
		var i = 0;

		for (i = 0; i < len; i++){
			if (myArray[i].name.toLowerCase().indexOf(query) !== -1){
				$resultsList.append("<li><a href='viewRecipes.html#" + myArray[i].id + " '>" + myArray[i].name + "</a></li>");
			}
		}		
	});

	$("#searchForm").submit( function() {
		return false;
	});

});