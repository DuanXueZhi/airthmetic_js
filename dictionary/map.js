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

function a(s) {
  if (s.length % 2 === 1) return false
  const stack = [] // 定义一个栈
  const map = new Map()
  map.set('(', ')') // 创建映射字典
  map.set('[', ']')
  map.set('{', '}')
  // 时间复杂度 O(n) 只有一个for循环，空间复杂度 O(n)
  for (let i = 0; i < s.length; i += 1) { // 遍历字符串s
    const c = s[i]
    if (map.has(c)) { // 是否存在于字典中 遇到左括号 (c === '(' || c === '[' || c === '{')
      stack.push(c) // 推入栈中
    } else {
      const top = stack[stack.length - 1] // 获取栈顶元素
      if (map.get(top) === c) // 在字典中获取key值为当前栈顶元素的值与当前值比较 匹配栈顶元素与当前元素是否对应
        // ( top === '(' && c === ')' ) ||
        // ( top === '[' && c === ']' ) ||
        // ( top === '{' && c === '}' )
       {
        stack.pop() // 出栈一个
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

// 两数之和，时间复杂度O(n)，空间复杂度O(n)
function b(nums, target) {
  const map = new Map()
  for (let i = 0; i < map.length; i+=1) {
    const n = nums[i]
    const n2 = target - n
    if (map.has(n2)) { // 匹配前面存储的信息
      return [map.get(n2), i]
    } else { // 存储信息
      map.set(n, i)
    }
  }
}

// 无重复字符的最长字串，时间复杂度O(n)，空间复杂度O(m)，m字符串中不重复字符个数
function c(s) {
  /**
   * 1.找出所有没有重复的字串
   *    双指针维护一个滑动窗口，用来剪切字串
   * 2.找到长度最大的
   */
  let l = 0 // 左指针
  let res = 0 // 最大长度
  const map = new Map()
  for (let r = 0; r < s.length; r += 1) {
    if (map.has(s[r]) && map.get(s[r]) >= l) { // 字典中有重复字符 && 位置大于左指针（存在于双指针中）
      l = map.get(s[r]) + 1 // 移动左指针到，重复字符位置的下一个位置
    }
    res = Math.max(res, r - l + 1) // 记录最大值
    map.set(s[r], r) // 每次右指针r移动时记录在字典中
  }
  return res
}

// 最小覆盖字串，时间复杂度O(m + n)，空间复杂度O(m) m:t中不同字符的个数
function d(s, t) {
  let l = 0 // 左指针
  let r = 0 // 右指针
  const need = new Map() // 需要的字符
  for (let c of t) { // 统计所需字符及其每个的个数
    need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  }
  let needType = need.size // 获取当前字典长度
  let res = '' // 记录最小字串
  while (r < s.length) {
    const c = s[r] // 当前字符
    if(need.has(c)) { // 当前字符存在于需求字符字典中，减去其数量
      need.set(c, need.get(c) - 1)
      if (need.get(c) === 0) { // 当前字符在需求字典中value为0时，将需求字典减一记录
        needType -= 1
      }
    }
    // 所有字符数量都小于零
    while (needType === 0) {
      const newRes = s.substring(l, r + 1) // 符合的字串
      if (!res || res.length > newRes.length) res = newRes
      const c2 = s[l]
      if (need.has(c2)) { // 左指针是need字典中的值，移动到下一位要记录一下这个值（其数量加一）
        need.set(c2, need.get(c2) + 1)
        if (need.get(c2) === 1) needType += 1
      }
      l += 1
    }
    r += 1 // 移动右指针
  }
  return res
}

/**
 * 总结：
 * 键值对方式存储
 * ES6，名为Map
 */
