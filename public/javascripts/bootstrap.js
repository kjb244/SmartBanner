window.onload = function() {
                // Deep link to your app goes here
                window.location = "bofa://";

                setTimeout(function() {
                    // Link to the App Store should go here -- only fires if deep link fails                
                    //window.location = "https://itunes.apple.com/us/app/bank-of-america-mobile-banking/id284847138?mt=8";
                }, 500);
            };