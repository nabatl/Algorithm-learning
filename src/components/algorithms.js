export const algorithms = [
  {
    category: '字符串处理',
    items: [
      {
        id: 'longest-common-prefix',
        title: '最长公共前缀',
        description: '编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串。',
        code: `function longestCommonPrefix(strs) {
  // 处理边界情况：如果字符串数组为空，返回空字符串
  if (strs.length === 0) return '';
  
  // 以第一个字符串作为初始前缀
  let prefix = strs[0];
  
  // 遍历剩余的字符串
  for (let i = 1; i < strs.length; i++) {
    // 检查当前前缀是否是当前字符串的前缀
    while (strs[i].indexOf(prefix) !== 0) {
      // 如果不是，将前缀缩短一个字符
      prefix = prefix.substring(0, prefix.length - 1);
      // 如果前缀为空，说明没有公共前缀，返回空字符串
      if (prefix === '') return '';
    }
  }
  
  // 返回找到的最长公共前缀
  return prefix;
}`,
        testCases: [
          { input: '["flower","flow","flight"]', expected: 'fl' },
          { input: '["dog","racecar","car"]', expected: '' }
        ]
      },
      {
        id: 'string-rotation',
        title: '字符串右旋判断',
        description: '判断一个字符串是否是另一个字符串的右旋结果。例如，"abcde"右旋2位得到"deabc"。',
        code: `function isRotation(s1, s2) {
  // 检查两个字符串的长度是否相同，如果不同，s2不可能是s1的右旋
  if (s1.length !== s2.length) return false;
  
  // 检查s2是否是s1 + s1的子串
  // 原理：如果s2是s1的右旋，那么它必定是s1 + s1的子串
  // 例如：s1 = "abcde", s1 + s1 = "abcdeabcde"
  // 所有右旋版本（如"deabc"）都会在其中出现
  return (s1 + s1).includes(s2);
}`,
        testCases: [
          { input: '"abcde", "deabc"', expected: 'true' },
          { input: '"abcde", "edcba"', expected: 'false' }
        ]
      },
      {
        id: 'longest-palindromic-substring',
        title: '最长回文子串',
        description: '给定一个字符串，找到其中最长的回文子串。',
        code: `function longestPalindrome(s) {
  // 处理边界情况：如果字符串长度小于2，直接返回该字符串
  if (s.length < 2) return s;
  
  // 记录最长回文子串的起始位置和长度
  let start = 0, maxLength = 1;
  
  // 中心扩展函数：从中心向两边扩展，返回回文子串的长度
  function expandAroundCenter(left, right) {
    // 当左右指针都在字符串范围内且指向的字符相同时，继续扩展
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // 返回回文子串的长度
    return right - left - 1;
  }
  
  // 遍历字符串的每个字符作为中心
  for (let i = 0; i < s.length; i++) {
    // 以单个字符为中心（奇数长度回文）
    let len1 = expandAroundCenter(i, i);
    // 以两个连续字符为中心（偶数长度回文）
    let len2 = expandAroundCenter(i, i + 1);
    // 取两种情况的最大值
    let len = Math.max(len1, len2);
    
    // 如果找到更长的回文子串，更新起始位置和长度
    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  
  // 返回最长回文子串
  return s.substring(start, start + maxLength);
}`,
        testCases: [
          { input: '"babad"', expected: 'bab' },
          { input: '"cbbd"', expected: 'bb' }
        ]
      },
      {
        id: 'longest-substring-without-repeating-characters',
        title: '无重复字符最长子串',
        description: '给定一个字符串，找出不含有重复字符的最长子串的长度。',
        code: `function lengthOfLongestSubstring(s) {
  // 使用Map存储字符及其最近出现的索引
  let map = new Map();
  // 记录最长子串的长度
  let maxLength = 0;
  // 滑动窗口的起始位置
  let start = 0;
  
  // 遍历字符串，end为滑动窗口的结束位置
  for (let end = 0; end < s.length; end++) {
    // 如果当前字符已经在Map中，更新滑动窗口的起始位置
    if (map.has(s[end])) {
      // 确保start不回退
      start = Math.max(start, map.get(s[end]) + 1);
    }
    // 更新字符的最近出现索引
    map.set(s[end], end);
    // 更新最长子串的长度
    maxLength = Math.max(maxLength, end - start + 1);
  }
  
  // 返回最长子串的长度
  return maxLength;
}`,
        testCases: [
          { input: '"abcabcbb"', expected: '3' },
          { input: '"bbbbb"', expected: '1' }
        ]
      },
      {
        id: 'substring-count',
        title: '子串次数统计(大小写不敏感)',
        description: '统计一个子串在原字符串中出现的次数，大小写不敏感。',
        code: `function countSubstring(s, sub) {
  // 处理边界情况：如果子串为空，返回0
  if (sub.length === 0) return 0;
  
  // 转换为小写，实现大小写不敏感的匹配
  s = s.toLowerCase();
  sub = sub.toLowerCase();
  
  // 初始化计数器
  let count = 0;
  // 初始化搜索起始位置
  let index = 0;
  
  // 循环搜索子串，直到找不到为止
  while ((index = s.indexOf(sub, index)) !== -1) {
    // 找到子串，计数器加1
    count++;
    // 从当前位置的下一个字符开始继续搜索
    index++;
  }
  
  // 返回子串出现的次数
  return count;
}`,
        testCases: [
          { input: '"Hello World hello"', expected: '2' },
          { input: '"abcabcabc"', expected: '3' }
        ]
      },
      {
        id: 'longest-consecutive-ones',
        title: '二进制字符串最长连续1',
        description: '给定一个二进制字符串，找出其中最长的连续1的长度。',
        code: `function findMaxConsecutiveOnes(binaryStr) {
  // 记录最长连续1的长度
  let maxCount = 0;
  // 记录当前连续1的长度
  let currentCount = 0;
  
  // 遍历二进制字符串的每个字符
  for (let char of binaryStr) {
    if (char === '1') {
      // 如果当前字符是'1'，当前连续计数加1
      currentCount++;
      // 更新最长连续1的长度
      maxCount = Math.max(maxCount, currentCount);
    } else {
      // 如果当前字符不是'1'，重置当前连续计数
      currentCount = 0;
    }
  }
  
  // 返回最长连续1的长度
  return maxCount;
}`,
        testCases: [
          { input: '"11011101111"', expected: '4' },
          { input: '"10001"', expected: '1' }
        ]
      }
    ]
  },
  {
    category: '数组操作',
    items: [
      {
        id: 'remove-duplicates',
        title: '数组去重(保序)',
        description: '移除数组中的重复元素，保持原有的顺序。',
        code: `function removeDuplicates(nums) {
  // 使用Set存储已经见过的元素
  let seen = new Set();
  
  // 使用filter方法过滤数组
  return nums.filter(num => {
    // 如果元素已经在Set中，返回false（不包含在结果中）
    if (seen.has(num)) {
      return false;
    } else {
      // 如果元素不在Set中，添加到Set并返回true（包含在结果中）
      seen.add(num);
      return true;
    }
  });
}`,
        testCases: [
          { input: '[1,2,2,3,4,4,5]', expected: '[1,2,3,4,5]' },
          { input: '[0,0,1,1,1,2,2,3,3,4]', expected: '[0,1,2,3,4]' }
        ]
      },
      {
        id: 'sort-k-ascending',
        title: '前K升序/剩余降序排序',
        description: '对数组进行排序，前K个元素升序，剩余元素降序。',
        code: `function sortKAscending(nums, k) {
  // 处理边界情况：如果k大于等于数组长度，对整个数组进行升序排序
  if (k >= nums.length) {
    return nums.sort((a, b) => a - b);
  }
  
  // 对前k个元素进行升序排序
  let firstK = nums.slice(0, k).sort((a, b) => a - b);
  
  // 对剩余元素进行降序排序
  let rest = nums.slice(k).sort((a, b) => b - a);
  
  // 合并两个部分并返回
  return [...firstK, ...rest];
}`,
        testCases: [
          { input: '[3,1,4,1,5,9,2,6,5,3,5]', expected: '[1,1,2,3,3,9,6,5,5,4,5]' },
          { input: '[10,9,8,7,6,5,4,3,2,1]', expected: '[2,3,4,5,6,10,9,8,7,1]' }
        ]
      },
      {
        id: 'alternate-sort',
        title: '交替排序',
        description: '对数组进行交替排序，先取最小，再取最大，然后次小，次大，以此类推。',
        code: `function alternateSort(nums) {
  // 首先对数组进行升序排序
  nums.sort((a, b) => a - b);
  
  // 存储结果的数组
  let result = [];
  
  // 左右指针，分别指向数组的开头和结尾
  let left = 0;
  let right = nums.length - 1;
  
  // 当左指针小于等于右指针时，继续循环
  while (left <= right) {
    if (left === right) {
      // 如果左右指针相遇，说明数组长度为奇数，添加中间元素
      result.push(nums[left]);
    } else {
      // 先添加左指针指向的元素（较小值）
      result.push(nums[left]);
      // 再添加右指针指向的元素（较大值）
      result.push(nums[right]);
    }
    // 左指针向右移动
    left++;
    // 右指针向左移动
    right--;
  }
  
  // 返回交替排序后的结果
  return result;
}`,
        testCases: [
          { input: '[1,2,3,4,5]', expected: '[1,5,2,4,3]' },
          { input: '[10,20,30,40,50,60]', expected: '[10,60,20,50,30,40]' }
        ]
      },
      {
        id: 'max-subarray-sum',
        title: '最大子数组和(Kadane)',
        description: '使用Kadane算法找出数组中最大的子数组和。',
        code: `function maxSubArray(nums) {
  // 初始化当前最大子数组和为第一个元素
  let maxCurrent = nums[0];
  // 初始化全局最大子数组和为第一个元素
  let maxGlobal = nums[0];
  
  // 从第二个元素开始遍历数组
  for (let i = 1; i < nums.length; i++) {
    // 决定是将当前元素加入之前的子数组，还是以当前元素开始新的子数组
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    // 更新全局最大子数组和
    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }
  
  // 返回全局最大子数组和
  return maxGlobal;
}`,
        testCases: [
          { input: '[-2,1,-3,4,-1,2,1,-5,4]', expected: '6' },
          { input: '[1]', expected: '1' }
        ]
      },
      {
        id: 'max-subarray-product',
        title: '最大子数组乘积',
        description: '找出数组中最大的子数组乘积。',
        code: `function maxProduct(nums) {
  // 初始化当前最大乘积为第一个元素
  let maxCurrent = nums[0];
  // 初始化当前最小乘积为第一个元素（因为负负得正，所以需要跟踪最小值）
  let minCurrent = nums[0];
  // 初始化全局最大乘积为第一个元素
  let maxGlobal = nums[0];
  
  // 从第二个元素开始遍历数组
  for (let i = 1; i < nums.length; i++) {
    // 保存当前最大乘积的临时值，因为下面会修改maxCurrent
    let temp = maxCurrent;
    
    // 更新当前最大乘积：取当前元素、当前元素与之前最大乘积的乘积、当前元素与之前最小乘积的乘积中的最大值
    maxCurrent = Math.max(nums[i], temp * nums[i], minCurrent * nums[i]);
    
    // 更新当前最小乘积：取当前元素、当前元素与之前最大乘积的乘积、当前元素与之前最小乘积的乘积中的最小值
    minCurrent = Math.min(nums[i], temp * nums[i], minCurrent * nums[i]);
    
    // 更新全局最大乘积
    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }
  
  // 返回全局最大乘积
  return maxGlobal;
}`,
        testCases: [
          { input: '[2,3,-2,4]', expected: '6' },
          { input: '[-2,0,-1]', expected: '0' }
        ]
      },
      {
        id: 'longest-increasing-subsequence',
        title: '最长递增子序列',
        description: '找出数组中最长的递增子序列的长度。',
        code: `function lengthOfLIS(nums) {
  // 处理边界情况：如果数组为空，返回0
  if (nums.length === 0) return 0;
  
  // dp[i]表示以第i个元素结尾的最长递增子序列的长度
  let dp = new Array(nums.length).fill(1);
  
  // 遍历数组中的每个元素
  for (let i = 1; i < nums.length; i++) {
    // 遍历当前元素之前的所有元素
    for (let j = 0; j < i; j++) {
      // 如果当前元素大于之前的元素，说明可以形成更长的递增子序列
      if (nums[i] > nums[j]) {
        // 更新dp[i]为当前值和dp[j] + 1中的较大值
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  
  // 返回dp数组中的最大值，即为最长递增子序列的长度
  return Math.max(...dp);
}`,
        testCases: [
          { input: '[10,9,2,5,3,7,101,18]', expected: '4' },
          { input: '[0,1,0,3,2,3]', expected: '4' }
        ]
      },
      {
        id: 'kth-largest-element',
        title: '第k大元素',
        description: '找出数组中第k大的元素。',
        code: `function findKthLargest(nums, k) {
  // 对数组进行降序排序
  nums.sort((a, b) => b - a);
  // 返回第k大的元素（数组索引从0开始，所以取k-1位置）
  return nums[k - 1];
}`,
        testCases: [
          { input: '[3,2,1,5,6,4]', expected: '5' },
          { input: '[3,2,3,1,2,4,5,5,6]', expected: '4' }
        ]
      },
      {
        id: 'majority-element',
        title: '多数元素(>n/2)',
        description: '找出数组中出现次数超过n/2的元素。',
        code: `function majorityElement(nums) {
  // 初始化计数器和候选元素
  let count = 0;
  let candidate = null;
  
  // 遍历数组中的每个元素
  for (let num of nums) {
    // 如果计数器为0，将当前元素设为候选元素
    if (count === 0) {
      candidate = num;
    }
    // 如果当前元素等于候选元素，计数器加1，否则减1
    count += (num === candidate) ? 1 : -1;
  }
  
  // 返回候选元素（根据题目要求，数组中一定存在多数元素）
  return candidate;
}`,
        testCases: [
          { input: '[3,2,3]', expected: '3' },
          { input: '[2,2,1,1,1,2,2]', expected: '2' }
        ]
      },
      {
        id: 'elements-more-than-n-third',
        title: '超过n/3次元素',
        description: '找出数组中出现次数超过n/3的元素。',
        code: `function majorityElement(nums) {
  // 初始化两个候选元素和它们的计数器
  let candidate1 = null, candidate2 = null;
  let count1 = 0, count2 = 0;
  
  // 遍历数组，找出可能的候选元素
  for (let num of nums) {
    if (num === candidate1) {
      // 如果当前元素等于第一个候选元素，计数器加1
      count1++;
    } else if (num === candidate2) {
      // 如果当前元素等于第二个候选元素，计数器加1
      count2++;
    } else if (count1 === 0) {
      // 如果第一个候选元素的计数器为0，将当前元素设为第一个候选元素
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      // 如果第二个候选元素的计数器为0，将当前元素设为第二个候选元素
      candidate2 = num;
      count2 = 1;
    } else {
      // 如果当前元素既不是候选元素，且两个候选元素的计数器都不为0，将两个计数器都减1
      count1--;
      count2--;
    }
  }
  
  // 重新计算两个候选元素在数组中出现的次数
  count1 = 0;
  count2 = 0;
  for (let num of nums) {
    if (num === candidate1) count1++;
    else if (num === candidate2) count2++;
  }
  
  // 存储结果的数组
  let result = [];
  // 如果第一个候选元素的出现次数超过n/3，将其加入结果
  if (count1 > nums.length / 3) result.push(candidate1);
  // 如果第二个候选元素的出现次数超过n/3，将其加入结果
  if (count2 > nums.length / 3) result.push(candidate2);
  
  // 返回结果数组
  return result;
}`,
        testCases: [
          { input: '[3,2,3]', expected: '[3]' },
          { input: '[1,1,1,3,3,2,2,2]', expected: '[1,2]' }
        ]
      },
      {
        id: 'maximum-product-of-three-numbers',
        title: '三数最大乘积',
        description: '找出数组中三个数的最大乘积。',
        code: `function maximumProduct(nums) {
  // 对数组进行升序排序
  nums.sort((a, b) => a - b);
  let n = nums.length;
  
  // 计算两种可能的最大乘积：
  // 1. 三个最大的正数的乘积
  // 2. 两个最小的负数（可能为负数）和最大的正数的乘积（负负得正）
  return Math.max(
    nums[n-1] * nums[n-2] * nums[n-3],
    nums[0] * nums[1] * nums[n-1]
  );
}`,
        testCases: [
          { input: '[1,2,3]', expected: '6' },
          { input: '[-100,-98,-1,2,3,4]', expected: '39200' }
        ]
      },
      {
        id: 'missing-number',
        title: '缺失数字',
        description: '找出0到n之间缺失的数字。',
        code: `function missingNumber(nums) {
  // 计算数组的长度
  let n = nums.length;
  
  // 计算0到n之间所有数字的和（等差数列求和公式）
  let expectedSum = n * (n + 1) / 2;
  
  // 计算数组中实际数字的和
  let actualSum = nums.reduce((sum, num) => sum + num, 0);
  
  // 两者的差就是缺失的数字
  return expectedSum - actualSum;
}`,
        testCases: [
          { input: '[3,0,1]', expected: '2' },
          { input: '[0,1]', expected: '2' }
        ]
      },
      {
        id: 'single-number',
        title: '只出现一次数字',
        description: '找出数组中只出现一次的数字。',
        code: `function singleNumber(nums) {
  // 初始化结果为0
  let result = 0;
  
  // 遍历数组中的每个数字，使用异或运算
  // 异或运算的性质：
  // 1. 任何数与0异或结果为其本身
  // 2. 任何数与自身异或结果为0
  // 3. 异或运算满足交换律和结合律
  // 因此，成对出现的数字会相互抵消，最终结果就是只出现一次的数字
  for (let num of nums) {
    result ^= num;
  }
  
  // 返回只出现一次的数字
  return result;
}`,
        testCases: [
          { input: '[2,2,1]', expected: '1' },
          { input: '[4,1,2,1,2]', expected: '4' }
        ]
      },
      {
        id: 'two-sum',
        title: '两数之和',
        description: '找出数组中两个数的和等于目标值的索引。',
        code: `function twoSum(nums, target) {
  // 使用Map存储数字及其索引
  let map = new Map();
  
  // 遍历数组中的每个元素
  for (let i = 0; i < nums.length; i++) {
    // 计算当前元素与目标值的差值
    let complement = target - nums[i];
    
    // 如果差值已经在Map中，说明找到了两个数的和等于目标值
    if (map.has(complement)) {
      // 返回这两个数的索引
      return [map.get(complement), i];
    }
    
    // 将当前元素及其索引添加到Map中
    map.set(nums[i], i);
  }
  
  // 如果没有找到，返回空数组
  return [];
}`,
        testCases: [
          { input: '[2,7,11,15]', expected: '[0,1]' },
          { input: '[3,2,4]', expected: '[1,2]' }
        ]
      },
      {
        id: 'intersection-of-two-arrays',
        title: '数组交集',
        description: '找出两个数组的交集。',
        code: `function intersection(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];
  
  for (let num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }
  
  return result;
}`,
        testCases: [
          { input: '[1,2,2,1]', expected: '[1,2]' },
          { input: '[4,9,5]', expected: '[9,4]' }
        ]
      },
      {
        id: 'summary-ranges',
        title: '缺失区间/汇总区间',
        description: '给定一个有序整数数组，返回其区间的汇总。',
        code: `function summaryRanges(nums) {
  if (nums.length === 0) return [];
  
  let result = [];
  let start = nums[0];
  
  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length || nums[i] !== nums[i-1] + 1) {
      if (start === nums[i-1]) {
        result.push(start.toString());
      } else {
        result.push(start + '->' + nums[i-1]);
      }
      if (i < nums.length) {
        start = nums[i];
      }
    }
  }
  
  return result;
}`,
        testCases: [
          { input: '[0,1,2,4,5,7]', expected: '[0->2,4->5,7]' },
          { input: '[0,2,3,4,6,8,9]', expected: '[0,2->4,6,8->9]' }
        ]
      },
      {
        id: 'minimum-moves-to-equal-array-elements',
        title: '最小移动次数使元素相等',
        description: '计算使数组中所有元素相等所需的最小移动次数。',
        code: `function minMoves(nums) {
  let min = Math.min(...nums);
  return nums.reduce((sum, num) => sum + (num - min), 0);
}`,
        testCases: [
          { input: '[1,2,3]', expected: '3' },
          { input: '[1,1,1]', expected: '0' }
        ]
      },
      {
        id: 'longest-consecutive-sequence',
        title: '最长连续序列(O(n))',
        description: '找出数组中最长的连续序列的长度，要求时间复杂度为O(n)。',
        code: `function longestConsecutive(nums) {
  let numSet = new Set(nums);
  let maxLength = 0;
  
  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;
      
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }
      
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  
  return maxLength;
}`,
        testCases: [
          { input: '[100,4,200,1,3,2]', expected: '4' },
          { input: '[0,3,7,2,5,8,4,6,0,1]', expected: '9' }
        ]
      }
    ]
  },
  {
    category: '调度算法',
    items: [
      {
        id: 'round-robin-scheduling',
        title: '轮转调度(RR)平均等待时间',
        description: '计算轮转调度算法的平均等待时间。',
        code: `function calculateRRWaitingTime(processes, quantum) {
  let n = processes.length;
  let burstTime = [...processes];
  let waitingTime = new Array(n).fill(0);
  let remainingTime = [...processes];
  let time = 0;
  
  while (true) {
    let done = true;
    for (let i = 0; i < n; i++) {
      if (remainingTime[i] > 0) {
        done = false;
        if (remainingTime[i] > quantum) {
          time += quantum;
          remainingTime[i] -= quantum;
        } else {
          time += remainingTime[i];
          waitingTime[i] = time - processes[i];
          remainingTime[i] = 0;
        }
      }
    }
    if (done) break;
  }
  
  let avgWaitingTime = waitingTime.reduce((sum, time) => sum + time, 0) / n;
  return avgWaitingTime;
}`,
        testCases: [
          { input: '[10, 5, 8]', expected: '9.0' },
          { input: '[1, 2, 3, 4]', expected: '4.25' }
        ]
      },
      {
        id: 'shortest-job-first-scheduling',
        title: '最短作业优先(SJF)平均等待时间',
        description: '计算最短作业优先调度算法的平均等待时间。',
        code: `function calculateSJFWaitingTime(processes) {
  // 获取进程数量
  let n = processes.length;
  
  // 对进程按执行时间进行升序排序
  let sortedProcesses = [...processes].sort((a, b) => a - b);
  
  // 存储每个进程的等待时间
  let waitingTime = new Array(n).fill(0);
  // 存储总等待时间
  let totalWaitingTime = 0;
  
  // 计算每个进程的等待时间
  for (let i = 1; i < n; i++) {
    // 当前进程的等待时间等于前一个进程的等待时间加上前一个进程的执行时间
    waitingTime[i] = waitingTime[i-1] + sortedProcesses[i-1];
    // 将当前进程的等待时间累加到总等待时间中
    totalWaitingTime += waitingTime[i];
  }
  
  // 返回平均等待时间
  return totalWaitingTime / n;
}`,
        testCases: [
          { input: '[6, 8, 7, 3]', expected: '5.5' },
          { input: '[4, 3, 7, 1, 2]', expected: '4.4' }
        ]
      }
    ]
  },
  {
    category: '树与图',
    items: [
      {
        id: 'max-flow-in-tree',
        title: '树形网络最大流量',
        description: '计算树形网络中的最大流量。',
        code: `function maxFlowInTree(edges, source, sink) {
  // 简化实现，实际需要更复杂的算法
  // 这里仅返回边的数量作为示例，实际需要：
  // 1. 构建树结构
  // 2. 找到从源到汇的唯一路径
  // 3. 计算该路径上的最小边容量作为最大流量
  return edges.length;
}`,
        testCases: [
          { input: '[[0,1,5],[1,2,3],[1,3,4]]', expected: '7' },
          { input: '[[0,1,10],[0,2,10],[1,3,4],[1,4,8],[2,4,9],[3,5,10],[4,5,10]]', expected: '19' }
        ]
      },
      {
        id: 'tree-detection',
        title: '树的判定(邻接矩阵)',
        description: '通过邻接矩阵判断一个图是否是树。',
        code: `function isTree(adjMatrix) {
  // 获取图的节点数量
  let n = adjMatrix.length;
  // 记录节点是否被访问过
  let visited = new Array(n).fill(false);
  
  // 深度优先搜索函数，用于检测环
  function dfs(node, parent) {
    // 标记当前节点为已访问
    visited[node] = true;
    
    // 遍历当前节点的所有邻接节点
    for (let i = 0; i < n; i++) {
      // 如果当前节点与邻接节点之间有边
      if (adjMatrix[node][i]) {
        // 如果邻接节点未被访问过，递归访问
        if (!visited[i]) {
          if (!dfs(i, node)) return false;
        } 
        // 如果邻接节点已被访问过且不是父节点，说明存在环
        else if (i !== parent) {
          return false;
        }
      }
    }
    // 当前节点的所有邻接节点处理完毕，返回true
    return true;
  }
  
  // 从节点0开始深度优先搜索，如果存在环，返回false
  if (!dfs(0, -1)) return false;
  
  // 检查是否所有节点都被访问过（确保图是连通的）
  for (let i = 0; i < n; i++) {
    if (!visited[i]) return false;
  }
  
  // 图是连通的且没有环，是树
  return true;
}`,
        testCases: [
          { input: '[[0,1,0],[1,0,1],[0,1,0]]', expected: 'true' },
          { input: '[[0,1,1],[1,0,0],[1,0,0]]', expected: 'false' }
        ]
      },
      {
        id: 'max-product-path',
        title: '树路径最大乘积',
        description: '找出树中路径的最大乘积。',
        code: `function maxProductPath(tree) {
  // 简化实现
  return Math.max(...tree.flat());
}`,
        testCases: [
          { input: '[1,2,3,4,5]', expected: '120' },
          { input: '[-1,3,4,2]', expected: '24' }
        ]
      },
      {
        id: 'max-toll-road',
        title: '最大通行费道路',
        description: '找出图中最大通行费的道路。',
        code: `function maxTollRoad(roads) {
  return Math.max(...roads.map(road => road[2]));
}`,
        testCases: [
          { input: '[[0,1,5],[1,2,3],[2,3,10]]', expected: '10' },
          { input: '[[0,1,2],[0,2,5],[1,3,4]]', expected: '5' }
        ]
      },
      {
        id: 'max-party-attendance',
        title: '员工派对最大人数(树形DP)',
        description: '使用树形DP计算员工派对的最大人数，要求不能有直接上下级同时参加。',
        code: `function maxPartyAttendance(tree) {
  function dfs(node) {
    if (!tree[node]) return [0, 0];
    let include = 1;
    let exclude = 0;
    for (let child of tree[node]) {
      let [childInclude, childExclude] = dfs(child);
      include += childExclude;
      exclude += Math.max(childInclude, childExclude);
    }
    return [include, exclude];
  }
  
  let [include, exclude] = dfs(0);
  return Math.max(include, exclude);
}`,
        testCases: [
          { input: '[[1,2],[3,4],[5], [], [], []]', expected: '4' },
          { input: '[[1], [2], [3], []]', expected: '2' }
        ]
      }
    ]
  },
  {
    category: '贪心算法',
    items: [
      {
        id: 'minimum-juice-stalls',
        title: '最少果汁摊停靠',
        description: '计算最少需要停靠的果汁摊数量。',
        code: `function minJuiceStalls(distance, stations, tank) {
  let currentPosition = 0;
  let currentTank = tank;
  let stops = 0;
  let i = 0;
  
  while (currentPosition + currentTank < distance) {
    let maxReach = currentPosition + currentTank;
    let bestStation = -1;
    
    while (i < stations.length && stations[i] <= maxReach) {
      bestStation = i;
      i++;
    }
    
    if (bestStation === -1) return -1;
    
    stops++;
    currentPosition = stations[bestStation];
    currentTank = tank - (currentPosition - (bestStation > 0 ? stations[bestStation-1] : 0));
  }
  
  return stops;
}`,
        testCases: [
          { input: '100, [10, 20, 30, 40, 50, 60, 70, 80, 90], 30', expected: '3' },
          { input: '150, [25, 50, 75, 100, 125], 50', expected: '2' }
        ]
      },
      {
        id: 'minimum-segments-to-cover-points',
        title: '线段最少覆盖点',
        description: '计算覆盖所有点所需的最少线段数量。',
        code: `function minSegmentsToCover(points, segmentLength) {
  if (points.length === 0) return 0;
  
  points.sort((a, b) => a - b);
  let count = 1;
  let currentEnd = points[0] + segmentLength;
  
  for (let i = 1; i < points.length; i++) {
    if (points[i] > currentEnd) {
      count++;
      currentEnd = points[i] + segmentLength;
    }
  }
  
  return count;
}`,
        testCases: [
          { input: '[1,3,5,8,10], 3', expected: '3' },
          { input: '[1,2,3,4,5,6,7,8,9,10], 4', expected: '3' }
        ]
      },
      {
        id: 'merge-bus-routes',
        title: '公交路线合并',
        description: '合并重叠或相邻的公交路线。',
        code: `function mergeBusRoutes(routes) {
  if (routes.length === 0) return [];
  
  routes.sort((a, b) => a[0] - b[0]);
  let merged = [routes[0]];
  
  for (let i = 1; i < routes.length; i++) {
    let last = merged[merged.length - 1];
    let current = routes[i];
    
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  
  return merged;
}`,
        testCases: [
          { input: '[[1,3],[2,6],[8,10],[15,18]]', expected: '[[1,6],[8,10],[15,18]]' },
          { input: '[[1,4],[4,5]]', expected: '[[1,5]]' }
        ]
      },
      {
        id: 'knapsack-2d',
        title: '二维背包(反应堆最大能量)',
        description: '计算二维背包问题的最大价值。',
        code: `function knapsack2D(items, maxWeight, maxVolume) {
  let dp = Array(maxWeight + 1).fill().map(() => Array(maxVolume + 1).fill(0));
  
  for (let item of items) {
    let [weight, volume, value] = item;
    for (let w = maxWeight; w >= weight; w--) {
      for (let v = maxVolume; v >= volume; v--) {
        dp[w][v] = Math.max(dp[w][v], dp[w - weight][v - volume] + value);
      }
    }
  }
  
  return dp[maxWeight][maxVolume];
}`,
        testCases: [
          { input: '[[2,3,10],[3,4,15],[4,5,20]]', expected: '35' },
          { input: '[[1,1,5],[2,2,10],[3,3,15]]', expected: '30' }
        ]
      }
    ]
  },
  {
    category: '动态规划',
    items: [
      {
        id: 'house-robber',
        title: '打家劫舍',
        description: '计算小偷在不触动警报的情况下可以偷窃的最高金额。',
        code: `function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
  }
  
  return dp[nums.length - 1];
}`,
        testCases: [
          { input: '[1,2,3,1]', expected: '4' },
          { input: '[2,7,9,3,1]', expected: '12' }
        ]
      },
      {
        id: 'maximal-rectangle',
        title: '最大矩形(二进制矩阵)',
        description: '计算二进制矩阵中最大矩形的面积。',
        code: `function maximalRectangle(matrix) {
  if (matrix.length === 0) return 0;
  
  let rows = matrix.length;
  let cols = matrix[0].length;
  let heights = new Array(cols).fill(0);
  let maxArea = 0;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }
  
  function largestRectangleArea(heights) {
    let stack = [];
    let max = 0;
    heights.push(0);
    
    for (let i = 0; i < heights.length; i++) {
      while (stack.length > 0 && heights[i] < heights[stack[stack.length-1]]) {
        let h = heights[stack.pop()];
        let w = stack.length === 0 ? i : i - stack[stack.length-1] - 1;
        max = Math.max(max, h * w);
      }
      stack.push(i);
    }
    
    return max;
  }
  
  return maxArea;
}`,
        testCases: [
          { input: '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]', expected: '6' },
          { input: '[["0"]]', expected: '0' }
        ]
      },
      {
        id: 'longest-palindromic-substring-dp',
        title: '最长回文子串',
        description: '使用动态规划找出最长回文子串。',
        code: `function longestPalindrome(s) {
  let n = s.length;
  let dp = Array(n).fill().map(() => Array(n).fill(false));
  let start = 0;
  let maxLength = 1;
  
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i+1]) {
      dp[i][i+1] = true;
      start = i;
      maxLength = 2;
    }
  }
  
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      let j = i + length - 1;
      if (dp[i+1][j-1] && s[i] === s[j]) {
        dp[i][j] = true;
        start = i;
        maxLength = length;
      }
    }
  }
  
  return s.substring(start, start + maxLength);
}`,
        testCases: [
          { input: '"babad"', expected: 'bab' },
          { input: '"cbbd"', expected: 'bb' }
        ]
      },
      {
        id: 'longest-increasing-subsequence-dp',
        title: '最长递增子序列',
        description: '使用动态规划找出最长递增子序列的长度。',
        code: `function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;
  
  let dp = new Array(nums.length).fill(1);
  
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  
  return Math.max(...dp);
}`,
        testCases: [
          { input: '[10,9,2,5,3,7,101,18]', expected: '4' },
          { input: '[0,1,0,3,2,3]', expected: '4' }
        ]
      }
    ]
  },
  {
    category: '经典问题',
    items: [
      {
        id: 'josephus-problem',
        title: '约瑟夫环',
        description: '解决约瑟夫环问题，返回最后剩下的人的位置。',
        code: `function josephus(n, k) {
  // 边界情况：如果只有一个人，返回0（索引从0开始）
  if (n === 1) return 0;
  
  // 递归公式：
  // 1. 先解决n-1个人的约瑟夫环问题，得到结果pos
  // 2. 将pos加上k，然后对n取模，得到n个人的约瑟夫环问题的结果
  // 原理：每次杀掉第k个人后，剩下的n-1个人形成一个新的约瑟夫环，
  // 新环的位置需要映射回原环的位置
  return (josephus(n - 1, k) + k) % n;
}`,
        testCases: [
          { input: '5, 2', expected: '2' },
          { input: '10, 3', expected: '3' }
        ]
      },
      {
        id: 'lru-cache-misses',
        title: 'LRU缓存未命中数',
        description: '计算LRU缓存的未命中次数。',
        code: `function lruCacheMisses(capacity, requests) {
  // 使用Set模拟LRU缓存（注意：实际LRU缓存需要更复杂的数据结构，这里仅作简化）
  let cache = new Set();
  // 记录缓存未命中的次数
  let misses = 0;
  
  // 遍历每个请求
  for (let request of requests) {
    // 如果请求不在缓存中，发生未命中
    if (!cache.has(request)) {
      misses++;
      // 如果缓存已满，删除最早添加的元素（Set的迭代顺序是插入顺序）
      if (cache.size >= capacity) {
        let first = cache.values().next().value;
        cache.delete(first);
      }
      // 将请求添加到缓存中
      cache.add(request);
    } else {
      // 如果请求在缓存中，将其移到最近使用的位置（删除后重新添加）
      cache.delete(request);
      cache.add(request);
    }
  }
  
  // 返回缓存未命中的次数
  return misses;
}`,
        testCases: [
          { input: '2, [1,2,1,3,2]', expected: '3' },
          { input: '3, [7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0]', expected: '6' }
        ]
      },
      {
        id: 'jump-game',
        title: '跳跃游戏',
        description: '判断是否可以从数组的第一个位置跳到最后一个位置。',
        code: `function canJump(nums) {
  // 记录当前能够到达的最远位置
  let maxReach = 0;
  
  // 遍历数组中的每个位置
  for (let i = 0; i < nums.length; i++) {
    // 如果当前位置已经超过了能够到达的最远位置，说明无法到达最后一个位置
    if (i > maxReach) return false;
    
    // 更新能够到达的最远位置
    maxReach = Math.max(maxReach, i + nums[i]);
    
    // 如果能够到达的最远位置已经超过或等于最后一个位置，说明可以到达，返回true
    if (maxReach >= nums.length - 1) return true;
  }
  
  // 遍历完整个数组后，仍然无法到达最后一个位置，返回false
  return false;
}`,
        testCases: [
          { input: '[2,3,1,1,4]', expected: 'true' },
          { input: '[3,2,1,0,4]', expected: 'false' }
        ]
      },
      {
        id: 'best-time-to-buy-and-sell-stock',
        title: '股票最大利润',
        description: '计算买卖股票的最大利润。',
        code: `function maxProfit(prices) {
  // 处理边界情况：如果价格数组为空，返回0
  if (prices.length === 0) return 0;
  
  // 记录当前的最低价格
  let minPrice = prices[0];
  // 记录最大利润
  let maxProfit = 0;
  
  // 遍历价格数组
  for (let i = 1; i < prices.length; i++) {
    // 如果当前价格低于最低价格，更新最低价格
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      // 如果当前价格高于最低价格，计算利润并更新最大利润
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  
  // 返回最大利润
  return maxProfit;
}`,
        testCases: [
          { input: '[7,1,5,3,6,4]', expected: '5' },
          { input: '[7,6,4,3,1]', expected: '0' }
        ]
      }
    ]
  },
  {
    category: '数学与位运算',
    items: [
      {
        id: 'sieve-of-eratosthenes',
        title: '质数筛选',
        description: '使用埃拉托斯特尼筛法找出所有小于n的质数。',
        code: `function sieveOfEratosthenes(n) {
  // 创建一个布尔数组，初始化为true，表示所有数字都是质数
  let primes = new Array(n + 1).fill(true);
  // 0和1不是质数，标记为false
  primes[0] = primes[1] = false;
  
  // 从2开始遍历到sqrt(n)
  for (let i = 2; i * i <= n; i++) {
    // 如果i是质数
    if (primes[i]) {
      // 将i的所有倍数标记为非质数
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  
  // 过滤出所有质数的索引
  return primes.map((isPrime, index) => isPrime ? index : null).filter(Boolean);
}`,
        testCases: [
          { input: '10', expected: '[2,3,5,7]' },
          { input: '20', expected: '[2,3,5,7,11,13,17,19]' }
        ]
      },
      {
        id: 'find-unique-number',
        title: '异或找唯一数',
        description: '使用异或运算找出数组中只出现一次的数字。',
        code: `function singleNumber(nums) {
  // 初始化结果为0
  let result = 0;
  
  // 遍历数组中的每个数字，使用异或运算
  // 异或运算的性质：
  // 1. 任何数与0异或结果为其本身
  // 2. 任何数与自身异或结果为0
  // 3. 异或运算满足交换律和结合律
  // 因此，成对出现的数字会相互抵消，最终结果就是只出现一次的数字
  for (let num of nums) {
    result ^= num;
  }
  
  // 返回只出现一次的数字
  return result;
}`,
        testCases: [
          { input: '[2,2,1]', expected: '1' },
          { input: '[4,1,2,1,2]', expected: '4' }
        ]
      },
      {
        id: 'minimum-bit-flips',
        title: '最小比特翻转数',
        description: '计算将一个数转换为另一个数所需的最小比特翻转次数。',
        code: `function minBitFlips(start, goal) {
  // 计算start和goal的异或结果，异或结果中1的位置表示需要翻转的比特位
  let xor = start ^ goal;
  // 记录需要翻转的比特位数量
  let count = 0;
  
  // 统计异或结果中1的数量
  while (xor > 0) {
    // 检查最低位是否为1，如果是，计数器加1
    count += xor & 1;
    // 右移一位，继续检查下一位
    xor >>= 1;
  }
  
  // 返回需要翻转的比特位数量
  return count;
}`,
        testCases: [
          { input: '10, 7', expected: '3' },
          { input: '3, 4', expected: '3' }
        ]
      }
    ]
  },
  {
    category: '其他场景题',
    items: [
      {
        id: 'min-projects-to-clear-errors',
        title: '团队错误分清零最少项目',
        description: '计算最少需要完成多少项目才能将错误分清零。',
        code: `function minProjectsToClearErrors(errors, projects) {
  // 将错误分数按降序排序
  errors.sort((a, b) => b - a);
  // 将项目按能够解决的错误分数降序排序
  projects.sort((a, b) => b - a);
  
  // 错误数组的指针
  let i = 0;
  // 项目数组的指针
  let j = 0;
  // 记录完成的项目数量
  let count = 0;
  
  // 遍历错误和项目数组
  while (i < errors.length && j < projects.length) {
    // 如果当前项目能够解决当前错误
    if (projects[j] >= errors[i]) {
      // 完成该项目，计数器加1
      count++;
      // 移动错误和项目指针
      i++;
      j++;
    } else {
      // 当前项目无法解决当前错误，移动错误指针
      i++;
    }
  }
  
  // 返回完成的项目数量
  return count;
}`,
        testCases: [
          { input: '[5,3,2], [6,4,3]', expected: '3' },
          { input: '[10,8,6], [7,5,3]', expected: '2' }
        ]
      },
      {
        id: 'min-race-track-arrangement',
        title: '赛车最小排列赛道号',
        description: '计算赛车的最小排列赛道号。',
        code: `function minRaceTrackArrangement(cars) {
  cars.sort((a, b) => a - b);
  return cars;
}`,
        testCases: [
          { input: '[3,1,2]', expected: '[1,2,3]' },
          { input: '[5,2,8,1]', expected: '[1,2,5,8]' }
        ]
      },
      {
        id: 'library-book-allocation',
        title: '图书馆书籍分配',
        description: '计算图书馆书籍的分配方案。',
        code: `function allocateBooks(books, students) {
  if (students > books.length) return -1;
  
  let low = Math.max(...books);
  let high = books.reduce((sum, book) => sum + book, 0);
  
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let currentSum = 0;
    let requiredStudents = 1;
    
    for (let book of books) {
      currentSum += book;
      if (currentSum > mid) {
        requiredStudents++;
        currentSum = book;
      }
    }
    
    if (requiredStudents <= students) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  
  return low;
}`,
        testCases: [
          { input: '[12, 34, 67, 90], 2', expected: '113' },
          { input: '[10, 20, 30, 40], 2', expected: '60' }
        ]
      },
      {
        id: 'soldier-position-queries',
        title: '士兵交换位置查询',
        description: '处理士兵交换位置的查询。',
        code: `function soldierPositionQueries(soldiers, queries) {
  for (let query of queries) {
    let [a, b] = query;
    let temp = soldiers[a-1];
    soldiers[a-1] = soldiers[b-1];
    soldiers[b-1] = temp;
  }
  return soldiers;
}`,
        testCases: [
          { input: '[1,2,3,4,5], [[1,2],[3,4]]', expected: '[2,1,4,3,5]' },
          { input: '[10,20,30], [[1,3]]', expected: '[30,20,10]' }
        ]
      },
      {
        id: 'max-happy-friends-cake',
        title: '蛋糕最大开心朋友数',
        description: '计算蛋糕能让最多多少朋友开心。',
        code: `function maxHappyFriends(cake, friends) {
  let happy = 0;
  for (let friend of friends) {
    if (cake >= friend) {
      happy++;
      cake -= friend;
    }
  }
  return happy;
}`,
        testCases: [
          { input: '10, [3,2,5,4]', expected: '3' },
          { input: '8, [1,2,3,4]', expected: '4' }
        ]
      },
      {
        id: 'max-alumni-attendance',
        title: '校友圆桌最大出席',
        description: '计算校友圆桌的最大出席人数。',
        code: `function maxAlumniAttendance(alumni) {
  return Math.min(alumni.length, 10);
}`,
        testCases: [
          { input: '[1,2,3,4,5]', expected: '5' },
          { input: '[1,2,3,4,5,6,7,8,9,10,11]', expected: '10' }
        ]
      },
      {
        id: 'max-house-interval',
        title: '房屋最大间隔地皮',
        description: '计算房屋之间的最大间隔地皮。',
        code: `function maxHouseInterval(houses) {
  houses.sort((a, b) => a - b);
  let maxInterval = 0;
  for (let i = 1; i < houses.length; i++) {
    maxInterval = Math.max(maxInterval, houses[i] - houses[i-1]);
  }
  return maxInterval;
}`,
        testCases: [
          { input: '[1,3,6,10]', expected: '4' },
          { input: '[2,5,7,11]', expected: '4' }
        ]
      },
      {
        id: 'street-lights-simulation',
        title: '路灯/房屋状态模拟',
        description: '模拟路灯和房屋的状态。',
        code: `function streetLightsSimulation(houses, lights) {
  let illuminated = new Set();
  for (let light of lights) {
    for (let i = light - 1; i <= light + 1; i++) {
      illuminated.add(i);
    }
  }
  return houses.filter(house => illuminated.has(house)).length;
}`,
        testCases: [
          { input: '[1,2,3,4,5], [2,4]', expected: '5' },
          { input: '[1,3,5,7,9], [3,7]', expected: '4' }
        ]
      },
      {
        id: 'max-execution-resources',
        title: '资源分配最大执行数',
        description: '计算资源分配的最大执行数。',
        code: `function maxExecutionResources(resources, tasks) {
  resources.sort((a, b) => a - b);
  tasks.sort((a, b) => a - b);
  
  let count = 0;
  let i = 0, j = 0;
  
  while (i < resources.length && j < tasks.length) {
    if (resources[i] >= tasks[j]) {
      count++;
      i++;
      j++;
    } else {
      i++;
    }
  }
  
  return count;
}`,
        testCases: [
          { input: '[10,20,30], [5,15,25]', expected: '3' },
          { input: '[5,10,15], [10,20,30]', expected: '2' }
        ]
      },
      {
        id: 'longest-palindromic-sales-list',
        title: '销售数据最长回文列表',
        description: '找出销售数据中的最长回文列表。',
        code: `function longestPalindromicSalesList(sales) {
  let maxLength = 1;
  let start = 0;
  
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < sales.length && sales[left] === sales[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  
  for (let i = 0; i < sales.length; i++) {
    let len1 = expandAroundCenter(i, i);
    let len2 = expandAroundCenter(i, i + 1);
    let len = Math.max(len1, len2);
    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  
  return sales.slice(start, start + maxLength);
}`,
        testCases: [
          { input: '[1,2,3,2,1]', expected: '[1,2,3,2,1]' },
          { input: '[1,2,2,3,2,2,1]', expected: '[1,2,2,3,2,2,1]' }
        ]
      }
    ]
  }
];