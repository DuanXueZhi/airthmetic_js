const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        },
        {
          val: 'g',
          children: []
        }
      ]
    }
  ]
};

const dfs = (root) => {
  console.log(root.val)
  root.children.forEach(dfs)
};

dfs(tree);

// 时间复杂度：O(n)，时间复杂度：O(log n)O(n)，n是树的深度/x
const a = function(root) {
  let res = 0;
  const dfs = (n, l) => { // l: 层级
    if (!n) return;
    if (!n.left && !n.right) res = Math.max(res, l);
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  };
  dfs(root, 1);
  return res;
};

// 时间复杂度：O(n)，空间复杂度：O(n)，O(log n)
const b = function(root, targetSum) {
  if (!root) return false;
  const sumList = []; // 路径和数组
  const dfs = (point, sum) => {
    sum += point.val;
    if (point.left) {
      dfs(point.left, sum);
    }

    if (point.right) {
      dfs(point.right, sum);
    }

    if (!point.left && !point.right) {
      sumList.push(sum);
    }
  }
  dfs(root, 0);
  return sumList.includes(targetSum);
}
