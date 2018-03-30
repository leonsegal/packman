const 
	order = [26, 10, 10],
	items = [
		{vol: 17, wgt: 1, count: order[0]}, 
		{vol: 32, wgt: 2, count: order[1]}, 
		{vol: 11, wgt: 3, count: order[2]}
	],
	boxes = [
		{maxVol: 10, maxWgt: 15}, 
		{maxVol: 9, maxWgt: 10}, 
		{maxVol: 8, maxWgt: 5}
	],
	bigList = [];

function getBoxCountList(itemsVol, boxVol, boxMaxList = [], boxNumber = 0) {
	let
		boxCount = Math.round(itemsVol / boxVol),
		remain = itemsVol % boxVol;

	boxMaxList.push(boxCount); // what if zero?
	boxNumber += 1;

	if (itemsVol / boxVol > boxCount && boxNumber < boxes.length) {
		getBoxCountList(remain, boxes[boxNumber].maxVol, boxMaxList, boxNumber);
	}

	return boxMaxList;
}

items.forEach(item => {
	bigList.push(boxList = getBoxCountList(item.vol * item.count, boxes[0].maxVol));
});

console.log(bigList);