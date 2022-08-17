var exec = require('cordova/exec');

var PLUGIN_NAME = 'HabitPlugin';

exports.getDeviceInfo = function (serialnumber, imei, success, error) {
  exec(success, error, PLUGIN_NAME, "getDeviceInfo", [(serialnumber==''?null:serialnumber), (imei==''?null:imei)]);
};

exports.performTests = function (appid, apikey, serialnumber, imei, tests, language, themecolor, hidestartscreen, customization, success, error) {
  exec(success, error, PLUGIN_NAME, "performTests", [appid, apikey, (serialnumber==''?null:serialnumber), (imei==''?null:imei), tests, language, themecolor, hidestartscreen, customization]);
};
