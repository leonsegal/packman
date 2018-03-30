const 
	order = [
		3334, 
		3333, 
		3333
	],
	items = [
		{vol: 17.5, wgt: 1, count: order[0]}, 
		{vol: 32, wgt: 2, count: order[1]}, 
		{vol: 11, wgt: 3, count: order[2]}
	],
	boxes = [
		{maxVol: 40, maxWgt: 15}, 
		{maxVol: 20, maxWgt: 10}, 
		{maxVol: 5, maxWgt: 5}
	],
	bigList = [];

function getBoxCountList(itemsVol, boxVol, boxMaxList = [], boxNumber = 0) {
	const thisBoxCount = Math.round(itemsVol / boxVol);

	boxMaxList.push(thisBoxCount);

	if (itemsVol / boxVol > thisBoxCount) {
		getBoxCountList(itemsVol % boxVol, boxes[boxNumber += 1].maxVol, boxMaxList, boxNumber);
	}

	return boxMaxList;
}

items.forEach(item => {
	bigList.push(boxList = getBoxCountList(item.vol * item.count, boxes[0].maxVol));
});

console.log(bigList);