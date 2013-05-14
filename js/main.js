require.config({
	baseUrl: "js",
	paths: {

		"jquery": 'libs/jquery-1.8.2.min',
		"underscore": 'libs/underscore',
		"backbone": 'libs/backbone-min',
		"text": 'libs/text',
		"hammer": 'libs/hammer',
		"jHammer":'libs/jquery.specialevent.hammer',
		//"skype" : 'http://cdn.dev.skype.com/uri/skype-uri',
		//"impress":'libs/impress',
		"bootstrap": 'libs/bootstrap.min',
		"templates": '../templates',
		"corodinator": 'corodinator',
		 
	},
	shim: {
	    'bootstrap': ['jquery'],
	    'hammer':['jquery'],
	    'jHammer':['hammer'],
		// Backbone
	    "backbone": {
	      // Depends on underscore and jQuery
	      "deps": ["underscore", "jquery"],
	      // Exports the global window.Backbone object
	      "exports": "Backbone"
	    }
	},
	waitSeconds: 10
});

require(['app', 'bootstrap', 'jHammer', 'corodinator'], function(App){
	App.initialize();
});

