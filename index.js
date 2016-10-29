var request = require("request");
var dash_button = require("node-dash-button");
var fork = require('child_process').fork;

NERF_BUTTON_MAC = "50:f5:da:97:6f:59";
var dash = dash_button([NERF_BUTTON_MAC], null, null, 'all');
var script = null;

function log(msg) {
	console.log("> " + msg);
}

log("Listening for presses");
dash.on("detected", function(dash_id) {
	log("Press from " + dash_id);
	if(script) {
		log("Launching " + script);
		var proc = fork("./" + script);
	} else log("No script set");
});

var stdin = process.openStdin();
stdin.addListener("data", function(d) {
	var input = d.toString().trim();
	log("Setting script to " + input);
	script = input;
});
