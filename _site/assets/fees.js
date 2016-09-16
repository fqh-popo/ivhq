// Add your React component code here.

$.getJSON('../fees.json', function(data) {         
    console.log(data);

	var Fee = React.createClass({displayName: "Fee",
		
		render: function() {
			var current = this.props.list;
			return (
				React.createElement("div", {className: "col-md-12 text-left"}, 
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "flagBox col-md-1"}, 
							React.createElement("img", {className: "flag", src: "../assets/images/"+current.display_name+".png"})
						), 
						React.createElement("h2", {className: "col-md-11"}, current.display_name)
					), 
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-md-2"}), 
						React.createElement("table", {className: "table table-hover col-md-8"}, 
							React.createElement("tbody", null, 
							React.createElement("tr", {className: "info"}, 
								React.createElement("th", null, "Duration"), 
								React.createElement("th", null, "Cost")
							), 
							
								current.fees.map((fee, index) =>
									React.createElement("tr", {className: "success", key: current.country+"week-"+fee.weeks}, 
										React.createElement("td", {key: current.country+"week-"+fee.weeks+"duration"}, fee.weeks, " ", (index == 0)? " week" : " weeks"), 
										React.createElement("td", {key: current.country+"week-"+fee.weeks+"cost"}, fee.cost)
									)
								), 
							
							React.createElement("tr", {className: "info"}, 
								React.createElement("td", {colSpan: "2"}, React.createElement("p", null, React.createElement("b", null, "Weekly Spending:"), "   $ ",  current.weekly_spending_money_estimate))
							), 
							React.createElement("tr", {className: "info"}, 
								React.createElement("td", {colSpan: "2"}, React.createElement("p", null, React.createElement("b", null, "Please note:"), "  ",  current.extra_notes))
							)
							)
						), 
						React.createElement("div", {className: "col-md-2"})
					), 
					React.createElement("div", null, 
						React.createElement("h3", null, "WHAT DO MY FEES PAY FOR?"), 
						React.createElement("p", null, "Registration Fee (refundable if you choose not to go*) – ongoing support from IVHQ staff, program marketing costs, information pack, administration costs, IVHQ Fund, travel costs to inspect programs and communication costs with volunteers."), 
						React.createElement("p", null, "Program Fee – airport pick-up, orientation, program supervision, accommodation and meals during volunteer program period, in-country 24/7 volunteer support and in-country administration costs.")
					), 
					React.createElement("div", null, 
						React.createElement("h3", null, "WHAT ADDITIONAL COSTS WILL I HAVE?"), 
						React.createElement("p", null,  current.additional_costs)
					)
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
							React.createElement("a", {href: "#dropdown-menu", key: country.country, id: country.country, value: index}, country.display_name)
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

