// const app = require('../app');
const app = require('../app');

QUnit.test( "boxcount present", assert => {
	assert.deepEqual(
		[ [ 'box 1', 1 ] ],
		app.getBoxCount([10], [10, 5, 2]),
		"boxcount is present!");
});