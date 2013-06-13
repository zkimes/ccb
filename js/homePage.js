// <div class="row"><div class="span4"><div><img src="http://www.placekitten.com/100/100" /><h3>{{name}}</h3><p>{{summary}}</p></div><div class="btn"><a href="viewRewipes.html#{{id}}">See Mmore</a></div></div></div>

$(function() {
	$.ajax({
		type: 'POST',
		url: './php/searchList.php'
	}).done( function(data) {
		var numbers = [];
		for (var i = 0; i < 3; i++) {
			numbers[i] = Math.floor((Math.random()*data.length-1)+1);
		}
		numbers.forEach(function(a,i) {
			var imgnum = Math.floor((Math.random()*8)+1);
			vars = {
				name: data[a].name,
				summary: data[a].summary,
				id: data[a].id
			}
			$("#recipes").append($("<div>").attr('class','row').html('<div class="span2" id="imgRecipe1"><img src="img/' + imgnum + '.jpg" alt=""></div><div class="span10"><h3>' + data[a].name + '</h3><p>' + data[a].summary + '</p></div><div class="readMore"><a href="viewRecipes.html#' + data[a].id + '">See More</a></div>'));

			
		});
	});
});