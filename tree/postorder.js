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

// 非递归版
/**
 * 将后序遍历：左右根，倒置，
 * 形成：根右左（类似先序遍历）
 * 先序遍历
 * @param root
 */
const postorder2 = (root) => {

}
