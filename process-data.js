const
	_ = require('lodash'),
	data = require('./data/data'),
	itemsBoxesVol = data.items.map(item => data.boxes.map(box => Math.floor(box.maxVol / item.vol))),
	itemsBoxesWgt = data.items.map(item => data.boxes.map(box => Math.floor(box.maxWgt / item.wgt))),
	itemsBoxesVolWgt = _.zip(_.flatten(itemsBoxesVol), _.flatten(itemsBoxesWgt)),
	minCapacities = _.chunk(_.map(itemsBoxesVolWgt, item => (item[0] < item[1] ? item[0] : item[1])), 3);

exports.minCapacities = minCapacities;