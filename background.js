function dataReload(){
  localStorage['last_update'] = 'loading...';

  chrome.storage.local.clear(function(){
    localStorage['last_update'] = 'loading...';
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

}
