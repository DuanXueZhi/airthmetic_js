/**
 *  * Created by dxz on 2020/7/12-18:05.
 */
function fn1(a, b, c) {
  console.log('this', this)
  console.log(a, b, c)
  return 'this is fn1'
}
console.log(fn1(1, 2, 3))
const fn2 = fn1.bind({ x: 100 }, 10, 20, 30)
const res = fn2()
console.log(res)

// 模拟 bind
Function.prototype.bind1 = function() {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments)

  // 获取 this（数组第一项）
  const t = args.shift() // 出队模拟

  // fn1.bind(...) 中的 fn1
  const self = this // 执行者的this，（普通函数是在执行函数时绑定this）
  return function() {
    return self.apply(t, args)
  }
}