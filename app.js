const
	orders = [26, 10, 10],
	items = [
		{
			vol: 10,
			wgt: 1,
			count: orders[0],
		},
		{
			vol: 32,
			wgt: 2,
			count: orders[1],
		},
		{
			vol: 11,
			wgt: 3,
			count: orders[2],
		},],
	boxes = [
		{
			maxVol: 100,
			maxWgt: 15,
		},
		{
			maxVol: 60,
			maxWgt: 10,
		},
		{
			maxVol: 25,
			maxWgt: 5,
		},
	],
	// [ 10, 6, 2 ] [ 3, 1, 0 ] [ 9, 5, 2 ]
	itemsBoxes = items.map(item => boxes.map(box => Math.floor(box.maxVol / item.vol)));

const getBoxCount = (items, boxList = [], step = 0, boxCapacityList = itemsBoxes[0]) => {
	const
		boxCount = Math.floor(items / boxCapacityList[step]),
		remainder = items % boxCapacityList[step];

	if (boxCount) {
		boxList.push(boxCount);
	}

	if (remainder) {
		getBoxCount(remainder, boxList, ++step);
	}

	return boxList;
};

finalList = getBoxCount(orders[0]);

console.log(finalList);