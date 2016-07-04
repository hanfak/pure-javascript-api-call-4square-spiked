// $(document).ready(function() {
//   $("#location").focus();
//
//   $(document).on('keypress', '#location', function(event) {
//     if (event.which === 13) {
//       // $('.error').empty();
//       document.getElementById("error").innerHTML = '';
//       var input = $(this);
//       var location = input.val();
//       $(this).val("");
//       getFourSquareInfo(location);
//       // $('.venue').empty();
//       document.getElementsByClassName("venue")[0].innerHTML = '';
//     }
//   });
// });


// document.addEventListener("DOMContentLoaded", function() {
//   // $("#location").focus();
//   SetFocus();
//
//   $(document).on('keypress', '#location', function(event) {
//     if (event.which === 13) {
//       // $('.error').empty();
//       document.getElementById("error").innerHTML = '';
//
//       // var input = $(this);
//       // var location = input.val();
//       // $(this).val("");
//       var location = document.getElementById("location").value;
//       document.getElementById("location").value = '';
//
//       getFourSquareInfo(location);
//
//       // $('.venue').empty();
//       document.getElementsByClassName("venue")[0].innerHTML = '';
//     }
//   });
// });


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
