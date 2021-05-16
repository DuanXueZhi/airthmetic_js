// 中序遍历，左中右
const bt = require('./bt');

// 递归版
const inorder = (root) => {
    if (!root) return
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

inorder(bt);

// 非递归版
const inorder2 = (root) => {
    if (!root) retrun
    const stack = [];
    let p = root;
    while (p) {
        stack.push(p);
        p = p.left
    }
    const n = stack.pop();
    console.log(n.val);
}