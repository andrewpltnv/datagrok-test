// LinePoints[0] < LinePoints[1] // [-25.2,-10.5] | [-10,28] | and so on
type LinePoints = [number, number];

function isBetween(searchOne: number, [a0, a1]: LinePoints): boolean {
	return searchOne > a0 && searchOne < a1;
}

function findLinePointsInCommon(origin: LinePoints, comp: LinePoints) {
	let resultLinePoints: LinePoints = [0, 0];
	if (isBetween(origin[0], comp)) {
		resultLinePoints = [origin[0], comp[1]];
	} else if (isBetween(origin[1], comp)) {
		resultLinePoints = [comp[0], origin[1]];
	}
	return resultLinePoints;
}
class RectClass {
	width;
	height;
	constructor(
		public x: LinePoints,
		public y: LinePoints,
	) {
		this.width = x[1] - x[0];
		this.height = y[1] - y[0];
	}
	area() {
		return this.height * this.width;
	}
	intersectionArea(rect: RectClass) {
		const cx = findLinePointsInCommon(rect.x, this.x);
		const cy = findLinePointsInCommon(rect.y, this.y);
		return new RectClass(cx, cy).area();
	}
}

const rect1 = new RectClass([-10, 10.3], [-5, 15]);
const rect2 = new RectClass([0, 15], [-3.9, 23.7]);
console.log(rect1.intersectionArea(rect2));
console.log(rect2.intersectionArea(rect1));

function intersectionArea(rect1: RectClass, rect2: RectClass) {
	const cx = findLinePointsInCommon(rect1.x, rect2.x);
	const cy = findLinePointsInCommon(rect1.y, rect2.y);
	return new RectClass(cx, cy).area();
}

console.log(intersectionArea(rect1, rect2));
