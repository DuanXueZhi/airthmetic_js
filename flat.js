// 数组拍平
const arr1 = [
  [1, 2],
  3,
  [
    4, 5,
    [
      6, 7,
      [8, 9]
    ]
  ]
];

function flat(arr) {
  // 验证 arr 中，还有没有深层数组
  const isDeep = arr.some(item => item instanceof Array);
  if (!isDeep) return arr; // 已是 flatern
  const res = Array.prototype.concat.apply([], arr);
  return flat(res) // 递归
}

console.log(flat(arr1));
