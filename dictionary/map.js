const map = new Map()

// 增
map.set('a', 'aa')
map.set('b', 'bb')
map.set('c', 'cc')

// 删
map.delete('b')
// map.clear()

// 改
map.set('a', 'aaa')

// 查
map.get('a')

// leetcode 349, m:nums1长度，n:num2长度，时间复杂度O(m + n), 空间复杂度Om
var intersection = function(nums1, nums2) {
  const map = new Map()
  nums1.forEach(n => {
    map.set(n, true)
  })
  const res = [] // 结果数组
  nums2.forEach(n => {
    if (map.get(n)) { // 存在于nums1中
      res.push(n) // 推入结果数组
      map.delete(n) // 删除字典中元素（防止重复元素匹配）
    }
  })
  return res
}