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

});