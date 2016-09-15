// Add your React component code here.

$.getJSON('../fees.json', function(data) {         
    console.log(data);

	var Hello = React.createClass({
		render: function() {
			return <div className="helloReact">Hello {this.props.name}</div>;
		}
	});

	var Dropdown = React.createClass({
		render: function() {
			return (
			// 	{data.map( function(name, index) {
			// 		return <li><a href="#" id="action" + { index + 1 }>{name.display_name}</a></li>;
			// 	})}
			<div className="dropdown">
				<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					Please select a country
					<span className="caret"></span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
					{data.map( country => <li key={country.country}><a href="#" key={country.country} id={country.country}>{country.display_name}</a></li> )}
				</ul>   		
			</div>
  			);
		}
	});
					// <li><a href="#" id="action1">Action</a></li>
					// <li><a href="#" id="action2">Another action</a></li>	
	ReactDOM.render(
		<Dropdown />,
		document.getElementById('dropdown-menu')
	);


	$("#action1").click(function () {
		ReactDOM.render(
			<Hello name={data[0].display_name} />,
			document.getElementById('reactTest')
		);
	});


	$("#action2").click(function () {
		ReactDOM.render(
			<Hello name={data[1].display_name} />,
			document.getElementById('reactTest')
		);
	});
});

