// Add your React component code here.

$.getJSON('../fees.json', function(data) {         
    console.log(data);

	var Fee = React.createClass({
		
		render: function() {
			var current = this.props.list;
			return (
				<div className="col-md-12 text-left">
					<div className="row">
						<div className="flagBox col-md-1">
							<img className="flag" src={"../assets/images/"+current.display_name+".png"} />
						</div>
						<h2 className="col-md-11">{current.display_name}</h2>
					</div>
					<div className="row">
						<div className="col-md-2"></div>
						<table className="table table-hover col-md-8">
							<tbody>
							<tr className="info">
								<th>Duration</th>
								<th>Cost</th>
							</tr>
							{
								current.fees.map((fee, index) =>
									<tr className="success" key={current.country+"week-"+fee.weeks}>
										<td key={current.country+"week-"+fee.weeks+"duration"}>{fee.weeks} {(index == 0)? " week" : " weeks"}</td>
										<td key={current.country+"week-"+fee.weeks+"cost"}>{fee.cost}</td>
									</tr>
								)
							}
							<tr className="info">
								<td colSpan="2"><p><b>Weekly Spending:</b> &nbsp;&nbsp;$ { current.weekly_spending_money_estimate }</p></td>
							</tr>
							<tr className="info">
								<td colSpan="2"><p><b>Please note:</b>&nbsp;&nbsp;{ current.extra_notes }</p></td>
							</tr>
							</tbody>
						</table>
						<div className="col-md-2"></div>
					</div>
					<div>
						<h3>WHAT DO MY FEES PAY FOR?</h3>
						<p><b>Registration Fee</b> (refundable if you choose not to go*) – ongoing support from IVHQ staff, program marketing costs, information pack, administration costs, IVHQ Fund, travel costs to inspect programs and communication costs with volunteers.</p>
						<p><b>Program Fee</b> – airport pick-up, orientation, program supervision, accommodation and meals during volunteer program period, in-country 24/7 volunteer support and in-country administration costs.</p>
					</div>
					<div>
						<h3>WHAT ADDITIONAL COSTS WILL I HAVE?</h3>
						<p>{ current.additional_costs }</p>
					</div>
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
							<a href="#dropdown-menu" key={country.country} id={country.country} value={index}>{country.display_name}</a>
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

