jQuery(document).ready(function($) {
  var activity;
  $.get( '/activity', function(data){
    $('body').append(data); 
     activity = data;
     console.dir(activity);
     

     $('.last-run-time').html(moment(activity[0].start_date).fromNow());
     $('.last-run-distance').html(Math.round((activity[0].distance * 0.000621371), 2) + ' Miles' );
  });





});