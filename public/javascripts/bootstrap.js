$(document).ready(function(){

	$('.btn').on('click', function(){

		var now = new Date().valueOf();
		setTimeout(function () {
		   if (new Date().valueOf() - now> 100){
		   	return;
		   } 
		   window.location = "https://itunes.apple.com/us/app/bank-of-america-mobile-banking/id284847138?mt=8";
		}, 25);
		window.location = "bofa://";
		 


	});




});