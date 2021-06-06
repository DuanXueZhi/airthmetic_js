const graph = require('./graph');

const visited = new Set();
const q = [2];
visited.add(2);
while (q.length) {
    const n = q.shift();
    console.log(n);
    graph[n].forEach(c => {
        if (!visited.has(c)) { // 没有访问过
            q.push(c);
            visited.add(n); // 入队 === 被访问过了，防止队列中由重复元素
        }
    })
}