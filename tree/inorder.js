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
    if (!root) return
    const stack = [];
    let p = root;
    while (stack.length || p) {
        while (p) { // 将全部左子树入栈
            stack.push(p);
            p = p.left
        }
        const n = stack.pop(); // 弹出最后左节点，访问
        console.log(n.val);
        p = n.right // 转到当前右子树, 再将整体循环
    }
}

inorder2(bt);
