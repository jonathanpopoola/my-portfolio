var mongo = require('mongodb');
 
var Server = mongo.Server,
Db = mongo.Db,
BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017);
db = new Db('popDB', server);
 
db.open(function(err, db) {
if(!err) {
console.log("Connected to 'popDB' database");
db.collection('users', {strict:true}, function(err, collection) {
if (!err) {
console.log("The 'users' collection doesn't exist. Creating it with sample data...");
populateDB();
}
});
}
});

exports.findAll = function(req, res) {
	console.log("hit route");
	db.collection('users', function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});
};

exports.addUser = function(req, res) {
var user = req.body;
console.log('Adding user: ' + JSON.stringify(user));
db.collection('users', function(err, collection) {
collection.insert(user, {safe:true}, function(err, result) {
if (err) {
res.send({'error':'An error has occurred'});
} else {
console.log('Success: ' + JSON.stringify(result[0]));
res.send(result[0]);
}
});
});
};
/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {
 
var users = [
{
name: "Test Admin",
role: "admin",
password: "gunners2008"
},
{
	name: "Test Admin 2",
role: "admin",
password: "gunners2009"
}
];
 
db.collection('users', function(err, collection) {
collection.insert(users, {safe:true}, function(err, result) {});
});
 
};