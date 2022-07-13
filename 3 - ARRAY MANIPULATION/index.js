// HELPER FUNCTION; DO NOT EDIT
Array.isEqual = function (array1, array2) {
	if (!array1 || !array2)
		return false

	if (array1.length !== array2.length)
		return false

	for (i = 0, l = array1.length; i < l; i++) {

		if (array1[i] instanceof Array && array2[i] instanceof Array) {
			if (Array.isEqual(array1[i], array2[i]))
				return false
		}
		else if (array1[i] !== array2[i]) {
			return false
		}
	}
	return true;
}
// HELPER FUNCTION; DO NOT EDIT

/*
Let's create an array manipulation library called '_' where we implement functions such as:
Map - like each but would return an array with altered contents depending on the function
Reduce - reduce an array into a value, can accept optional initial value
Head - get the initial value of the array
Tail - get the last value of the array
Join - join the array elements into a string given a parameter
*/

// FILL OUT THE FUNCTIONS *****************

const $ = {
	filter: function (arr, cb) {
		if (arr.length > 0) {
			let temp = [];
			for (let i = 0; i < arr.length; ++i) {
				if (cb(arr[i])) {
					temp.push(arr[i]);
				}
			}

			return temp;
		}
		return [];
	},
	map: function (arr1, cb) {
		if (arr1.length > 0) {
			let temp = [];
			for (let i = 0; i < arr1.length; ++i) {
				temp.push(cb(arr1[i]));
			}

			return temp;
		}

		return [];
	},
	reduce: function (arr, cb, initial) {

		let acc = 0;

		if (arr.length > 0) {
			if (initial) {
				acc = initial;
			}

			for (let i = 0; i < arr.length; ++i) {
				acc = cb(arr[i], acc);
			}

			return acc;
		}


		// array is empty and initial undefined -> []
		if (initial === undefined) {
			return [];
		}

		return initial;
	},
	head: function (arr) {
		if (arr.length > 0) {
			return arr[0];
		}

		return undefined;
	},
	tail: function (arr) {
		if (arr.length > 0) {
			return arr[arr.length - 1];
		}

		return undefined;
	},
	join: function (arr) {
		if (arr.length > 0) {
			let str = "";
			for (let i = 0; i < arr.length; ++i) {
				str += arr[i];
				if (i < arr.length - 1) {
					str += "-";
				}
			}

			return str;
		}

		return ''
	}
};

// *****************************************

// TESTS

(_ => {
	console.log('Running _.filter...');

	// Filtering array
	console.log(
		Array.isEqual($.filter([1, 2, 3], function (num) { return num < 2 }), [1])
	);

	// Filtering empty array
	console.log(
		Array.isEqual($.filter([], function (num) { return num < 2 }), [])
	);

	console.log('Running _.map...');

	// Mapping array
	console.log(
		Array.isEqual($.map([5, 6, 7], function (num) { return num + 3 }), [8, 9, 10])
	);

	// Mapping empty array
	console.log(
		Array.isEqual($.map([], function (num) { return num < 2 }), [])
	);

	console.log('Running _.reduce...');

	// Adding numbers
	console.log(
		($.reduce([1, 2, 3], function (acc, num) { return acc + num }) === 6)
	);

	// Adding empty list
	console.log(
		Array.isEqual($.reduce([], function (acc, num) { return acc + num }), [])
	);

	// Adding with initial value
	console.log(
		($.reduce([], function (acc, num) { return acc + num }, 0) === 0)
	);

	console.log(
		($.reduce([1, 2, 3], function (acc, num) { return acc + num }, 4) === 10)
	);

	console.log('Running _.head...');

	// Getting top of array
	console.log(
		($.head([1, 2, 3]) === 1)
	);

	// Getting top of empty array
	console.log(
		($.head([]) === undefined)
	);

	console.log('Running _.tail...');

	// Getting tail of array
	console.log(
		($.tail([1, 2, 3]) === 3)
	);

	// Getting tail of empty array
	console.log(
		($.tail([]) === undefined)
	);

	console.log('Running _.join...');

	// Joining array
	console.log(
		($.join(['to', 'be', 1], '-') === 'to-be-1')
	);

	// Joining empty array
	console.log(
		($.join([], '-') === '')
	);
})();