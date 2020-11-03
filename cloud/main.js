var momenttimezone = require('moment-timezone');
var moment = require('moment');

Parse.Cloud.define("getServerTime", function(request, response) {

  let tz = momenttimezone().format();
  tz = tz.substr(tz.length - 5)

  return moment().format("YYYY-MM-DDTHH:mm:ss.SSS") + tz;
});
