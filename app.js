const _ = require('lodash');

const getBoxCount = (items, boxCapacityList, step = 0, boxList = []) => {
	let boxCount = Math.floor(items / boxCapacityList[step]);
	const remainder = items % boxCapacityList[step];

	if (remainder && step === boxCapacityList.length - 1) {
		boxCount += 1;
	}

	if (boxCount) {
		boxList.push([`box ${step+1}`, boxCount]);
	}

	if (remainder) {
		step += 1;

		getBoxCount(remainder, boxCapacityList, step, boxList);
	}

	return boxList;
};

exports.getBoxCount = getBoxCount;