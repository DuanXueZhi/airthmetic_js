// isEqual
const obj1 = { a: 100, b: { x: 100, y: 200 } }
const obj2 = { a: 100, b: { x: 100, y: 200 } }
// 判断是否是对象或数组
function isObject(obj) { return typeof obj === 'object' && obj !== null };
// 全相等
function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) return obj1 === obj2; // 值类型（注意，参与 equal 的一半不会是函数）
  if (obj1 === obj2) return true; // 传入同一个对象或数组
  // 两个都是对象或数组，而不相等
  // 1.比较keys个数，和值
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  // 2.以obj1为基准，和obj2一次递归比较
  for (let key in obj1) {
    const res = isEqual(obj1[key], obj2[key])
    if (!res) return false;
  }
  // 3.全乡等
  return true;
}
console.log(isEqual(obj1, obj2));

console.log('1-2-3'.split('-')); // ['1', '2', '3']
console.log([1, 2, 3].join('-')); // 1-2-3
