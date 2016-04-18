
/* JavaScript content from js/Landing.js in folder common */
currentPage={};

currentPage.init = function() {
	WL.Logger.debug("Landing :: init");
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

currentPage.addnewcardPage= function(){
	WL.Logger.debug("addnewcard ::addnewcardPage");
	$("#pagePort").load(path + "Pages/addnewcard.html", function(){
		$.getScript(path + "js/addnewcard.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

currentPage.carddetail2Page= function(){
	WL.Logger.debug("CardDetail2 :: carddetail2Page");
	$("#pagePort").load(path + "Pages/CardDetail2.html", function(){
		$.getScript(path + "js/CardDetail2.js", function() {
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

