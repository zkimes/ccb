$( function() {
	var url = window.location.toString();
	var indexOf = url.indexOf("#");
	if (indexOf !== -1) {
		var recipeId = url.substring(indexOf+1);
		showRecipe(recipeId);
	}else {
		$.ajax({
			type: 'POST',
			url: './php/searchList.php'
		}).done( function(data) {
			data.forEach( function(a, i) {
				var vars = {
					id: a.id,
					name: a.name,
					summary: a.summary
				};
				$('<div />').attr( {
					'class': 'recipeBlock',
					'data-id': a[0]
				}).html(
					Mustache.to_html("<h3 class='name'><a href='#{{id}}'>{{name}}</a></h3><p class='summary'>{{summary}}</p>", vars)
				).appendTo($("#recipeList"));
			});
			$(".recipeBlock a").click( showRecipe);
		});
		return false;
	}

});

function showRecipe(id) {
	var id = id || $(this).parents('.recipeBlock').data('id');
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
			var vars = {
				name: data[1],
				summary: data[2],
				prepTime: data[3],
				cookTime: data[4],
				ingredients: JSON.parse(data[5]),
				directions: JSON.parse(data[6])
			};
			$("#recipeList").html(
				Mustache.to_html("<h3>{{name}}</h3><p>{{summary}}</p><ul class='ingredients'>{{#ingredients}}<li> {{.}} </li>{{/ingredients}}</ul><ul class='directions'>{{#directions}}<li> {{.}} </li>{{/directions}}</ul>", vars)
			);
	});
}