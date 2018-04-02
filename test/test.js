const app = require('../app');

QUnit.test( "one big box", assert => {
	assert.deepEqual(
		app.getBoxCount([10], [10, 5, 2]),
		[ [ 'box 1', 1 ] ],
		"should return one big box");
});

QUnit.test( "one big box, one medium box", assert => {
	assert.deepEqual(
		app.getBoxCount([15], [10, 5, 2]),
		[ [ 'box 1', 1 ], [ 'box 2', 1 ] ],
		"should return one big box, one medium box");
});

QUnit.test( "one big box, one medium box, one small box", assert => {
	assert.deepEqual(
		app.getBoxCount([17], [10, 5, 2]),
		[ [ 'box 1', 1 ], [ 'box 2', 1 ], [ 'box 3', 1 ] ],
		"should return one big box, one medium box, one small box");
});

QUnit.test( "overflow", assert => {
	assert.deepEqual(
		app.getBoxCount([18], [10, 5, 2]),
		[ [ 'box 1', 1 ], [ 'box 2', 1 ], [ 'box 3', 2 ] ],
		"should return one big box, one medium box, two small boxes");
});