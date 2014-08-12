removeUser = function(user_id) {
	// get illust_iteml
	var items = document.getElementsByClassName("image-item")
	var items_num = items.length
	for(var index = items_num - 1; 0 <= index; index--){
		var item = items[index]

		var user_object = item.querySelector(".user")
		var member_id = user_object.dataset.user_id

		if(user_id == member_id){
			item.parentNode.removeChild(item)
			return;
		}
	}
}

chrome.runtime.sendMessage({method: "isEnable"}, function(response) {
	var state = response.is_enable;
	if(state == "false"){
		state = false;
	}

	if(state){
		// get illust_iteml
		var items = document.getElementsByClassName("image-item")
		var items_num = items.length
		for(var index = items_num - 1; 0 <= index; index--){
			var item = items[index]

			var user_object = item.querySelector(".user")
			var member_id = user_object.dataset.user_id

			chrome.runtime.sendMessage({method: "isRemoveUser", member_id: member_id}, function(response) {
				if(response.is_remove){
					console.log(response.member_id + " is followed");
					removeUser(response.member_id);
				}
			});
		}
	}
});
