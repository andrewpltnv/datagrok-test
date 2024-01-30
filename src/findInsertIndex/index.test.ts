import { findIndex } from ".";

describe("Find index of item in array", () => {
	test("0 in [1] => 0", () => {
		expect(findIndex([1], 0)).toEqual(0);
	});
	test("7 in [1, 3, 5, 6] => 4", () => {
		expect(findIndex([1, 3, 5, 6], 7)).toEqual(4);
	});
	test("4 in [1, 3, 5, 6] => 2", () => {
		expect(findIndex([1, 3, 5, 6], 4)).toEqual(2)
	})
});
