// document.addEventListener("turbolinks:load", function() {
//   var lat = parseFloat($("#lat").html());
//   var lng = parseFloat($("#lng").html())
//   var center_default = {lat: lat, lng: lng};
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: center_default,
//     zoom: 13
//   });
//
//   marker = new google.maps.Marker({
//     map: map,
//     draggable: true,
//     animation: google.maps.Animation.DROP,
//     position: {lat: lat, lng: lng}
//   });
// });

$(function() {

  setInterval(function(){ getLocation.initialize(); }, 5000);
});

var getLocation = {
   initialize: function() {
     getLocation.fetch_data();
   },

   fetch_data: function() {
     var url_path = window.location.pathname;
     $.get(url_path, function(data) {
       const lat = data['lat'];
       const lng = data['lng'];
       getLocation.draw_map(lat, lng);
     }, 'json');
   },

   draw_map: function(lat, lng) {

     var companyLatlng = new google.maps.LatLng(lat, lng);
     var mapOptions = {
       zoom: 15,
       center: companyLatlng,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }
     var map = new google.maps.Map(document.getElementById('map'), mapOptions);
     var marker = new google.maps.Marker({
       position: companyLatlng,
       map: map
     });
   }
}
