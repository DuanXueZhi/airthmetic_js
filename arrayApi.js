const arr = [10, 20, 30, 40];

// const popRes = arr.pop();
// console.log(popRes, arr); // 40，[10, 20, 30]

// const shiftRes = arr.shift();
// console.log(shiftRes, arr); // 10 [20, 30, 40]

// const pushRes = arr.push(100);
// console.log(pushRes, arr); // 5 [10, 20, 30, 40, 100]

// const unshiftRes = arr.unshift(100);
// console.log(unshiftRes, arr); // 5 [100, 10, 20, 30, 40]

// 纯函数：1.不改变源数组（没有副作用）；2.返回一个数组

// concat()
// const arr1 = arr.concat([50, 60, 70]);
// console.log(arr, arr1); // [ 10, 20, 30, 40 ] [10, 20, 30, 40, 50, 60, 70]

// map
// const arr2 = arr.map(num => num * 10);
// console.log(arr, arr2); // [ 10, 20, 30, 40 ] [ 100, 200, 300, 400 ]

// filter
// const arr3 = arr.filter(num => num > 25);
// console.log(arr, arr3); // [ 10, 20, 30, 40 ] [ 30, 40 ]

// slice
// const arr4 = arr.slice();
// arr4.push(1);
// console.log(arr, arr4) // [ 10, 20, 30, 40 ] [ 10, 20, 30, 40, 1 ]

// 非纯函数
// push pop shift unshift
// forEach
// some every // 不改变原数组，但不会返回一个数组
// reduce // 不改变原数组，但不会返回一个数组

// const arr5 = arr.slice();
// const arr6 = arr.slice(1, 4);
// console.log(arr, arr5, arr6);

// splice 非纯函数
// const spliceRes = arr.splice(1, 2, 'a', 'b', 'c');
// console.log(arr, spliceRes); // [ 10, 'a', 'b', 'c', 40 ] [ 20, 30 ]
// const spliceRes = arr.splice(1, 0, 'a', 'b', 'c');
// console.log(arr, spliceRes); // [10, 'a', 'b', 'c', 20, 30,  40] []

// const res = [10, 20, 30].map(parseInt);
// console.log(res); // [ 10, NaN, NaN ]
// // parseInt(string, radix) // 这里的意思就是用radix进制去解析string，且忽略不能转换为数字的字符及之后的字符
// // 拆解
// [10, 20, 30].map((num, index) => {
//   return parseInt(num, index);
// })

// 闭包 函数作为返回值 —— 内存不会被释放
function create() {
  let a = 100;
  return function () {
    console.log(a);
  }
}
let a = 200; // 内存被释放
let fn = create();
fn(); // 100 // 函数内部a变量内存并没有被释放

// 函数作为参数传入
function print(fn) {
  let b = 200; // 函数执行完，变量内存即被释放
  fn();
}
let b = 100; // 内存并没有被释放
function fn1() {
  console.log(b); // 100
}
print(fn1);

// 数组深拷贝
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj === null) return obj; // obj 是 null 或不是对象、数组，直接返回

  let result; // 返回值
  if (obj instanceof Array) {
    result = [];
  } else {
    obj = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { // 保证 key 不是原始属性
      result[key] = deepClone(obj[key]) // 迭代
    }
  }
  return result;
}

