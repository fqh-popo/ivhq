// Add your React component code here.

$.getJSON('../fees.json', function(data) {         
    console.log(data);

	var Fee = React.createClass({
		
		render: function() {
			var current = this.props.list;
			return (
				<div className="col-md-4 text-left">
					<h2>{current.display_name}</h2>
					<table>
						<tbody>
						<tr>
							<th>Duration</th>
							<th>Cost</th>
						</tr>
						{
							current.fees.map((fee, index) =>
								<tr key={current.country+"week-"+fee.weeks}>
									<td key={current.country+"week-"+fee.weeks+"duration"}>{fee.weeks} {(index == 0)? "week" : "weeks"}</td>
									<td key={current.country+"week-"+fee.weeks+"cost"}>{fee.cost}</td>
								</tr>
							)
						}
						</tbody>
					</table>					
					<div></div>
					<div></div>
				</div>
			);
			
		}
	});

	var Dropdown = React.createClass({
		render: function() {
			return (
			<div className="dropdown">
				<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					Please select a country
					<span className="caret"></span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
					{
						data.map( (country, index) => 
						<li key={country.country}>
							<a href="#" key={country.country} id={country.country} value={index}>{country.display_name}</a>
						</li> 
					)}
				</ul>
			</div>
  			);
		}
	});

	ReactDOM.render(
		<Dropdown />,
		document.getElementById('dropdown-menu')
	);

	$("li").on("click", "a", function (e) {
		var index = $(e.target).attr("value");
		ReactDOM.render(
			<Fee list={data[index]} />,
			document.getElementById('countryFee')
		);
		//console.table(data[index].fees);
	});
	
});

