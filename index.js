var request = require("request");
var dash_button = require("node-dash-button");

NERF_BUTTON_MAC = "50:f5:da:97:6f:59";
var dash = dash_button([NERF_BUTTON_MAC], null, null, 'all');

console.log("Listening...");
dash.on("detected", function(dash_id) {
    console.log("Packet from " + dash_id);
});
