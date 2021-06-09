const graph = require('./graph');

const visited = new Set();
const dfs = (n) => {
    console.log(n);
    visited.add(n);
    graph[n].forEach(c => {
        if (!visited.has(c)) {
            dfs(c);
        }
    });
};

dfs(graph);

// 时间复杂度O(n)，空间复杂度：O(1)：图不会线性增长
function a(s) {
    // 构建图
    const graph = {
        0: { 'blank': 0, 'sign': 1, '.': 2, 'digit': 6 },
        1: { 'digit': 6, '.': 2 },
        2: { 'digit': 3 },
        3: { 'digit': 3, 'e': 4 },
        4: { 'digit': 5, 'sign': 7 },
        5: { 'digit': 5 },
        6: { 'digit': 6, '.': 3, 'e': 4 },
        7: { 'digit': 5 }
    };

    // 遍历字符串
    let state = 0; // 记录当前的状态
    for (c of s.trim()) {
        if (c >= '0' && c <= '9') {
            c = 'digit';
        } else if (c === ' ') {
            c = 'blank';
        } else if (c === '+' || c === '-') {
            c = 'sign';
        } else if (c === 'E') {
            c = 'e';
        }
        state = graph[state][c] || 'undefined';
        if (state === 'undefined') {
            return false;
        }
    }
    return state === 3 || state === 5 || state === 6;
}

// 时间复杂度：m*n，空间复杂度：m*n，（两个m*n的矩阵存储数据）
function pacificAtlantic(heights) {
    // 从海岸线遍历矩阵，逆向寻找可以到达该海岸线的大陆，找到能达到两洋的点
    if (!heights || !heights[0]) return [];
    const m = heights.length; // row
    const n = heights[0].length; // column
    // 初始化行为m，列为n的全是false的数组
    const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
    const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));
    // 深度优先遍历
    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        // 遍历相邻节点
        [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(([nr, nc]) => {
            if (
              // 存在矩阵中
              nr >= 0 && nr < m &&
              nc >= 0 && nc < n &&
              // 没有访问过
              !flow[nr][nc] &&
              // 保证逆流而上（下一个节点值大于等于此节点）
              heights[nr][nc] >= heights[r][c]
            ) {
                dfs(nr, nc, flow);
            }
        })
    }
    // 同时开始遍历
    for (let r = 0; r < m; r += 1) {
        dfs(r, 0, flow1);
        dfs(r, n - 1, flow2);
    }
    for (let c = 0; c < n; c += 1) {
        dfs(0, c, flow1);
        dfs(m - 1, c, flow2);
    }
    // 收集能同时到达左上、右下的坐标
    const res = [];
    for (let r = 0; r < m; r += 1) {
        for (let c = 0; c < n; c += 1) {
            if (flow1[r][c] && flow2[r][c]) {
                res.push([r, c]);
            }
        }
    }
    return res;
}

// 时间复杂度：O(n)，空间复杂度：O(n)
function cloneGraph(node) {
    if (!node) return;
    const visited = new Map(); // 存储访问过的节点
    const dfs = (n) => {
        const nCopy = new Node(n.val); // Node提前定义的类，clone节点
        visited.set(n, nCopy); // 存储key: 原节点，value: 拷贝后的节点
        (n.neighbors || []).forEach(ne => { // 防止n.neighbors为undefined
            if (!visited.has(ne)) {
                dfs(ne);
            }
            nCopy.neighbors.push(visited.get(ne));
        })
    }
    dfs(node);
    return visited.get(node);
}

// 广度优先遍历做法
function cloneGraph1(node) {
    if (!node) return;
    const q = [node];
    const visited = new Map();
    visited.set(node, new Node(node.val));
    while (q.length) {
        const n = q.shift();
        console.log(n.val);
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                q.push(ne);
                visited.set(ne, new Node(ne.val));
            }
            visited.get(n).neighbors.push(visited.get(ne));
        });
    }
    return visited.get(node);
}
