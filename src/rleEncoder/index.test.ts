import { rle } from ".";

describe("RLE Encoder", () => {
	test("ABBA => A1B2A1", () => {
		expect(rle("ABBA")).toEqual("A1B2A1");
	});
	test("ATTTGC => A1T3G1C1", () => {
		expect(rle("ATTTGC")).toEqual("A1T3G1C1");
	});
});
