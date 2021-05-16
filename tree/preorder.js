// 先序遍历，中左右
const bt = require('./bt');

// 递归版
const preorder = (root) => {
    if (!root) return
    console.log(root.val); // 访问根节点
    preorder(root.left); // 访问左子树
    preorder(root.right); //访问右子树
};

preorder(bt);

// 非递归

const preorder2 = (root) => {
    if (!root) return
    const stack = [root]; // 入栈
    while (stack.length) {
        const n = stack.pop(); // 出栈
        console.log(n.val); // 访问
        if (n.right) stack.push(n.right) // 先进入右侧
        if (n.left) stack.push(n.left) // 后进入左侧，之后要先出
    }
};

preorder2(bt);