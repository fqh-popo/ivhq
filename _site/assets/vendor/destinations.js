
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
					'<h3 class="panel-title">' +
						'<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'" aria-expanded="false" aria-controls="collapse'+i+'"></a>' +
					'</h3>' +
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
			//console.log($("#collapse"+i+" .panel-body").html());
			$("h1#"+titles[i].id).nextUntil("div").appendTo("#collapse"+i+" .panel-body"); //Move the last content to panel-body
		}

		$("h1#"+titles[i].id).remove(); //Remove all the h1 titles which have been replaced by panel-title
	} // end of for loop

	//Modify the "At a glance…" panel style
	if ($("#collapse0") != null) {
		$("#collapse0 div.panel-body").prepend(
			'<div class="row">' +
				'<div class="glance col-md-8">' +
				'</div>' +
				'<div class="glance-right col-md-4">' +
				'</div>' +
			'</div>'
		);
		$("#collapse0 ul").appendTo("#collapse0 .glance");
		$("#collapse0 p").appendTo("#collapse0 .glance-right");

		//Spread the "At a glance" panel
		$("#collapse0").attr("class", "panel-collapse collapse in");
		$("#heading0 a").attr({"aria-expanded": "true", "class": ""});
	}


	//remove the default "previous" and "next", instead of img defined in main.css
	$("a.slidesjs-previous").html("");
	$("a.slidesjs-next").html("");

});
