"use strict";
exports.__esModule = true;
exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
var sum = add(1, 2);
console.log(sum); // 3
var isBoolean;
var isDone = false;
// console.log(isBoolean);
console.log(isDone);
var num;
var integer = 6;
var float = 3.14;
var hex = 0xf00d; // 61453
var binary = 10; // 10
var octal = 484; // 484
var infinity = Infinity;
var nan = NaN;
console.log(integer);
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 22] = "Mon";
    Week[Week["Tue"] = 23] = "Tue";
    Week[Week["Wed"] = 24] = "Wed";
    Week[Week["Thu"] = 25] = "Thu";
    Week[Week["Fri"] = 26] = "Fri";
    Week[Week["Sat"] = 27] = "Sat";
})(Week || (Week = {}));
console.log(Week.Mon); //22
console.log(Week.Tue); //23
