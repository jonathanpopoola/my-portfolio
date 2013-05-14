console.log("header template rendered");
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/common/footer.html',
	
],function($, _, Backbone, footer) {
	var footerView = Backbone.View.extend({
		el : $('#jpFooter'),
		
		initialize : function() {
			console.log("footer init");
		},
		

		render : function() {
			this.$el.html(footer);
		}
		
	});
	return new footerView;
});
