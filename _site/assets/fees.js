// Add your React component code here.

$.getJSON('../fees.json', function(data) {         
    console.log(data);

	var Fee = React.createClass({displayName: "Fee",
		
		render: function() {
			var current = this.props.list;
			return (
				React.createElement("div", {className: "col-md-4 text-left"}, 
					React.createElement("h2", null, current.display_name), 
					React.createElement("table", null, 
						React.createElement("tbody", null, 
						React.createElement("tr", null, 
							React.createElement("th", null, "Duration"), 
							React.createElement("th", null, "Cost")
						), 
						
							current.fees.map((fee, index) =>
								React.createElement("tr", {key: current.country+"week-"+fee.weeks}, 
									React.createElement("td", {key: current.country+"week-"+fee.weeks+"duration"}, fee.weeks, " ", (index == 0)? "week" : "weeks"), 
									React.createElement("td", {key: current.country+"week-"+fee.weeks+"cost"}, fee.cost)
								)
							)
						
						)
					), 					
					React.createElement("div", null), 
					React.createElement("div", null)
				)
			);
			
		}
	});

	var Dropdown = React.createClass({displayName: "Dropdown",
		render: function() {
			return (
			React.createElement("div", {className: "dropdown"}, 
				React.createElement("button", {className: "btn btn-default dropdown-toggle", type: "button", id: "dropdownMenu1", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true"}, 
					"Please select a country", 
					React.createElement("span", {className: "caret"})
				), 
				React.createElement("ul", {className: "dropdown-menu", "aria-labelledby": "dropdownMenu1"}, 
					
						data.map( (country, index) => 
						React.createElement("li", {key: country.country}, 
							React.createElement("a", {href: "#", key: country.country, id: country.country, value: index}, country.display_name)
						)
					)
				)
			)
  			);
		}
	});

	ReactDOM.render(
		React.createElement(Dropdown, null),
		document.getElementById('dropdown-menu')
	);

	$("li").on("click", "a", function (e) {
		var index = $(e.target).attr("value");
		ReactDOM.render(
			React.createElement(Fee, {list: data[index]}),
			document.getElementById('countryFee')
		);
		//console.table(data[index].fees);
	});
	
});

