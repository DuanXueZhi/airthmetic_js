// 后序遍历，左右中
const bt = require('./bt');

// 递归版
const postorder = (root) => {
    if (!root) return
    postorder(root.left); // 左
    postorder(root.right); // 右
    console.log('1', root.val); // 中
}

postorder(bt);

// 非递归版
/**
 * 将后序遍历：左右根，倒置，
 * 形成：根右左（类似先序遍历）
 * 将先序遍历的访问操作改为入栈操作
 * 利用栈后进先出再把子节点逆序输出访问即可
 * @param root
 */
const postorder2 = (root) => {
    if (!root) return
    const stack = []; // 遍历栈
    const outputStack = []; // 倒置栈
    stack.push(root)
    while (stack.length) {
        const n = stack.pop();
        outputStack.push(n); // 该节点入倒置栈
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    while (outputStack.length) {
        const n = outputStack.pop();
        console.log('2', n.val);
    }
}

postorder2(bt);
