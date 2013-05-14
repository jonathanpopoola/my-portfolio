

define ([
	'underscore',
	'backbone'],
	function(_, Backbone) {
		/*var corodintaor = _.event({}, Backbone.Events);

		cordinator.on('page:selection', function() {
			console.log("page selection event fired");
		});*/
		
		window.corodinator = {};
		_.extend(corodinator, Backbone.Events);
		
		corodinator.on('some:channel', function() {
				$('.nav').find('li').removeClass("selectedNav");
				$('#'+arguments[0]).addClass("selectedNav");
				if(arguments[0] == "portElem") {
					$(".navbar-inner").addClass("jpDark");
				}else {
					$(".navbar-inner").removeClass("jpDark");
				}
				console.log("made it");
				if ($("#navverBut").hasClass("collapsed")) {
			    	console.log("does collapsed class");
				}else {
					console.log("does'nt have collapsed class");
					$("#navverBut").trigger('click');
				}
				
		});

	}
	
	
	
);
