console.time('app time');
require('./data');

const
	_ = require('lodash');
	orders = [3333, 4444, 6666];

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

const boxesNeeded = _.map(orders, order => getBoxCount(order));
console.log(boxesNeeded);
console.timeEnd('app time');