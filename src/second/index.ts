// Point[0] < Point[1] // [-25.2,-10.5] | [-10,28] | and so on
type Point = [number, number];

type Rect = {
	x: Point;
	y: Point;
};

function findPointInCommon(origin: Point, comp: Point) {
	let resultPoint: Point;
	if (origin[0] > comp[0] && origin[0] < comp[1]) {
		resultPoint = [origin[0], comp[1]];
	} else if (origin[1] > comp[0] && origin[1] < comp[0]) {
		resultPoint = [comp[0], origin[1]];
	}
	return resultPoint;
}

class RectClass {
	width;
	height;
	constructor(
		public x: Rect["x"],
		public y: Rect["y"],
	) {
		this.width = x[1] - x[0];
		this.height = y[1] - y[0];
	}

	area() {
		return this.height * this.width;
	}

	intersectionRect(rect: RectClass) {
		const cx = findPointInCommon(rect.x, this.x);
		const cy = findPointInCommon(rect.y, this.y);

		const commonRect = new RectClass(cx, cy);
		return commonRect;
	}
}

const rect1 = new RectClass([-10, 10], [-5, 15]);
const rect2 = new RectClass([0, 15], [0, 23]);
console.log(rect1.intersectionRect(rect2).area());
