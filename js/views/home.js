define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/home.html',
	
],function($, _, Backbone, home) {
	var homeView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {
			
		},
		

		render : function() {
			$("#wrap").removeClass("contactBody");
			this.$el.html(home);
			
		},
		
		postRender : function() {
			corodinator.trigger('some:channel', 'welcome');

		}
		
	});
	return new homeView;
});
