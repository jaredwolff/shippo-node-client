/**
This example demonstrates how to track a shipment using carrier information and
a tracking number as well as how to register a webhook for tracking updates
**/


// replace <YOUR_PRIVATE_KEY> with your ShippoToken key
var shippo = require('shippo')('<YOUR_PRIVATE_KEY>');

// example Tracking object for tracking a shipment
shippo.tracking.track('usps', '1122334455667788')
.then(function(track) {
	console.log("Tracking info: %s", JSON.stringify(track, null, 4));
}, function(err) {
	console.log("There was an error retrieving tracking information: %s", err);
});

// example object for registering a webhook for tracking shipments
var webhookData = {
	"carrier":"usps",
	"tracking_number":"1122334455667788",
	"metadata": "test order"
}

// Registering a webhook for tracking shipments
shippo.tracking.create(webhookData)
.then(function(webhook) {
	console.log("Webhook response: %s", JSON.stringify(webhook, null, 4));
}, function(err) {
	console.log("There was an error registering the webhook: %s", err);
});