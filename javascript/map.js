 function initMap() {
          var uluru = {lat: -23.3176873, lng: -45.9255254};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: uluru
          });
          var marker = new google.maps.Marker({
            position: uluru,
            map: map
          });
  }
