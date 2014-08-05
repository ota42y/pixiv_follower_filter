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
  localStorage['last_update'] = 'aaa';
  console.log("saved!")
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
    $.get(url, function(data){
      console.log(data);
    });
  }
}
