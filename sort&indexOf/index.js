/**
 * 排序算法：
 * 冒泡排序：【最简单，性能不佳】比较相邻元素并交换，一轮则最后元素是最大或最小，总体需要运行n-1轮
 * 选择排序：【简单，性能不佳】选出最大或最小值，放在第一位，从下一位开始，重复n-1次
 * 插入排序：【时间复杂度也是O(n^2)】从第一个元素开始，该元素可以被认为已经被排序，取下一个元素，在已经排好序的序列中从后往前扫描，直到找到小于或等于该元素的位置，将该位置后面的所有已排序的元素向后移动一位，将该元素插曲到该位置
 * 二分插入排序：【】在插入排序的基础上，使用二分查找方式找到已排序序列中的该元素应处的位置
 * 归并排序：【O(n*log n)火狐浏览器sort方法】递归将数组分成每个元素的子数组，先对两个数合并为有序数组，再对子数组合并，比较两数组的头（只操作头）较小的入队，直到合并为一个完整的数组
 * 快速排序：【chrome浏览器sort方法（曾经）】定一个基准，将其左侧都放小于其的元素，右侧都放大于其的元素，并对子数组执行该递归
 */

/**
 * 搜索算法：
 * 顺序搜索：【时间复杂度：O(n)】遍历数组，有相同的返回下标，否则返回-1
 * 二分搜索：【时间复杂度：O(log n)】又称折半搜索，在有序数组中进行搜索，数组中间元素开始，大于/小于，则在其左/右进行搜索，迭代直到找到元素
 */

/**
 * 总结：
 * sort
 * indexOf
 */

/**
 * 分而治之：分-迭代解决-合
 * 子问题相互独立
 * 归并排序、快速排序、二分搜索、反转二叉树……应用
 */

/**
 * 动态规划：将一个问题分解为‘相互重叠’的子问题，通过反复求解子问题，来解决原来的问题
 * 子问题相互重叠
 * 斐波那契数列
 * 步骤：1.定义子问题2.反复执行
 */

/**
 * 贪心算法：期盼通过每个阶段的‘局部最优’选择，从而达到全局的最优（结果‘不一定是最优’）
 * 最求局部最优
 */

/**
 * 回溯算法：‘渐进式’寻找构建问题解决方法的策略
 * 先从一个可能的动作开始解决问题，如果不行，就回溯并选择另一个动作，直到将问题解决
 * 适合问题：有很多路、有死路也有出路、通常需要递归模拟所有路。全排列、子集
 */
// 回溯算法，子集
function subsets(nums) {
  const res = [];
  const backtrack = (path, l, start) => {
    if (path.length === l) {
      res.push(path);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      backtrack(path.concat(nums[i]), l, i + 1);
    }
  };
  for (let i = 0; i <= nums.length; i++) {
    backtrack([], i, 0)
  }
  return res;
}
console.log(subsets([1, 2, 3]));
