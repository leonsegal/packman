const
	_ = require('lodash');
items = [
	{vol: 14, wgt: 2},
	{vol: 32, wgt: 2},
	{vol: 11, wgt: 3},
	{vol: 44, wgt: 3},
],
	boxes = [
		{maxVol: 74, maxWgt: 15},
		{maxVol: 60, maxWgt: 10},
		{maxVol: 25, maxWgt: 5},
	],
	itemsBoxesVol = items.map(item => boxes.map(box => Math.floor(box.maxVol / item.vol))),
	itemsBoxesWgt = items.map(item => boxes.map(box => Math.floor(box.maxWgt / item.wgt))),
	itemsBoxesVolWgt = _.zip(_.flatten(itemsBoxesVol), _.flatten(itemsBoxesWgt)),
	minCapacities = _.chunk(_.map(itemsBoxesVolWgt, item => (item[0] < item[1] ? item[0] : item[1])), 3);