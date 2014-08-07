$(document).ready( function() {
  $("#ReloadButton").click(function(){
    chrome.extension.getBackgroundPage().dataReload();
    setLastUpdate();
  });

  $("#Switch").click(function(){
    chrome.extension.getBackgroundPage().switchState();
    setNowState();
  });

  setLastUpdate();
  setNowState();
});

function setNowState(){
  var state = chrome.extension.getBackgroundPage().getState();
  if(state == "false"){
    state = false;
  }
  if(state){
    console.log(state);
    $("#Switch").attr("value","ON");
  }else{
    $("#Switch").attr("value","OFF");
  }
}

function setLastUpdate(){
  var target = document.getElementById("last_update");
  target.innerHTML = chrome.extension.getBackgroundPage().getLastUpdate();
}
