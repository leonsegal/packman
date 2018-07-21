const _ = require('lodash');

const getBoxCountSingle = (items, boxCapacityList, step = 0, boxList = []) => {
	let boxCount = Math.floor(items / boxCapacityList[step]);
	const
		remainder = items % boxCapacityList[step],
		lastStep = boxCapacityList.length - 1;

	if (remainder && step === lastStep) {
		boxCount += 1;
	}

	if (boxCount) {
		boxList.push([`box ${step + 1}`, boxCount]);
	}

	if (remainder && step !== lastStep) {
		step += 1;

		getBoxCountSingle(remainder, boxCapacityList, step, boxList);
	}

	return boxList;
};

const getBoxCountMultiple = (multiItems, capacityList) => _.map(multiItems, (item, key) => getBoxCountSingle(item, capacityList[key]));

exports.getBoxCountSingle = getBoxCountSingle;
exports.getBoxCountMultiple = getBoxCountMultiple;