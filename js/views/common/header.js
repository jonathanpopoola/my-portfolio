console.log("header template rendered");
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/common/header.html',
	
],function($, _, Backbone, header) {
	var headerView = Backbone.View.extend({
		el : $('#header'),
		
		initialize : function() {

		},
		

		render : function() {
			console.log("made it this far");
			this.$el.html(header);
		},
		
		
	});
	
	
	
	return new headerView;
});
