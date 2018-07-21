const app = require('../app');

QUnit.test('one big box',
	assert => assert.deepEqual(
		app.getBoxCountSingle([10], [10, 5, 2]),
		[['box 1', 1]],
		'should return one big box'));

QUnit.test('one big box, one medium box',
	assert => assert.deepEqual(
		app.getBoxCountSingle([15], [10, 5, 2]),
		[['box 1', 1], ['box 2', 1]],
		'should return one big box, one medium box'));

QUnit.test('one big box, one medium box, one small box',
	assert => assert.deepEqual(
		app.getBoxCountSingle([17], [10, 5, 2]),
		[['box 1', 1], ['box 2', 1], ['box 3', 1]],
		'should return one big box, one medium box, one small box'));

QUnit.test('overflow',
	assert => assert.deepEqual(
		app.getBoxCountSingle([18], [10, 5, 2]),
		[['box 1', 1], ['box 2', 1], ['box 3', 2]],
		'should return one big box, one medium box, two small boxes'));

QUnit.test('multi, one big box',
	assert => assert.deepEqual(
		app.getBoxCountMultiple([18, 10], [[10, 5, 2], [10, 5, 2]]),
		[[['box 1', 1], ['box 2', 1], ['box 3', 2]], [['box 1', 1]]],
		'should return one big box, one medium box, two small boxes for item 1 and 1 large for item 2'));

QUnit.test('multi, many boxes',
	assert => assert.deepEqual(
		app.getBoxCountMultiple([18, 18], [[10, 5, 2], [10, 5, 2]]),
		[[['box 1', 1], ['box 2', 1], ['box 3', 2]], [['box 1', 1], ['box 2', 1], ['box 3', 2]]],
		'should return one big box, one medium box, two small boxes for items 1 and 2'));

QUnit.test('multi, many boxes',
	assert => assert.deepEqual(
		app.getBoxCountMultiple([18, 18], [[10, 5, 2], [10, 5, 1]]),
		[[['box 1', 1], ['box 2', 1], ['box 3', 2]], [['box 1', 1], ['box 2', 1], ['box 3', 3]]],
		'should return one big box, one medium box, two small boxes for items 1 and 2 (plus extra small box)'));

// check if items/capacity list don't match up