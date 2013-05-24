$( function() {
		$.ajax({
			type: 'POST',
			url: './php/recipeList.php'
		}).done( function(data) {
			console.log(data);
			data.forEach( function(a, i) {
				console.log(a);
				var vars = {
					id: a[0],
					name: a[1],
					summary: a[2]
				};
				$('<div />').attr( {
					'class': 'recipeBlock',
					'data-id': a[0]
				}).html(
					Mustache.to_html("<h3 class='name'><a href='#{{id}}'>{{name}}</a></h3><p class='summary'>{{summary}}</p>", vars)
				).appendTo($("#container"));
			});
			$(".recipeBlock a").click( showRecipe);
		});
		return false;

});

function showRecipe() {
	var id = $(this).parents('.recipeBlock').data('id');
	$.ajax({
			type: 'POST',
			url: './php/viewRecipe.php',
			data: {
				id: id
			}
		}).done( function(data) {
			//data array:
			//[id, name, summary, ingredients array, directions array]
			//ingredients array & directions array need to be parsed as below so they can be processed as arrays
			console.log(data);
			console.log(JSON.parse(data[3]));
			var vars = {
				name: data[1],
				summary: data[2],
				ingredients: JSON.parse(data[3]),
				directions: JSON.parse(data[4])
			};
			$("#container").html(Mustache.to_html("<h3>{{name}}</h3><p>{{summary}}</p><ul class='ingredients'>{{#ingredients}}<li> {{.}} </li>{{/ingredients}}</ul><ul class='directions'>{{#directions}}<li> {{.}} </li>{{/directions}}</ul>", vars)
			);
		});
	//$("#container").html( )
}