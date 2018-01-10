$(function (){
  //excute the below code when the form is submitted
  $('form').on('submit', function(e){
	e.preventDefault();
	// variable to store the input of the cities
	var city = $('#city-type').val().toLowerCase().trim();

	// background img to nyc.jpg if input is New York, New York City or NYC
	if (city === 'new york' || city === 'new york city' || city === 'nyc') {
		$('body').attr('class', 'nyc');
	} 

	// background img to sf.jpg if input is San Francisco, SF or Bay Area
	else if (city === 'san francisco' || city === 'sf' || city === 'bay area') {
		$('body').attr('class', 'sf');
	} 

	// background img to la.jpg if input if Los Angeles, LA or LAX
	else if (city === 'los angeles' || city === 'la' || city === 'lax') {
		$('body').attr('class', 'la');
	} 

	// background img to austin.jpg if input is Austin or ATX
	else if (city === 'austin' || city === 'atx') {
		$('body').attr('class', 'austin');
	} 

	// background img to sydney.jpg if input is Sydney or SYD
	else if (city === 'sydney' || city === 'syd') {
		$('body').attr('class', 'sydney');
	} 

	// reset the input field after form submission
	$('#city-type').val('');

	// not sure where to use "Get the first element from an attribute name using $.attr()" from the tech spec
  });
});