$( function() {
	$(window).on('hashchange', function() {
		showRecipe(window.location.hash.replace('#', ''));
	});
	if (window.location.hash) {
		recipeId = window.location.hash.replace('#', '');
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
					'data-id': a.id
				}).html(
					Mustache.to_html("<h3 class='name'><a href='#{{id}}'>{{name}}</a></h3><p class='summary'>{{summary}}</p>", vars)
				).appendTo($("#recipeList"));
			});
			$(".recipeBlock a").click( showRecipe);
		});
		
	}

});

function showRecipe(id) {
	var id = Number(id) ? id : $(this).parents('.recipeBlock').data('id');
	$.ajax({
			type: 'POST',
			url: './php/viewRecipe.php',
			data: {
				id: id
			}
		}).done( function(data) {
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