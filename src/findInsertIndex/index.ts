export function findIndex(values: number[], target: number) {
	let [i, n] = [0, values.length - 1];
	let index = 0;

	function checkLeft() {
		console.log("left: ", { i, n });
		if (target <= values[i]) {
			return (index = i);
		}
		i++;
		return false;
	}

	function checkRight() {
		console.log("right: ", { i, n });
		if (target === values[n]) {
			return (index = n);
		} else if (target > values[n]) {
			return (index = ++n);
		}
		n--;
		return false;
	}
	function checkMid() {
		const pivot = Math.round((i + n) / 2 + 0.5);
		if (target == values[pivot]) {
			return (index = pivot);
		}
		return false;
	}

	while (i !== n || !checkLeft() || !checkRight()) {
		if (checkMid()) {
			return index;
		}
	}

	return index;
}

console.log(findIndex([1, 6], 9));
