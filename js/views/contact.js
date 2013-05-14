define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/contact.html',
	'models/userModels'
	
],function($, _, Backbone, contact, usermodel) {
	var contactView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {
			
		},
		

		render : function() {
			$("#wrap").addClass("contactBody");
			//$(".mainContainer").css();
			this.$el.html(contact);
			
		},
		
		events: {
			"click #triggerContact" : "contactStart"
		},
		
		postRender : function() {
			corodinator.trigger('some:channel', 'contact');
		},
		
		contactStart: function() {
			var arr = $("#contactform").serializeArray();
			var data = _(arr).reduce(function(acc, field) {
		      acc[field.name] = field.value;
		      return acc;
		    }, {});
		    newUser = new UserModel();
		   // console.log(newUser);
		  	newUser.save(data);
		  	console.log(newUser);
			return false;
		}
		
	});
	return new contactView;
});
