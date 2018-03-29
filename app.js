const order = [	200, 300, 400];
const items = [{vol: 1,	wgt: 1, count: order[0]}, {vol: 2, wgt: 2, count: order[1]}, {vol: 3, wgt: 3, count: order[2]}];
const boxes = [{maxVol: 30, maxWgt: 15}, {maxVol: 20, maxWgt: 10}, {maxVol: 20, maxWgt: 10}];

const
	item1Vol = order[0] * items[0].vol,
	item1Wgt = order[0] * items[0].wgt,
	maxCountBox1Item1Vol = boxes[0].maxVol/items[0].vol,
	maxCountBox1Item1Wgt = boxes[0].maxWgt/items[0].wgt,
	maxCountBox1Item1 = Math.min(maxCountBox1Item1Vol, maxCountBox1Item1Wgt);

const orderBoxes = [];

function getBoxCount (box) {
	items.forEach(item => {
		const 
			itemVol = item.count * item.vol,
			itemWgt = item.count * item.wgt,
			maxCountVol = box.maxVol / item.vol,
			maxCountWgt = box.maxWgt / item.wgt,
			maxCount = Math.min(maxCountVol, maxCountWgt),
			boxCount = item.count / maxCount;	

		orderBoxes.push(boxCount);
	});
}

boxes.forEach(box => {
	getBoxCount(box);
});

console.log(orderBoxes);