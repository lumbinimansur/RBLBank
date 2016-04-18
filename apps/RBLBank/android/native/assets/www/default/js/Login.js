
/* JavaScript content from js/Login.js in folder common */
currentPage={};

currentPage.init = function() {
	WL.Logger.debug("Login :: init");
};



currentPage.loadPage = function(pageIndex){
	WL.Logger.debug("Login :: loadPage :: pageIndex: " + pageIndex);
	pagesHistory.push(path + "pages/Login.html");
	$("#pagePort").load(path + "pages/Page" + pageIndex + ".html");
};


currentPage.registerLoad = function(){
	WL.Logger.debug("Register :: registerLoad");
//	pagesHistory.push(path + "Pages/Page2.html");
	$("#pagePort").load(path + "Pages/Register.html", function(){
		$.getScript(path + "js/Register.js", function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
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