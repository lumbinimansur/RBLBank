currentPage={};

currentPage.init = function() {
	WL.Logger.debug("CardDetail2 :: init");
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
