/**
 *  * Created by dxz on 2021/4/22-23:47.
 * explain：
 */
let mySet = new Set()

mySet.add(1)
mySet.add(5)
mySet.add(5) // set具有唯一性
mySet.add('字符串')
mySet.add({ a: 1, b: 2 })
mySet.add({ a: 1, b: 2 })
let o = { a: 1, b: 2 }
mySet.add(o)
mySet.add(o)

const has = mySet.has('字符串')

mySet .delete(5)

// 迭代set
for(let item of mySet) console.log(item)
for(let item of mySet.keys()) console.log(item)
for(let item of mySet.values()) console.log(item)
for(let [key, value] of mySet.entries()) console.log(key, value)

// set <=> array
const myArr = [...mySet]
const myArr1 = Array.from(mySet)

const mySet2 = new Set([1, 2, 3, 4])

// 交集
const intersection = new Set([...mySet].filter(i => mySet2.has(i)))
// 差集：仅在mySet中有在mySet2中没有的项
const difference = new Set([...mySet].filter(i => !mySet2.has(i)))