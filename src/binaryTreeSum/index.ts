type N = [value: number, left?: N | null, right?: N | null];

export const n1: N = [1, [2, null, [4]], [3, [5]]];
export const n2: N = [
	12,
	[-1],
	[13, [-10, [5, [1, null, [90]]]], [-13, [45, null, [23, null, [12]]]]],
];

export function sumBinaryTree(rootNode: N) {
	let [value, ...rest] = rootNode;
	const nodes = rest.filter((n) => n);
	while (nodes.length) {
		value += sumBinaryTree(nodes.shift());
	}
	return value;
}

console.log(sumBinaryTree(n1));
console.log(sumBinaryTree(n2));
console.log(n1);
console.log(n2);

type Node = {
	value: number;
	left?: Node;
	right?: Node;
};

export const sum = (root: Node = null): number => {
	if (root === null) return 0;
	return root.value + sum(root.left) + sum(root.right);
};

const root: Node = {
	value: 2,
	left: {
		value: 3,
		left: { value: 4 },
	},
	right: {
		value: 6,
		right: {
			value: 7,
		},
	},
};

console.log(sum(root));
