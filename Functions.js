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
		let count_before = Player.getAmountOfItemInInv(id, data);
		Player.addItemInventory(id, amount, data);
		let count_after = Player.getAmountOfItemInInv(id, data);
		if(!(count_after > count_before)) {
			Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 0, id, amount, data);
		}
	} catch(e) {
		clientMessage("Error: " + e);
	}
}
