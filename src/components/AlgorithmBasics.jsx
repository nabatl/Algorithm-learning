import React, { useState } from 'react';

function AlgorithmBasics() {
  const [selectedTopic, setSelectedTopic] = useState('array');

  const topics = [
    { id: 'array', name: '数组 / 字符串' },
    { id: 'linked-list', name: '链表' },
    { id: 'two-pointers', name: '双指针' },
    { id: 'sliding-window', name: '滑动窗口' },
    { id: 'recursion', name: '递归' },
    { id: 'sorting', name: '排序' },
    { id: 'dp', name: '动态规划' }
  ];

  const topicContent = {
    'array': {
      principle: '数组是一种线性数据结构，它由相同类型的元素组成，并且每个元素都可以通过索引访问。字符串是由字符组成的数组。',
      examples: [
        {
          title: '两数之和',
          code: `function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`
        },
        {
          title: '最长公共前缀',
          code: `function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }
  return prefix;
}`
        }
      ]
    },
    'linked-list': {
      principle: '链表是一种线性数据结构，它由节点组成，每个节点包含数据和指向下一个节点的指针。链表的优点是可以在O(1)时间内插入和删除元素。',
      examples: [
        {
          title: '链表反转',
          code: `function reverseList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}`
        },
        {
          title: '链表环检测',
          code: `function hasCycle(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}`
        }
      ]
    },
    'two-pointers': {
      principle: '双指针是一种常用的算法技巧，它使用两个指针在数组或链表上移动，以解决各种问题。双指针可以分为快慢指针、左右指针等。',
      examples: [
        {
          title: '两数之和 II - 输入有序数组',
          code: `function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}`
        },
        {
          title: '反转字符串',
          code: `function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}`
        }
      ]
    },
    'sliding-window': {
      principle: '滑动窗口是一种用于处理连续子数组或子字符串的算法技巧。它通过维护一个窗口，在数组或字符串上滑动，以找到满足条件的子数组或子字符串。',
      examples: [
        {
          title: '无重复字符的最长子串',
          code: `function lengthOfLongestSubstring(s) {
  let map = new Map();
  let maxLength = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    if (map.has(s[end])) {
      start = Math.max(start, map.get(s[end]) + 1);
    }
    map.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}`
        },
        {
          title: '最小覆盖子串',
          code: `function minWindow(s, t) {
  let need = new Map();
  for (let char of t) {
    need.set(char, (need.get(char) || 0) + 1);
  }
  let left = 0, right = 0;
  let valid = 0;
  let start = 0, len = Infinity;
  while (right < s.length) {
    let c = s[right];
    right++;
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) valid++;
    }
    while (valid === need.size) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      let d = s[left];
      left++;
      if (need.has(d)) {
        if (need.get(d) === 0) valid--;
        need.set(d, need.get(d) + 1);
      }
    }
  }
  return len === Infinity ? '' : s.substring(start, start + len);
}`
        }
      ]
    },
    'recursion': {
      principle: '递归是一种函数调用自身的编程技巧。它可以将复杂问题分解为更小的子问题，从而简化问题的解决过程。',
      examples: [
        {
          title: '阶乘',
          code: `function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}`
        },
        {
          title: '斐波那契数列',
          code: `function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`
        }
      ]
    },
    'sorting': {
      principle: '排序是将一组数据按照特定顺序排列的过程。常见的排序算法包括冒泡排序、插入排序、选择排序、归并排序、快速排序等。',
      examples: [
        {
          title: '快速排序',
          code: `function quickSort(nums) {
  if (nums.length <= 1) return nums;
  const pivot = nums[Math.floor(nums.length / 2)];
  const left = nums.filter(x => x < pivot);
  const middle = nums.filter(x => x === pivot);
  const right = nums.filter(x => x > pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}`
        },
        {
          title: '归并排序',
          code: `function mergeSort(nums) {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}`
        }
      ]
    },
    'dp': {
      principle: '动态规划是一种通过将复杂问题分解为子问题，并存储子问题的解来避免重复计算的算法技巧。它通常用于解决具有重叠子问题和最优子结构的问题。',
      examples: [
        {
          title: '爬楼梯',
          code: `function climbStairs(n) {
  if (n <= 2) return n;
  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}`
        },
        {
          title: '最大子数组和',
          code: `function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }
  return maxGlobal;
}`
        }
      ]
    }
  };

  return (
    <div className="algorithm-basics">
      <h2>算法基础</h2>
      <div className="basics-container">
        <div className="basics-sidebar">
          {topics.map(topic => (
            <div
              key={topic.id}
              className={`topic-item ${selectedTopic === topic.id ? 'active' : ''}`}
              onClick={() => setSelectedTopic(topic.id)}
            >
              {topic.name}
            </div>
          ))}
        </div>
        <div className="basics-content">
          <h3>{topics.find(t => t.id === selectedTopic)?.name}</h3>
          <div className="principle">
            <h4>原理</h4>
            <p>{topicContent[selectedTopic].principle}</p>
          </div>
          <div className="examples">
            <h4>示例代码</h4>
            {topicContent[selectedTopic].examples.map((example, index) => (
              <div key={index} className="example">
                <h5>{example.title}</h5>
                <pre>{example.code}</pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlgorithmBasics;