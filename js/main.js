//Carousel
$(document).ready(function() {
	owlCarousel();
	currentDate(); 
	handleUserSignIn();
});

function currentDate() {
	var currentTime = new Date()
	var month = currentTime.getMonth() + 1
	var day = currentTime.getDate()
	var year = currentTime.getFullYear()
	$('#todayDate').html(month + "/" + day + "/" + year)
}

function owlCarousel() {
	$("#owl-demo").owlCarousel({
    //navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed: 800,
    singleItem:true, 
    autoPlay: 3000, 
    stopOnHover: true
	});
}

function handleUserSignIn() {
	$('#userSignInError').hide();
	$("#signInButton").click(function() {
		$('#userSignInError').show();
	});
	$(".close").click(function() {
		$('#userSignInError').hide();
	});
}
