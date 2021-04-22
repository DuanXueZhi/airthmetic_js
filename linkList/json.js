/**
 *  * Created by dxz on 2020/7/11-20:35.
 */
const json = {
    a: { b: { c: 1 } },
    d: { e: 2 }
}

const path = ['a', 'b', 'c'] // 路径

let p = json // 指针指向json
path.forEach(k => {
    p = p[k]
})