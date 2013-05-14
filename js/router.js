define([
  'jquery',
  'underscore',
  'backbone',
  'views/common/header',
  'views/common/footer',
  'views/home',
  'views/making-of',
  'views/how-i-work',
  'views/portfolio',
  'views/portfolioViews/portfolio',
  'views/contact'

  
], function($, _, Backbone, headerView, footerView, homeView, makingView, workView, portfolioView, jpopoola, contactView){
	
	function getActions(actions) {
		return actions;
	}
	
	var AppRouter = Backbone.Router.extend({
		currentView: null,
		
		initialize: function() {
			this.showView(headerView);
			this.showView(footerView);
		},
	
		routes: {
			'': 'defaultAction',
			'makingof': 'makingShow',
			'howWork' : 'workShow',
			'portfolio' : 'portfolioShow',
			'jpopoola' :'jpopoolaShow',
			'contact' : 'contactShow',
			'*path' : 'notfound'
		},

		defaultAction: function(actions){
			this.showView(homeView);
		},
		
		contactShow: function() {
			this.showView(contactView);
		},
		
		notfound: function() {
			console.log("view not found");
		},
		
		portfolioShow: function(actions){
			this.showView(portfolioView);
		},
		
		jpopoolaShow: function(actions){
			this.showView(jpopoola);
		},
		
		
		
		workShow: function(actions){
			this.showView(workView);
		},
		
		makingShow: function(actions){
			this.showView(makingView);
		},
		
		showView: function(view) {
			view.render();
			if(view.postRender){
				view.postRender();
			}
		}
		
	});

	var initialize = function(){
		new AppRouter();
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});
