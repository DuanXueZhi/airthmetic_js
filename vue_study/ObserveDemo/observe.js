// 更新视图操作
function updateView() {
  console.log('视图更新')
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建新对象，原型指向 oldArrayProperty，再扩展的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
// arrProto.push = function () {}
// arrProto.pop = function () {}
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
  arrProto[methodName] = function () {
    updateView() // 触发监听数据改变函数
    oldArrayProperty[methodName].call(this, ...arguments) // 执行原原型方法
    // Array.prototype.push.call(this, ...arguments) // 等同于
  }
})

// 重新定义属性，将属性监听
function defineReactive(target, key, value) {
  // 深度监听
  observer(value)

  // 核心 API
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value) { // 改变内容
        // 深度监听，防止新值设置为对象
        observer(newValue)
        // 设置新值
        // 注意，value 一直在闭包中，此处设置完之后，再 get 时也是
        value = newValue

        // 触发更新视图
        updateView()
      }
    }
  })
}

// 监听对象属性
function observer(target) {
  if (typeof target !== 'object' || target === null) {
    // 不是对象或数组
    return target
  }

  // 污染全局的 Array 原型
  // Array.prototype.push = function () {
  //   updateView()
  //     ...
  // }

  if (Array.isArray(target)) { // 是数组，则修改数组原型
    target.__proto__ = arrProto
  }

  // 重新定义各个属性
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

// 准备数据
const data = {
  name: 'zhangsan',
  age: 20,
  info: {
    address: '北京', // 需要深度监听
  },
  nums: [10, 20, 30]
}

// 监听数据
observer(data)

// data.name = 'lisi'
// data.age = 21
// data.x = '100' // 新属性，监听不到 -- 所以有 Vue.set
// delete data.x // 新属性，监听不到 -- 所以有 Vue.delete
// console.log(data.age);
// data.info.address = '上海'
// data.info = '厦门'

data.nums.push(40)

/**
 * 深度监听缺点：
 *  需要一次性递归到底，一次性计算量大【vue3.0 是使用使用的时候监听】
 *  无法监听新增属性/删除属性（Vue.set, Vue.delete）
 *  无法原生监听数组，需要特殊处理
 */
