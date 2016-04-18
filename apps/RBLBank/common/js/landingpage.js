currentPage={};

currentPage.init = function() {
	WL.Logger.debug("landingpage :: init");
};

currentPage.landingLoad = function(){
	WL.Logger.debug("Landing :: landingLoad");
	$("#pagePort").load(path + "Pages/Landing.html", function(){
		$.getScript(path + "js/Landing.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

currentPage.addcardLoad = function(){
	WL.Logger.debug("addnewcard :: addcardLoad");
	$("#pagePort").load(path + "Pages/addnewcard.html", function(){
		$.getScript(path + "js/addnewcard.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};