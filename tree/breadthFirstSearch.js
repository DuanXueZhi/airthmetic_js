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

const b = function(root) {
  if (!root) return [];
  const q = [[root, 0]];
  let res = [];
  while (q.length > 0) {
    const [n, l] = q.shift();
    if (!res[l]) res[l] = [];
    res[l].push(n.val);
    if (n.left) q.push([n.left, l + 1]);
    if (n.right) q.push([n.right, l + 1]);
  }
  return res;
}

// 时间复杂度O(n) n：树的节点；空间复杂度：O(n)
const b2 = function(root) {
  if (!root) return [];
  const q = [root]; // [整个树, 其他值]，树是其中一个数组项
  const res = [];
  while (q.length) { // 开始是以根元素为头，q数组仅一个长度
    let len = q.length // 记录数组当前长度，避免重复使用时计算新的长度
    res.push([]) // 初始化最后一个数组
    while (len--) {
      const n = q.shift();
      res[res.length - 1].push(n.val); // 拿到最后一个数组
      if (n.left) q.push(n.left); // 重复利用q数组
      if (n.right) q.push(n.right); // 重复利用q数组
    }
  }
  return res;
}
