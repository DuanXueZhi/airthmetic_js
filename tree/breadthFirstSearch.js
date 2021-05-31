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

const bfs = (root) => {
  const q = [root]; // 新建队列并把根节点入队
  while (q.length > 0) {
    const n = q.shift(); // 队头出队
    console.log(n.val); // 访问
    n.children.forEach(child => {
      q.push(child); // 其children入队
    });
  };
};

bfs(tree);

// 时间复杂度：O(n)，空间复杂度：O(n)，n：节点数
const a = function(root) {
  if (!root) return 0;
  const q = [[root, 1]]; // 新建队列：[[[1, 2, 3, 4, 5], 1]]
  while (q.length) {
    const [n, l] = q.shift(); // 拿出队头
    console.log(n.val);
    if (!n.left && !n.right) return l;
    if (n.left) q.push([ n.left, l + 1 ]);
    if (n.right) q.push([ n.right, l + 1 ]);
  }
}
