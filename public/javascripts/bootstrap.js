setTimeout(function(){
	var htmlContent = $('html').html();
	if (window.location.pathname === "/testing"){
		$.post('htmlcontent', {'html': htmlContent}, function(data){

			
			window.location.href = '/testing2';
		});
	}

	}, 10000);
