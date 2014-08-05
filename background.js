var now_page = 0;

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
  last_update = localStorage['last_update'];
  if(last_update){
    return last_update;
  }else{
    return "no data";
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
