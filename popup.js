$(document).ready( function() {
  $("#ReloadButton").click(function(){
    chrome.extension.getBackgroundPage().dataReload();
    setLastUpdate();
  });
  setLastUpdate();
});

function setLastUpdate(){
  var target = document.getElementById("last_update");
  target.innerHTML = chrome.extension.getBackgroundPage().getLastUpdate();
}
