function dataReload(){
  setTimeout("setLastUpdate()", 3000);
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
