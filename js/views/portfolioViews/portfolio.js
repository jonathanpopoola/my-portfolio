define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/portfolio/jpopoola.html',
	
],function($, _, Backbone, me) {
	var jpopoolaView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {
			console.log("portfolio init");
		},
		

		render : function() {
			$("#wrap").removeClass("contactBody");
			this.$el.html(me);
		},
		
		postRender : function() {
			corodinator.trigger('some:channel', 'portElem');
			if ($("#navverBut").hasClass("collapsed")) {
			    console.log("already closed do nothing");
			}else {
				console.log("removing toggle");
			$("#navverBut").trigger('click');
			}
		}
		
	});
	return new jpopoolaView;
});
