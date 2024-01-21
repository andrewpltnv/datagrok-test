export const inputStr = "ATTTGC";

export function rle([...input]: string) {
	let buffer: [string, number] = [input.shift(), 1];
	let zip = "";
	for (const char of input) {
		if (char !== buffer[0]) {
			zip = zip.concat(buffer.join(""));
			buffer = [char, 1];
			continue;
		}
		buffer[1]++;
	}
	zip = zip.concat(buffer.join(""));
	return zip;
}

const x = rle(inputStr);
console.log({ x });

// TODO maybe make an Encoder as class
