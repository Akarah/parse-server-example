Parse.Cloud.define("getServerTime", function(request, response) {
  var dateToday = new Date();
  return dateToday.toDateString();
});
