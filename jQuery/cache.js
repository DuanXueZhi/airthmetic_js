/**
 *  * Created by dxz on 2020/7/12-18:20.
 */
function createCache() {
  const data = {} // 闭包中的数据，被隐藏，不被外接访问
  return {
    set: function(key, val) {
      data[key] = val
    },
    get: function(key) {
      return data[key]
    }
  }
}

const c = createCache()
c.set('a', 100)
console.log(c.get('a'))