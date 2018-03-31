console.time('app time');
require('./data');

const
	_ = require('lodash');
	orders = [3333, 4444, 5555, 3443];

const getBoxCount = (items, boxCapacityList, boxList = [], step = 0) => {
	const
		boxCount = Math.floor(items / boxCapacityList[step]),
		remainder = items % boxCapacityList[step];

	if (boxCount) {
		boxList.push(boxCount);
	}

	if (remainder) {
		getBoxCount(remainder, ++step);
	}

	return boxList;
};

const boxesNeeded = _.map(orders, (order, key) => getBoxCount(order, minCapacities[key]));
console.log(boxesNeeded);
console.timeEnd('app time');