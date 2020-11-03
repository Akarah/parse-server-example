var timezone = require('moment-timezone');
var moment = require('moment');

Parse.Cloud.define("getServerTime", function(request, response) {

  let timezone = timezone().format().substr(id.length - 5)

  return moment().format("YYYY-MM-DDTHH:mm:ss.SSS") + timezone;
});
