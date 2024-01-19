const a = [1, 2, 3, 5, 7];
const b = [3, 4, 5, 6, 8];

export function intersectionCount([...a]: number[], [...b]: number[]) {
	if (a[0] > b[b.length - 1]) return 0;
	let count = 0;
	for (const el of a) {
		b.includes(el) && count++;
	}
	return count;
}

console.log(intersectionCount(a, b));
