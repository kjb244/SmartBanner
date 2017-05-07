

$(document).ready(function(){

	$('.btn').on('click', function(){
		window.location = 'boa://';
		alert('installed');
		setTimeout(function(){
			alert('not installed');
			window.location = 'https://itunes.apple.com/us/app/bank-of-america-mobile-banking/id284847138?mt=8';

		},200);
	})




});