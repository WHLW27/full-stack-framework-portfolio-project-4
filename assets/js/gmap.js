// Initialize and add the map
function initMap() {
    // The location of Uluru
    const lindos = { lat: 36.091, lng: 28.088 }; 
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("goog-map"), {
      zoom: 4,
      center: lindos,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: lindos,
      map: map,
    });
  }
  
  window.initMap = initMap;