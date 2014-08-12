var now_page = 0;

function getState(){
  return localStorage['state'];
}


function switchState(){
  var state = localStorage['state'];
  if(state == "false"){
    state = false;
  }

  if(state){
    localStorage['state'] = false;
  }else{
    localStorage['state'] = true;
  }
}


function dataReload(){
  localStorage['last_update'] = 'loading...';
  now_page = 0;

  chrome.storage.local.clear(function(){
    localStorage['last_update'] = 'loading...';
    now_page = 1;
    setTimeout("loadFollowData()", 0);
  });
}

function setLastUpdate(){
  var last_update = (new Date()).toLocaleString();
  localStorage['last_update'] = last_update;
  console.log("last update " + last_update)
}

function getLastUpdate(){
  var last_update = localStorage['last_update'];
  if(last_update){
    return last_update;
  }else{
    return "none";
  }
}

function loadFollowData(){
  if(now_page != 0){
    var url = "http://www.pixiv.net/bookmark.php?type=user&rest=show&p=" + now_page
    console.log("check " + url);
    $.get(url, function(data){

      // get all member id in page
      var members = $(data).find("div.members input");
      var members_num = members.length
      for(var index = 0; index < members_num; index++){
        var member = members[index];
        var member_id = member.value;
        localStorage[member_id] = true;
      }

      // check next page if exist
      var next = $(data).find(".button[rel='next']").length;
      if(next != 0){
        now_page++;
        setTimeout("loadFollowData()", 3000);
      }else{
        // all data checked
        setLastUpdate();
      }
    });
  }
}

function isRemoveUser(request, sender, sendResponse){
  var is_remove = false;
  if(localStorage['state'] == "true"){
    is_remove = localStorage[request.member_id];
  }

  sendResponse({is_remove: is_remove, member_id: request.member_id});
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "isRemoveUser"){
    isRemoveUser(request, sender, sendResponse)
  }else if(request.method == "isEnable"){
    sendResponse({is_enable: getState()});
  }else{
    sendResponse({}); // snub them.
  }
});
