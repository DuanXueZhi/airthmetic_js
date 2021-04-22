/**
 *  * Created by dxz on 2020/7/12-18:27.
 */
let a
for (let i = 0; i < 10; i++) { // i作用域
  a = document.createElement('a')
  a.innerHTML = i + '<br />'
  a.addEventListener('click', function(e) {
    e.preventDefault()
    console.log(this) // 当前元素；箭头函数则是window
    alert(i)
  })
  document.body.appendChild(a)
}