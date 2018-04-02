const
	test = 2,
	_ = require('lodash'),
		items = [
		{vol: 1, wgt: 1},
		{vol: 1, wgt: 1},
		{vol: 1, wgt: 1},
		{vol: 1, wgt: 1},
	],
	boxes = [
		{maxVol: 10, maxWgt: 10},
		{maxVol: 5, maxWgt: 5},
		{maxVol: 2, maxWgt: 2},
	],
	itemsBoxesVol = items.map(item => boxes.map(box => Math.floor(box.maxVol / item.vol))),
	itemsBoxesWgt = items.map(item => boxes.map(box => Math.floor(box.maxWgt / item.wgt))),
	itemsBoxesVolWgt = _.zip(_.flatten(itemsBoxesVol), _.flatten(itemsBoxesWgt)),
	minCapacities = _.chunk(_.map(itemsBoxesVolWgt, item => (item[0] < item[1] ? item[0] : item[1])), 3);
exports.minCapacities = minCapacities;