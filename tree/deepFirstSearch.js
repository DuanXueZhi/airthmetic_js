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
const a = function() {
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