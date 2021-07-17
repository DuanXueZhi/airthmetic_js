// const res = sum(10, 20)
// console.log(res);

// 函数声明：会预加载
// function sum(x, y) {
//   return x + y;
// }

// const sum = function (x, y) { // var：sum is not a function（有变量提升）；const：Cannot access 'sum' before initialization（没有变量提升）
//   return x + y;
// }

// const obj = Object.create(null);
// console.log(obj);
//
// const obj1 = {};
// console.log(obj1);

const User = {
  count: 1,
  getCount: function() {
    return this.count; // this在执行的时候获取
  }
}
console.log(User.getCount()); // 1
const func = User.getCount;
console.log(func()); // undefined
console.log(func.call({count: 2})); // 2
console.log(func.call()); // undefined

// 邮编正则
// /\d{6}/ // 字符串完全满足则需要添加开头(^)结尾($)，不需要完全满足则不用
//
// // 小写英文字母
// /^[a-z]+$/
//
// // 英文字母
// /^[a-zA-Z]+$/
//
// // 日期格式
// /^\d{4}-\d{1, 2}-\d{1, 2}$/
//
// // 用户名
// /^[a-zA-Z]\w{5, 17}$/
//
// // ip地址
// /\d+\.\d+\.\d+\.\d/

// 手写trim()
String.prototype.trim1 = function() {
  return this.replace(/^\s+/, '').replace(/\s+$/, '');
}
console.log('  abc  '.trim1()) // abc

Math.max(10, 20, 30, 40)

function max() {
  const nums = Array.prototype.slice.call(arguments) // 变为数组
  let max = 0;
  nums.forEach(n => {
    if (n > max) max = n;
  })
  return max
}

console.log(max(10, 20, 30, 40)); // 40

try {
  // todo
} catch (ex) {
  console.error(ex);
} finally {
  // todo
}

window.onerror = function (message, source, lineNom, colNom, error) {
  // 第一，对跨域的 js ，如 CDN 的，不会有详细的报错信息
  // 第二，对于压缩的 js ，还要配合 sourceMap 反查到未压缩代码的行、列
  // 对于未压缩的 js ，可以直接看到行列
}

// 传统方式
function query(name) {
  const search = location.search.substr(1) // 类似 array.slice()
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i') // new RegExp(`(^|&)`, 'i') === /(^|&)/i 大小写不区分
  const res = search.match(reg)
  if (res === null) {
    return null;
  }
  return res[2];
}

function query1(name) {
  const search = location.search;
  const p = new URLSearchParams(search);
  return p.get(name);
}

query1('a');
