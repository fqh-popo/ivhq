// Add your React component code here.

$.getJSON('../fees.json', function(data) {         
    console.log(data);

	var Hello = React.createClass({displayName: "Hello",
		render: function() {
			return React.createElement("div", {className: "helloReact"}, "Hello ", this.props.name);
		}
	});

	var Dropdown = React.createClass({displayName: "Dropdown",
		render: function() {
			return (
			// 	{data.map( function(name, index) {
			// 		return <li><a href="#" id="action" + { index + 1 }>{name.display_name}</a></li>;
			// 	})}
			React.createElement("div", {className: "dropdown"}, 
				React.createElement("button", {className: "btn btn-default dropdown-toggle", type: "button", id: "dropdownMenu1", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true"}, 
					"Please select a country", 
					React.createElement("span", {className: "caret"})
				), 
				React.createElement("ul", {className: "dropdown-menu", "aria-labelledby": "dropdownMenu1"}, 
					data.map( country => React.createElement("li", {key: country.country}, React.createElement("a", {href: "#", key: country.country, id: country.country}, country.display_name)))
				)		
			)
  			);
		}
	});
					// <li><a href="#" id="action1">Action</a></li>
					// <li><a href="#" id="action2">Another action</a></li>	
	ReactDOM.render(
		React.createElement(Dropdown, null),
		document.getElementById('dropdown-menu')
	);


	$("#action1").click(function () {
		ReactDOM.render(
			React.createElement(Hello, {name: data[0].display_name}),
			document.getElementById('reactTest')
		);
	});


	$("#action2").click(function () {
		ReactDOM.render(
			React.createElement(Hello, {name: data[1].display_name}),
			document.getElementById('reactTest')
		);
	});
});

