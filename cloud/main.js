Parse.Cloud.define("getServerTime", function(request, response) {
  return moment().format();
});
