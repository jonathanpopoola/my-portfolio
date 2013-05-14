define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/making-of.html',
	
],function($, _, Backbone, making) {
	var makingofView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {
			console.log("making of init");
		},
		

		render : function() {
			$("body").removeClass("contactBody");
			this.$el.html(making);
		},
		
		postRender : function() {
			corodinator.trigger('some:channel', 'makingof');
		
		}
		
	});
	return new makingofView;
});
