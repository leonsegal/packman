console.time('app time');
require('./data');

const
_ = require('lodash');
	orders = [4448, 4443, 4444, 4444];

const getBoxCount = (items, boxCapacityList, step = 0, boxList = []) => {
	console.log(items, boxCapacityList[step]);
	const
		boxCount = Math.floor(items / boxCapacityList[step]),
		remainder = items % boxCapacityList[step];

	if (boxCount) {
		boxList.push([step, boxCount]);
	}

	if (remainder) {
		step += 1;
		getBoxCount(remainder, boxCapacityList, step, boxList);
	}

	return boxList;
};

const boxesNeeded = _.map(
	orders,
	(order, key) => getBoxCount(order, minCapacities[key])
);
console.log(boxesNeeded);
console.timeEnd('app time');