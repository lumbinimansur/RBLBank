var pagesHistory = [];
var currentPage = {};
var path = "";

function wlCommonInit(){
	
	// Special case for Windows Phone 8 only.
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
	    path = "/www/default/";
	}
	
	$("#pagePort").load(path + "Pages/Login.html", function(){
		$.getScript(path + "js/Login.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
}