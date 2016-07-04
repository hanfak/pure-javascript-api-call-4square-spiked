document.addEventListener("DOMContentLoaded", function() {
  _SetFocus();
});

function inputKeyUp(event) {
  if(event.which == 13) {
    _clearError();
    var location = _storeLocationInput();
    document.getElementById("location").value = '';
    getFourSquareInfo(location);
    _clearResults();
  }
}

function _SetFocus() {
  var locationElement = document.getElementById("location");
  if(locationElement !== null){
    locationElement.focus();
  }
}

function _clearError() {
  document.getElementById("error").innerHTML = '';
}

function _storeLocationInput (){
  return document.getElementById("location").value;
}

function _clearResults(){
  document.getElementsByClassName("venue")[0].innerHTML = '';
}
