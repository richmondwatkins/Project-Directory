
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.job("HelloWorld", function(request, status) {
  status.success("SUCCESS JOB");
});


Parse.Cloud.job("PushTest", function(request, status) {
  var pushQuery = new Parse.Query(Parse.Installation);
  // pushQuery.where("deviceType", "ios");
console.log("RUNNING JOB");
console.log(new Date(2014,10,01,04,50,00,0));
  Parse.Push.send({
    where: pushQuery,
    data: {
      // "content-available": 1
      "alert": "WOO IT WORKED"
    },
    push_time: "2014-11-01T04:53:00.000Z",
  });
    status.success("SUCCESS PUSH JOB");
    // status.error("DING DONG IT DIDNT WORK");
});

// 
// curl -X POST \
//   -H "X-Parse-Application-Id: rgcqhuw9LAnZu9icqcbgB0AzPIk3mIyDKhIxmcXx" \
//   -H "X-Parse-REST-API-Key: 9ZU3oF6MVsLQBPsKTzO93FSDPWmW4ecCdbfYBxYd" \
//   -H "Content-Type: application/json" \
//   -d '{
//         "where": {},
//         "data": {
//           "alert": "Waistin away again? Play Margaritaville"
//         }
//       }' \
//       https://api.parse.com/1/push