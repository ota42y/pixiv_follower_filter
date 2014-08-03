console.log("button");
console.log($("#ReloadButton"));

$(document).ready( function() {
  $("#ReloadButton").click(function(){
    console.log("clicked")
    target = document.getElementById("last_update");
    target.innerHTML = "Click";
  });
});
