currentPage={};

currentPage.init = function() {
	WL.Logger.debug("addnewcard :: init");
};


currentPage.otpPage= function(){
	WL.Logger.debug("otp :: otpPage");
	$("#pagePort").load(path + "Pages/otp.html", function(){
		$.getScript(path + "js/otp.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

currentPage.menubackbtn = function(){
	WL.Logger.debug("Page1 :: back");
	$("#pagePort").load(path + "Pages/landingpage.html");
};

