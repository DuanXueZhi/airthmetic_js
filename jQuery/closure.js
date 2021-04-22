/**
 *  * Created by dxz on 2020/7/12-17:38.
 */
// 返回值
function create() {
  let a = 100
  return function () {
    console.log(a)
  }
}

const fn = create()
const a = 200
fn() // 100

// 参数传递
function print(fn) {
  const b = 200
  fn()
}
const b = 100
function fun() {
  console.log(b)
}
print(fun) // 100

// 所有的自由变量的查找，在函数定义的地方查找
