const
	order = [26, 10, 10],
	items = [
		{
			vol: 10,
			wgt: 1,
			count: order[0],
		},
		{
			vol: 32,
			wgt: 2,
			count: order[1],
		},
		{
			vol: 11,
			wgt: 3,
			count: order[2],
		},],
	boxes = [
		{
			maxVol: 100,
			maxWgt: 15,
		},
		{
			maxVol: 60,
			maxWgt: 10,
		},
		{
			maxVol: 25,
			maxWgt: 5,
		},
	],
	itemsPerBox = items.map(item => boxes.map(box => Math.floor(box.maxVol / item.vol)));

console.log(itemsPerBox);
// [ 10, 6, 2 ] [ 3, 1, 0 ] [ 9, 5, 2 ]