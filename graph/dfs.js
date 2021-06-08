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

function pacificAtlantic(heights) {
    // 从海岸线遍历矩阵，逆向寻找可以到达该海岸线的大陆，找到能达到两洋的点
    if (!heights || heights[0]) return [];
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
