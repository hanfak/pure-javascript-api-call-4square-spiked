function url(location) {
  var today = _todayDate();

  var base_url = "https://api.foursquare.com/v2/venues/explore?";
  var client_id = "client_id=" +  "Q4UBKJIGGIELBK0GKZXFCMZGLJPAJO0KD41PTQBW3BXGFYVK";
  var client_secret = "&client_secret=" + "UIXE2RMRQLTSXWHLN2IICVVR4MC4BSVOO3L1JAKQT22AX541";

  var search = "&v="+today+"&limit=20&venuePhotos=1&query=sights&section=trending";
  var searchLocation = "&near=" + location;
  return base_url + client_id + client_secret + search  + searchLocation;
}

function _todayDate(){
  var today = new Date();
  return today.toISOString().substring(0, 10).replace(/-/g, "");
}
