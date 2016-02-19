var express = require('express');
var app = express();
var strava = require('strava-v3');
var cors = require('cors');
app.use(cors());

app.use('/',express.static('app'));
// strava.athlete.get({id:3341189},function(err,payload) {
//     if(!err) {
//         console.log(payload);
//         app.get('/', function (req, res) {
//           res.send(payload);
//         });
//     }
//     else {
//         console.log(err);
//     }
// });
app.get('/activity', function (req, res) {
  strava.athlete.listActivities({type: 'run'},function(err,payload) {
      if(!err) {
          console.log(payload);
          res.send(payload);
      }
      else {
          console.log(err);
          res.send(err);
      }
  });

});



// strava.segments.explore({bounds:'40.700413399865205,-73.92954469070435,40.70692016085281,-73.92096162185669',activity_type:'running'}, function(err, payload){
//     if(!err){
//         app.get('/segments', function(req, res){
//             res.send(payload);
//         });
//     }
//     else {
//         console.log(err);
//     }

// });



var server = app.listen(process.env.PORT || 5000);
