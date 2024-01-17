class LinkedListNode {
	constructor(
		public value,
		public next: LinkedListNode = null,
	) {}
}

class SinglyLinkedList {
	constructor(
		public head: LinkedListNode = null,
		public tail: LinkedListNode = null,
	) {}
	append(value) {
		const node = new LinkedListNode(value);
		if (!this.head || !this.tail) {
			this.head = node;
			this.tail = node;
			return this;
		}
		this.tail.next = node;
		this.tail = node;
		return this;
	}
	fromArray(array = []) {
		for (const value of array) this.append(value);
	}
	toArray() {
		const array = [];
		let node = this.head;
		while (node) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}
	kthToLastNode(k: number) {
		let node = this.head;
		for (let i = 0; i !== k - 1; i++) node = node.next;
		const kthNode = node.next;
		node.next = kthNode.next;
		this.append(kthNode.value);
	}
}
const list = new SinglyLinkedList();
list.append(1);
list.fromArray([2, 3, 8, 4, 5, 6, 7]);
console.log(list.toArray());
list.kthToLastNode(3);
console.log(list.toArray());
