function getFourSquareInfo(location) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url(location), true);
  xmlhttp.onload = function (e) {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      console.log(JSON.parse(xmlhttp.responseText));
      showPlaces(JSON.parse(xmlhttp.responseText));
    } else {
        noLocationExist(location);
    }
  };
  xmlhttp.onerror = function (e) {
    console.error(xmlhttp.statusText);
  };
  xmlhttp.send(null);
}

function url(location) {
  var today = new Date();
  today = today.toISOString().substring(0, 10).replace(/-/g, "");

  var base_url = "https://api.foursquare.com/v2/venues/explore?";
  var client_id = "client_id=" +  "Q4UBKJIGGIELBK0GKZXFCMZGLJPAJO0KD41PTQBW3BXGFYVK";
  var client_secret = "&client_secret=" + "UIXE2RMRQLTSXWHLN2IICVVR4MC4BSVOO3L1JAKQT22AX541";

  var search = "&v="+today+"&limit=20&venuePhotos=1&query=sights&section=trending";
  var searchLocation = "&near=" + location;
  return base_url + client_id + client_secret + search  + searchLocation;
}

function showPlaces(info) {
  var venues = info.response.groups[0].items;
  console.log(venues);
  detailsOf(venues);
}

function detailsOf(venues){
  venues.forEach(function (element, index, array) {
    console.log(venues[index].venue );
    document.getElementsByClassName('venue')[0].innerHTML += '<p class="name">'+venues[index].venue.name+'</p>';

    document.getElementsByClassName('venue')[0].innerHTML += '<p class="rating">'+ venues[index].venue.rating+'</p>';

    if (typeof venues[index].venue.url !== 'undefined') {
      document.getElementsByClassName('venue')[0].innerHTML += '<a class="url" href='+ venues[index].venue.url+'>Website</a>' ;
    }
  });
}

function noLocationExist(location) {
  document.getElementById("error").style.display = '';
  document.getElementById("error").innerHTML = "No location by the name, " + location + ", exists.";
}

function SetFocus(){
  var locationElement = document.getElementById("location");
  if(locationElement !== null){
    locationElement.focus();
  }
}
