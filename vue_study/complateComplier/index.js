const compiler = require('vue-template-compiler')
// 使用 webpack vue-loader，会在开发环境下编译模板

// 插值
// const template = `<p>{{ message }}</p>`
// render: "with(this){return _c('p',[_v(_s(message))])}", // message是变量 === 获取 this.message
// _c：createElement === h
// _v：createTextVNode
// _s：toString
// 返回值 vnode

// 表达式
// const template = `<p>{{ flag ? message : 'no message found' }}</p>`
// render: "with(this){return _c('p',[_v(_s(flag ? message : 'no message found'))])}",

// 属性和动态属性
// const template = `
//   <div id="div1" class="container">
//     <img :src="imgUrl">
//   </div>`
// render: `with(this){return _c('div',{staticClass:"container",attrs:{"id":"div1"}},[_c('img',{attrs:{"src":imgUrl}})])}`

// 条件
// const template = `
//   <div>
//     <p v-if="flag === 'a'">A</p>
//     <p v-else>B</p>
//   </div>`
// render: `with(this){return _c('div',[(flag === 'a')?_c('p',[_v("A")]):_c('p',[_v("B")])])}`, // flag 是变量，'a' 是字符串
// 三目运算？？？

// 循环
// const template = `
//   <ul>
//     <li v-for="(item, index) in list" :key="item.id">{{ item.title }} + {{ item.value === 'a' ? '是' : '否' }}</li>
//   </ul>
// `
/**
 * render:`
 *  with(this) {
 *      return _c(
 *        'ul',_l(
 *            (list),
 *            function(item,index){return _c('li',{key:item.id},[_v(_s(item.title)+" + "+_s(item.value === 'a' ? '是' : '否'))])}
 *          ),
 *        0
 *       )
 *  }`
 */
// _l：renderList

// const template = `<button @click="clickHandler">submit</button>`
// render: `with(this){return _c('button',{on:{"click":clickHandler}},[_v("submit")])}`,

const template = `<input type="text" v-model="name">`
/**
 * render:
 *  `with(this){
 *    return _c(
 *      'input',
 *      {
 *        directives:[
 *          {name:"model",rawName:"v-model",value:(name),expression:"name"}
 *        ],
 *        attrs:{"type":"text"},
 *        domProps:{"value":(name)}, // 显示 name 变量
 *        on:{
 *          "input":function($event){if($event.target.composing)return;name=$event.target.value} // this.name = input事件的输入结果，所以能实时更新
 *        }
 *      }
 *    )
 *   }`
 */

// render 函数
// 返回的是 vnode

const res = compiler.compile(template)
console.log(res)
