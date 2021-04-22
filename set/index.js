/**
 *  * Created by dxz on 2021/4/22-23:21.
 * explain：
 */
// 去重
const arr = [1, 1, 2, 2]
const arr2 = [...new Set(arr)]

// 判断元素是否在集合中
const set = new Set(arr)
const has = set.has(2) // set内置函数

// 求交集：将集合转换为数组，用数组filter过滤出set2中有的数据求交集
const set2 = new Set([2, 3])
const set3 = new Set([...set].filter(item => set2.has(item)))

// LeetCode：349
function intersection(arr1, arr2) {
  // const set1 = new Set(arr1)
  // const set2 = new Set(arr2)
  // const set3 = [...set1].filter(i => set2.has(i))
  // return set3
  return [...new Set(arr1)].filter(i => arr2.includes(i));
  // 时间复杂度：n^2 || O(m * n)
  // 空间复杂度：Om，m为去重后arr1的长度【arr1, arr2都是已有的储存空间】
}

console.log(intersection([1, 1, 2, 2], [2, 2, 3, 3]))