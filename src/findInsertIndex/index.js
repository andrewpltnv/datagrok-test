"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIndex = void 0;
function findIndex(values, target) {
    var _a = [0, values.length - 1], i = _a[0], n = _a[1];
    var index = 0;
    function checkLeft() {
        if (target <= values[i]) {
            return index = i;
        }
        i++;
        return -1;
    }
    function checkRight() {
        if (target === values[n]) {
            return index = n;
        }
        else if (target > values[n]) {
            return index = ++n;
        }
        n--;
        return -1;
    }
    function checkMid() {
        var pivot = (i + n);
        if (target == values[pivot]) {
        }
        return -1;
    }
    while (n - i <= 0 || !checkLeft() || !checkRight()) {
        if (checkMid()) {
            return index;
        }
    }
    return index;
}
exports.findIndex = findIndex;
console.log(findIndex([0, 1, 6], 1));
