function add(a: number, b: number) {
    return a + b;
  }
  const sum: number = add(1, 2);
  console.log(sum); // 3

let isBoolean: boolean;
let isDone: boolean = false;

// console.log(isBoolean);
console.log(isDone);

let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484
let infinity: number = Infinity;
let nan: number = NaN;

console.log(integer);

enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

console.log(Week.Mon);