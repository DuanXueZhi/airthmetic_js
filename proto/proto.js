/**
 *  * Created by dxz on 2020/7/11-20:05.
 */
const obj = {}
const func = () => {}
const arr = []

const instanceOf = (A, B) => {
  let p = A
  while(p) {
    if (p === B.prototype) {
      return true
    }
    p = p.__proto__ // 遍历
  }
  return false
}

console.log(instanceOf(func, Object), func instanceof Object)

var foo = {},
  F = function() {}
Object.prototype.a = 'a'
Function.prototype.b = 'b'