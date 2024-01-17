class NodeClass {
	constructor(
		public value: number,
		public left?: NodeClass,
		public right?: NodeClass,
	) {}
}

const tree: NodeClass = new NodeClass(
	12,
	new NodeClass(12, null, new NodeClass(10)),
);

console.log({ tree });
