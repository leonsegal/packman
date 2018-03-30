console.time('app time');
const
	_ = require('lodash');
	// TODO: something like this:
	// newOrders = [[item[0], 53463],[item[1], 4747],[item[2], 43754],[item[3], 9933]],
	orders = [4523553245235353200000000000000000000000848390285985987697687687697678676969845362, 1262360, 12620, 326326],
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
	itemsBoxesVol = items.map(item => boxes.map(box => Math.floor(box.maxVol / item.vol))),
	itemsBoxesWgt = items.map(item => boxes.map(box => Math.floor(box.maxWgt / item.wgt))),
	itemsBoxesVolWgt = _.zip(_.flatten(itemsBoxesVol), _.flatten(itemsBoxesWgt)),
	minCapacities = [];

_.forEach(itemsBoxesVolWgt, item => minCapacities.push(item[0] < item[1] ? item[0] : item[1]));
minCapacities = _.chunk(minCapacities,3);

const getBoxCount = (items, boxList = [], step = 0, boxCapacityList = minCapacities[step]) => {
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