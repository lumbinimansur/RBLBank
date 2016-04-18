currentPage={};

currentPage.init = function() {
	WL.Logger.debug("Register :: init");
};



currentPage.landingLoad1 = function(){
	WL.Logger.debug("landingpage :: landingLoad1");
	$("#pagePort").load(path + "Pages/landingpage.html", function(){
		$.getScript(path + "js/landingpage.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
};

