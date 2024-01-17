type N = [value: number, left?: N | null, right?: N | null];

export const n1: N = [1, [2, null, [4]], [3, [5]]];
export const n2: N = [
	12,
	[-1],
	[13, [-10, [5, [1, null, [90]]]], [-13, [45, null, [23, null, [12]]]]],
];

export function sumBinaryTree(rootNode: N) {
	let [value, ...rest] = rootNode;
	const cleared = rest.filter((n) => n);
	while (cleared.length) {
		value += sumBinaryTree(cleared.shift());
	}
	return value;
}

console.log(sumBinaryTree(n1));
console.log(sumBinaryTree(n2));
