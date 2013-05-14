  var UserModel = Backbone.Model.extend({
        urlRoot: 'localhost:3000/addUsers',
        defaults: {
            name: 'jack smith',
            email: 'jack@smith.com'
        },
        initialize: function() {
        	console.log("init trigger");
        	
        }
   }); 
   
    // Because we have not set a `id` the server will call
    // POST /user with a payload of {name:'Thomas', email: 'thomasalwyndavis@gmail.com'}
    // The server should save the data and return a response containing the new `id`
   /* user.save(userDetails, {
        success: function (user) {
            alert(user.toJSON());
        }
    })*/