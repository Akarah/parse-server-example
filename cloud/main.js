Parse.Cloud.define("getServerTime", function(request, response) {
  var dateToday = new Date();
  response.success(dateToday.toDateString());
});
