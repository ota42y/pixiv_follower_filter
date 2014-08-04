$(document).ready( function() {
  $("#ReloadButton").click(function(){
    chrome.extension.getBackgroundPage().dataReload();
  });

  // if last update is exist, set data
  var target = document.getElementById("last_update");
  target.innerHTML = chrome.extension.getBackgroundPage().getLastUpdate();
});
