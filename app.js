
const
	_ = require('lodash'),
	data = require('./data'),
	// orders = [10, 11, 12, 13];
	orders = [10];

const getBoxCount = (items, boxCapacityList, step = 0, boxList = []) => {
	const
		boxCount = Math.floor(items / boxCapacityList[step]),
		remainder = items % boxCapacityList[step];

	if (boxCount) {
		boxList.push([`box ${step+1}`, boxCount]);
	}

	if (remainder) {
		step += 1;

		if (step === boxCapacityList.length) {
			boxList.push([`box ${step}`, 1]);
		}

		getBoxCount(remainder, boxCapacityList, step, boxList);
	}

	return boxList;
};

const boxesNeeded = _.map(
	orders,
	(order, key) => getBoxCount(order, data.minCapacities[key])
);
console.log(getBoxCount([10],[10,5,2]));
exports.getBoxCount = getBoxCount;
exports.orders = orders;