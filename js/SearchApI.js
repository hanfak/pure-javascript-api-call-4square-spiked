function getFourSquareInfo(location) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url(location), true);

  xmlhttp.onload = function (e) {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      _showPlaces(JSON.parse(xmlhttp.responseText));
    } else {
      _noLocationExist(location);
    }
  };

  xmlhttp.onerror = function (e) {
    console.error(xmlhttp.statusText);
  };

  xmlhttp.send(null);
}

function _showPlaces(info) {
  var venues = info.response.groups[0].items;
  _detailsOf(venues);
}

function _detailsOf(venues){
  venues.forEach(function (element, index, array) {
    _venueName(venues, index);
    _venueRating(venues, index);
    _venueUrl(venues,index);
  });
}

function _venueName(venues, index){
  return document.getElementsByClassName('venue')[0].innerHTML += '<p class="name">'+venues[index].venue.name+'</p>';
}

function _venueRating(venues, index) {
  return document.getElementsByClassName('venue')[0].innerHTML += '<p class="rating">'+ venues[index].venue.rating+'</p>';
}

function _venueUrl(venues, index){
  if (typeof venues[index].venue.url !== 'undefined') {
    return document.getElementsByClassName('venue')[0].innerHTML += '<a class="url" href='+ venues[index].venue.url+'>Website</a>' ;
  }
}

function _noLocationExist(location) {
  document.getElementById("error").style.display = '';
  document.getElementById("error").innerHTML = "No location by the name, " + location + ", exists.";
}
