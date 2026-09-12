


console.log("" + 1 + 0, typeof ("" + 1 + 0));
//Terminal output: 10 string

console.log("" - 1 + 0, typeof ("" - 1 + 0));
//Terminal  output: -1 number

console.log(true + false, typeof (true + false));
//terminal  output: 1 number

console.log(!true, typeof !true);
//terminal  output: false boolean

console.log(6 / "3", typeof (6 / "3"));
//Terminal  output: 2 number

console.log("2" * "3", typeof ("2" * "3"));
//terminal  output: 6 number

console.log(4 + 5 + "px", typeof (4 + 5 + "px"));
//terminal  output: 9px string

console.log("$" + 4 + 5, typeof ("$" + 4 + 5));
//terminal  output: $45 string

console.log("4" - 2, typeof ("4" - 2));
//terminal  output: 2 number

console.log("4px" - 2, typeof ("4px" - 2));
//terminal  output: NaN number

console.log(" -9 " + 5, typeof (" -9 " + 5));
//terminal  output:  -9 5 string

console.log(" -9 " - 5, typeof (" -9 " - 5));
//terminal  output: -14 number

console.log(null + 1, typeof (null + 1));
//terminal  output: 1 number

console.log(undefined + 1, typeof (undefined + 1));
//terminal  output: NaN number

console.log(undefined == null, typeof (undefined == null));
//terminal  output: true boolean

console.log(undefined === null, typeof (undefined === null));
//terminal  output: false boolean

console.log(" \t \n" - 2, typeof (" \t \n" - 2));
//terminal  output: -2 number