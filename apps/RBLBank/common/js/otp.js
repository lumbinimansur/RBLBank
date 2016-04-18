currentPage={};

currentPage.init = function() {
	WL.Logger.debug("otp :: init");
};


currentPage.landingPage = function(){
	WL.Logger.debug("landingpage :: landingPage");
	$("#pagePort").load(path + "Pages/landingpage.html", function(){
		$.getScript(path + "js/landingpage.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

currentPage.otpbackbtn = function(){
	WL.Logger.debug("addnewcard :: otpbackbtn");
	$("#pagePort").load(path + "Pages/addnewcard.html");
};
