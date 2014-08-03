$(document).ready( function() {
  $("#ReloadButton").click(function(){
    console.log("clicked")
    var target = document.getElementById("last_update");
    target.innerHTML = "Click";
  });

  // if last update is exist, set data
  chrome.storage.local.get("last_update",function(result){
    var value = result["last_update"];
    if (value){
      var target = document.getElementById("last_update");
      target.innerHTML = value;
    }
  });
});
