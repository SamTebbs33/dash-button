NERF_BUTTON_MAC = "ac:63:be:0e:37:74";

var request = require("request");

var dash_button = require("node-dash-button");
var dash = dash_button([NERF_BUTTON_MAC], null, null, 'all');

console.log("Listening...");
dash.on("detected", function(dash_id) {
    console.log("Packet from " + dash_id);
});
