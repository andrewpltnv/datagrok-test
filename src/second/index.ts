// Point[0] < Point[1] // [-25.2,-10.5] | [-10,28] | and so on
type Point = [number, number];

function isBetween(searchOne: number, [a0, a1]: Point): boolean {
	return searchOne > a0 && searchOne < a1;
}

function findPointInCommon(origin: Point, comp: Point) {
	let resultPoint: Point;
	if (isBetween(origin[0], comp)) {
		resultPoint = [origin[0], comp[1]];
	} else if (isBetween(origin[1], comp)) {
		resultPoint = [comp[0], origin[1]];
	}
	return resultPoint;
}
class RectClass {
	width;
	height;
	constructor(
		public x: Point,
		public y: Point,
	) {
		this.width = x[1] - x[0];
		this.height = y[1] - y[0];
	}
	area() {
		return this.height * this.width;
	}
	intersectionArea(rect: RectClass) {
		const cx = findPointInCommon(rect.x, this.x);
		const cy = findPointInCommon(rect.y, this.y);
		return new RectClass(cx, cy).area();
	}
}

const rect1 = new RectClass([-10, 10.3], [-5, 15]);
const rect2 = new RectClass([0, 15], [-3.9, 23.7]);
console.log(rect1.intersectionArea(rect2));
console.log(rect2.intersectionArea(rect1));

function intersectionArea(rect1, rect2) {
	const cx = findPointInCommon(rect1.x, rect2.x);
	const cy = findPointInCommon(rect1.y, rect2.y);
	return new RectClass(cx, cy).area();
}

console.log(intersectionArea(rect1, rect2));
