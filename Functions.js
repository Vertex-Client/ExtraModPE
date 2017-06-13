Player.getAmountOfItemInInv = function(id, data) {
	try {
		let count = 0;
		for(let i = 9; i < 45; i++) {
			if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == data) {
				count += Player.getInventorySlotCount(i);
			}
		}
		return count;
	} catch(e) {
		clientMessage("Error: " + e);
	}
}

Player.addOrDropItem = function(id, amount, data) {
	try {
		if(id == null || id == 0) {
			throw new Error("You must specify an id above 0!");
		}
		if(amount == null) {
			amount = 64;
		}
		if(data == null) {
			data = 0;
		}
		if(amount > 0) {
			let count_before = Player.getAmountOfItemInInv(id, data) + amount;
			Player.addItemInventory(id, amount, data);
			let count_after = Player.getAmountOfItemInInv(id, data);
			if(count_after != count_before) {
				Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 0, id, count_before - count_after, data);
			}
		} else {
			throw new Error("You can't add items with an amount below 1!");
		}
	} catch(e) {
		clientMessage("Error: " + e);
	}
}
