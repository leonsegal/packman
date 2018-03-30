console.time('app time');
const
	_ = require('lodash');
	orders = [777, 10, 10, 3],
	items = [
		{vol: 10, wgt: 3, count: orders[0]},
		{vol: 32, wgt: 2, count: orders[1]},
		{vol: 11, wgt: 3, count: orders[2]},
		{vol: 44, wgt: 3, count: orders[3]},
	],
	boxes = [
		{maxVol: 74, maxWgt: 15},
		{maxVol: 60, maxWgt: 10},
		{maxVol: 25, maxWgt: 5},
	],
	itemsBoxesVol = _.flatten(items.map(item => boxes.map(box => Math.floor(box.maxVol / item.vol)))),
	itemsBoxesWgt = _.flatten(items.map(item => boxes.map(box => Math.floor(box.maxWgt / item.wgt)))),
	zipVolWgt = _.zip(itemsBoxesVol, itemsBoxesWgt),
	minCapacities = [];

_.forEach(zipVolWgt,item => minCapacities.push(item[0] < item[1] ? item[0] : item[1]));
minCapacities = _.chunk(minCapacities,3);

const getBoxCount = (items, boxList = [], step = 0, boxCapacityList = minCapacities[0]) => {
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

console.log(getBoxCount(orders[0]));
console.timeEnd('app time');