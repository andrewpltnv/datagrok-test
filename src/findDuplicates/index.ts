const arr = [2, 1, 3, 4, 5, 6, 4];

export function findDuplicate(values: number[]) {
	for (let i = 0; i < values.length; i++) {
		console.count();
		if (values.includes(values[i], i + 1)) return values[i];
	}
}

console.log(findDuplicate(arr));
