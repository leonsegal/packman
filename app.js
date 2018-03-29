const 
	order = [555, 300, 400],
	items = [{vol: 3, wgt: 1, count: order[0]}, {vol: 2, wgt: 2, count: order[1]}, {vol: 1, wgt: 3, count: order[2]}],
	boxes = [{maxVol: 30, maxWgt: 15}, {maxVol: 20, maxWgt: 10}, {maxVol: 10, maxWgt: 5}],
	boxMaxes = []
	boxNumber = 0;

function getBoxCount(itemVol, boxVol) {
	const 
		remainder =  itemVol % boxVol,
		numBoxes = Math.round(itemVol / boxVol);

		boxMaxes.push(numBoxes);

	boxNumber += 1;

	if (boxNumber < numBoxes) {
		getBoxCount(remainder, boxes[boxNumber].maxVol);
	}
}

getBoxCount(items[0].vol * items[0].count, boxes[boxNumber].maxVol);

console.log(boxMaxes);