const arr = [2, 1, 3, 4, 5, 6, 4];

export function findDuplicate([...values]: number[]) {
	while (values.length > 1) {
		const element = values.pop();
		if (values.indexOf(element) !== -1) return element;
	}
}

findDuplicate(arr);
