// 后序遍历，左右中
const bt = require('./bt');

// 递归版
const postorder = (root) => {
    if (!root) return
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}

postorder(bt);