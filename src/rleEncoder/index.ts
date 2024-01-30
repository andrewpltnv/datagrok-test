export const inputStr = "ABBA";

// export function rle([...input]: string) {
// 	let buffer: [string, number] = [input.shift(), 1];
// 	let zip = "";
// 	for (const char of input) {
// 		if (char !== buffer[0]) {
// 			zip = zip.concat(buffer.join(""));
// 			buffer = [char, 1];
// 			continue;
// 		}
// 		buffer[1]++;
// 	}
// 	zip = zip.concat(buffer.join(""));
// 	return zip;
// }

export function rle([...s]: string): string {
	let res: [string, number][] = [[s[0], 1]];
	// if (s.length == 1) return `${s[0]}1`
	for (let i = 1; i < s.length; i++) {
		const char = s[i];
		const last = res[res.length - 1];

		if (char !== last[0]) {
			res.push([char, 1]);
		} else {
			last[1]++;
		}
	}

	return res.flat(1).join("");
}

const x = rle(inputStr);
console.log({ x });

// TODO maybe make an Encoder as class
