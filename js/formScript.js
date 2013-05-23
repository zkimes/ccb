$( function() {
	var newIngredientItem = $("<input />").attr({
		"type": "text",
		"name": "ingredients"

	});
	var newDirectionItem = $("<input />").attr({
		"type": "text",
		"name": "directions"
	});

	$("#nxtIngredient").click( function() {
		newIngredientItem.clone().insertBefore($(this));
	});
	$("#nxtDirection").click( function() {
		newDirectionItem.clone().insertBefore($(this));
	});

	$("#recipeForm").submit( function() {
		var ingredients = [],
			directions = [],
			name = $("#name").val(),
			summary = $("#summary").val();
		$("input[name='ingredients']").each( function() {
			ingredients.push($(this).val());
		});
		$("input[name='directions']").each( function() {
			directions.push($(this).val());
		});
		ingredients = JSON.stringify(ingredients);
		directions = JSON.stringify(directions);
		$.ajax({
			type: 'POST',
			url: './php/submitRecipe.php',
			data: {
				userid: localStorage["userId"],
				name: name,
				summary: summary,
				ingredients: ingredients,
				directions: directions
			}
		}).done( function(data) {
			console.log(data);
		});
		return false;
	});

});