$(function() {
	if (localStorage["userId"] != 0) {
		$(".notloggedin").hide();
		$(".loggedin").show();
	}
})