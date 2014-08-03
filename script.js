isRemoveUser = function(user_id) {
	return true;
}

// get illust_iteml
var items = document.getElementsByClassName("image-item")
var items_num = items.length
for(var index = items_num - 1; 0 <= index; index--){
	item = items[index]

	var user_object = item.querySelector(".user")
	var user_id = user_object.dataset.user_id

	console.log("user_id")

	if(isRemoveUser(user_id)){
		item.parentNode.removeChild(item)
		items_num--;
	}
}
