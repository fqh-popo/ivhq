
$(document).ready(function () {

	// Locate all the content titles
	var titles = $("#accordion").find("h1");
	var titleNumber = titles.length;

	// Generate the panel group, move all information to panel in a loop
	for (var i = 0; i < titleNumber; i++) {
		var newId = "heading" + i;
		var titleName = titles[i].outerText;
		$("#accordion").append(
			'<div class="panel panel-default">' +
				'<div class="panel-heading" role="tab" id="'+newId+'">' +
					'<h4 class="panel-title">' +
						'<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'" aria-expanded="false" aria-controls="collapse'+i+'"></a>' +
					'</h4>' +
				'</div>' +
				'<div id="collapse'+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="'+newId+'">' +
					'<div class="panel-body"></div>' +
				'</div>' +
			'</div>'
		);
		$("#"+newId+" a").html(titleName); //Set panel-title
		
		if ( i != titleNumber - 1) { 
			$("h1#"+titles[i].id).nextUntil("h1").appendTo("#collapse"+i+" .panel-body"); //Move each content to panel-body
		} else {
			console.log($("#collapse"+i+" .panel-body").html());
			$("h1#"+titles[i].id).nextUntil("div").appendTo("#collapse"+i+" .panel-body"); //Move the last content to panel-body
		}

		$("h1#"+titles[i].id).remove(); //Remove all the h1 titles which have been replaced by panel-title
	}

});
