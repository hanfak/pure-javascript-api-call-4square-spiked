function inputKeyUp(e) {
  e.which = e.which || e.keyCode;
  if(e.which == 13) {
    document.getElementById("error").innerHTML = '';

    var location = document.getElementById("location").value;
    document.getElementById("location").value = '';

    getFourSquareInfo(location);

    document.getElementsByClassName("venue")[0].innerHTML = '';
  }
}
