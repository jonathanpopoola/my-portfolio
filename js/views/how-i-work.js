define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/how-i-work.html',
	
],function($, _, Backbone, work) {
	var workView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {
			
		},
		

		render : function() {
			
			this.$el.html(work);
		},
		
		postRender : function() {
			$("#wrap").removeClass("contactBody");
			corodinator.trigger('some:channel', 'work');
		}
		
	});
	return new workView;
});
