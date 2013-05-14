define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/portfolio.html',
	
],function($, _, Backbone, portfolio) {
	var portfolioView = Backbone.View.extend({
		el : $('#mainContainer'),
		
		initialize : function() {
			console.log("portfolio init");
		},
		

		render : function() {
			$("#wrap").removeClass("contactBody");
			this.$el.html(portfolio);
		},
		
		events: {
			"click .project a": "projectLauncher",
			"click #logmein" : "loginCheck",
			"click #closeLogin": "closelog",
			"click #passpass" : "passwordrequest",
			"click #closeLoginn" : "closelog",
			"click #resetdetails" : "resetme",
			"click #requester" : "requestaccess"
		},
		
		projectLauncher: function(event) {
			event.preventDefault();
			var element = $(event.target).data("project");
			if(element == "natwest") {
				console.log("nat to the west");
			}else if (element =="trinitymirror") {
				console.log("twinty");
			}else if(element == "clearstream") {
				console.log("clearstream");
			}else if (element == "personalportfolio") {
				console.log("perosnal portfolio");
			}
			$('#myModal').modal('show');
			
		},
		
		requestaccess: function() {
			$('#myModal').modal('hide');
			location.href='#contact';
			return false;
		},
		
		resetme: function() {
			$("#forgotPassword").hide();
			$("#requestsent").show();
			return false;
		},
		
		passwordrequest: function() {
			$("#log").hide();
			$("#forgotPassword").show();
			return false;
		},
		
		closelog: function() {
			$('#myModal').modal('hide');
			$("#forgotPassword").hide();
			$("#requestsent").hide();
			
			$("#log").show();
			$("#notregistered").hide();
			return false;
		},
		
		loginCheck: function() {
			$("#log").hide();
			$("#notregistered").show();
			return false;
		},
		
		postRender : function() {
			corodinator.trigger('some:channel', 'portfolio');
		
		}
		
	});
	return new portfolioView;
});
