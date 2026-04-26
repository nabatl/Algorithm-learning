export const examples = [
  {
    id: 'example-1',
    englishTitle: 'Find Longest Common Town Name',
    chineseTitle: '查找最长公共城镇名称',
    englishDescription: 'There are N people living in a state. In this state, people concatenate their town name before their first name. Write an algorithm to find the name of the town of the given N people where the name of the town is the common substring and has the maximum length.',
    chineseDescription: '一个州里住着N个人。在这个州，人们会在名字前加上他们的城镇名称。编写一个算法来找出这N个人的城镇名称，其中城镇名称是公共子串且长度最长。',
    algorithm: '最长公共前缀算法',
    algorithmDescription: '最长公共前缀算法用于找出多个字符串的最长公共前缀。该算法的核心思想是：1. 找到所有字符串中最短的那个，因为最长公共前缀的长度不可能超过最短字符串的长度；2. 从第一个字符开始，逐位比较所有字符串在该位置的字符是否相同；3. 如果所有字符串在该位置的字符相同，则继续比较下一个位置；4. 如果有任何字符串在该位置的字符不同，则停止比较，当前累积的前缀即为最长公共前缀。',
    examples: [
      {
        input: 'names = ["NewYorkJohn", "NewYorkAlice", "NewYorkBob"]',
        output: '"NewYork"'
      },
      {
        input: 'names = ["LondonTom", "LondonJerry", "ParisMike"]',
        output: '""'
      }
    ],
    code: `function findLongestCommonTownName(names) {
  // 处理边界情况：如果名字列表为空，返回空字符串
  if (names.length === 0) return "";
  
  // 找出最短的名字作为参考，因为最长公共前缀的长度不可能超过最短名字的长度
  let shortestName = names.reduce((shortest, current) => 
    current.length < shortest.length ? current : shortest, names[0]);
  
  // 存储最长公共前缀
  let longestPrefix = "";
  
  // 遍历最短名字的每个字符
  for (let i = 0; i < shortestName.length; i++) {
    // 获取当前位置的字符
    const currentChar = shortestName[i];
    
    // 检查所有名字是否在相同位置有相同的字符
    const allMatch = names.every(name => name[i] === currentChar);
    
    // 如果所有名字在当前位置都有相同的字符，将其添加到最长公共前缀中
    if (allMatch) {
      longestPrefix += currentChar;
    } else {
      // 如果有任何名字在当前位置的字符不同，停止遍历
      break;
    }
  }
  
  // 返回最长公共前缀
  return longestPrefix;
}`,
    javaCode: `public class Solution {
    public static String findLongestCommonTownName(String[] names) {
        // 处理边界情况：如果名字列表为空，返回空字符串
        if (names == null || names.length == 0) {
            return "";
        }
        
        // 找出最短的名字作为参考，因为最长公共前缀的长度不可能超过最短名字的长度
        String shortestName = names[0];
        for (String name : names) {
            if (name.length() < shortestName.length()) {
                shortestName = name;
            }
        }
        
        // 存储最长公共前缀
        StringBuilder longestPrefix = new StringBuilder();
        
        // 遍历最短名字的每个字符
        for (int i = 0; i < shortestName.length(); i++) {
            // 获取当前位置的字符
            char currentChar = shortestName.charAt(i);
            
            // 检查所有名字是否在相同位置有相同的字符
            boolean allMatch = true;
            for (String name : names) {
                if (name.charAt(i) != currentChar) {
                    allMatch = false;
                    break;
                }
            }
            
            // 如果所有名字在当前位置都有相同的字符，将其添加到最长公共前缀中
            if (allMatch) {
                longestPrefix.append(currentChar);
            } else {
                // 如果有任何名字在当前位置的字符不同，停止遍历
                break;
            }
        }
        
        // 返回最长公共前缀
        return longestPrefix.toString();
    }
}`
  },
  {
    id: 'example-2',
    englishTitle: 'Round Robin Scheduling Average Waiting Time',
    chineseTitle: '轮转调度平均等待时间',
    englishDescription: 'Systems that run multiple jobs concurrently on a single CPU have a round-robin scheduling process for choosing which tasks to run, at what time to run them, and how to break them up. This round-robin scheduling technique runs each job for a fixed amount of time before switching to the next job. The waiting time for a job is the total time that it spends waiting to be run. Each job arrives in the queue at a particular time and takes a certain amount of time to run. When a new job arrives, it is scheduled to run after the jobs that are already waiting for the CPU. Jobs that arrive at the same time are processed in the order they are found in the arrival array. You may assume that the jobs arrive in such frequency that the CPU is never idle. A list of job submissions is given. Write an algorithm to determine the average waiting time for all the jobs using the round-robin scheduling process.',
    chineseDescription: '在单个CPU上并发运行多个作业的系统使用轮转调度过程来选择运行哪些任务、何时运行它们以及如何分解它们。这种轮转调度技术在切换到下一个作业之前，每个作业运行固定的时间。作业的等待时间是它等待运行的总时间。每个作业在特定时间到达队列，需要一定的时间来运行。当新作业到达时，它被安排在已经等待CPU的作业之后运行。同时到达的作业按照到达数组中的顺序处理。您可以假设作业到达的频率使得CPU永远不会空闲。给定一个作业提交列表，编写一个算法来使用轮转调度过程确定所有作业的平均等待时间。',
    algorithm: '轮转调度算法',
    algorithmDescription: '轮转调度算法是一种基于时间片的CPU调度算法。其核心思想是：1. 为每个作业分配一个固定长度的时间片；2. 按照作业到达的顺序将作业放入就绪队列；3. 每次从队列头部取出一个作业，运行一个时间片的时间；4. 如果作业在时间片结束前完成，则从队列中移除；5. 如果作业在时间片结束后仍未完成，则将其重新放入队列尾部，等待下一次调度；6. 重复上述过程，直到所有作业完成。该算法的优点是公平性好，每个作业都有机会获得CPU时间。',
    examples: [
      {
        input: 'jobs = [[0, 10], [2, 5], [4, 3]], quantum = 3',
        output: '6.0'
      },
      {
        input: 'jobs = [[0, 3], [1, 9], [2, 6]], quantum = 3',
        output: '10.666666666666666'
      }
    ],
    code: `function calculateRoundRobinAverageWaitingTime(jobs, quantum) {
  const n = jobs.length;
  
  // 复制作业信息，包含到达时间、剩余运行时间和原始运行时间
  // 这样可以避免修改原始输入数据
  const jobInfo = jobs.map(([arrival, burst]) => ({
    arrival,        // 作业到达时间
    remaining: burst,  // 剩余运行时间
    burst,          // 原始运行时间
    completed: false  // 作业是否完成
  }));
  
  // 存储每个作业的等待时间
  const waitingTimes = new Array(n).fill(0);
  
  // 就绪队列，存储等待执行的作业索引
  const queue = [];
  
  // 当前时间
  let currentTime = 0;
  
  // 已完成的作业数
  let completedJobs = 0;
  
  // 下一个要处理的作业索引
  let jobIndex = 0;
  
  // 主循环，直到所有作业完成
  while (completedJobs < n) {
    // 将到达时间小于等于当前时间的作业加入队列
    while (jobIndex < n && jobInfo[jobIndex].arrival <= currentTime) {
      queue.push(jobIndex);
      jobIndex++;
    }
    
    // 如果队列不为空，处理队首作业
    if (queue.length > 0) {
      // 取出队首作业
      const currentJobIndex = queue.shift();
      const currentJob = jobInfo[currentJobIndex];
      
      // 计算本次运行的时间：取时间片和剩余运行时间的最小值
      const runTime = Math.min(quantum, currentJob.remaining);
      
      // 记录运行前的时间，用于计算等待时间
      const startTime = currentTime;
      
      // 更新当前时间
      currentTime += runTime;
      
      // 更新作业的剩余运行时间
      currentJob.remaining -= runTime;
      
      // 将在本次运行期间到达的作业加入队列
      while (jobIndex < n && jobInfo[jobIndex].arrival <= currentTime) {
        queue.push(jobIndex);
        jobIndex++;
      }
      
      // 如果作业未完成，将其重新加入队列
      if (currentJob.remaining > 0) {
        queue.push(currentJobIndex);
      } else {
        // 作业完成，计算等待时间
        // 等待时间 = 完成时间 - 到达时间 - 运行时间
        waitingTimes[currentJobIndex] = currentTime - currentJob.arrival - currentJob.burst;
        completedJobs++;
      }
    } else {
      // 如果队列为空，直接跳到下一个作业的到达时间
      if (jobIndex < n) {
        currentTime = jobInfo[jobIndex].arrival;
      }
    }
  }
  
  // 计算总等待时间
  const totalWaitingTime = waitingTimes.reduce((sum, time) => sum + time, 0);
  
  // 返回平均等待时间
  return totalWaitingTime / n;
}`,
    javaCode: `import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    public static double calculateRoundRobinAverageWaitingTime(int[][] jobs, int quantum) {
        int n = jobs.length;
        
        // 复制作业信息，包含到达时间、剩余运行时间和原始运行时间
        int[] arrival = new int[n];
        int[] remaining = new int[n];
        int[] burst = new int[n];
        boolean[] completed = new boolean[n];
        
        for (int i = 0; i < n; i++) {
            arrival[i] = jobs[i][0];
            remaining[i] = jobs[i][1];
            burst[i] = jobs[i][1];
            completed[i] = false;
        }
        
        // 存储每个作业的等待时间
        int[] waitingTimes = new int[n];
        
        // 就绪队列，存储等待执行的作业索引
        Queue<Integer> queue = new LinkedList<>();
        
        // 当前时间
        int currentTime = 0;
        
        // 已完成的作业数
        int completedJobs = 0;
        
        // 下一个要处理的作业索引
        int jobIndex = 0;
        
        // 主循环，直到所有作业完成
        while (completedJobs < n) {
            // 将到达时间小于等于当前时间的作业加入队列
            while (jobIndex < n && arrival[jobIndex] <= currentTime) {
                queue.offer(jobIndex);
                jobIndex++;
            }
            
            // 如果队列不为空，处理队首作业
            if (!queue.isEmpty()) {
                // 取出队首作业
                int currentJobIndex = queue.poll();
                
                // 计算本次运行的时间：取时间片和剩余运行时间的最小值
                int runTime = Math.min(quantum, remaining[currentJobIndex]);
                
                // 更新当前时间
                currentTime += runTime;
                
                // 更新作业的剩余运行时间
                remaining[currentJobIndex] -= runTime;
                
                // 将在本次运行期间到达的作业加入队列
                while (jobIndex < n && arrival[jobIndex] <= currentTime) {
                    queue.offer(jobIndex);
                    jobIndex++;
                }
                
                // 如果作业未完成，将其重新加入队列
                if (remaining[currentJobIndex] > 0) {
                    queue.offer(currentJobIndex);
                } else {
                    // 作业完成，计算等待时间
                    // 等待时间 = 完成时间 - 到达时间 - 运行时间
                    waitingTimes[currentJobIndex] = currentTime - arrival[currentJobIndex] - burst[currentJobIndex];
                    completedJobs++;
                }
            } else {
                // 如果队列为空，直接跳到下一个作业的到达时间
                if (jobIndex < n) {
                    currentTime = arrival[jobIndex];
                }
            }
        }
        
        // 计算总等待时间
        int totalWaitingTime = 0;
        for (int time : waitingTimes) {
            totalWaitingTime += time;
        }
        
        // 返回平均等待时间
        return (double) totalWaitingTime / n;
    }
}`
  },
  {
    id: 'example-3',
    englishTitle: 'Minimum Projects to Clear Error Scores',
    chineseTitle: '清零错误分数的最少项目数',
    englishDescription: 'Ethan is the leader of a team with N members. He has assigned an error score to each member in his team based on the bugs that he has found in that particular team member’s task. Because the error score has increased to a significantly large value, he wants to give all the team members a chance to improve their error scores, thereby improving their reputation in the organization. He introduces a new rule that whenever a team member completes a project successfully, the error score of that member decreases by a count P and the error score of all the other team members whose score is greater than zero decreases by a count Q. Write an algorithm to help Ethan find the minimum number of projects that the team must complete in order to make the error score of all the team members zero.',
    chineseDescription: 'Ethan是一个有N个成员的团队的 leader。他根据在每个团队成员的任务中发现的 bug 为每个成员分配了一个错误分数。由于错误分数已经增加到一个相当大的值，他想给所有团队成员一个机会来提高他们的错误分数，从而提高他们在组织中的声誉。他引入了一条新规则：每当团队成员成功完成一个项目时，该成员的错误分数减少 P 分，所有其他错误分数大于零的团队成员的错误分数减少 Q 分。编写一个算法来帮助 Ethan 找到团队必须完成的最少项目数，以使所有团队成员的错误分数为零。',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果是全局最好或最优的算法。在本题中，贪心算法的核心思想是：1. 每次选择当前错误分数最高的成员来完成项目；2. 这样可以最大化每次项目完成对整体错误分数的减少量；3. 重复这个过程，直到所有成员的错误分数都为零。这种策略可以确保使用最少的项目数来清零所有错误分数。',
    examples: [
      {
        input: 'errorScores = [10, 5], P = 3, Q = 1',
        output: '5'
      },
      {
        input: 'errorScores = [8, 7, 6], P = 4, Q = 2',
        output: '4'
      }
    ],
    code: `function minProjectsToClearErrors(errorScores, P, Q) {
  // 初始化项目数为0
  let projects = 0;
  
  // 复制错误分数数组，避免修改原始数据
  let scores = [...errorScores];
  
  // 主循环，直到所有分数都为零
  while (true) {
    // 检查是否所有分数都为零或负数
    if (scores.every(score => score <= 0)) {
      break;
    }
    
    // 找到当前分数最高的成员
    let maxIndex = 0;
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] > scores[maxIndex]) {
        maxIndex = i;
      }
    }
    
    // 为该成员完成一个项目，项目数加1
    projects++;
    
    // 更新所有成员的分数
    for (let i = 0; i < scores.length; i++) {
      if (i === maxIndex) {
        // 为完成项目的成员减少P分
        scores[i] -= P;
      } else if (scores[i] > 0) {
        // 为其他分数大于0的成员减少Q分
        scores[i] -= Q;
      }
    }
  }
  
  // 返回最少项目数
  return projects;
}`,
    javaCode: `public class Solution {
    public static int minProjectsToClearErrors(int[] errorScores, int P, int Q) {
        // 初始化项目数为0
        int projects = 0;
        
        // 复制错误分数数组，避免修改原始数据
        int[] scores = new int[errorScores.length];
        for (int i = 0; i < errorScores.length; i++) {
            scores[i] = errorScores[i];
        }
        
        // 主循环，直到所有分数都为零
        while (true) {
            // 检查是否所有分数都为零或负数
            boolean allZero = true;
            for (int score : scores) {
                if (score > 0) {
                    allZero = false;
                    break;
                }
            }
            if (allZero) {
                break;
            }
            
            // 找到当前分数最高的成员
            int maxIndex = 0;
            for (int i = 1; i < scores.length; i++) {
                if (scores[i] > scores[maxIndex]) {
                    maxIndex = i;
                }
            }
            
            // 为该成员完成一个项目，项目数加1
            projects++;
            
            // 更新所有成员的分数
            for (int i = 0; i < scores.length; i++) {
                if (i == maxIndex) {
                    // 为完成项目的成员减少P分
                    scores[i] -= P;
                } else if (scores[i] > 0) {
                    // 为其他分数大于0的成员减少Q分
                    scores[i] -= Q;
                }
            }
        }
        
        // 返回最少项目数
        return projects;
    }
}`
  },
  {
    id: 'example-4',
    englishTitle: 'Maximum Oil Transport in Tree Network',
    chineseTitle: '树形网络最大输油量',
    englishDescription: 'Theon is an energy engineer. His job is to transport oil from the base refinery to the main storage units through a network of pipes. The network is in the form of a tree, where the base refinery is the root and the main storage units are the leaves. The pipes are connected to the storage units via internal connecting stations. The pipes can have different transfer rates [liter of oil per unit of time]. He wishes to determine the maximum amount of oil that can be transported via the network at any given time. Write an algorithm to help Theon find the maximum amount of oil that can be transported via the network at any given time.',
    chineseDescription: 'Theon是一名能源工程师。他的工作是通过管道网络将石油从基础炼油厂运输到主要存储单元。该网络呈树形结构，其中基础炼油厂是根节点，主要存储单元是叶节点。管道通过内部连接站连接到存储单元。管道可以有不同的传输速率[每单位时间的石油升数]。他希望确定在任何给定时间可以通过网络运输的最大石油量。编写一个算法来帮助Theon找到在任何给定时间可以通过网络运输的最大石油量。',
    algorithm: '深度优先搜索 (DFS) 算法',
    algorithmDescription: '深度优先搜索是一种用于遍历或搜索树或图的算法。在本题中，DFS算法的核心思想是：1. 从根节点（炼油厂）开始，递归地遍历所有子节点；2. 对于每个节点，计算从该节点到其所有子节点的最大输油量；3. 对于每个子节点，输油量受限于该子节点与父节点之间管道的容量；4. 根节点的总输油量是所有子节点输油量的总和。这种方法可以有效地计算出整个树形网络的最大输油量。',
    examples: [
      {
        input: 'tree = [[0, 1, 5], [0, 2, 3], [1, 3, 4], [1, 4, 2]]',
        output: '7'
      },
      {
        input: 'tree = [[0, 1, 10], [0, 2, 20], [2, 3, 5]]',
        output: '15'
      }
    ],
    code: `function maxOilTransport(tree) {
  // 构建邻接表，用于存储树的结构
  const adj = new Map();
  for (const [u, v, capacity] of tree) {
    if (!adj.has(u)) adj.set(u, []);
    if (!adj.has(v)) adj.set(v, []);
    // 添加双向边，因为树是无向的
    adj.get(u).push({ node: v, capacity });
    adj.get(v).push({ node: u, capacity });
  }
  
  // 存储最大输油量
  let maxFlow = 0;
  
  // DFS遍历树，计算每个子树的最大流量
  function dfs(node, parent) {
    // 当前节点的总流量
    let currentFlow = 0;
    
    // 遍历当前节点的所有邻居
    for (const { node: neighbor, capacity } of adj.get(node)) {
      // 跳过父节点，避免循环
      if (neighbor === parent) continue;
      
      // 递归计算子树的最大流量
      const childFlow = dfs(neighbor, node);
      
      // 取子树流量和当前管道容量的最小值，累加到当前流量
      // 因为管道容量限制了能传输的油量
      currentFlow += Math.min(childFlow, capacity);
    }
    
    // 如果是叶节点（没有子节点），返回一个很大的值（表示可以接收无限流量）
    if (currentFlow === 0) {
      return Infinity;
    }
    
    // 更新最大流量
    maxFlow = Math.max(maxFlow, currentFlow);
    
    // 返回当前子树的最大流量
    return currentFlow;
  }
  
  // 从根节点（0）开始遍历
  dfs(0, -1);
  
  // 返回最大输油量
  return maxFlow;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    static class Edge {
        int node;
        int capacity;
        
        Edge(int node, int capacity) {
            this.node = node;
            this.capacity = capacity;
        }
    }
    
    static int maxFlow;
    
    public static int maxOilTransport(int[][] tree) {
        // 构建邻接表，用于存储树的结构
        List<List<Edge>> adj = new ArrayList<>();
        
        // 确定最大节点编号
        int maxNode = 0;
        for (int[] edge : tree) {
            maxNode = Math.max(maxNode, Math.max(edge[0], edge[1]));
        }
        
        // 初始化邻接表
        for (int i = 0; i <= maxNode; i++) {
            adj.add(new ArrayList<>());
        }
        
        // 添加双向边，因为树是无向的
        for (int[] edge : tree) {
            int u = edge[0];
            int v = edge[1];
            int capacity = edge[2];
            adj.get(u).add(new Edge(v, capacity));
            adj.get(v).add(new Edge(u, capacity));
        }
        
        // 初始化最大输油量
        maxFlow = 0;
        
        // 从根节点（0）开始遍历
        dfs(0, -1, adj);
        
        // 返回最大输油量
        return maxFlow;
    }
    
    private static int dfs(int node, int parent, List<List<Edge>> adj) {
        // 当前节点的总流量
        int currentFlow = 0;
        
        // 遍历当前节点的所有邻居
        for (Edge edge : adj.get(node)) {
            int neighbor = edge.node;
            int capacity = edge.capacity;
            
            // 跳过父节点，避免循环
            if (neighbor == parent) continue;
            
            // 递归计算子树的最大流量
            int childFlow = dfs(neighbor, node, adj);
            
            // 取子树流量和当前管道容量的最小值，累加到当前流量
            // 因为管道容量限制了能传输的油量
            currentFlow += Math.min(childFlow, capacity);
        }
        
        // 如果是叶节点（没有子节点），返回一个很大的值（表示可以接收无限流量）
        if (currentFlow == 0) {
            return Integer.MAX_VALUE;
        }
        
        // 更新最大流量
        maxFlow = Math.max(maxFlow, currentFlow);
        
        // 返回当前子树的最大流量
        return currentFlow;
    }
}`
  },
  {
    id: 'example-5',
    englishTitle: 'Replace Values with Indexes',
    chineseTitle: '将值替换为索引',
    englishDescription: 'You are given a list of N unique positive numbers ranging from 0 to (N -1). Write an algorithm to replace the value of each number with its corresponding index value in the list.',
    chineseDescription: '给定一个包含N个唯一正数的列表，这些数的范围从0到(N-1)。编写一个算法来将每个数的值替换为它在列表中的对应索引值。',
    algorithm: '哈希表映射算法',
    algorithmDescription: '哈希表映射算法是一种使用哈希表来存储键值对的方法，以便快速查找和访问数据。在本题中，哈希表映射算法的核心思想是：1. 首先创建一个哈希表，将每个值与其对应的索引关联起来；2. 然后遍历原始数组，对于每个元素，从哈希表中查找其对应的索引值；3. 将查找得到的索引值作为新的元素值。这种方法的时间复杂度为O(N)，其中N是数组的长度，因为哈希表的查找操作是常数时间的。',
    examples: [
      {
        input: 'nums = [3, 0, 2, 1]',
        output: '[3, 1, 2, 0]'
      },
      {
        input: 'nums = [0, 1, 2, 3]',
        output: '[0, 1, 2, 3]'
      }
    ],
    code: `function replaceValuesWithIndexes(nums) {
  const n = nums.length;
  
  // 创建结果数组
  const result = new Array(n);
  
  // 创建值到索引的映射，用于快速查找每个值对应的索引
  const valueToIndex = new Map();
  for (let i = 0; i < n; i++) {
    valueToIndex.set(nums[i], i);
  }
  
  // 替换每个值为其索引
  // 对于每个位置i，我们需要找到值为i的元素的索引
  for (let i = 0; i < n; i++) {
    result[i] = valueToIndex.get(i);
  }
  
  // 返回结果数组
  return result;
}`,
    javaCode: `public class Solution {
    public static int[] replaceValuesWithIndexes(int[] nums) {
        int n = nums.length;
        
        // 创建结果数组
        int[] result = new int[n];
        
        // 创建值到索引的映射，用于快速查找每个值对应的索引
        int[] valueToIndex = new int[n];
        for (int i = 0; i < n; i++) {
            valueToIndex[nums[i]] = i;
        }
        
        // 替换每个值为其索引
        // 对于每个位置i，我们需要找到值为i的元素的索引
        for (int i = 0; i < n; i++) {
            result[i] = valueToIndex[i];
        }
        
        // 返回结果数组
        return result;
    }
}`
  },
  {
    id: 'example-6',
    englishTitle: 'Maximum Vapor Rate After Experiment',
    chineseTitle: '实验后的最大蒸汽率',
    englishDescription: 'Dr. Jackson, a researcher, wishes to perform an experiment. He has a variety of toxic chemicals. Each chemical has some vapor rate. When two chemicals are mixed, then the vapor rate of the mixture is the multiplication of their respective vapor rates. Dr. Jackson picks two equal-sized sets of non-overlapping, consecutively-placed chemicals from a series of chemicals in his lab. He reverses the positions of the chemicals in the second set. He then mixes each chemical from the first set with the correspondingly-placed chemical of the second set. The total vapor rate at the end of the experiment is the sum of the products of the respective vapor rates of the chemicals that he mixed from both sets. If the total vapor rate is negative, he will not pick any set. Write an algorithm to find the maximum vapor rate obtainable after the experiment.',
    chineseDescription: '研究员Jackson博士希望进行一项实验。他有各种有毒化学品。每种化学品都有一定的蒸汽率。当两种化学品混合时，混合物的蒸汽率是它们各自蒸汽率的乘积。Jackson博士从他实验室的一系列化学品中挑选出两组大小相等、不重叠、连续放置的化学品。他将第二组化学品的位置反转。然后，他将第一组中的每种化学品与第二组中对应位置的化学品混合。实验结束时的总蒸汽率是他从两组混合的化学品各自蒸汽率的乘积之和。如果总蒸汽率为负，他将不选择任何一组。编写一个算法来找到实验后可获得的最大蒸汽率。',
    algorithm: '暴力枚举算法',
    algorithmDescription: '暴力枚举算法是一种通过枚举所有可能的情况来找到最优解的方法。在本题中，暴力枚举算法的核心思想是：1. 遍历所有可能的子数组长度（从1到n/2）；2. 对于每个长度，遍历所有可能的起始位置；3. 提取第一组和第二组子数组；4. 反转第二组子数组；5. 计算总蒸汽率；6. 记录并更新最大蒸汽率。这种方法虽然时间复杂度较高，但对于小规模的输入来说是可行的。',
    examples: [
      {
        input: 'vaporRates = [1, 2, 3, 4]',
        output: '14'
      },
      {
        input: 'vaporRates = [2, -1, 3, -4, 5]',
        output: '22'
      }
    ],
    code: `function maxVaporRate(vaporRates) {
  const n = vaporRates.length;
  
  // 初始化最大蒸汽率为0
  let maxRate = 0;
  
  // 遍历所有可能的子数组长度
  // 因为需要两组等长的子数组，所以长度最多为n/2
  for (let length = 1; length <= Math.floor(n / 2); length++) {
    // 遍历所有可能的起始位置
    // 确保第二组子数组不会超出数组范围
    for (let i = 0; i <= n - 2 * length; i++) {
      // 提取第一组子数组
      const firstSet = vaporRates.slice(i, i + length);
      
      // 提取第二组子数组
      const secondSet = vaporRates.slice(i + length, i + 2 * length);
      
      // 反转第二组子数组
      const reversedSecondSet = [...secondSet].reverse();
      
      // 计算总蒸汽率
      let totalRate = 0;
      for (let j = 0; j < length; j++) {
        // 计算对应位置的乘积并累加到总蒸汽率
        totalRate += firstSet[j] * reversedSecondSet[j];
      }
      
      // 更新最大蒸汽率
      if (totalRate > maxRate) {
        maxRate = totalRate;
      }
    }
  }
  
  // 返回最大蒸汽率
  return maxRate;
}`,
    javaCode: `public class Solution {
    public static int maxVaporRate(int[] vaporRates) {
        int n = vaporRates.length;
        
        // 初始化最大蒸汽率为0
        int maxRate = 0;
        
        // 遍历所有可能的子数组长度
        // 因为需要两组等长的子数组，所以长度最多为n/2
        for (int length = 1; length <= n / 2; length++) {
            // 遍历所有可能的起始位置
            // 确保第二组子数组不会超出数组范围
            for (int i = 0; i <= n - 2 * length; i++) {
                // 提取第一组子数组
                int[] firstSet = new int[length];
                for (int j = 0; j < length; j++) {
                    firstSet[j] = vaporRates[i + j];
                }
                
                // 提取并反转第二组子数组
                int[] reversedSecondSet = new int[length];
                for (int j = 0; j < length; j++) {
                    reversedSecondSet[j] = vaporRates[i + length + length - 1 - j];
                }
                
                // 计算总蒸汽率
                int totalRate = 0;
                for (int j = 0; j < length; j++) {
                    // 计算对应位置的乘积并累加到总蒸汽率
                    totalRate += firstSet[j] * reversedSecondSet[j];
                }
                
                // 更新最大蒸汽率
                if (totalRate > maxRate) {
                    maxRate = totalRate;
                }
            }
        }
        
        // 返回最大蒸汽率
        return maxRate;
    }
}`
  },
  {
    id: 'example-7',
    englishTitle: 'Sort First K Elements Ascending and Remaining Descending',
    chineseTitle: '前K元素升序排序，剩余降序排序',
    englishDescription: 'You are given a list of integers of size N. Write an algorithm to sort the first K elements (from list[0] to list[K-1]) of the list in ascending order and the remaining (list[K] to list[N-1]) elements in descending order.',
    chineseDescription: '给定一个大小为N的整数列表。编写一个算法，将列表的前K个元素（从list[0]到list[K-1]）按升序排序，将剩余的元素（从list[K]到list[N-1]）按降序排序。',
    algorithm: '排序算法',
    algorithmDescription: '排序算法是一种将一组数据按照特定顺序排列的算法。在本题中，我们使用了JavaScript内置的排序函数，其核心思想是：1. 提取列表的前K个元素，对其进行升序排序；2. 提取列表的剩余元素，对其进行降序排序；3. 将排序后的两部分重新组合成一个新的列表。JavaScript的sort方法默认使用字符串比较，所以我们需要提供比较函数来确保正确的数值排序。',
    examples: [
      {
        input: 'nums = [5, 3, 8, 1, 2, 9, 4, 7, 6], K = 4',
        output: '[1, 3, 5, 8, 9, 7, 6, 4, 2]'
      },
      {
        input: 'nums = [10, 20, 30, 40, 50], K = 2',
        output: '[10, 20, 50, 40, 30]'
      }
    ],
    code: `function sortFirstKAscendingRemainingDescending(nums, K) {
  const n = nums.length;
  
  // 对前K个元素进行升序排序
  // 使用slice(0, K)复制前K个元素，避免修改原始数组
  const firstK = nums.slice(0, K).sort((a, b) => a - b);
  
  // 对剩余元素进行降序排序
  // 使用slice(K)复制剩余元素
  const remaining = nums.slice(K).sort((a, b) => b - a);
  
  // 合并两个部分并返回
  return [...firstK, ...remaining];
}`,
    javaCode: `import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Solution {
    public static int[] sortFirstKAscendingRemainingDescending(int[] nums, int K) {
        int n = nums.length;
        
        // 对前K个元素进行升序排序
        int[] firstK = Arrays.copyOfRange(nums, 0, K);
        Arrays.sort(firstK);
        
        // 对剩余元素进行降序排序
        Integer[] remainingArray = new Integer[n - K];
        for (int i = 0; i < n - K; i++) {
            remainingArray[i] = nums[K + i];
        }
        Arrays.sort(remainingArray, Collections.reverseOrder());
        
        // 合并两个部分
        int[] result = new int[n];
        System.arraycopy(firstK, 0, result, 0, K);
        for (int i = 0; i < n - K; i++) {
            result[K + i] = remainingArray[i];
        }
        
        // 返回结果数组
        return result;
    }
}`
  },
  {
    id: 'example-8',
    englishTitle: 'Count Lucky Customers with Product Pair Difference',
    chineseTitle: '计算具有产品价格差为K的幸运顾客数',
    englishDescription: 'The manager of a supermarket wishes to hold an event at which he will distribute gift baskets to lucky customers. Each gift basket contains a pair of products. Each basket contains different product pairs, but the overall value of the baskets may be the same. There are N types of products and each product has a price. The gift baskets will awarded to the customers that pick a product pair that has a difference in price equal to the given integer value K. Write an algorithm to help the Manager find the total numbers of lucky customers who will win a gift basket.',
    chineseDescription: '超市经理希望举办一个活动，向幸运顾客分发礼品篮。每个礼品篮包含一对产品。每个篮子包含不同的产品对，但篮子的总价值可能相同。有N种类型的产品，每种产品都有一个价格。礼品篮将颁发给挑选价格差等于给定整数值K的产品对的顾客。编写一个算法来帮助经理找到将赢得礼品篮的幸运顾客总数。',
    algorithm: '哈希表查找算法',
    algorithmDescription: '哈希表查找算法是一种利用哈希表数据结构来快速查找元素的方法。在本题中，哈希表查找算法的核心思想是：1. 使用Set数据结构存储所有唯一的价格，这样可以快速判断一个价格是否存在；2. 遍历每个唯一价格，检查是否存在价格差为K的另一个价格（即price + K）；3. 如果存在，则增加幸运顾客数。这种方法的时间复杂度为O(N)，其中N是产品的数量，因为Set的查找操作是常数时间的。',
    examples: [
      {
        input: 'prices = [1, 5, 3, 4, 2], K = 2',
        output: '3'
      },
      {
        input: 'prices = [1, 3, 5, 7, 9], K = 2',
        output: '4'
      }
    ],
    code: `function countLuckyCustomers(prices, K) {
  // 使用Set存储价格，去除重复值并提高查找效率
  const priceSet = new Set(prices);
  
  // 将Set转换为数组，方便遍历
  const uniquePrices = [...priceSet];
  
  // 初始化幸运顾客数为0
  let count = 0;
  
  // 遍历每个唯一价格
  for (const price of uniquePrices) {
    // 检查是否存在价格差为K的另一个价格
    if (priceSet.has(price + K)) {
      count++;
    }
  }
  
  // 返回幸运顾客数
  return count;
}`,
    javaCode: `import java.util.HashSet;
import java.util.Set;

public class Solution {
    public static int countLuckyCustomers(int[] prices, int K) {
        // 使用Set存储价格，去除重复值并提高查找效率
        Set<Integer> priceSet = new HashSet<>();
        for (int price : prices) {
            priceSet.add(price);
        }
        
        // 初始化幸运顾客数为0
        int count = 0;
        
        // 遍历每个唯一价格
        for (int price : priceSet) {
            // 检查是否存在价格差为K的另一个价格
            if (priceSet.contains(price + K)) {
                count++;
            }
        }
        
        // 返回幸运顾客数
        return count;
    }
}`
  },
  {
    id: 'example-9',
    englishTitle: 'Check Right Rotation of Words',
    chineseTitle: '检查单词的右旋转',
    englishDescription: 'Charlie has a magic mirror that shows the right-rotated versions of a given word. To generate different right rotations of a word, the word is written in a circle in a clockwise order and read it starting from any given character in a clockwise order until all the characters are covered. For example, in the word "sample", if we start with p, we get the right rotated word as "plesam". Write an algorithm to output 1 if the word1 is a right rotation of word2 otherwise output -1.',
    chineseDescription: 'Charlie有一个魔镜，可以显示给定单词的右旋转版本。为了生成单词的不同右旋转版本，将单词按顺时针顺序写在一个圆圈中，从任何给定字符开始按顺时针顺序读取，直到覆盖所有字符。例如，在单词"sample"中，如果我们从p开始，我们得到的右旋转单词是"plesam"。编写一个算法，如果word1是word2的右旋转，则输出1，否则输出-1。',
    algorithm: '字符串处理算法',
    algorithmDescription: '字符串处理算法是一种用于处理和操作字符串的方法。在本题中，字符串处理算法的核心思想是：1. 首先检查两个单词的长度是否相同，如果长度不同，word1不可能是word2的右旋转；2. 如果长度相同，检查word1是否是word2 + word2的子串。这是因为如果word1是word2的右旋转，那么它必定会出现在word2 + word2中。例如，word2 = "sample"，word2 + word2 = "samplesample"，所有右旋转版本（如"plesam"）都会在其中出现。',
    examples: [
      {
        input: 'word1 = "plesam", word2 = "sample"',
        output: '1'
      },
      {
        input: 'word1 = "hello", word2 = "world"',
        output: '-1'
      }
    ],
    code: `function isRightRotation(word1, word2) {
  // 检查长度是否相同，如果长度不同，word1不可能是word2的右旋转
  if (word1.length !== word2.length) {
    return -1;
  }
  
  // 检查word1是否是word2 + word2的子串
  // 原理：如果word1是word2的右旋转，那么它必定是word2 + word2的子串
  // 例如：word2 = "sample", word2 + word2 = "samplesample"
  // 所有右旋转版本（如"plesam"）都会在其中出现
  const doubledWord2 = word2 + word2;
  if (doubledWord2.includes(word1)) {
    return 1;
  }
  
  // 如果不是子串，返回-1
  return -1;
}`,
    javaCode: `public class Solution {
    public static int isRightRotation(String word1, String word2) {
        // 检查长度是否相同，如果长度不同，word1不可能是word2的右旋转
        if (word1.length() != word2.length()) {
            return -1;
        }
        
        // 检查word1是否是word2 + word2的子串
        // 原理：如果word1是word2的右旋转，那么它必定是word2 + word2的子串
        // 例如：word2 = "sample", word2 + word2 = "samplesample"
        // 所有右旋转版本（如"plesam"）都会在其中出现
        String doubledWord2 = word2 + word2;
        if (doubledWord2.contains(word1)) {
            return 1;
        }
        
        // 如果不是子串，返回-1
        return -1;
    }
}`
  },
  {
    id: 'example-10',
    englishTitle: 'Minimum Juice Stalls to Reach School',
    chineseTitle: '到达学校的最少果汁摊数',
    englishDescription: 'John misses his bus and has to walk all his way from home to school. The distance between his school and home is D units. He starts his journey with an initial energy of K units. His energy decreases by 1 unit for every unit of distance walked. On his way to school, there are N juice stalls. Each stall has a specific amount of juice in liters. His energy increases by 1 unit for every liter of juice he consumes. Note that in order to keep him walking he should have nonzero energy.Write an algorithm to help John figure out the minimum number of juice stalls at which he should stop to successfully reach the school. In case he cant reach the school, the output will be -1.',
    chineseDescription: 'John错过了公交车，不得不从家步行到学校。学校和家之间的距离是D单位。他开始旅程时的初始能量是K单位。他每走1单位距离，能量就减少1单位。在去学校的路上，有N个果汁摊。每个摊位都有特定数量的果汁（以升为单位）。他每消耗1升果汁，能量就增加1单位。请注意，为了保持行走，他的能量必须非零。编写一个算法来帮助John计算他应该停留的最少果汁摊数，以便成功到达学校。如果他无法到达学校，输出将是-1。',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果是全局最好或最优的算法。在本题中，贪心算法的核心思想是：1. 首先按位置排序果汁摊；2. 在每一步中，计算当前能量能到达的最远距离；3. 在可到达范围内选择能提供最多能量的果汁摊；4. 前往该果汁摊，更新当前能量和位置；5. 重复上述过程，直到到达学校或无法继续前进。这种策略可以确保使用最少的果汁摊数来到达学校。',
    examples: [
      {
        input: 'D = 10, K = 5, stalls = [[2, 3], [5, 5], [7, 2]]',
        output: '1'
      },
      {
        input: 'D = 15, K = 3, stalls = [[4, 2], [8, 3], [12, 1]]',
        output: '2'
      }
    ],
    code: `function minJuiceStalls(D, K, stalls) {
  // 按位置排序果汁摊，确保我们按顺序考虑它们
  stalls.sort((a, b) => a[0] - b[0]);
  
  // 初始化当前能量
  let currentEnergy = K;
  
  // 初始化当前位置
  let currentPosition = 0;
  
  // 初始化停留次数
  let stops = 0;
  
  // 初始化果汁摊索引
  let i = 0;
  
  // 主循环，直到到达学校
  while (currentPosition < D) {
    // 计算当前能量能到达的最远距离
    const maxReach = currentPosition + currentEnergy;
    
    // 如果已经可以到达学校，直接返回停留次数
    if (maxReach >= D) {
      return stops;
    }
    
    // 找出在可到达范围内的果汁摊，并选择能提供最多能量的那个
    let bestStall = -1;
    let maxEnergyGain = 0;
    
    while (i < stalls.length && stalls[i][0] <= maxReach) {
      // 选择能量增益最大的果汁摊
      if (stalls[i][1] > maxEnergyGain) {
        maxEnergyGain = stalls[i][1];
        bestStall = i;
      }
      i++;
    }
    
    // 如果没有找到可到达的果汁摊，无法到达学校，返回-1
    if (bestStall === -1) {
      return -1;
    }
    
    // 前往选择的果汁摊
    const stallPosition = stalls[bestStall][0];
    // 扣除到达果汁摊消耗的能量
    currentEnergy -= (stallPosition - currentPosition);
    // 更新当前位置到果汁摊位置
    currentPosition = stallPosition;
    
    // 消耗果汁，增加能量
    currentEnergy += stalls[bestStall][1];
    // 停留次数加1
    stops++;
  }
  
  // 返回最少停留次数
  return stops;
}`,
    javaCode: `import java.util.Arrays;
import java.util.Comparator;

public class Solution {
    public static int minJuiceStalls(int D, int K, int[][] stalls) {
        // 按位置排序果汁摊，确保我们按顺序考虑它们
        Arrays.sort(stalls, Comparator.comparingInt(a -> a[0]));
        
        // 初始化当前能量
        int currentEnergy = K;
        
        // 初始化当前位置
        int currentPosition = 0;
        
        // 初始化停留次数
        int stops = 0;
        
        // 初始化果汁摊索引
        int i = 0;
        
        // 主循环，直到到达学校
        while (currentPosition < D) {
            // 计算当前能量能到达的最远距离
            int maxReach = currentPosition + currentEnergy;
            
            // 如果已经可以到达学校，直接返回停留次数
            if (maxReach >= D) {
                return stops;
            }
            
            // 找出在可到达范围内的果汁摊，并选择能提供最多能量的那个
            int bestStall = -1;
            int maxEnergyGain = 0;
            
            while (i < stalls.length && stalls[i][0] <= maxReach) {
                // 选择能量增益最大的果汁摊
                if (stalls[i][1] > maxEnergyGain) {
                    maxEnergyGain = stalls[i][1];
                    bestStall = i;
                }
                i++;
            }
            
            // 如果没有找到可到达的果汁摊，无法到达学校，返回-1
            if (bestStall == -1) {
                return -1;
            }
            
            // 前往选择的果汁摊
            int stallPosition = stalls[bestStall][0];
            // 扣除到达果汁摊消耗的能量
            currentEnergy -= (stallPosition - currentPosition);
            // 更新当前位置到果汁摊位置
            currentPosition = stallPosition;
            
            // 消耗果汁，增加能量
            currentEnergy += stalls[bestStall][1];
            // 停留次数加1
            stops++;
        }
        
        // 返回最少停留次数
        return stops;
    }
}`
  },
  {
    id: 'example-11',
    englishTitle: 'Generate Track Number from Registration Number',
    chineseTitle: '从注册号码生成赛道号码',
    englishDescription: 'In a car racing game, the participating cars must be registered online prior to the game. A car is assigned a registration number that is stored in a database. The registration number consists of digits from 0-9. The registration number can be positive or negative. A negative registration number denotes that the car is already registered online whereas a positive registration number denotes that the car is a newly registered car. Before the game starts, the system automatically assigns a track number to each car. The track number is the smallest permutation of the car registration number and never starts with zero. Write an algorithm to generate the track number.',
    chineseDescription: '在赛车游戏中，参赛车辆必须在游戏开始前在线注册。每辆车被分配一个存储在数据库中的注册号码。注册号码由0-9的数字组成。注册号码可以是正数或负数。负注册号码表示该车已在线注册，而正注册号码表示该车是新注册的车辆。在游戏开始前，系统自动为每辆车分配一个赛道号码。赛道号码是车辆注册号码的最小排列，且永远不会以零开头。编写一个算法来生成赛道号码。',
    algorithm: '排序算法',
    algorithmDescription: '排序算法是一种将一组数据按照特定顺序排列的算法。在本题中，排序算法的核心思想是：1. 首先处理负数情况，取注册号码的绝对值；2. 将数字转换为字符数组并按升序排序；3. 找到第一个非零数字，将其移到最前面；4. 将排序后的数字重新组合成字符串并返回。这样可以确保生成的赛道号码是注册号码的最小排列，且不会以零开头。',
    examples: [
      {
        input: 'registrationNumber = 321',
        output: '123'
      },
      {
        input: 'registrationNumber = -102',
        output: '102'
      }
    ],
    code: `function generateTrackNumber(registrationNumber) {
  // 处理负数情况，取绝对值
  const absNumber = Math.abs(registrationNumber);
  const digits = absNumber.toString().split('').map(Number);
  
  // 对数字进行排序
  digits.sort((a, b) => a - b);
  
  // 找到第一个非零数字
  let firstNonZeroIndex = 0;
  while (firstNonZeroIndex < digits.length && digits[firstNonZeroIndex] === 0) {
    firstNonZeroIndex++;
  }
  
  // 如果所有数字都是零，返回0
  if (firstNonZeroIndex === digits.length) {
    return '0';
  }
  
  // 将第一个非零数字移到最前面
  [digits[0], digits[firstNonZeroIndex]] = [digits[firstNonZeroIndex], digits[0]];
  
  // 拼接成字符串并返回
  return digits.join('');
}`,
    javaCode: `import java.util.Arrays;

public class Solution {
    public static String generateTrackNumber(int registrationNumber) {
        // 处理负数情况，取绝对值
        int absNumber = Math.abs(registrationNumber);
        String numberStr = String.valueOf(absNumber);
        char[] digits = numberStr.toCharArray();
        
        // 对数字进行排序
        Arrays.sort(digits);
        
        // 找到第一个非零数字
        int firstNonZeroIndex = 0;
        while (firstNonZeroIndex < digits.length && digits[firstNonZeroIndex] == '0') {
            firstNonZeroIndex++;
        }
        
        // 如果所有数字都是零，返回0
        if (firstNonZeroIndex == digits.length) {
            return "0";
        }
        
        // 将第一个非零数字移到最前面
        char temp = digits[0];
        digits[0] = digits[firstNonZeroIndex];
        digits[firstNonZeroIndex] = temp;
        
        // 拼接成字符串并返回
        return new String(digits);
    }
}`
  },
  {
    id: 'example-12',
    englishTitle: 'Number of Ways to Get Longest Consecutive 1s',
    chineseTitle: '获得最长连续1的方法数',
    englishDescription: 'Given a binary string S consisting of only 0s and 1s, write an algorithm to find the number of different ways to get the longest consecutive sub-segment of 1s only. You are allowed to change any K number of 0s to 1s. If two ways lead to the same string, they are considered to be similar, not different.',
    chineseDescription: '给定一个仅由0和1组成的二进制字符串S，编写一个算法来找出获得最长连续1子段的不同方法数。您可以将任何K个0更改为1。如果两种方法导致相同的字符串，则它们被视为相似，而不是不同的。',
    algorithm: '滑动窗口算法',
    algorithmDescription: '滑动窗口算法是一种用于处理数组或字符串的子数组或子串问题的方法。在本题中，滑动窗口算法的核心思想是：1. 使用左右指针形成一个窗口，窗口内的0的数量不超过K；2. 右指针向右移动，扩大窗口，直到窗口内的0的数量超过K；3. 左指针向右移动，缩小窗口，直到窗口内的0的数量不超过K；4. 记录窗口的最大长度和对应的方法数。这种方法可以在O(N)的时间复杂度内解决问题。',
    examples: [
      {
        input: 'S = "1001", K = 1',
        output: '2'
      },
      {
        input: 'S = "001100", K = 2',
        output: '2'
      }
    ],
    code: `function countWaysToGetLongestOnes(S, K) {
  let left = 0;
  let maxLength = 0;
  let zeroCount = 0;
  let ways = 0;
  let currentLength = 0;
  
  for (let right = 0; right < S.length; right++) {
    if (S[right] === '0') {
      zeroCount++;
    }
    
    // 调整左指针，保持窗口内的0的数量不超过K
    while (zeroCount > K) {
      if (S[left] === '0') {
        zeroCount--;
      }
      left++;
    }
    
    currentLength = right - left + 1;
    
    // 更新最大长度和方法数
    if (currentLength > maxLength) {
      maxLength = currentLength;
      ways = 1;
    } else if (currentLength === maxLength) {
      ways++;
    }
  }
  
  return ways;
}`,
    javaCode: `public class Solution {
    public static int countWaysToGetLongestOnes(String S, int K) {
        int left = 0;
        int maxLength = 0;
        int zeroCount = 0;
        int ways = 0;
        int currentLength = 0;
        
        for (int right = 0; right < S.length(); right++) {
            if (S.charAt(right) == '0') {
                zeroCount++;
            }
            
            // 调整左指针，保持窗口内的0的数量不超过K
            while (zeroCount > K) {
                if (S.charAt(left) == '0') {
                    zeroCount--;
                }
                left++;
            }
            
            currentLength = right - left + 1;
            
            // 更新最大长度和方法数
            if (currentLength > maxLength) {
                maxLength = currentLength;
                ways = 1;
            } else if (currentLength == maxLength) {
                ways++;
            }
        }
        
        return ways;
    }
}`
  },
  {
    id: 'example-13',
    englishTitle: 'Remove Duplicates from List',
    chineseTitle: '从列表中移除重复元素',
    englishDescription: 'You are given a list of numbers. Write an algorithm to remove all the duplicate numbers of the list so that the list contains only distinct numbers in the same order as they appear in the input list.',
    chineseDescription: '给定一个数字列表。编写一个算法来移除列表中的所有重复数字，使列表只包含不同的数字，且保持它们在输入列表中出现的顺序。',
    algorithm: '哈希表去重算法',
    algorithmDescription: '哈希表去重算法是一种使用哈希表来存储已出现过的元素，从而快速判断元素是否重复的方法。在本题中，哈希表去重算法的核心思想是：1. 使用Set数据结构存储已经出现过的数字；2. 遍历输入列表，对于每个数字，如果它还没有在Set中出现过，则将其添加到结果列表和Set中；3. 最终返回结果列表，其中只包含不重复的数字，且保持它们在输入列表中出现的顺序。这种方法的时间复杂度为O(N)，其中N是列表的长度。',
    examples: [
      {
        input: 'nums = [1, 2, 3, 2, 1, 4, 5, 4]',
        output: '[1, 2, 3, 4, 5]'
      },
      {
        input: 'nums = [5, 5, 5, 5, 5]',
        output: '[5]'
      }
    ],
    code: `function removeDuplicates(nums) {
  const seen = new Set();
  const result = [];
  
  for (const num of nums) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    public static List<Integer> removeDuplicates(List<Integer> nums) {
        Set<Integer> seen = new HashSet<>();
        List<Integer> result = new ArrayList<>();
        
        for (int num : nums) {
            if (!seen.contains(num)) {
                seen.add(num);
                result.add(num);
            }
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-14',
    englishTitle: 'Minimum Straight Line Routes',
    chineseTitle: '最少直线路线数',
    englishDescription: 'A transportation company has begun service in a new city. Their specialty is affordable fares. They have identified some pickup locations in the crowded areas of the city. Servicing these locations will yield them the most customers. To maximize their profitability, they wish to determine the minimum number of straight-line routes that will connect all the pickup locations. Write an algorithm to calculate the minimum number of straight-line routes that will cover all the pickup locations.',
    chineseDescription: '一家运输公司已在一个新城市开始服务。他们的特色是价格实惠。他们已经确定了城市拥挤地区的一些 pickup 地点。为这些地点提供服务将为他们带来最多的客户。为了最大化他们的盈利能力，他们希望确定连接所有 pickup 地点的最少直线路线数。编写一个算法来计算覆盖所有 pickup 地点的最少直线路线数。',
    algorithm: '几何算法',
    algorithmDescription: '几何算法是一种用于解决几何问题的算法。在本题中，几何算法的核心思想是：1. 计算所有点对之间的直线；2. 对于每条直线，检查是否所有点都在该直线上；3. 如果存在这样的直线，则只需要一条路线；4. 否则，至少需要两条路线（因为任意三个不共线的点需要两条直线）。这种方法可以有效地计算出覆盖所有 pickup 地点的最少直线路线数。',
    examples: [
      {
        input: 'locations = [[0, 0], [1, 1], [2, 2], [3, 3]]',
        output: '1'
      },
      {
        input: 'locations = [[0, 0], [1, 2], [2, 1], [3, 3]]',
        output: '2'
      }
    ],
    code: `function minStraightLineRoutes(locations) {
  if (locations.length <= 2) {
    return locations.length === 0 ? 0 : 1;
  }
  
  // 计算两点之间的斜率
  const getSlope = (p1, p2) => {
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    
    // 处理垂直直线
    if (dx === 0) {
      return { type: 'vertical', x: p1[0] };
    }
    
    // 处理水平直线
    if (dy === 0) {
      return { type: 'horizontal', y: p1[1] };
    }
    
    // 计算斜率的最简形式
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const sign = (dy * dx) < 0 ? -1 : 1;
    const absDy = Math.abs(dy);
    const absDx = Math.abs(dx);
    const divisor = gcd(absDy, absDx);
    const simplifiedDy = sign * (absDy / divisor);
    const simplifiedDx = absDx / divisor;
    
    return { type: 'slope', dy: simplifiedDy, dx: simplifiedDx, intercept: p1[1] - (simplifiedDy / simplifiedDx) * p1[0] };
  };
  
  // 存储所有不同的直线
  const lines = new Set();
  
  // 遍历所有点对，计算它们所在的直线
  for (let i = 0; i < locations.length; i++) {
    for (let j = i + 1; j < locations.length; j++) {
      const slope = getSlope(locations[i], locations[j]);
      // 将直线转换为字符串形式以便存储
      const lineKey = JSON.stringify(slope);
      lines.add(lineKey);
    }
  }
  
  // 检查是否存在一条直线包含所有点
  for (const lineKey of lines) {
    const line = JSON.parse(lineKey);
    let allOnLine = true;
    
    for (const point of locations) {
      let onLine = false;
      
      if (line.type === 'vertical') {
        onLine = point[0] === line.x;
      } else if (line.type === 'horizontal') {
        onLine = point[1] === line.y;
      } else {
        // 检查点是否在直线上
        onLine = Math.abs(point[1] - (line.dy / line.dx) * point[0] - line.intercept) < 1e-10;
      }
      
      if (!onLine) {
        allOnLine = false;
        break;
      }
    }
    
    if (allOnLine) {
      return 1;
    }
  }
  
  // 如果没有一条直线包含所有点，返回2（因为任意三个不共线的点需要两条直线）
  return 2;
}`,
    javaCode: `import java.util.HashSet;
import java.util.Set;

public class Solution {
    static class Point {
        int x;
        int y;
        
        Point(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
    
    static class Line {
        String type;
        int x; // for vertical lines
        int y; // for horizontal lines
        int dy; // for sloped lines
        int dx; // for sloped lines
        double intercept; // for sloped lines
        
        Line(String type, int x, int y, int dy, int dx, double intercept) {
            this.type = type;
            this.x = x;
            this.y = y;
            this.dy = dy;
            this.dx = dx;
            this.intercept = intercept;
        }
        
        @Override
        public int hashCode() {
            final int prime = 31;
            int result = 1;
            result = prime * result + ((type == null) ? 0 : type.hashCode());
            result = prime * result + x;
            result = prime * result + y;
            result = prime * result + dy;
            result = prime * result + dx;
            long temp = Double.doubleToLongBits(intercept);
            result = prime * result + (int) (temp ^ (temp >>> 32));
            return result;
        }
        
        @Override
        public boolean equals(Object obj) {
            if (this == obj) return true;
            if (obj == null) return false;
            if (getClass() != obj.getClass()) return false;
            Line other = (Line) obj;
            if (type == null) {
                if (other.type != null) return false;
            } else if (!type.equals(other.type)) return false;
            if (x != other.x) return false;
            if (y != other.y) return false;
            if (dy != other.dy) return false;
            if (dx != other.dx) return false;
            if (Double.doubleToLongBits(intercept) != Double.doubleToLongBits(other.intercept)) return false;
            return true;
        }
    }
    
    public static int minStraightLineRoutes(int[][] locations) {
        int n = locations.length;
        if (n <= 2) {
            return n == 0 ? 0 : 1;
        }
        
        // 存储所有不同的直线
        Set<Line> lines = new HashSet<>();
        
        // 遍历所有点对，计算它们所在的直线
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                Point p1 = new Point(locations[i][0], locations[i][1]);
                Point p2 = new Point(locations[j][0], locations[j][1]);
                Line line = getLine(p1, p2);
                lines.add(line);
            }
        }
        
        // 检查是否存在一条直线包含所有点
        for (Line line : lines) {
            boolean allOnLine = true;
            
            for (int[] point : locations) {
                boolean onLine = false;
                
                if (line.type.equals("vertical")) {
                    onLine = point[0] == line.x;
                } else if (line.type.equals("horizontal")) {
                    onLine = point[1] == line.y;
                } else {
                    // 检查点是否在直线上
                    double expectedY = (double) line.dy / line.dx * point[0] + line.intercept;
                    onLine = Math.abs(point[1] - expectedY) < 1e-10;
                }
                
                if (!onLine) {
                    allOnLine = false;
                    break;
                }
            }
            
            if (allOnLine) {
                return 1;
            }
        }
        
        // 如果没有一条直线包含所有点，返回2（因为任意三个不共线的点需要两条直线）
        return 2;
    }
    
    private static Line getLine(Point p1, Point p2) {
        int dx = p2.x - p1.x;
        int dy = p2.y - p1.y;
        
        // 处理垂直直线
        if (dx == 0) {
            return new Line("vertical", p1.x, 0, 0, 0, 0);
        }
        
        // 处理水平直线
        if (dy == 0) {
            return new Line("horizontal", 0, p1.y, 0, 0, 0);
        }
        
        // 计算斜率的最简形式
        int gcd = gcd(Math.abs(dy), Math.abs(dx));
        int sign = (dy * dx) < 0 ? -1 : 1;
        int simplifiedDy = sign * Math.abs(dy) / gcd;
        int simplifiedDx = Math.abs(dx) / gcd;
        
        // 计算截距
        double intercept = p1.y - (double) simplifiedDy / simplifiedDx * p1.x;
        
        return new Line("slope", 0, 0, simplifiedDy, simplifiedDx, intercept);
    }
    
    private static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}`
  },
  {
    id: 'example-15',
    englishTitle: 'Count Elements Less Than K',
    chineseTitle: '计算小于K的元素个数',
    englishDescription: 'You are given a list of integers and an integer K. Write an algorithm to find the number of elements in the list that are strictly less than K.',
    chineseDescription: '给定一个整数列表和一个整数K。编写一个算法来找出列表中严格小于K的元素个数。',
    algorithm: '过滤算法',
    algorithmDescription: '过滤算法是一种用于从集合中筛选出符合特定条件的元素的方法。在本题中，过滤算法的核心思想是：1. 使用filter方法遍历列表中的每个元素；2. 对于每个元素，检查它是否严格小于K；3. 统计符合条件的元素个数并返回。这种方法简洁高效，时间复杂度为O(N)，其中N是列表的长度。',
    examples: [
      {
        input: 'nums = [3, 1, 4, 1, 5, 9, 2, 6], K = 5',
        output: '5'
      },
      {
        input: 'nums = [10, 20, 30, 40, 50], K = 25',
        output: '2'
      }
    ],
    code: `function countElementsLessThanK(nums, K) {
  return nums.filter(num => num < K).length;
}`,
    javaCode: `public class Solution {
    public static int countElementsLessThanK(int[] nums, int K) {
        int count = 0;
        for (int num : nums) {
            if (num < K) {
                count++;
            }
        }
        return count;
    }
}`
  },
  {
    id: 'example-16',
    englishTitle: 'Minimum Signal Strength for Network',
    chineseTitle: '网络的最小信号强度',
    englishDescription: 'An organization has assigned X engineers to work on a project. The engineers need a way to connect with each other and share data. Austin, the network administrator, has built a hierarchical network that allows an engineer to connect to two engineers at most in the network. He establishes all full duplex connections in the network (i.e. if there is a connection between A and B, then data can be transferred from A to B and from B to A). The strength of the signal decreases by one unit upon each transmission between directly connected engineer. Therefore, Austin needs to determine the minimum strength at which the signal must be sent so that it will reach everyone. Write an algorithm to help Austin find the minimum strength at which the signal must be sent so that the data will reach everyone.',
    chineseDescription: '一个组织已分配X名工程师来从事一个项目。工程师们需要一种相互连接和共享数据的方式。网络管理员Austin构建了一个层次网络，允许一名工程师最多连接到网络中的两名工程师。他在网络中建立了所有全双工连接（即如果A和B之间有连接，那么数据可以从A传输到B，也可以从B传输到A）。信号强度在直接连接的工程师之间每次传输时减少一个单位。因此，Austin需要确定必须发送的最小信号强度，以便信号能够到达每个人。编写一个算法来帮助Austin找到必须发送的最小信号强度，以便数据能够到达每个人。',
    algorithm: '广度优先搜索 (BFS) 算法',
    algorithmDescription: '广度优先搜索是一种用于遍历或搜索树或图的算法。在本题中，BFS算法的核心思想是：1. 构建网络的邻接表；2. 对于每个工程师，使用BFS计算从该工程师到其他所有工程师的最大距离（即树的高度）；3. 找出所有工程师中的最大树高度，这就是所需的最小信号强度。因为信号强度在每次传输时减少一个单位，所以最大距离就是信号需要的最小强度。',
    examples: [
      {
        input: 'engineers = 3, connections = [[0, 1], [1, 2]]',
        output: '2'
      },
      {
        input: 'engineers = 4, connections = [[0, 1], [0, 2], [1, 3]]',
        output: '3'
      }
    ],
    code: `function minSignalStrength(engineers, connections) {
  // 构建邻接表
  const adj = new Map();
  for (let i = 0; i < engineers; i++) {
    adj.set(i, []);
  }
  
  for (const [u, v] of connections) {
    adj.get(u).push(v);
    adj.get(v).push(u);
  }
  
  // 计算树的高度（使用BFS）
  function getTreeHeight(root) {
    const visited = new Set();
    const queue = [[root, 0]];
    visited.add(root);
    let maxHeight = 0;
    
    while (queue.length > 0) {
      const [node, height] = queue.shift();
      maxHeight = Math.max(maxHeight, height);
      
      for (const neighbor of adj.get(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, height + 1]);
        }
      }
    }
    
    return maxHeight;
  }
  
  // 找到树的高度，这就是所需的最小信号强度
  let maxTreeHeight = 0;
  for (let i = 0; i < engineers; i++) {
    const height = getTreeHeight(i);
    maxTreeHeight = Math.max(maxTreeHeight, height);
  }
  
  return maxTreeHeight;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Solution {
    public static int minSignalStrength(int engineers, int[][] connections) {
        // 构建邻接表
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < engineers; i++) {
            adj.add(new ArrayList<>());
        }
        
        for (int[] connection : connections) {
            int u = connection[0];
            int v = connection[1];
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
        
        // 找到树的高度，这就是所需的最小信号强度
        int maxTreeHeight = 0;
        for (int i = 0; i < engineers; i++) {
            int height = getTreeHeight(i, adj, engineers);
            maxTreeHeight = Math.max(maxTreeHeight, height);
        }
        
        return maxTreeHeight;
    }
    
    // 计算树的高度（使用BFS）
    private static int getTreeHeight(int root, List<List<Integer>> adj, int n) {
        boolean[] visited = new boolean[n];
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{root, 0});
        visited[root] = true;
        int maxHeight = 0;
        
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int node = current[0];
            int height = current[1];
            maxHeight = Math.max(maxHeight, height);
            
            for (int neighbor : adj.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(new int[]{neighbor, height + 1});
                }
            }
        }
        
        return maxHeight;
    }
}`
  },
  {
    id: 'example-17',
    englishTitle: 'Alternate Sort of List',
    chineseTitle: '列表的交替排序',
    englishDescription: 'An alternate sort of a list consists of alternate elements (starting from the first position) of the given list after sorting it in an ascending order. You are given a list of unsorted elements. Write an algorithm to find the alternate sort of the given list.',
    chineseDescription: '列表的交替排序由给定列表按升序排序后的交替元素（从第一个位置开始）组成。给定一个未排序的元素列表。编写一个算法来找到给定列表的交替排序。',
    algorithm: '排序算法',
    algorithmDescription: '排序算法是一种将一组数据按照特定顺序排列的算法。在本题中，排序算法的核心思想是：1. 首先对输入列表进行升序排序；2. 然后从排序后的列表中提取交替元素（从第一个位置开始）；3. 最终返回提取的元素作为结果。这种方法可以确保结果列表包含排序后列表的交替元素，从而实现交替排序的效果。',
    examples: [
      {
        input: 'nums = [5, 3, 1, 4, 2]',
        output: '[1, 3, 5]'
      },
      {
        input: 'nums = [10, 8, 6, 4, 2, 0]',
        output: '[0, 4, 8]'
      }
    ],
    code: `function alternateSort(nums) {
  // 按升序排序
  nums.sort((a, b) => a - b);
  
  // 提取交替元素（从第一个位置开始）
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    result.push(nums[i]);
  }
  
  return result;
}`,
    javaCode: `import java.util.Arrays;

public class Solution {
    public static int[] alternateSort(int[] nums) {
        // 按升序排序
        Arrays.sort(nums);
        
        // 提取交替元素（从第一个位置开始）
        int[] result = new int[(nums.length + 1) / 2];
        for (int i = 0, j = 0; i < nums.length; i += 2, j++) {
            result[j] = nums[i];
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-18',
    englishTitle: 'Maximum Signal in Binary Data',
    chineseTitle: '二进制数据中的最大信号',
    englishDescription: 'A digital machine generates binary data consisting of a string of characters of 0s and 1s. A maximum signal M in the data consists of the maximum number of either 1s or 0s that appear consecutively in the data. (However, M cannot occur at the beginning or end of the string.) Design a way to find the length of the maximum signal.',
    chineseDescription: '数字机器生成由0和1字符组成的字符串的二进制数据。数据中的最大信号M由数据中连续出现的1或0的最大数量组成。（然而，M不能出现在字符串的开头或结尾。）设计一种方法来找到最大信号的长度。',
    algorithm: '遍历算法',
    algorithmDescription: '遍历算法是一种通过遍历数据结构来解决问题的方法。在本题中，遍历算法的核心思想是：1. 遍历二进制字符串，记录当前连续字符的长度；2. 当遇到不同字符时，检查当前序列是否在字符串中间（即不是开头或结尾）；3. 如果是，则更新最大信号长度；4. 重复上述过程，直到遍历完整个字符串；5. 最后检查最后一个序列是否符合条件。这种方法的时间复杂度为O(N)，其中N是字符串的长度。',
    examples: [
      {
        input: 'data = "11011101111"',
        output: '3'
      },
      {
        input: 'data = "0001000"',
        output: '3'
      }
    ],
    code: `function maxSignalLength(data) {
  if (data.length < 3) {
    return 0;
  }
  
  let maxLength = 0;
  let currentLength = 1;
  let currentChar = data[0];
  
  for (let i = 1; i < data.length; i++) {
    if (data[i] === currentChar) {
      currentLength++;
    } else {
      // 检查当前序列是否在字符串中间
      if (i > currentLength && i < data.length) {
        maxLength = Math.max(maxLength, currentLength);
      }
      currentChar = data[i];
      currentLength = 1;
    }
  }
  
  // 检查最后一个序列
  if (currentLength > 1 && data.length > currentLength) {
    maxLength = Math.max(maxLength, currentLength);
  }
  
  return maxLength;
}`,
    javaCode: `public class Solution {
    public static int maxSignalLength(String data) {
        if (data.length() < 3) {
            return 0;
        }
        
        int maxLength = 0;
        int currentLength = 1;
        char currentChar = data.charAt(0);
        
        for (int i = 1; i < data.length(); i++) {
            if (data.charAt(i) == currentChar) {
                currentLength++;
            } else {
                // 检查当前序列是否在字符串中间
                if (i > currentLength && i < data.length()) {
                    maxLength = Math.max(maxLength, currentLength);
                }
                currentChar = data.charAt(i);
                currentLength = 1;
            }
        }
        
        // 检查最后一个序列
        if (currentLength > 1 && data.length() > currentLength) {
            maxLength = Math.max(maxLength, currentLength);
        }
        
        return maxLength;
    }
}`
  },
  {
    id: 'example-19',
    englishTitle: 'Minimum Cable Length for OFF Systems',
    chineseTitle: '关闭系统的最小电缆长度',
    englishDescription: 'The computer systems of N employees of a company are arranged in a row. A technical fault in the power supply has caused some of the systems to turn OFF while the others remain ON. Because of this, the employees whose systems are OFF are unable to work. The company does not like to see its employees sitting idle. So until the technical team can find the actual cause of the breakdown, the technical head Adam has devised a temporary workaround for the OFF systems at a minimum cost. Adam decides to connect all the OFF systems to the nearest ON system with the shortest possible length of cable. To make this happen, he calculates the distance of each system from the first system. Write an algorithm to help Adam find the minimum length of cable he needs to turn all the systems ON.',
    chineseDescription: '一家公司的N名员工的计算机系统排成一行。电源中的技术故障导致一些系统关闭，而其他系统保持开启。因此，系统关闭的员工无法工作。公司不喜欢看到员工闲着。因此，在技术团队找到故障的实际原因之前，技术主管Adam设计了一种最低成本的关闭系统临时解决方案。Adam决定将所有关闭的系统连接到最近的开启系统，使用尽可能短的电缆长度。为了实现这一点，他计算了每个系统与第一个系统的距离。编写一个算法来帮助Adam找到他需要的最小电缆长度，以使所有系统都开启。',
    algorithm: '最近邻算法',
    algorithmDescription: '最近邻算法是一种用于在数据集中找到与给定数据点最接近的点的算法。在本题中，最近邻算法的核心思想是：1. 首先记录所有开启系统的位置；2. 对于每个关闭的系统，计算它与所有开启系统的距离；3. 找到距离最小的开启系统，并将该距离添加到总电缆长度中；4. 最终返回总电缆长度。这种方法可以确保为每个关闭的系统找到最近的开启系统，从而最小化总电缆长度。',
    examples: [
      {
        input: 'systems = [1, 0, 0, 1, 0], distances = [0, 1, 2, 3, 4]',
        output: '3'
      },
      {
        input: 'systems = [0, 1, 0, 0, 0, 1], distances = [0, 1, 2, 3, 4, 5]',
        output: '4'
      }
    ],
    code: `function minCableLength(systems, distances) {
  const n = systems.length;
  const onPositions = [];
  
  // 记录所有开启系统的位置
  for (let i = 0; i < n; i++) {
    if (systems[i] === 1) {
      onPositions.push(i);
    }
  }
  
  let totalCableLength = 0;
  
  // 为每个关闭的系统找到最近的开启系统
  for (let i = 0; i < n; i++) {
    if (systems[i] === 0) {
      let minDistance = Infinity;
      
      for (const onPos of onPositions) {
        const distance = Math.abs(distances[i] - distances[onPos]);
        if (distance < minDistance) {
          minDistance = distance;
        }
      }
      
      totalCableLength += minDistance;
    }
  }
  
  return totalCableLength;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static int minCableLength(int[] systems, int[] distances) {
        int n = systems.length;
        List<Integer> onPositions = new ArrayList<>();
        
        // 记录所有开启系统的位置
        for (int i = 0; i < n; i++) {
            if (systems[i] == 1) {
                onPositions.add(i);
            }
        }
        
        int totalCableLength = 0;
        
        // 为每个关闭的系统找到最近的开启系统
        for (int i = 0; i < n; i++) {
            if (systems[i] == 0) {
                int minDistance = Integer.MAX_VALUE;
                
                for (int onPos : onPositions) {
                    int distance = Math.abs(distances[i] - distances[onPos]);
                    if (distance < minDistance) {
                        minDistance = distance;
                    }
                }
                
                totalCableLength += minDistance;
            }
        }
        
        return totalCableLength;
    }
}`
  },
  {
    id: 'example-20',
    englishTitle: 'Check if Graph is a Tree',
    chineseTitle: '检查图是否为树',
    englishDescription: 'In a connected graph, a path runs between every node. This path does not need to be an edge directly connecting the nodes. An adjacency matrix for a graph with n vertices is an n x n two-dimensional matrix with i j entry as 1 if there is an edge from the ith vertex to the jth vertex; otherwise it is 0. An undirected connected graph is given in the adjacency matrix form. Write an algorithm to determine whether it is a tree. For example, the result for the adjacency matrix given below should be 1 as it represents a tree. 0 1 0 1 1 0 1 0 0 1 0 0 1 0 0 0',
    chineseDescription: '在连通图中，每个节点之间都有一条路径。这条路径不需要是直接连接节点的边。具有n个顶点的图的邻接矩阵是一个n x n的二维矩阵，如果从第i个顶点到第j个顶点有一条边，则i j项为1；否则为0。给定一个以邻接矩阵形式表示的无向连通图。编写一个算法来确定它是否是一棵树。例如，下面给出的邻接矩阵的结果应该是1，因为它表示一棵树。0 1 0 1 1 0 1 0 0 1 0 0 1 0 0 0',
    algorithm: '图论算法',
    algorithmDescription: '图论算法是一种用于解决图相关问题的算法。在本题中，图论算法的核心思想是：1. 检查图的边数是否为n-1（树的性质：n个节点有n-1条边）；2. 使用广度优先搜索（BFS）检查图是否连通；3. 如果边数为n-1且图是连通的，则返回1（是树），否则返回0（不是树）。这种方法可以有效地判断一个无向连通图是否为树。',
    examples: [
      {
        input: 'adjMatrix = [[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 0], [1, 0, 0, 0]]',
        output: '1'
      },
      {
        input: 'adjMatrix = [[0, 1, 1], [1, 0, 1], [1, 1, 0]]',
        output: '0'
      }
    ],
    code: `function isTree(adjMatrix) {
  const n = adjMatrix.length;
  
  // 检查边数是否为n-1（树的性质：n个节点有n-1条边）
  let edgeCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (adjMatrix[i][j] === 1) {
        edgeCount++;
      }
    }
  }
  
  if (edgeCount !== n - 1) {
    return 0;
  }
  
  // 检查图是否连通
  const visited = new Array(n).fill(false);
  const queue = [0];
  visited[0] = true;
  let visitedCount = 1;
  
  while (queue.length > 0) {
    const node = queue.shift();
    
    for (let i = 0; i < n; i++) {
      if (adjMatrix[node][i] === 1 && !visited[i]) {
        visited[i] = true;
        visitedCount++;
        queue.push(i);
      }
    }
  }
  
  // 如果所有节点都被访问到，则图是连通的
  return visitedCount === n ? 1 : 0;
}`,
    javaCode: `import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    public static int isTree(int[][] adjMatrix) {
        int n = adjMatrix.length;
        
        // 检查边数是否为n-1（树的性质：n个节点有n-1条边）
        int edgeCount = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (adjMatrix[i][j] == 1) {
                    edgeCount++;
                }
            }
        }
        
        if (edgeCount != n - 1) {
            return 0;
        }
        
        // 检查图是否连通
        boolean[] visited = new boolean[n];
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(0);
        visited[0] = true;
        int visitedCount = 1;
        
        while (!queue.isEmpty()) {
            int node = queue.poll();
            
            for (int i = 0; i < n; i++) {
                if (adjMatrix[node][i] == 1 && !visited[i]) {
                    visited[i] = true;
                    visitedCount++;
                    queue.offer(i);
                }
            }
        }
        
        // 如果所有节点都被访问到，则图是连通的
        return visitedCount == n ? 1 : 0;
    }
}`
  },
  {
    id: 'example-21',
    englishTitle: 'Count Non-Common Elements',
    chineseTitle: '计算非共同元素个数',
    englishDescription: 'You are given two lists of different lengths of positive integers. Write an algorithm to count the number of elements that are not common to each list.',
    chineseDescription: '给定两个不同长度的正整数列表。编写一个算法来计算两个列表中不共同的元素个数。',
    algorithm: '集合操作算法',
    algorithmDescription: '集合操作算法是一种使用集合数据结构来解决问题的方法。在本题中，集合操作算法的核心思想是：1. 将两个列表转换为Set数据结构，以便快速判断元素是否存在；2. 统计第一个列表中不在第二个列表中的元素个数；3. 统计第二个列表中不在第一个列表中的元素个数；4. 将两个统计结果相加，得到非共同元素的总数。这种方法的时间复杂度为O(N+M)，其中N和M分别是两个列表的长度。',
    examples: [
      {
        input: 'list1 = [1, 2, 3, 4, 5], list2 = [3, 4, 5, 6, 7, 8]',
        output: '4'
      },
      {
        input: 'list1 = [10, 20, 30], list2 = [20, 30, 40, 50]',
        output: '3'
      }
    ],
    code: `function countNonCommonElements(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  
  let nonCommonCount = 0;
  
  // 统计list1中不在list2中的元素
  for (const num of list1) {
    if (!set2.has(num)) {
      nonCommonCount++;
    }
  }
  
  // 统计list2中不在list1中的元素
  for (const num of list2) {
    if (!set1.has(num)) {
      nonCommonCount++;
    }
  }
  
  return nonCommonCount;
}`,
    javaCode: `import java.util.HashSet;
import java.util.Set;

public class Solution {
    public static int countNonCommonElements(int[] list1, int[] list2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        
        // 将list1的元素添加到set1
        for (int num : list1) {
            set1.add(num);
        }
        
        // 将list2的元素添加到set2
        for (int num : list2) {
            set2.add(num);
        }
        
        int nonCommonCount = 0;
        
        // 统计list1中不在list2中的元素
        for (int num : list1) {
            if (!set2.contains(num)) {
                nonCommonCount++;
            }
        }
        
        // 统计list2中不在list1中的元素
        for (int num : list2) {
            if (!set1.contains(num)) {
                nonCommonCount++;
            }
        }
        
        return nonCommonCount;
    }
}`
  },
  {
    id: 'example-22',
    englishTitle: 'Minimum Marker Uses to Clear Line Segments',
    chineseTitle: '清除线段的最少标记使用次数',
    englishDescription: 'Max does not like any line segment that he sees on the X-axis. Today, his brother drew N line segments on it. Max has a magical marker that can erase all the line segments that pass through a point on the X-axis when he places the marker on that point. For example, he wishes to erase two line segments — one with endpoints (1,0) and (4,0), and another with endpoints (3,0) and (7,0). He can clear both lines at once by placing the marker either at point (3,0) or (4,0) but he cannot do so if he places the marker anywhere else. Write an algorithm to find the minimum number of times Max must use the marker to clear the X-axis.',
    chineseDescription: 'Max不喜欢在X轴上看到的任何线段。今天，他的兄弟在上面画了N条线段。Max有一个神奇的标记笔，当他将标记笔放在X轴上的一个点时，可以擦除所有通过该点的线段。例如，他希望擦除两条线段——一条端点为(1,0)和(4,0)，另一条端点为(3,0)和(7,0)。他可以通过将标记笔放在点(3,0)或(4,0)来一次性清除这两条线，但如果他将标记笔放在其他任何地方，则无法这样做。编写一个算法来找出Max必须使用标记笔的最少次数，以清除X轴。',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果是全局最好或最优的算法。在本题中，贪心算法的核心思想是：1. 按线段的结束点排序；2. 从第一个线段的结束点开始放置标记；3. 跳过所有与当前标记位置重叠的线段；4. 对于下一个不重叠的线段，在其结束点放置新的标记；5. 重复上述过程，直到所有线段都被覆盖。这种方法可以确保使用最少的标记次数来清除所有线段。',
    examples: [
      {
        input: 'segments = [[1, 4], [3, 7], [2, 5], [6, 8]]',
        output: '2'
      },
      {
        input: 'segments = [[1, 2], [3, 4], [5, 6]]',
        output: '3'
      }
    ],
    code: `function minMarkerUses(segments) {
  if (segments.length === 0) {
    return 0;
  }
  
  // 按线段的结束点排序
  segments.sort((a, b) => a[1] - b[1]);
  
  let count = 1;
  let lastMarkerPosition = segments[0][1];
  
  for (let i = 1; i < segments.length; i++) {
    const [start, end] = segments[i];
    // 如果当前线段的起点大于上一个标记的位置，需要放置新的标记
    if (start > lastMarkerPosition) {
      count++;
      lastMarkerPosition = end;
    }
  }
  
  return count;
}`,
    javaCode: `import java.util.Arrays;
import java.util.Comparator;

public class Solution {
    public static int minMarkerUses(int[][] segments) {
        if (segments.length == 0) {
            return 0;
        }
        
        // 按线段的结束点排序
        Arrays.sort(segments, Comparator.comparingInt(a -> a[1]));
        
        int count = 1;
        int lastMarkerPosition = segments[0][1];
        
        for (int i = 1; i < segments.length; i++) {
            int start = segments[i][0];
            int end = segments[i][1];
            // 如果当前线段的起点大于上一个标记的位置，需要放置新的标记
            if (start > lastMarkerPosition) {
                count++;
                lastMarkerPosition = end;
            }
        }
        
        return count;
    }
}`
  },
  {
    id: 'example-23',
    englishTitle: 'Optimal Student Book Borrowing Sequence',
    chineseTitle: '最优学生借书序列',
    englishDescription: 'Stephen runs a small library that has N number of student patrons. Each student member has a unique studentID. The library has a certain number of books on M different subjects. The teacher has given each student an individual assignment for which they will need to consult several different books. Prior to the assignment, the library had already issued some books to the students. The students may still take additional books from the library to complete their respective assignments. After completing their assignments, each student returns the books that they have borrowed. Only when a book has been returned, another student can borrow that book. When assigning books, Stephen begins with the student with the smallest studentID and then proceeds with the IDs in increasing order. When he reaches the student with the largest studentID, he then goes back to the student with the smallest studentID who has not yet borrowed the book. Then the process continues in this way. Stephen wishes to find the sequence of studentIDs most optimal for the students to complete their assignments. Write an algorithm to help Stephen find the sequence of studentIDs most optimal for the students to complete their assignments. If it is not possible for all the students to complete their assignments, output a list of length of 1 with content -1.',
    chineseDescription: 'Stephen经营着一个小型图书馆，有N名学生 patron。每个学生成员都有一个唯一的 studentID。图书馆有M个不同科目的一定数量的书籍。老师给每个学生布置了个人作业，他们需要查阅几本不同的书。在作业之前，图书馆已经向学生发放了一些书籍。学生们可能还需要从图书馆借更多的书来完成各自的作业。完成作业后，每个学生归还他们借的书。只有当一本书被归还后，另一个学生才能借那本书。分配书籍时，Stephen从 studentID最小的学生开始，然后按ID递增顺序进行。当他到达 studentID最大的学生时，他会回到尚未借书的 studentID最小的学生。然后这个过程继续以这种方式进行。Stephen希望找到最适合学生完成作业的 studentID序列。编写一个算法来帮助Stephen找到最适合学生完成作业的 studentID序列。如果不可能让所有学生完成作业，输出长度为1的列表，内容为-1。',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果是全局最好或最优的算法。在本题中，贪心算法的核心思想是：1. 按学生ID顺序处理，优先处理ID较小的学生；2. 对于每个学生，检查是否需要借书，如果需要则尝试借所需的所有书籍；3. 如果能够借到所需的所有书籍，则将该学生加入序列，并更新已借书籍和可用书籍的状态；4. 重复上述过程，直到所有学生都完成作业或无法继续进展。这种方法可以确保按照题目要求的顺序处理学生，从而得到最优的借书序列。',
    examples: [
      {
        input: 'students = [1, 2, 3], books = {"math": 2, "physics": 1}, issued = {1: ["math"], 2: ["physics"]}, required = {1: ["math", "physics"], 2: ["math"], 3: ["math"]}',
        output: '[1, 2, 3, 1]'
      },
      {
        input: 'students = [1, 2], books = {"math": 1}, issued = {1: ["math"]}, required = {1: ["math"], 2: ["math"]}',
        output: '[-1]'
      }
    ],
    code: `function optimalBorrowingSequence(students, books, issued, required) {
  // 复制书籍数量，避免修改原始数据
  const availableBooks = {...books};
  
  // 初始化已借书籍
  const borrowedBooks = {};
  for (const [studentId, bookList] of Object.entries(issued)) {
    borrowedBooks[studentId] = [...bookList];
    // 减少可用书籍数量
    for (const book of bookList) {
      availableBooks[book]--;
    }
  }
  
  // 检查每个学生是否已经满足需求
  const completed = new Set();
  for (const [studentId, requiredBooks] of Object.entries(required)) {
    const studentIssued = borrowedBooks[studentId] || [];
    const hasAllBooks = requiredBooks.every(book => studentIssued.includes(book));
    if (hasAllBooks) {
      completed.add(studentId);
    }
  }
  
  const sequence = [];
  let iteration = 0;
  const maxIterations = students.length * 10; // 防止无限循环
  
  while (completed.size < students.length && iteration < maxIterations) {
    let madeProgress = false;
    
    // 按学生ID顺序处理
    for (const studentId of students.sort((a, b) => a - b)) {
      const studentIdStr = studentId.toString();
      
      // 如果学生已经完成，跳过
      if (completed.has(studentIdStr)) {
        continue;
      }
      
      const studentRequired = required[studentIdStr];
      const studentBorrowed = borrowedBooks[studentIdStr] || [];
      
      // 检查学生是否需要借书
      const neededBooks = studentRequired.filter(book => !studentBorrowed.includes(book));
      
      if (neededBooks.length === 0) {
        // 学生已经满足所有需求
        completed.add(studentIdStr);
        madeProgress = true;
      } else {
        // 尝试借书
        let canBorrow = true;
        const booksToBorrow = [];
        
        for (const book of neededBooks) {
          if (availableBooks[book] > 0) {
            booksToBorrow.push(book);
          } else {
            canBorrow = false;
            break;
          }
        }
        
        if (canBorrow) {
          // 借书
          sequence.push(studentId);
          
          // 更新已借书籍
          if (!borrowedBooks[studentIdStr]) {
            borrowedBooks[studentIdStr] = [];
          }
          borrowedBooks[studentIdStr].push(...booksToBorrow);
          
          // 更新可用书籍
          for (const book of booksToBorrow) {
            availableBooks[book]--;
          }
          
          // 检查学生是否现在满足所有需求
          const hasAllBooks = studentRequired.every(book => borrowedBooks[studentIdStr].includes(book));
          if (hasAllBooks) {
            completed.add(studentIdStr);
          }
          
          madeProgress = true;
        }
      }
    }
    
    // 如果没有进展，可能无法完成
    if (!madeProgress) {
      break;
    }
    
    iteration++;
  }
  
  // 检查是否所有学生都完成了
  if (completed.size === students.length) {
    return sequence;
  } else {
    return [-1];
  }
}`,
    javaCode: `import java.util.*;

public class Solution {
    public static List<Integer> optimalBorrowingSequence(int[] students, Map<String, Integer> books, Map<String, List<String>> issued, Map<String, List<String>> required) {
        // 复制书籍数量，避免修改原始数据
        Map<String, Integer> availableBooks = new HashMap<>(books);
        
        // 初始化已借书籍
        Map<String, List<String>> borrowedBooks = new HashMap<>();
        for (Map.Entry<String, List<String>> entry : issued.entrySet()) {
            String studentId = entry.getKey();
            List<String> bookList = entry.getValue();
            borrowedBooks.put(studentId, new ArrayList<>(bookList));
            // 减少可用书籍数量
            for (String book : bookList) {
                availableBooks.put(book, availableBooks.get(book) - 1);
            }
        }
        
        // 检查每个学生是否已经满足需求
        Set<String> completed = new HashSet<>();
        for (Map.Entry<String, List<String>> entry : required.entrySet()) {
            String studentId = entry.getKey();
            List<String> requiredBooks = entry.getValue();
            List<String> studentIssued = borrowedBooks.getOrDefault(studentId, new ArrayList<>());
            boolean hasAllBooks = true;
            for (String book : requiredBooks) {
                if (!studentIssued.contains(book)) {
                    hasAllBooks = false;
                    break;
                }
            }
            if (hasAllBooks) {
                completed.add(studentId);
            }
        }
        
        List<Integer> sequence = new ArrayList<>();
        int iteration = 0;
        int maxIterations = students.length * 10; // 防止无限循环
        
        while (completed.size() < students.length && iteration < maxIterations) {
            boolean madeProgress = false;
            
            // 按学生ID顺序处理
            int[] sortedStudents = Arrays.copyOf(students, students.length);
            Arrays.sort(sortedStudents);
            
            for (int studentId : sortedStudents) {
                String studentIdStr = String.valueOf(studentId);
                
                // 如果学生已经完成，跳过
                if (completed.contains(studentIdStr)) {
                    continue;
                }
                
                List<String> studentRequired = required.get(studentIdStr);
                List<String> studentBorrowed = borrowedBooks.getOrDefault(studentIdStr, new ArrayList<>());
                
                // 检查学生是否需要借书
                List<String> neededBooks = new ArrayList<>();
                for (String book : studentRequired) {
                    if (!studentBorrowed.contains(book)) {
                        neededBooks.add(book);
                    }
                }
                
                if (neededBooks.isEmpty()) {
                    // 学生已经满足所有需求
                    completed.add(studentIdStr);
                    madeProgress = true;
                } else {
                    // 尝试借书
                    boolean canBorrow = true;
                    List<String> booksToBorrow = new ArrayList<>();
                    
                    for (String book : neededBooks) {
                        if (availableBooks.getOrDefault(book, 0) > 0) {
                            booksToBorrow.add(book);
                        } else {
                            canBorrow = false;
                            break;
                        }
                    }
                    
                    if (canBorrow) {
                        // 借书
                        sequence.add(studentId);
                        
                        // 更新已借书籍
                        if (!borrowedBooks.containsKey(studentIdStr)) {
                            borrowedBooks.put(studentIdStr, new ArrayList<>());
                        }
                        borrowedBooks.get(studentIdStr).addAll(booksToBorrow);
                        
                        // 更新可用书籍
                        for (String book : booksToBorrow) {
                            availableBooks.put(book, availableBooks.get(book) - 1);
                        }
                        
                        // 检查学生是否现在满足所有需求
                        boolean hasAllBooks = true;
                        for (String book : studentRequired) {
                            if (!borrowedBooks.get(studentIdStr).contains(book)) {
                                hasAllBooks = false;
                                break;
                            }
                        }
                        if (hasAllBooks) {
                            completed.add(studentIdStr);
                        }
                        
                        madeProgress = true;
                    }
                }
            }
            
            // 如果没有进展，可能无法完成
            if (!madeProgress) {
                break;
            }
            
            iteration++;
        }
        
        // 检查是否所有学生都完成了
        if (completed.size() == students.length) {
            return sequence;
        } else {
            List<Integer> result = new ArrayList<>();
            result.add(-1);
            return result;
        }
    }
}`
  },
  {
    id: 'example-24',
    englishTitle: 'Generate Track Number from Registration Number',
    chineseTitle: '从注册号码生成赛道号码',
    englishDescription: 'In a car racing game, the participating cars must be registered online prior to the game. A car is assigned a registration number that is stored in a database. The registration number consists of digits from 0-9. The registration number can be positive or negative. A negative registration number denotes that the car is already registered online whereas a positive registration number denotes that the car is a newly registered car. Before the game starts, the system automatically assigns a track number to each car. The track number is the smallest permutation of the car registration number and never starts with zero. Write an algorithm to generate the track number.',
    chineseDescription: '在赛车游戏中，参赛车辆必须在游戏开始前在线注册。每辆车被分配一个存储在数据库中的注册号码。注册号码由0-9的数字组成。注册号码可以是正数或负数。负注册号码表示该车已在线注册，而正注册号码表示该车是新注册的车辆。在游戏开始前，系统自动为每辆车分配一个赛道号码。赛道号码是车辆注册号码的最小排列，且永远不会以零开头。编写一个算法来生成赛道号码。',
    algorithm: '排序算法',
    algorithmDescription: '排序算法是一种将一组数据按照特定顺序排列的算法。在本题中，排序算法的核心思想是：1. 首先处理负数情况，取注册号码的绝对值；2. 将数字转换为字符数组并按升序排序；3. 找到第一个非零数字，将其移到最前面；4. 将排序后的数字重新组合成字符串并返回。这样可以确保生成的赛道号码是注册号码的最小排列，且不会以零开头。',
    examples: [
      {
        input: 'registrationNumber = 321',
        output: '123'
      },
      {
        input: 'registrationNumber = -102',
        output: '102'
      }
    ],
    code: `function generateTrackNumber(registrationNumber) {
  // 处理负数情况，取绝对值
  const absNumber = Math.abs(registrationNumber);
  const digits = absNumber.toString().split('').map(Number);
  
  // 对数字进行排序
  digits.sort((a, b) => a - b);
  
  // 找到第一个非零数字
  let firstNonZeroIndex = 0;
  while (firstNonZeroIndex < digits.length && digits[firstNonZeroIndex] === 0) {
    firstNonZeroIndex++;
  }
  
  // 如果所有数字都是零，返回0
  if (firstNonZeroIndex === digits.length) {
    return '0';
  }
  
  // 将第一个非零数字移到最前面
  [digits[0], digits[firstNonZeroIndex]] = [digits[firstNonZeroIndex], digits[0]];
  
  // 拼接成字符串并返回
  return digits.join('');
}`,
    javaCode: `import java.util.Arrays;

public class Solution {
    public static String generateTrackNumber(int registrationNumber) {
        // 处理负数情况，取绝对值
        long absNumber = Math.abs((long) registrationNumber);
        char[] digits = String.valueOf(absNumber).toCharArray();
        
        // 对数字进行排序
        Arrays.sort(digits);
        
        // 找到第一个非零数字
        int firstNonZeroIndex = 0;
        while (firstNonZeroIndex < digits.length && digits[firstNonZeroIndex] == '0') {
            firstNonZeroIndex++;
        }
        
        // 如果所有数字都是零，返回0
        if (firstNonZeroIndex == digits.length) {
            return "0";
        }
        
        // 将第一个非零数字移到最前面
        char temp = digits[0];
        digits[0] = digits[firstNonZeroIndex];
        digits[firstNonZeroIndex] = temp;
        
        // 拼接成字符串并返回
        return new String(digits);
    }
}`
  },
  {
    id: 'example-25',
    englishTitle: 'Sort First K Elements Ascending and Remaining Descending',
    chineseTitle: '前K元素升序排序，剩余降序排序',
    englishDescription: 'You are given a list of integers of size N. Write an algorithm to sort the first K elements (from list[0] to list[K-1]) of the list in ascending order and the remaining (list[K] to list[N-1]) elements in descending order.',
    chineseDescription: '给定一个大小为N的整数列表。编写一个算法，将列表的前K个元素（从list[0]到list[K-1]）按升序排序，将剩余的元素（从list[K]到list[N-1]）按降序排序。',
    algorithm: '排序算法',
    algorithmDescription: '排序算法是一种将一组数据按照特定顺序排列的算法。在本题中，排序算法的核心思想是：1. 提取列表的前K个元素，对其进行升序排序；2. 提取列表的剩余元素，对其进行降序排序；3. 将排序后的两部分重新组合成一个新的列表。JavaScript的sort方法默认使用字符串比较，所以我们需要提供比较函数来确保正确的数值排序。',
    examples: [
      {
        input: 'nums = [5, 3, 8, 1, 2, 9, 4, 7, 6], K = 4',
        output: '[1, 3, 5, 8, 9, 7, 6, 4, 2]'
      },
      {
        input: 'nums = [10, 20, 30, 40, 50], K = 2',
        output: '[10, 20, 50, 40, 30]'
      }
    ],
    code: `function sortFirstKAscendingRemainingDescending(nums, K) {
  const n = nums.length;
  
  // 对前K个元素进行升序排序
  const firstK = nums.slice(0, K).sort((a, b) => a - b);
  
  // 对剩余元素进行降序排序
  const remaining = nums.slice(K).sort((a, b) => b - a);
  
  // 合并两个部分
  return [...firstK, ...remaining];
}`,
    javaCode: `import java.util.Arrays;
import java.util.Comparator;

public class Solution {
    public static int[] sortFirstKAscendingRemainingDescending(int[] nums, int K) {
        int n = nums.length;
        
        // 对前K个元素进行升序排序
        int[] firstK = Arrays.copyOfRange(nums, 0, K);
        Arrays.sort(firstK);
        
        // 对剩余元素进行降序排序
        Integer[] remaining = new Integer[n - K];
        for (int i = K; i < n; i++) {
            remaining[i - K] = nums[i];
        }
        Arrays.sort(remaining, Comparator.reverseOrder());
        
        // 合并两个部分
        int[] result = new int[n];
        System.arraycopy(firstK, 0, result, 0, K);
        for (int i = 0; i < remaining.length; i++) {
            result[K + i] = remaining[i];
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-26',
    englishTitle: 'Maximize Star Rating with Budget',
    chineseTitle: '预算内最大化星级评分',
    englishDescription: 'Sheldon is going to a book fair where all the books are star-rated. As he is interested in just two types of books, Horror and Sci-fi, so he would buy the books from these two categories only. He would want to buy at least one book from each category so as to maximize the total star-rating of his books. Also, the total price of the books should not exceed the amount of money that he can spend. The output is -1 if it is not possible to buy at least one book from both the categories with the money that he has. Write an algorithm to help Sheldon buy the books from both the categories.',
    chineseDescription: 'Sheldon要去一个书展，所有的书都有星级评分。由于他只对两种类型的书感兴趣：恐怖和科幻，所以他只会购买这两个类别的书。他希望从每个类别至少购买一本书，以最大化他的书的总星级评分。此外，书的总价格不应超过他能花费的金额。如果他无法用他拥有的钱从两个类别中各购买至少一本书，则输出-1。编写一个算法来帮助Sheldon从这两个类别中购买书籍。',
    algorithm: '暴力枚举算法',
    algorithmDescription: '暴力枚举算法是一种通过遍历所有可能的组合来找到最优解的方法。在本题中，暴力枚举算法的核心思想是：1. 遍历所有可能的恐怖书选择；2. 对于每本恐怖书，遍历所有可能的科幻书选择；3. 计算每对组合的总价格和总星级评分；4. 检查总价格是否在预算范围内，如果是则更新最大星级评分；5. 最终返回最大星级评分，如果没有符合条件的组合则返回-1。这种方法虽然简单直接，但在书籍数量较多时可能会有性能问题。',
    examples: [
      {
        input: 'horror = [[10, 5], [8, 3], [6, 2]], scifi = [[15, 8], [12, 6], [9, 4]], budget = 20',
        output: '25'
      },
      {
        input: 'horror = [[5, 5], [3, 3]], scifi = [[10, 10]], budget = 12',
        output: '-1'
      }
    ],
    code: `function maximizeStarRating(horror, scifi, budget) {
  let maxRating = -1;
  
  // 遍历所有可能的恐怖书选择
  for (const [hRating, hPrice] of horror) {
    // 遍历所有可能的科幻书选择
    for (const [sRating, sPrice] of scifi) {
      const totalPrice = hPrice + sPrice;
      if (totalPrice <= budget) {
        const totalRating = hRating + sRating;
        if (totalRating > maxRating) {
          maxRating = totalRating;
        }
      }
    }
  }
  
  return maxRating;
}`,
    javaCode: `public class Solution {
    public static int maximizeStarRating(int[][] horror, int[][] scifi, int budget) {
        int maxRating = -1;
        
        // 遍历所有可能的恐怖书选择
        for (int[] hBook : horror) {
            int hRating = hBook[0];
            int hPrice = hBook[1];
            
            // 遍历所有可能的科幻书选择
            for (int[] sBook : scifi) {
                int sRating = sBook[0];
                int sPrice = sBook[1];
                
                int totalPrice = hPrice + sPrice;
                if (totalPrice <= budget) {
                    int totalRating = hRating + sRating;
                    if (totalRating > maxRating) {
                        maxRating = totalRating;
                    }
                }
            }
        }
        
        return maxRating;
    }
}`
  },
  {
    id: 'example-27',
    englishTitle: 'Count Buses After Eliminating Overlapping Routes',
    chineseTitle: '消除重叠路线后的公交数量',
    englishDescription: 'Given a route in a straight line. N buses operate between various bus stations. There is a workstation at the start of the route. The distances of the bus stations from the workstation are calculated. The transportation authority wishes to decrease the number of buses that it operates in the city. If any buses are found to have overlapping routes, then these buses will be replaced by a single bus. The authority wishes to determine how many buses will remain after the buses with overlapping routes have been eliminated. Write an algorithm to find how many buses will remain after the buses with overlapping routes have been eliminated.',
    chineseDescription: '给定一条直线上的路线。N辆公交车在各个公交车站之间运行。路线的起点有一个工作站。计算了公交车站到工作站的距离。交通管理局希望减少在城市中运营的公交车数量。如果发现任何公交车有重叠的路线，这些公交车将被一辆公交车取代。管理局希望确定在消除具有重叠路线的公交车后，将剩下多少辆公交车。编写一个算法来找出在消除具有重叠路线的公交车后将剩下多少辆公交车。',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果是全局最好或最优的算法。在本题中，贪心算法的核心思想是：1. 按公交车路线的起点进行排序；2. 初始化一个变量记录当前合并路线的结束点；3. 遍历排序后的路线，如果当前路线的起点小于等于当前合并路线的结束点，则更新合并路线的结束点为两者的最大值；4. 如果当前路线的起点大于当前合并路线的结束点，则增加公交车数量，并更新当前合并路线的结束点为当前路线的结束点；5. 最终返回公交车数量。这种方法可以有效地合并重叠的路线，从而减少公交车的数量。',
    examples: [
      {
        input: 'buses = [[0, 5], [3, 8], [10, 15], [12, 20]]',
        output: '2'
      },
      {
        input: 'buses = [[1, 3], [2, 4], [5, 7], [6, 8]]',
        output: '2'
      }
    ],
    code: `function countRemainingBuses(buses) {
  if (buses.length === 0) {
    return 0;
  }
  
  // 按起点排序
  buses.sort((a, b) => a[0] - b[0]);
  
  let remainingBuses = 1;
  let currentEnd = buses[0][1];
  
  for (let i = 1; i < buses.length; i++) {
    const [start, end] = buses[i];
    // 如果当前公交车的起点大于前一辆公交车的终点，说明没有重叠
    if (start > currentEnd) {
      remainingBuses++;
      currentEnd = end;
    } else {
      // 有重叠，更新当前结束点为两者的最大值
      currentEnd = Math.max(currentEnd, end);
    }
  }
  
  return remainingBuses;
}`,
    javaCode: `import java.util.Arrays;
import java.util.Comparator;

public class Solution {
    public static int countRemainingBuses(int[][] buses) {
        if (buses.length == 0) {
            return 0;
        }
        
        // 按起点排序
        Arrays.sort(buses, Comparator.comparingInt(a -> a[0]));
        
        int remainingBuses = 1;
        int currentEnd = buses[0][1];
        
        for (int i = 1; i < buses.length; i++) {
            int start = buses[i][0];
            int end = buses[i][1];
            // 如果当前公交车的起点大于前一辆公交车的终点，说明没有重叠
            if (start > currentEnd) {
                remainingBuses++;
                currentEnd = end;
            } else {
                // 有重叠，更新当前结束点为两者的最大值
                currentEnd = Math.max(currentEnd, end);
            }
        }
        
        return remainingBuses;
    }
}`
  },
  {
    id: 'example-28',
    englishTitle: 'Longest Palindromic Sales Data List',
    chineseTitle: '最长回文销售数据列表',
    englishDescription: 'The assistant sales manager in the head office of the company ‘Jotuway’ receives lists of sales data from the regional offices scattered around the country. The assistant sales manager must compile the data and submit the list to the sales manager. The compiled list should be the longest palindromic list of sales data from the regional offices. He/she can add together any two consecutive elements of a list to form a single element. The result thus obtained can be reused further and this process can be repeated any number of times to convert the given list into a palindromic list of maximum length. Write an algorithm to help the assistant sales manager convert the given list into a palindromic list of maximum length.',
    chineseDescription: '公司“Jotuway”总部的销售助理经理收到来自全国各地区域办公室的销售数据列表。销售助理经理必须编译数据并将列表提交给销售经理。编译后的列表应该是来自区域办公室的销售数据的最长回文列表。他/她可以将列表中的任意两个连续元素相加形成一个单一元素。由此获得的结果可以进一步重用，并且可以重复此过程任意次数，以将给定列表转换为最大长度的回文列表。编写一个算法来帮助销售助理经理将给定列表转换为最大长度的回文列表。',
    algorithm: '回溯算法',
    algorithmDescription: '回溯算法是一种通过尝试所有可能的选择来找到最优解的方法。在本题中，回溯算法的核心思想是：1. 首先检查给定列表是否已经是回文；2. 如果不是，尝试合并每对相邻元素，生成新的列表；3. 对每个新生成的列表递归调用相同的方法，寻找最长回文；4. 记录并返回最长的回文列表。这种方法通过探索所有可能的合并方式，确保找到最大长度的回文列表。',
    examples: [
      {
        input: 'sales = [1, 2, 3, 2, 1]',
        output: '[1, 2, 3, 2, 1]'
      },
      {
        input: 'sales = [1, 3, 2, 4]',
        output: '[1, 3+2, 4]'
      }
    ],
    code: `function longestPalindromicSalesList(sales) {
  // 检查是否已经是回文
  function isPalindrome(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  // 如果已经是回文，直接返回
  if (isPalindrome(sales)) {
    return sales;
  }
  
  // 尝试合并相邻元素，找到最长的回文
  let maxLength = 1;
  let bestList = [sales[0]];
  
  // 遍历所有可能的合并位置
  for (let i = 0; i < sales.length - 1; i++) {
    // 合并第i和i+1个元素
    const newList = [...sales.slice(0, i), sales[i] + sales[i+1], ...sales.slice(i+2)];
    
    // 递归处理新列表
    const result = longestPalindromicSalesList(newList);
    
    // 更新最长回文
    if (result.length > maxLength) {
      maxLength = result.length;
      bestList = result;
    }
  }
  
  return bestList;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static List<Integer> longestPalindromicSalesList(List<Integer> sales) {
        // 检查是否已经是回文
        if (isPalindrome(sales)) {
            return sales;
        }
        
        // 尝试合并相邻元素，找到最长的回文
        int maxLength = 1;
        List<Integer> bestList = new ArrayList<>();
        bestList.add(sales.get(0));
        
        // 遍历所有可能的合并位置
        for (int i = 0; i < sales.size() - 1; i++) {
            // 合并第i和i+1个元素
            List<Integer> newList = new ArrayList<>();
            for (int j = 0; j < i; j++) {
                newList.add(sales.get(j));
            }
            newList.add(sales.get(i) + sales.get(i + 1));
            for (int j = i + 2; j < sales.size(); j++) {
                newList.add(sales.get(j));
            }
            
            // 递归处理新列表
            List<Integer> result = longestPalindromicSalesList(newList);
            
            // 更新最长回文
            if (result.size() > maxLength) {
                maxLength = result.size();
                bestList = result;
            }
        }
        
        return bestList;
    }
    
    // 检查是否是回文
    private static boolean isPalindrome(List<Integer> arr) {
        for (int i = 0; i < arr.size() / 2; i++) {
            if (!arr.get(i).equals(arr.get(arr.size() - 1 - i))) {
                return false;
            }
        }
        return true;
    }
}`
  },
  {
    id: 'example-29',
    englishTitle: 'Maximum Applications Execution',
    chineseTitle: '最大应用程序执行数',
    englishDescription: 'Allie is working on a system that can allocate resources to the applications in a manner efficient enough to allow the maximum number of applications to be executed. There are N number of applications and each application is identified by a unique integer ID (1 to N). Only M types of resources are available with a unique resourceID. Each application sends a request message to the system. The request message includes the information regarding the request time, the execution ending time, and the type of resource required for execution. Time is in the MMSS format where MM is minutes and SS is seconds. If more than one application sends a request at the same time then only one application will be approved by the system. The denied requests are automatically destroyed by the system. When approving the request, the system ensures that the request will be granted to the application in a way that will maximize the number of executions. The system can execute only one application at a time with a given resource. It will deny all other requests for that resource until the previous application has finished. Allie wants to know the maximum number of applications that have been executed successfully. Write an algorithm to help Allie calculate the maximum number of applications that are executed successfully by the system.',
    chineseDescription: 'Allie正在开发一个系统，该系统可以以足够高效的方式为应用程序分配资源，以允许执行最大数量的应用程序。有N个应用程序，每个应用程序由唯一的整数ID（1到N）标识。只有M种类型的资源可用，每种资源都有唯一的resourceID。每个应用程序向系统发送请求消息。请求消息包含关于请求时间、执行结束时间和执行所需资源类型的信息。时间采用MMSS格式，其中MM是分钟，SS是秒。如果多个应用程序同时发送请求，则系统只会批准一个应用程序。被拒绝的请求会被系统自动销毁。在批准请求时，系统确保请求会以最大化执行数量的方式授予应用程序。系统一次只能使用给定资源执行一个应用程序。在之前的应用程序完成之前，它会拒绝该资源的所有其他请求。Allie想知道成功执行的应用程序的最大数量。编写一个算法来帮助Allie计算系统成功执行的应用程序的最大数量。',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果是全局最好或最优的算法。在本题中，贪心算法的核心思想是：1. 按资源类型对应用程序进行分组；2. 对每个资源组，按应用程序的结束时间进行排序；3. 遍历排序后的应用程序，选择不与已选择应用程序冲突的应用程序（即开始时间大于等于前一个应用程序的结束时间）；4. 统计每个资源组可以执行的应用程序数量，并将所有资源组的数量相加。这种方法可以确保每个资源都被充分利用，从而最大化总的应用程序执行数量。',
    examples: [
      {
        input: 'applications = [["0000", "0010", 1], ["0005", "0015", 1], ["0010", "0020", 1], ["0000", "0010", 2], ["0005", "0015", 2]]',
        output: '4'
      },
      {
        input: 'applications = [["0000", "0010", 1], ["0005", "0015", 1], ["0000", "0010", 2], ["0005", "0015", 2], ["0010", "0020", 1], ["0010", "0020", 2]]',
        output: '6'
      }
    ],
    code: `function maxApplicationsExecuted(applications) {
  // 按资源类型分组
  const resources = {};
  for (const app of applications) {
    const [start, end, resource] = app;
    if (!resources[resource]) {
      resources[resource] = [];
    }
    resources[resource].push({ start, end });
  }
  
  let totalExecuted = 0;
  
  // 对每个资源单独处理
  for (const resource in resources) {
    const apps = resources[resource];
    
    // 按结束时间排序
    apps.sort((a, b) => a.end.localeCompare(b.end));
    
    let count = 0;
    let lastEnd = "0000";
    
    for (const app of apps) {
      if (app.start >= lastEnd) {
        count++;
        lastEnd = app.end;
      }
    }
    
    totalExecuted += count;
  }
  
  return totalExecuted;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Collections;
import java.util.Comparator;

public class Solution {
    public static int maxApplicationsExecuted(List<List<String>> applications) {
        // 按资源类型分组
        Map<Integer, List<Application>> resources = new HashMap<>();
        for (List<String> app : applications) {
            String start = app.get(0);
            String end = app.get(1);
            int resource = Integer.parseInt(app.get(2));
            
            if (!resources.containsKey(resource)) {
                resources.put(resource, new ArrayList<>());
            }
            resources.get(resource).add(new Application(start, end));
        }
        
        int totalExecuted = 0;
        
        // 对每个资源单独处理
        for (Map.Entry<Integer, List<Application>> entry : resources.entrySet()) {
            List<Application> apps = entry.getValue();
            
            // 按结束时间排序
            Collections.sort(apps, Comparator.comparing(a -> a.end));
            
            int count = 0;
            String lastEnd = "0000";
            
            for (Application app : apps) {
                if (app.start.compareTo(lastEnd) >= 0) {
                    count++;
                    lastEnd = app.end;
                }
            }
            
            totalExecuted += count;
        }
        
        return totalExecuted;
    }
    
    static class Application {
        String start;
        String end;
        
        Application(String start, String end) {
            this.start = start;
            this.end = end;
        }
    }
}`
  },
  {
    id: 'example-30',
    englishTitle: 'Encrypt Secret Code',
    chineseTitle: '加密秘密代码',
    englishDescription: 'Bob has to send a secret code S to his boss. He designs a method to encrypt the code using two key values N and M. The formula that he uses to develop the encrypted code is shown below: (((S %10) )%1000000007). Write an algorithm to help Bob encrypt the code.',
    chineseDescription: 'Bob必须向他的老板发送一个秘密代码S。他设计了一种使用两个键值N和M来加密代码的方法。他用来开发加密代码的公式如下：(((S %10) )%1000000007)。编写一个算法来帮助Bob加密代码。',
    algorithm: '数学运算算法',
    algorithmDescription: '数学运算算法是一种使用基本数学运算来解决问题的方法。在本题中，数学运算算法的核心思想是：1. 取秘密代码S的最后一位数字，通过S % 10实现；2. 对得到的结果取模1000000007，确保结果在合理范围内；3. 返回最终的加密结果。这种方法虽然简单，但可以有效地提取秘密代码的最后一位数字作为加密结果。',
    examples: [
      {
        input: 'S = 12345, N = 2, M = 3',
        output: '5'
      },
      {
        input: 'S = 987654321, N = 5, M = 7',
        output: '1'
      }
    ],
    code: `function encryptSecretCode(S, N, M) {
  // 取S的最后一位数字
  const lastDigit = S % 10;
  // 计算加密结果
  const encrypted = lastDigit % 1000000007;
  return encrypted;
}`,
    javaCode: `public class Solution {
    public static int encryptSecretCode(long S, int N, int M) {
        // 取S的最后一位数字
        int lastDigit = (int) (S % 10);
        // 计算加密结果
        int encrypted = lastDigit % 1000000007;
        return encrypted;
    }
}`
  },
  {
    id: 'example-31',
    englishTitle: 'LRU Cache Misses',
    chineseTitle: 'LRU缓存未命中数',
    englishDescription: 'A virtual memory management system in an operating system uses Least Recently Used (LRU) cache. When a requested memory page is not in the cache and the cache is full, the page that was least recently used should be removed from the cache to make room for the requested page. If the cache is not full, then the requested page is added to the cache and considered to be the most recently used element in the cache. A given page should occur once in the cache at most. Given the maximum size of the cache and an array of page requests, calculate the number of cache misses. A cache miss occurs when a page is requested but is not found in the cache.',
    chineseDescription: '操作系统中的虚拟内存管理系统使用最近最少使用（LRU）缓存。当请求的内存页面不在缓存中且缓存已满时，应从缓存中删除最近最少使用的页面，为请求的页面腾出空间。如果缓存未满，则将请求的页面添加到缓存中，并将其视为缓存中最近使用的元素。给定页面在缓存中最多出现一次。给定缓存的最大大小和页面请求数组，计算缓存未命中的次数。当请求页面但在缓存中未找到时，发生缓存未命中。',
    algorithm: 'LRU缓存算法',
    algorithmDescription: 'LRU（最近最少使用）缓存算法是一种用于管理缓存空间的算法。在本题中，LRU缓存算法的核心思想是：1. 维护一个缓存列表，记录当前缓存的页面；2. 当请求一个页面时，检查它是否在缓存中；3. 如果不在缓存中（缓存未命中），增加未命中计数，如果缓存已满，则删除列表头部的页面（最近最少使用的），然后将新页面添加到列表尾部（最近使用的）；4. 如果在缓存中（缓存命中），将该页面移到列表尾部（最近使用的）；5. 最终返回缓存未命中的总次数。这种方法可以有效地模拟LRU缓存的行为，从而计算出缓存未命中的次数。',
    examples: [
      {
        input: 'cacheSize = 2, pageRequests = [1, 2, 1, 3, 2]',
        output: '3'
      },
      {
        input: 'cacheSize = 3, pageRequests = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]',
        output: '8'
      }
    ],
    code: `function calculateCacheMisses(cacheSize, pageRequests) {
  if (cacheSize === 0) {
    return pageRequests.length;
  }
  
  const cache = [];
  let misses = 0;
  
  for (const page of pageRequests) {
    const index = cache.indexOf(page);
    
    if (index === -1) {
      // 缓存未命中
      misses++;
      
      if (cache.length >= cacheSize) {
        // 缓存已满，删除最近最少使用的页面
        cache.shift();
      }
      
      // 添加新页面到缓存末尾（最近使用）
      cache.push(page);
    } else {
      // 缓存命中，将页面移到缓存末尾（最近使用）
      cache.splice(index, 1);
      cache.push(page);
    }
  }
  
  return misses;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static int calculateCacheMisses(int cacheSize, int[] pageRequests) {
        if (cacheSize == 0) {
            return pageRequests.length;
        }
        
        List<Integer> cache = new ArrayList<>();
        int misses = 0;
        
        for (int page : pageRequests) {
            int index = cache.indexOf(page);
            
            if (index == -1) {
                // 缓存未命中
                misses++;
                
                if (cache.size() >= cacheSize) {
                    // 缓存已满，删除最近最少使用的页面
                    cache.remove(0);
                }
                
                // 添加新页面到缓存末尾（最近使用）
                cache.add(page);
            } else {
                // 缓存命中，将页面移到缓存末尾（最近使用）
                cache.remove(index);
                cache.add(page);
            }
        }
        
        return misses;
    }
}`
  },
  {
    id: 'example-32',
    englishTitle: 'Minimum Bit Flips to Convert P to Q',
    chineseTitle: '将P转换为Q的最少位翻转数',
    englishDescription: 'An agent sends a secret message to headquarters containing the details of his project. He sends one soft copy to the agency’s computer (P) and sends one hard copy by fax to Roger, the technical head of the agency (Q). But during the transmission, noise in the network causes some bits of the data message P to get distorted. However, we know that Roger always matches the binary values of both messages and checks whether he can convert the message P to message Q by flipping the minimum number of bits. Write an algorithm to help Roger find the minimum number of bits that must be flipped to convert message P to message Q.',
    chineseDescription: '一名特工向总部发送了一条包含其项目细节的秘密消息。他将一份软拷贝发送到机构的计算机（P），并通过传真将一份硬拷贝发送给机构的技术主管Roger（Q）。但是在传输过程中，网络中的噪声导致数据消息P的一些位被扭曲。然而，我们知道Roger总是匹配两条消息的二进制值，并检查他是否可以通过翻转最少数量的位将消息P转换为消息Q。编写一个算法来帮助Roger找到将消息P转换为消息Q必须翻转的最少位数。',
    algorithm: '位操作算法',
    algorithmDescription: '位操作算法是一种使用位级操作来解决问题的方法。在本题中，位操作算法的核心思想是：1. 将二进制字符串转换为数字；2. 使用异或运算（^）找出两个数字中不同的位（异或结果中1的位表示需要翻转的位）；3. 统计异或结果中1的个数，即为需要翻转的最少位数。这种方法利用了位操作的高效性，可以快速计算出需要翻转的位数。',
    examples: [
      {
        input: 'P = 1010, Q = 1111',
        output: '2'
      },
      {
        input: 'P = 1100, Q = 1100',
        output: '0'
      }
    ],
    code: `function minBitFlips(P, Q) {
  // 将字符串转换为数字
  const pNum = parseInt(P, 2);
  const qNum = parseInt(Q, 2);
  
  // 计算异或结果，找出不同的位
  const xor = pNum ^ qNum;
  
  // 计算异或结果中1的个数，即需要翻转的位数
  let count = 0;
  let temp = xor;
  while (temp > 0) {
    count += temp & 1;
    temp >>= 1;
  }
  
  return count;
}`,
    javaCode: `public class Solution {
    public static int minBitFlips(String P, String Q) {
        // 将字符串转换为数字
        int pNum = Integer.parseInt(P, 2);
        int qNum = Integer.parseInt(Q, 2);
        
        // 计算异或结果，找出不同的位
        int xor = pNum ^ qNum;
        
        // 计算异或结果中1的个数，即需要翻转的位数
        int count = 0;
        int temp = xor;
        while (temp > 0) {
            count += temp & 1;
            temp >>= 1;
        }
        
        return count;
    }
}`
  },
  {
    id: 'example-33',
    englishTitle: 'Winning Team Power',
    chineseTitle: '获胜团队的力量',
    englishDescription: 'A random game is being played in teams by N kids, each with strength Xi. The kids stand in a line with the first kid at position 1, the second at 2, and so on. A person draws M cards randomly from a box, each card containing a pair of numbers that represents the position of kids belonging to the same team. For example, if a card contains [1, 4] and another contains [4, 3], then the kids at positions [1, 4, 3] belong to the same team. The kids whose positions do not come up on any of the cards participate as one-person teams. Each teams power is determined by the sum of the strengths of the kids on the team. The team with the highest power wins. Design an algorithm that outputs the power of the winning team.',
    chineseDescription: 'N个孩子正在团队中玩一个随机游戏，每个孩子都有力量Xi。孩子们排成一行，第一个孩子在位置1，第二个在位置2，依此类推。一个人从盒子里随机抽取M张卡片，每张卡片包含一对数字，表示属于同一团队的孩子的位置。例如，如果一张卡片包含[1, 4]，另一张包含[4, 3]，那么位置[1, 4, 3]的孩子属于同一团队。位置未出现在任何卡片上的孩子作为单人团队参加。每个团队的力量由团队中孩子的力量之和决定。力量最高的团队获胜。设计一个算法，输出获胜团队的力量。',
    algorithm: '并查集算法',
    algorithmDescription: '并查集（Disjoint Set Union, DSU）是一种用于处理不相交集合的合并及查询问题的数据结构。在本题中，并查集算法的核心思想是：1. 初始化每个孩子为一个单独的集合；2. 处理每张卡片，将卡片上的两个孩子合并到同一个集合中；3. 计算每个集合（团队）的力量之和；4. 找出力量最大的团队。这种方法可以高效地处理团队合并的问题，时间复杂度接近O(M α(N))，其中α是阿克曼函数的反函数，几乎可以视为常数。',
    examples: [
      {
        input: 'N = 5, X = [10, 20, 30, 40, 50], M = 2, cards = [[1, 2], [3, 4]]',
        output: '90'
      },
      {
        input: 'N = 4, X = [5, 10, 15, 20], M = 1, cards = [[1, 4]]',
        output: '50'
      }
    ],
    code: `function winningTeamPower(N, X, M, cards) {
  // 初始化并查集
  const parent = new Array(N + 1);
  for (let i = 1; i <= N; i++) {
    parent[i] = i;
  }
  
  // 查找根节点
  function find(u) {
    if (parent[u] !== u) {
      parent[u] = find(parent[u]);
    }
    return parent[u];
  }
  
  // 合并两个集合
  function union(u, v) {
    const rootU = find(u);
    const rootV = find(v);
    if (rootU !== rootV) {
      parent[rootV] = rootU;
    }
  }
  
  // 处理卡片，合并团队
  for (const [u, v] of cards) {
    union(u, v);
  }
  
  // 计算每个团队的力量
  const teamPower = new Map();
  for (let i = 1; i <= N; i++) {
    const root = find(i);
    if (!teamPower.has(root)) {
      teamPower.set(root, 0);
    }
    teamPower.set(root, teamPower.get(root) + X[i - 1]);
  }
  
  // 找出最大力量
  let maxPower = 0;
  for (const power of teamPower.values()) {
    if (power > maxPower) {
      maxPower = power;
    }
  }
  
  return maxPower;
}`,
    javaCode: `import java.util.HashMap;
import java.util.Map;

public class Solution {
    private static int[] parent;
    
    public static int winningTeamPower(int N, int[] X, int M, int[][] cards) {
        // 初始化并查集
        parent = new int[N + 1];
        for (int i = 1; i <= N; i++) {
            parent[i] = i;
        }
        
        // 处理卡片，合并团队
        for (int[] card : cards) {
            int u = card[0];
            int v = card[1];
            union(u, v);
        }
        
        // 计算每个团队的力量
        Map<Integer, Integer> teamPower = new HashMap<>();
        for (int i = 1; i <= N; i++) {
            int root = find(i);
            teamPower.put(root, teamPower.getOrDefault(root, 0) + X[i - 1]);
        }
        
        // 找出最大力量
        int maxPower = 0;
        for (int power : teamPower.values()) {
            if (power > maxPower) {
                maxPower = power;
            }
        }
        
        return maxPower;
    }
    
    // 查找根节点
    private static int find(int u) {
        if (parent[u] != u) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }
    
    // 合并两个集合
    private static void union(int u, int v) {
        int rootU = find(u);
        int rootV = find(v);
        if (rootU != rootV) {
            parent[rootV] = rootU;
        }
    }
}`
  },
  {
    id: 'example-34',
    englishTitle: 'Soldier Position After Actions',
    chineseTitle: '行动后士兵的位置',
    englishDescription: 'There are N soldiers standing in a line, with IDs from 1 to N, in ascending order. They are participating in an exercise consisting of Q actions. During the ith action, the Major calls S numbers row and col . The soldiers at the row th and col th positions swap places; then the soldiers at (row +1)th and (col -1)th positions swap places, and so on until (row +m)< (col -m). Each of the soldier’s IDs will be covered in the range [row , col ] for at most one action. Write an algorithm to find the ID of the soldier at Kth position in the line after all the actions are completed.',
    chineseDescription: '有N名士兵排成一行，ID从1到N，按升序排列。他们正在参加由Q个行动组成的演习。在第i个行动中，少校呼叫S个数字row和col。row位置和col位置的士兵交换位置；然后(row+1)位置和(col-1)位置的士兵交换位置，依此类推，直到(row+m)<(col-m)。每个士兵的ID最多在一个行动的[row, col]范围内被覆盖。编写一个算法，在所有行动完成后找出第K个位置的士兵的ID。',
    algorithm: '数组操作算法',
    algorithmDescription: '数组操作算法是一种用于处理数组元素的方法。在本题中，数组操作算法的核心思想是：1. 初始化一个包含士兵ID的数组；2. 对每个行动，将[row, col]范围内的士兵位置进行反转（通过从两端向中间交换元素）；3. 完成所有行动后，返回第K个位置的士兵ID。这种方法可以高效地处理士兵位置的交换操作，时间复杂度为O(Q*(N/2))，其中Q是行动次数，N是士兵数量。',
    examples: [
      {
        input: 'N = 5, Q = 1, actions = [[1, 5]], K = 3',
        output: '3'
      },
      {
        input: 'N = 6, Q = 2, actions = [[1, 4], [5, 6]], K = 2',
        output: '3'
      }
    ],
    code: `function findSoldierAtPosition(N, Q, actions, K) {
  // 初始化士兵数组
  const soldiers = new Array(N);
  for (let i = 0; i < N; i++) {
    soldiers[i] = i + 1;
  }
  
  // 处理每个行动
  for (const [row, col] of actions) {
    // 转换为0-based索引
    let left = row - 1;
    let right = col - 1;
    
    // 交换位置
    while (left < right) {
      [soldiers[left], soldiers[right]] = [soldiers[right], soldiers[left]];
      left++;
      right--;
    }
  }
  
  // 返回第K个位置的士兵ID（转换为0-based索引）
  return soldiers[K - 1];
}`,
    javaCode: `public class Solution {
    public static int findSoldierAtPosition(int N, int Q, int[][] actions, int K) {
        // 初始化士兵数组
        int[] soldiers = new int[N];
        for (int i = 0; i < N; i++) {
            soldiers[i] = i + 1;
        }
        
        // 处理每个行动
        for (int[] action : actions) {
            int row = action[0];
            int col = action[1];
            // 转换为0-based索引
            int left = row - 1;
            int right = col - 1;
            
            // 交换位置
            while (left < right) {
                int temp = soldiers[left];
                soldiers[left] = soldiers[right];
                soldiers[right] = temp;
                left++;
                right--;
            }
        }
        
        // 返回第K个位置的士兵ID（转换为0-based索引）
        return soldiers[K - 1];
    }
}`
  },
  {
    id: 'example-35',
    englishTitle: 'Maximum Path Product in Tree',
    chineseTitle: '树中的最大路径乘积',
    englishDescription: 'Arya is attempting to solve a math problem. In this problem, she is given a tree with N nodes, indexed from 1 to N where the root node is indexed as 1. Each node of the tree has a defined value. She wants to trace a path from one leaf to another leaf in such a way that will award her the maximum score for that path. The score of a path is defined as the product of node values along the path. Write an algorithm to find the maximum possible score.',
    chineseDescription: 'Arya正在尝试解决一个数学问题。在这个问题中，她被给定一棵有N个节点的树，节点索引从1到N，其中根节点的索引为1。树的每个节点都有一个定义的值。她想从一个叶节点到另一个叶节点追踪一条路径，以获得该路径的最大分数。路径的分数定义为沿路径的节点值的乘积。编写一个算法来找到可能的最大分数。',
    algorithm: '深度优先搜索（DFS）',
    algorithmDescription: '深度优先搜索（DFS）是一种用于遍历或搜索树或图的算法。在本题中，DFS算法的核心思想是：1. 构建树的邻接表表示；2. 从根节点开始，递归地遍历每个子节点；3. 对于每个节点，计算从该节点到叶节点的最大和最小乘积（因为负数乘以负数可能得到更大的乘积）；4. 当遍历到叶节点时，更新全局最大乘积；5. 最终返回全局最大乘积。这种方法可以有效地遍历树的所有可能路径，从而找到最大路径乘积。',
    examples: [
      {
        input: 'N = 3, tree = [[1, 2], [1, 3]], values = [2, 3, 4]',
        output: '24'
      },
      {
        input: 'N = 4, tree = [[1, 2], [1, 3], [3, 4]], values = [2, -3, 4, 5]',
        output: '40'
      }
    ],
    code: `function maxPathProduct(N, tree, values) {
  // 构建邻接表
  const adj = new Map();
  for (let i = 1; i <= N; i++) {
    adj.set(i, []);
  }
  
  for (const [u, v] of tree) {
    adj.get(u).push(v);
    adj.get(v).push(u);
  }
  
  let maxProduct = -Infinity;
  
  // DFS遍历，计算从当前节点到叶节点的最大和最小乘积（因为负数乘以负数可能得到更大的乘积）
  function dfs(node, parent) {
    // 如果是叶节点（除了根节点）
    if (node !== 1 && adj.get(node).length === 1) {
      return { max: values[node - 1], min: values[node - 1] };
    }
    
    let maxFromChildren = -Infinity;
    let minFromChildren = Infinity;
    let hasChildren = false;
    
    for (const neighbor of adj.get(node)) {
      if (neighbor !== parent) {
        hasChildren = true;
        const { max: childMax, min: childMin } = dfs(neighbor, node);
        
        // 计算当前节点与子节点路径的乘积
        const currentMax = Math.max(
          values[node - 1] * childMax,
          values[node - 1] * childMin
        );
        
        const currentMin = Math.min(
          values[node - 1] * childMax,
          values[node - 1] * childMin
        );
        
        // 更新最大和最小
        if (currentMax > maxFromChildren) {
          maxFromChildren = currentMax;
        }
        if (currentMin < minFromChildren) {
          minFromChildren = currentMin;
        }
      }
    }
    
    if (!hasChildren) {
      return { max: values[node - 1], min: values[node - 1] };
    }
    
    // 更新全局最大乘积
    if (maxFromChildren > maxProduct) {
      maxProduct = maxFromChildren;
    }
    
    return { max: maxFromChildren, min: minFromChildren };
  }
  
  dfs(1, -1);
  return maxProduct;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    private static List<List<Integer>> adj;
    private static int[] values;
    private static long maxProduct;
    
    public static long maxPathProduct(int N, int[][] tree, int[] values) {
        // 构建邻接表
        adj = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            adj.add(new ArrayList<>());
        }
        
        for (int[] edge : tree) {
            int u = edge[0];
            int v = edge[1];
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
        
        Solution.values = values;
        maxProduct = Long.MIN_VALUE;
        
        // DFS遍历
        dfs(1, -1);
        return maxProduct;
    }
    
    private static Pair dfs(int node, int parent) {
        // 如果是叶节点（除了根节点）
        if (node != 1 && adj.get(node).size() == 1) {
            long val = values[node - 1];
            return new Pair(val, val);
        }
        
        long maxFromChildren = Long.MIN_VALUE;
        long minFromChildren = Long.MAX_VALUE;
        boolean hasChildren = false;
        
        for (int neighbor : adj.get(node)) {
            if (neighbor != parent) {
                hasChildren = true;
                Pair childPair = dfs(neighbor, node);
                long childMax = childPair.max;
                long childMin = childPair.min;
                
                // 计算当前节点与子节点路径的乘积
                long currentMax = Math.max(
                    (long) values[node - 1] * childMax,
                    (long) values[node - 1] * childMin
                );
                
                long currentMin = Math.min(
                    (long) values[node - 1] * childMax,
                    (long) values[node - 1] * childMin
                );
                
                // 更新最大和最小
                if (currentMax > maxFromChildren) {
                    maxFromChildren = currentMax;
                }
                if (currentMin < minFromChildren) {
                    minFromChildren = currentMin;
                }
            }
        }
        
        if (!hasChildren) {
            long val = values[node - 1];
            return new Pair(val, val);
        }
        
        // 更新全局最大乘积
        if (maxFromChildren > maxProduct) {
            maxProduct = maxFromChildren;
        }
        
        return new Pair(maxFromChildren, minFromChildren);
    }
    
    static class Pair {
        long max;
        long min;
        
        Pair(long max, long min) {
            this.max = max;
            this.min = min;
        }
    }
}`
  },
  {
    id: 'example-36',
    englishTitle: 'Maximum Molecules for Compound',
    chineseTitle: '化合物的最大分子数',
    englishDescription: 'You are performing a science experiment in a research laboratory. You are attempting to form a new compound. A compound is made up of molecules and the mass of the compound is the sum of the masses of the molecules that compose the compound. For this experiment, you have identified four types of molecules: A, B, C and D. From these four molecules, A and B are monatomic, but C and D are diatomic. A monoatomic molecule is made up of one atom, but a diatomic molecule is made up of two atoms. So the mass of a diatomic molecule is twice its atomic mass while the mass of a monoatomic molecule is equal to its atomic mass. You have to form a compound X of mass Q using the maximum number of molecules. Write an algorithm to find the maximum number of molecules that can be used to form compound X.',
    chineseDescription: '你正在研究实验室进行科学实验。你正在尝试形成一种新的化合物。化合物由分子组成，化合物的质量是组成化合物的分子质量的总和。在这个实验中，你已经确定了四种类型的分子：A、B、C和D。在这四种分子中，A和B是单原子的，而C和D是双原子的。单原子分子由一个原子组成，而双原子分子由两个原子组成。因此，双原子分子的质量是其原子质量的两倍，而单原子分子的质量等于其原子质量。你必须使用最大数量的分子来形成质量为Q的化合物X。编写一个算法来找到可用于形成化合物X的最大分子数。',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果是全局最好或最优的算法。在本题中，贪心算法的核心思想是：1. 计算所有可能的原子质量（单原子分子的质量，双原子分子质量的一半）；2. 找到最小的原子质量，因为使用最小的原子质量可以得到最多的分子数量；3. 用化合物的总质量Q除以最小原子质量，得到最大可能的分子数量。这种方法可以确保使用最少的质量单位，从而得到最多的分子数量。',
    examples: [
      {
        input: 'Q = 10, atomicMasses = {"A": 1, "B": 2, "C": 3, "D": 4}',
        output: '10'
      },
      {
        input: 'Q = 7, atomicMasses = {"A": 1, "B": 2, "C": 3, "D": 4}',
        output: '7'
      }
    ],
    code: `function maxMolecules(Q, atomicMasses) {
  // 计算每种分子的质量
  const moleculeMasses = {
    A: atomicMasses.A,  // 单原子
    B: atomicMasses.B,  // 单原子
    C: atomicMasses.C * 2,  // 双原子
    D: atomicMasses.D * 2   // 双原子
  };
  
  // 找出最小的分子质量
  const minMass = Math.min(...Object.values(moleculeMasses));
  
  // 最大分子数就是用最小质量的分子组成Q
  return Math.floor(Q / minMass);
}`,
    javaCode: `import java.util.Map;

public class Solution {
    public static int maxMolecules(int Q, Map<String, Integer> atomicMasses) {
        // 计算每种分子的质量
        int massA = atomicMasses.get("A");  // 单原子
        int massB = atomicMasses.get("B");  // 单原子
        int massC = atomicMasses.get("C") * 2;  // 双原子
        int massD = atomicMasses.get("D") * 2;   // 双原子
        
        // 找出最小的分子质量
        int minMass = Math.min(Math.min(massA, massB), Math.min(massC, massD));
        
        // 最大分子数就是用最小质量的分子组成Q
        return Q / minMass;
    }
}`
  },
  {
    id: 'example-37',
    englishTitle: 'Maximize Happy Friends',
    chineseTitle: '最大化开心的朋友数',
    englishDescription: 'Today is Max\'s birthday. He has ordered a rectangular fruit cake which is divided into N x M pieces. Each piece of the cake contains a different fruit numbered from 1 to N*M. He has invited K friends, each of whom have brought a list of their favorite fruit choices. A friend goes home happy if the piece he receives is of his favorite fruit. Note that each friend can receive only one piece of cake. Design a way for Max to find the maximum number of friends he can make happy.',
    chineseDescription: '今天是Max的生日。他订购了一个矩形水果蛋糕，被分成N x M块。蛋糕的每一块都包含一个不同的水果，编号从1到N*M。他邀请了K个朋友，每个朋友都带来了他们最喜欢的水果选择列表。如果朋友收到的蛋糕是他最喜欢的水果，他就会开心地回家。请注意，每个朋友只能收到一块蛋糕。设计一种方法，让Max找到他能让开心的朋友的最大数量。',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优的选择，从而希望导致结果是全局最好或最优的算法。在本题中，贪心算法的核心思想是：1. 遍历每个朋友；2. 对于每个朋友，检查他们的最喜欢的水果是否还没有被分配；3. 如果有，分配给他们并增加开心朋友数；4. 继续处理下一个朋友。这种方法可以确保尽可能多地满足朋友的需求，从而最大化开心的朋友数。',
    examples: [
      {
        input: 'N = 2, M = 2, K = 3, friends = [[1, 2], [2, 3], [3, 4]]',
        output: '3'
      },
      {
        input: 'N = 1, M = 3, K = 2, friends = [[1, 2], [2, 3]]',
        output: '2'
      }
    ],
    code: `function maximizeHappyFriends(N, M, K, friends) {
  // 计算蛋糕总块数
  const totalPieces = N * M;
  // 记录已经分配的水果
  const assigned = new Set();
  let happyCount = 0;
  
  // 遍历每个朋友
  for (const favFruits of friends) {
    // 遍历朋友的每个喜欢的水果
    for (const fruit of favFruits) {
      // 检查水果是否在蛋糕范围内且未被分配
      if (fruit >= 1 && fruit <= totalPieces && !assigned.has(fruit)) {
        // 分配水果给朋友
        assigned.add(fruit);
        happyCount++;
        break;
      }
    }
  }
  
  return happyCount;
}`,
    javaCode: `import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    public static int maximizeHappyFriends(int N, int M, int K, List<List<Integer>> friends) {
        // 计算蛋糕总块数
        int totalPieces = N * M;
        // 记录已经分配的水果
        Set<Integer> assigned = new HashSet<>();
        int happyCount = 0;
        
        // 遍历每个朋友
        for (List<Integer> favFruits : friends) {
            // 遍历朋友的每个喜欢的水果
            for (int fruit : favFruits) {
                // 检查水果是否在蛋糕范围内且未被分配
                if (fruit >= 1 && fruit <= totalPieces && !assigned.contains(fruit)) {
                    // 分配水果给朋友
                    assigned.add(fruit);
                    happyCount++;
                    break;
                }
            }
        }
        
        return happyCount;
    }
}`
  },
  {
    id: 'example-38',
    englishTitle: 'Maximize Alumni Attendance',
    chineseTitle: '最大化校友出席人数',
    englishDescription: 'A University has invited N alumni for a dinner. The dinner table has a circular shape. Each alumnus is assigned an invitation ID from 0 to N-1. Each alumnus likes exactly one fellow alumnus and will attend the dinner only if he/she can be seated next to the person he/she likes. Write an algorithm to find the IDs of the alumni in a lexicographical order so that maximum number of alumni attend the dinner. If more than one such seating arrangement exists, then output the one that is lexicographically smaller.',
    chineseDescription: '一所大学邀请了N位校友参加晚宴。晚宴桌是圆形的。每位校友被分配一个邀请ID，从0到N-1。每位校友恰好喜欢一位 fellow 校友，并且只有当他/她能坐在他/她喜欢的人旁边时才会参加晚宴。编写一个算法，按字典顺序找出校友的ID，以便最大数量的校友参加晚宴。如果存在多个这样的座位安排，则输出字典顺序较小的那个。',
    algorithm: '暴力枚举算法',
    algorithmDescription: '暴力枚举算法是一种通过遍历所有可能的组合来找到最优解的方法。在本题中，暴力枚举算法的核心思想是：1. 生成所有可能的校友座位排列；2. 对于每个排列，检查每个校友是否能坐在喜欢的人旁边（由于是圆形，需要检查首尾相连的情况）；3. 计算每个排列的出席人数；4. 选择出席人数最多的排列，如果有多个，选择字典序最小的。这种方法虽然时间复杂度较高，但对于较小的N值是可行的。',
    examples: [
      {
        input: 'N = 4, likes = [1, 2, 3, 0]',
        output: '[0, 1, 2, 3]'
      },
      {
        input: 'N = 3, likes = [1, 0, 0]',
        output: '[0, 1, 2]'
      }
    ],
    code: `function maximizeAlumniAttendance(N, likes) {
  // 构建喜欢关系映射
  const likeMap = new Map();
  for (let i = 0; i < N; i++) {
    likeMap.set(i, likes[i]);
  }
  
  // 生成所有可能的排列
  function generatePermutations(arr) {
    if (arr.length === 0) return [[]];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      const permutations = generatePermutations(remaining);
      for (const perm of permutations) {
        result.push([current].concat(perm));
      }
    }
    return result;
  }
  
  // 计算排列的出席人数
  function calculateAttendance(permutation) {
    let count = 0;
    for (let i = 0; i < permutation.length; i++) {
      const current = permutation[i];
      const left = permutation[(i - 1 + N) % N];
      const right = permutation[(i + 1) % N];
      if (left === likeMap.get(current) || right === likeMap.get(current)) {
        count++;
      }
    }
    return count;
  }
  
  // 生成所有可能的排列
  const permutations = generatePermutations(Array.from({ length: N }, (_, i) => i));
  
  // 找到最大出席人数的排列
  let maxAttendance = 0;
  let bestPermutation = [];
  
  for (const perm of permutations) {
    const attendance = calculateAttendance(perm);
    if (attendance > maxAttendance) {
      maxAttendance = attendance;
      bestPermutation = perm;
    } else if (attendance === maxAttendance) {
      // 如果出席人数相同，选择字典顺序较小的
      if (bestPermutation.length === 0 || perm.toString() < bestPermutation.toString()) {
        bestPermutation = perm;
      }
    }
  }
  
  return bestPermutation;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    private static int[] likes;
    private static int N;
    private static int maxAttendance;
    private static List<Integer> bestPermutation;
    
    public static List<Integer> maximizeAlumniAttendance(int n, int[] likesArray) {
        N = n;
        likes = likesArray;
        maxAttendance = 0;
        bestPermutation = new ArrayList<>();
        
        // 生成初始数组 [0, 1, ..., N-1]
        List<Integer> initial = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            initial.add(i);
        }
        
        // 生成所有排列
        generatePermutations(new ArrayList<>(), initial);
        
        return bestPermutation;
    }
    
    // 生成所有排列
    private static void generatePermutations(List<Integer> current, List<Integer> remaining) {
        if (remaining.isEmpty()) {
            // 计算当前排列的出席人数
            int attendance = calculateAttendance(current);
            
            // 更新最佳排列
            if (attendance > maxAttendance) {
                maxAttendance = attendance;
                bestPermutation = new ArrayList<>(current);
            } else if (attendance == maxAttendance) {
                // 如果出席人数相同，选择字典顺序较小的
                if (isLexSmaller(current, bestPermutation)) {
                    bestPermutation = new ArrayList<>(current);
                }
            }
            return;
        }
        
        for (int i = 0; i < remaining.size(); i++) {
            // 选择一个元素
            int selected = remaining.get(i);
            current.add(selected);
            
            // 递归生成剩余元素的排列
            List<Integer> newRemaining = new ArrayList<>(remaining);
            newRemaining.remove(i);
            generatePermutations(current, newRemaining);
            
            // 回溯
            current.remove(current.size() - 1);
        }
    }
    
    // 计算排列的出席人数
    private static int calculateAttendance(List<Integer> permutation) {
        int count = 0;
        for (int i = 0; i < permutation.size(); i++) {
            int current = permutation.get(i);
            int left = permutation.get((i - 1 + N) % N);
            int right = permutation.get((i + 1) % N);
            if (left == likes[current] || right == likes[current]) {
                count++;
            }
        }
        return count;
    }
    
    // 检查current是否比best更字典序小
    private static boolean isLexSmaller(List<Integer> current, List<Integer> best) {
        if (best.isEmpty()) {
            return true;
        }
        for (int i = 0; i < current.size(); i++) {
            if (current.get(i) < best.get(i)) {
                return true;
            } else if (current.get(i) > best.get(i)) {
                return false;
            }
        }
        return false;
    }
}`
  },
  {
    id: 'example-39',
    englishTitle: 'Shortest Job First Average Waiting Time',
    chineseTitle: '最短作业优先平均等待时间',
    englishDescription: 'Shortest Job First (SJF) is a system for scheduling task requests. Each task request is characterized by its request time (i.e., the time at which the task is submitted to the system) and its duration (i.e., the time needed to complete the task). When the SJF system completes a task it selects the task with the smallest duration to execute next If multiple tasks have the same smallest duration, SJF selects the task with the earliest request time. The waiting time for a task is the difference between the request time and the actual start time (i.e., the time that it spends waiting for the system to execute it). You may assume that the tasks arrive in such frequency that the system executes tasks constantly and is never idle. Given a list of request times and duration times, calculate the average task waiting time when scheduled using the Shortest Job First (SJF) algorithm.',
    chineseDescription: '最短作业优先（SJF）是一种调度任务请求的系统。每个任务请求的特征是其请求时间（即任务提交到系统的时间）和持续时间（即完成任务所需的时间）。当SJF系统完成一个任务时，它选择持续时间最小的任务 next 执行。如果多个任务具有相同的最小持续时间，SJF选择请求时间最早的任务。任务的等待时间是请求时间和实际开始时间之间的差异（即它等待系统执行它的时间）。您可以假设任务到达的频率使得系统不断执行任务，并且永远不会空闲。给定请求时间和持续时间的列表，使用最短作业优先（SJF）算法计算平均任务等待时间。',
    examples: [
      {
        input: 'tasks = [[0, 3], [1, 9], [2, 6]]',
        output: '9.0'
      },
      {
        input: 'tasks = [[0, 10], [2, 5], [4, 3]]',
        output: '5.0'
      }
    ],
    code: `function calculateSJFAverageWaitingTime(tasks) {
  const n = tasks.length;
  // 复制作业信息，包含请求时间、持续时间和是否完成
  const taskInfo = tasks.map(([request, duration], index) => ({
    request,
    duration,
    completed: false,
    index
  }));
  
  const waitingTimes = new Array(n).fill(0);
  let currentTime = 0;
  let completedTasks = 0;
  
  while (completedTasks < n) {
    // 找出所有已经到达且未完成的任务
    const availableTasks = taskInfo.filter(task => !task.completed && task.request <= currentTime);
    
    if (availableTasks.length > 0) {
      // 选择持续时间最小的任务，如果持续时间相同，选择请求时间最早的
      availableTasks.sort((a, b) => {
        if (a.duration !== b.duration) {
          return a.duration - b.duration;
        }
        return a.request - b.request;
      });
      
      const selectedTask = availableTasks[0];
      // 计算等待时间
      waitingTimes[selectedTask.index] = currentTime - selectedTask.request;
      // 更新当前时间
      currentTime += selectedTask.duration;
      // 标记任务为完成
      selectedTask.completed = true;
      completedTasks++;
    } else {
      // 如果没有可用任务，直接跳到下一个任务的到达时间
      const nextTask = taskInfo.filter(task => !task.completed).reduce((earliest, task) => {
        return task.request < earliest.request ? task : earliest;
      });
      currentTime = nextTask.request;
    }
  }
  
  // 计算平均等待时间
  const totalWaitingTime = waitingTimes.reduce((sum, time) => sum + time, 0);
  return totalWaitingTime / n;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;
import java.util.Comparator;

public class Solution {
    public static double calculateSJFAverageWaitingTime(int[][] tasks) {
        int n = tasks.length;
        
        // 复制作业信息，包含请求时间、持续时间、是否完成和索引
        List<Task> taskInfo = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int request = tasks[i][0];
            int duration = tasks[i][1];
            taskInfo.add(new Task(request, duration, false, i));
        }
        
        int[] waitingTimes = new int[n];
        int currentTime = 0;
        int completedTasks = 0;
        
        while (completedTasks < n) {
            // 找出所有已经到达且未完成的任务
            List<Task> availableTasks = new ArrayList<>();
            for (Task task : taskInfo) {
                if (!task.completed && task.request <= currentTime) {
                    availableTasks.add(task);
                }
            }
            
            if (!availableTasks.isEmpty()) {
                // 选择持续时间最小的任务，如果持续时间相同，选择请求时间最早的
                availableTasks.sort(new Comparator<Task>() {
                    @Override
                    public int compare(Task a, Task b) {
                        if (a.duration != b.duration) {
                            return a.duration - b.duration;
                        }
                        return a.request - b.request;
                    }
                });
                
                Task selectedTask = availableTasks.get(0);
                // 计算等待时间
                waitingTimes[selectedTask.index] = currentTime - selectedTask.request;
                // 更新当前时间
                currentTime += selectedTask.duration;
                // 标记任务为完成
                selectedTask.completed = true;
                completedTasks++;
            } else {
                // 如果没有可用任务，直接跳到下一个任务的到达时间
                Task nextTask = null;
                for (Task task : taskInfo) {
                    if (!task.completed) {
                        if (nextTask == null || task.request < nextTask.request) {
                            nextTask = task;
                        }
                    }
                }
                currentTime = nextTask.request;
            }
        }
        
        // 计算平均等待时间
        int totalWaitingTime = 0;
        for (int time : waitingTimes) {
            totalWaitingTime += time;
        }
        return (double) totalWaitingTime / n;
    }
    
    static class Task {
        int request;
        int duration;
        boolean completed;
        int index;
        
        Task(int request, int duration, boolean completed, int index) {
            this.request = request;
            this.duration = duration;
            this.completed = completed;
            this.index = index;
        }
    }
}`
  },
  {
    id: 'example-40',
    englishTitle: 'Prime Numbers Up to N',
    chineseTitle: '到N的质数',
    englishDescription: 'A prime number is divisible only by 1 and itself. The teacher writes a positive integer on the board. Write an algorithm to find all the prime numbers from 2 to the given positive number.',
    chineseDescription: '质数只能被1和它本身整除。老师在黑板上写了一个正整数。编写一个算法来找出从2到给定正整数的所有质数。',
    examples: [
      {
        input: 'n = 10',
        output: '[2, 3, 5, 7]'
      },
      {
        input: 'n = 20',
        output: '[2, 3, 5, 7, 11, 13, 17, 19]'
      }
    ],
    code: `function findPrimeNumbers(n) {
  if (n < 2) {
    return [];
  }
  
  // 初始化质数标记数组
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  
  // 筛法求质数
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  
  // 收集所有质数
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }
  
  return primes;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static List<Integer> findPrimeNumbers(int n) {
        List<Integer> primes = new ArrayList<>();
        if (n < 2) {
            return primes;
        }
        
        // 初始化质数标记数组
        boolean[] isPrime = new boolean[n + 1];
        for (int i = 0; i <= n; i++) {
            isPrime[i] = true;
        }
        isPrime[0] = isPrime[1] = false;
        
        // 筛法求质数
        for (int i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        
        // 收集所有质数
        for (int i = 2; i <= n; i++) {
            if (isPrime[i]) {
                primes.add(i);
            }
        }
        
        return primes;
    }
}`
  },
  {
    id: 'example-41',
    englishTitle: 'Count Occurrences of Substring',
    chineseTitle: '计算子字符串出现次数',
    englishDescription: 'You are given two strings containing only English letters. Write an algorithm to count the number of occurrences of the second string in the first string. (You may disregard the case of the letters.)',
    chineseDescription: '给定两个只包含英文字母的字符串。编写一个算法来计算第二个字符串在第一个字符串中出现的次数。（您可以忽略字母的大小写。）',
    examples: [
      {
        input: 'str1 = "Hello World", str2 = "lo"',
        output: '1'
      },
      {
        input: 'str1 = "Hello hello HELLO", str2 = "hello"',
        output: '3'
      }
    ],
    code: `function countOccurrences(str1, str2) {
  // 转换为小写
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  
  if (lowerStr2.length === 0) {
    return 0;
  }
  
  let count = 0;
  let index = 0;
  
  while (index < lowerStr1.length) {
    const foundIndex = lowerStr1.indexOf(lowerStr2, index);
    if (foundIndex === -1) {
      break;
    }
    count++;
    index = foundIndex + 1;
  }
  
  return count;
}`,
    javaCode: `public class Solution {
    public static int countOccurrences(String str1, String str2) {
        // 转换为小写
        String lowerStr1 = str1.toLowerCase();
        String lowerStr2 = str2.toLowerCase();
        
        if (lowerStr2.length() == 0) {
            return 0;
        }
        
        int count = 0;
        int index = 0;
        
        while (index < lowerStr1.length()) {
            int foundIndex = lowerStr1.indexOf(lowerStr2, index);
            if (foundIndex == -1) {
                break;
            }
            count++;
            index = foundIndex + 1;
        }
        
        return count;
    }
}`
  },
  {
    id: 'example-42',
    englishTitle: 'Maximum Toll Revenue Road',
    chineseTitle: '最大通行费收入道路',
    englishDescription: 'In a state, N cities with unique city codes from 1 to N are connected by N-1 roads. The road network is in the form of a tree of which each road connects two cities. A path is a road, or a combination of roads, connecting any two cities. Each road has a toll booth that collects a toll equal to the maximum number of paths of which that particular road is part. The state transportation authority wishes to identify the road on which the maximum toll revenue is collected. Write an algorithm to help the transportation authority identify the pair of cities connected by the road on which the maximum toll revenue is collected. The output should be sorted in increasing order. If more than one road collects the same total revenue, then output the pair of cities that have the smaller city code.',
    chineseDescription: '在一个州，N个城市（城市代码从1到N）由N-1条道路连接。道路网络呈树形结构，其中每条道路连接两个城市。路径是连接任意两个城市的一条道路或道路组合。每条道路都有一个收费站，收取的通行费等于该道路所属的最大路径数。州交通管理局希望确定收取最大通行费收入的道路。编写一个算法来帮助交通管理局识别连接收取最大通行费收入的道路的城市对。输出应按升序排序。如果多条道路收取相同的总收入，则输出城市代码较小的城市对。',
    examples: [
      {
        input: 'N = 4, roads = [[1, 2], [2, 3], [2, 4]]',
        output: '[1, 2]'
      },
      {
        input: 'N = 5, roads = [[1, 2], [1, 3], [3, 4], [3, 5]]',
        output: '[1, 3]'
      }
    ],
    code: `function findMaxTollRoad(N, roads) {
  // 构建邻接表
  const adj = new Map();
  for (let i = 1; i <= N; i++) {
    adj.set(i, []);
  }
  
  for (const [u, v] of roads) {
    adj.get(u).push(v);
    adj.get(v).push(u);
  }
  
  // 计算子树大小
  function calculateSubtreeSize(node, parent) {
    let size = 1;
    for (const neighbor of adj.get(node)) {
      if (neighbor !== parent) {
        size += calculateSubtreeSize(neighbor, node);
      }
    }
    subtreeSize[node] = size;
    return size;
  }
  
  const subtreeSize = new Array(N + 1).fill(0);
  calculateSubtreeSize(1, -1);
  
  let maxRevenue = 0;
  let bestRoad = [N, N]; // 初始化为最大可能的城市代码
  
  for (const [u, v] of roads) {
    // 确定父子关系
    const parent = subtreeSize[u] > subtreeSize[v] ? u : v;
    const child = parent === u ? v : u;
    
    // 计算该道路的通行费收入
    const revenue = subtreeSize[child] * (N - subtreeSize[child]);
    
    // 更新最大通行费收入和最佳道路
    if (revenue > maxRevenue) {
      maxRevenue = revenue;
      bestRoad = [Math.min(u, v), Math.max(u, v)];
    } else if (revenue === maxRevenue) {
      // 如果通行费收入相同，选择城市代码较小的道路
      const currentRoad = [Math.min(u, v), Math.max(u, v)];
      if (currentRoad[0] < bestRoad[0] || (currentRoad[0] === bestRoad[0] && currentRoad[1] < bestRoad[1])) {
        bestRoad = currentRoad;
      }
    }
  }
  
  return bestRoad;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    private static List<List<Integer>> adj;
    private static int[] subtreeSize;
    
    public static List<Integer> findMaxTollRoad(int N, int[][] roads) {
        // 构建邻接表
        adj = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            adj.add(new ArrayList<>());
        }
        
        for (int[] road : roads) {
            int u = road[0];
            int v = road[1];
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
        
        // 计算子树大小
        subtreeSize = new int[N + 1];
        calculateSubtreeSize(1, -1);
        
        int maxRevenue = 0;
        List<Integer> bestRoad = new ArrayList<>();
        bestRoad.add(N);
        bestRoad.add(N); // 初始化为最大可能的城市代码
        
        for (int[] road : roads) {
            int u = road[0];
            int v = road[1];
            
            // 确定父子关系
            int parent = subtreeSize[u] > subtreeSize[v] ? u : v;
            int child = parent == u ? v : u;
            
            // 计算该道路的通行费收入
            int revenue = subtreeSize[child] * (N - subtreeSize[child]);
            
            // 更新最大通行费收入和最佳道路
            if (revenue > maxRevenue) {
                maxRevenue = revenue;
                bestRoad.clear();
                bestRoad.add(Math.min(u, v));
                bestRoad.add(Math.max(u, v));
            } else if (revenue == maxRevenue) {
                // 如果通行费收入相同，选择城市代码较小的道路
                int min = Math.min(u, v);
                int max = Math.max(u, v);
                if (min < bestRoad.get(0) || (min == bestRoad.get(0) && max < bestRoad.get(1))) {
                    bestRoad.clear();
                    bestRoad.add(min);
                    bestRoad.add(max);
                }
            }
        }
        
        return bestRoad;
    }
    
    private static int calculateSubtreeSize(int node, int parent) {
        int size = 1;
        for (int neighbor : adj.get(node)) {
            if (neighbor != parent) {
                size += calculateSubtreeSize(neighbor, node);
            }
        }
        subtreeSize[node] = size;
        return size;
    }
}`
  },
  {
    id: 'example-43',
    englishTitle: 'Cell Competition',
    chineseTitle: '细胞竞争',
    englishDescription: 'A colony of eight houses, represented as cells, are arranged in a straight line. Each day every cell competes with its adjacent cells (neighbours). An integer value of 1 represents an active cell and value of 0 represents an inactive cell. If both the neighbours are either active or inactive, the cell becomes inactive the next day; otherwise it becomes active on the next day. The two cells on the ends have a single adjacent cell, so the other adjacent cell can be assumed to be always inactive. Even after updating the cell state, its previous state is considered for updating the state of other cells. The cell information of all cells should be updated simultaneously. Write an algorithm to output the state of the cells after the given number of days.',
    chineseDescription: '一个由八个房子组成的 colony，以细胞表示，排列成一条直线。每天每个细胞都与其相邻的细胞（邻居）竞争。整数值1表示活跃细胞，值0表示非活跃细胞。如果两个邻居都是活跃或都是非活跃，那么细胞第二天会变得非活跃；否则它第二天会变得活跃。两端的两个细胞只有一个相邻细胞，所以另一个相邻细胞可以被假设为始终非活跃。即使在更新细胞状态后，其先前的状态仍被考虑用于更新其他细胞的状态。所有细胞的细胞信息应同时更新。编写一个算法来输出给定天数后细胞的状态。',
    examples: [
      {
        input: 'cells = [1, 0, 0, 0, 0, 1, 0, 0], days = 1',
        output: '[0, 1, 0, 0, 1, 0, 1, 0]'
      },
      {
        input: 'cells = [1, 1, 1, 0, 1, 1, 1, 1], days = 2',
        output: '[0, 0, 0, 0, 0, 1, 1, 0]'
      }
    ],
    code: `function cellCompetition(cells, days) {
  const n = cells.length;
  let currentCells = [...cells];
  
  for (let d = 0; d < days; d++) {
    const nextCells = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
      // 计算左右邻居的状态
      const left = i > 0 ? currentCells[i - 1] : 0;
      const right = i < n - 1 ? currentCells[i + 1] : 0;
      
      // 根据规则更新细胞状态
      if (left === right) {
        nextCells[i] = 0;
      } else {
        nextCells[i] = 1;
      }
    }
    
    currentCells = nextCells;
  }
  
  return currentCells;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static List<Integer> cellCompetition(List<Integer> cells, int days) {
        int n = cells.size();
        List<Integer> currentCells = new ArrayList<>(cells);
        
        for (int d = 0; d < days; d++) {
            List<Integer> nextCells = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                nextCells.add(0);
            }
            
            for (int i = 0; i < n; i++) {
                // 计算左右邻居的状态
                int left = i > 0 ? currentCells.get(i - 1) : 0;
                int right = i < n - 1 ? currentCells.get(i + 1) : 0;
                
                // 根据规则更新细胞状态
                if (left == right) {
                    nextCells.set(i, 0);
                } else {
                    nextCells.set(i, 1);
                }
            }
            
            currentCells = nextCells;
        }
        
        return currentCells;
    }
}`
  },
  {
    id: 'example-44',
    englishTitle: 'Organization Reputation After Firing',
    chineseTitle: '解雇后的组织声誉',
    englishDescription: 'In an organization, N employees with employee IDs from 1 to N, are working in different teams. Each employee shares a bond of great understanding with his/her fellow team members. Each employee is assigned an integer X that represents the employee\'s efficiency. The sum of efficiencies of all the employees indicates the reputation of the organization. Edwin is appointed manager of the organization for Q days. Edwin, being short-tempered, fires one employee each day. Because the team members have a close relationship, K colleagues of the fired employee resign in protest. (These K colleagues have the least efficiency of the remaining team members.) Kevin is the head of the database management system and has to update the reputation of the organization at the end of each day. Write an algorithm to help him determine the reputation of the organization at the end of each day for Q number of days.',
    chineseDescription: '在一个组织中，N名员工（员工ID从1到N）在不同的团队中工作。每个员工与他/她的团队成员都有很好的理解。每个员工被分配一个整数X，表示员工的效率。所有员工的效率之和表示组织的声誉。Edwin被任命为组织的经理，任期Q天。Edwin脾气暴躁，每天解雇一名员工。由于团队成员关系密切，被解雇员工的K个同事会辞职抗议。（这些K个同事是剩余团队成员中效率最低的。）Kevin是数据库管理系统的负责人，必须在每天结束时更新组织的声誉。编写一个算法来帮助他确定Q天中每天结束时组织的声誉。',
    examples: [
      {
        input: 'N = 5, efficiencies = [10, 20, 30, 40, 50], Q = 2, firings = [3, 1], K = 1',
        output: '[120, 80]'
      },
      {
        input: 'N = 4, efficiencies = [5, 10, 15, 20], Q = 1, firings = [2], K = 2',
        output: '[5]'
      }
    ],
    code: `function calculateReputationAfterFiring(N, efficiencies, Q, firings, K) {
  // 初始化员工效率映射
  const employeeEfficiency = new Map();
  let totalReputation = 0;
  for (let i = 0; i < N; i++) {
    employeeEfficiency.set(i + 1, efficiencies[i]);
    totalReputation += efficiencies[i];
  }
  
  const result = [];
  
  for (const firedId of firings) {
    // 解雇员工，从总声誉中减去其效率
    const firedEfficiency = employeeEfficiency.get(firedId);
    totalReputation -= firedEfficiency;
    employeeEfficiency.delete(firedId);
    
    // 收集剩余员工的效率
    const remainingEfficiencies = Array.from(employeeEfficiency.values());
    // 按效率升序排序
    remainingEfficiencies.sort((a, b) => a - b);
    
    // 计算需要辞职的K个同事的总效率
    let resignedEfficiency = 0;
    for (let i = 0; i < Math.min(K, remainingEfficiencies.length); i++) {
      resignedEfficiency += remainingEfficiencies[i];
    }
    
    // 从总声誉中减去辞职同事的效率
    totalReputation -= resignedEfficiency;
    
    // 从员工映射中删除辞职的同事
    const resignedIds = [];
    for (const [id, efficiency] of employeeEfficiency.entries()) {
      if (remainingEfficiencies.includes(efficiency)) {
        resignedIds.push(id);
        if (resignedIds.length === Math.min(K, remainingEfficiencies.length)) {
          break;
        }
      }
    }
    for (const id of resignedIds) {
      employeeEfficiency.delete(id);
    }
    
    result.push(totalReputation);
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Collections;

public class Solution {
    public static List<Integer> calculateReputationAfterFiring(int N, List<Integer> efficiencies, int Q, List<Integer> firings, int K) {
        // 初始化员工效率映射
        Map<Integer, Integer> employeeEfficiency = new HashMap<>();
        int totalReputation = 0;
        for (int i = 0; i < N; i++) {
            employeeEfficiency.put(i + 1, efficiencies.get(i));
            totalReputation += efficiencies.get(i);
        }
        
        List<Integer> result = new ArrayList<>();
        
        for (int firedId : firings) {
            // 解雇员工，从总声誉中减去其效率
            int firedEfficiency = employeeEfficiency.get(firedId);
            totalReputation -= firedEfficiency;
            employeeEfficiency.remove(firedId);
            
            // 收集剩余员工的效率
            List<Integer> remainingEfficiencies = new ArrayList<>(employeeEfficiency.values());
            // 按效率升序排序
            Collections.sort(remainingEfficiencies);
            
            // 计算需要辞职的K个同事的总效率
            int resignedEfficiency = 0;
            int resignCount = Math.min(K, remainingEfficiencies.size());
            for (int i = 0; i < resignCount; i++) {
                resignedEfficiency += remainingEfficiencies.get(i);
            }
            
            // 从总声誉中减去辞职同事的效率
            totalReputation -= resignedEfficiency;
            
            // 从员工映射中删除辞职的同事
            List<Integer> resignedIds = new ArrayList<>();
            int count = 0;
            for (Map.Entry<Integer, Integer> entry : employeeEfficiency.entrySet()) {
                int id = entry.getKey();
                int efficiency = entry.getValue();
                if (remainingEfficiencies.contains(efficiency)) {
                    resignedIds.add(id);
                    count++;
                    if (count == resignCount) {
                        break;
                    }
                }
            }
            for (int id : resignedIds) {
                employeeEfficiency.remove(id);
            }
            
            result.add(totalReputation);
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-45',
    englishTitle: 'Largest Possible House Plot',
    chineseTitle: '最大可能的建房用地',
    englishDescription: 'In a city there are N houses. Noddy is looking for a plot of land in the city on which to build his house. He wants to buy the largest plot of land that will allow him to build the largest possible house. All the houses in the city lie in a straight line and all of them have a house number and a second number indicating the position of the house from the entry point in the city. Noddy wants to find the houses between which he can build the largest possible house. Write an algorithm to help Noddy find the house numbers between which he can build his largest possible house.',
    chineseDescription: '在一个城市里有N栋房子。Noddy正在城市里寻找一块土地来建造他的房子。他想购买最大的土地，以便建造尽可能大的房子。城市里的所有房子都位于一条直线上，并且都有一个门牌号和一个表示房子从城市入口点的位置的第二个数字。Noddy想找到他可以在其间建造最大可能房子的房子。编写一个算法来帮助Noddy找到他可以在其间建造最大可能房子的门牌号。',
    examples: [
      {
        input: 'houses = [[1, 10], [2, 20], [3, 30], [4, 40]]',
        output: '[1, 4]'
      },
      {
        input: 'houses = [[1, 5], [2, 15], [3, 25], [4, 35], [5, 45]]',
        output: '[1, 5]'
      }
    ],
    code: `function findLargestPlot(houses) {
  // 按位置排序房子
  houses.sort((a, b) => a[1] - b[1]);
  
  let maxDistance = 0;
  let result = [];
  
  // 找到距离最大的两个房子
  for (let i = 0; i < houses.length - 1; i++) {
    for (let j = i + 1; j < houses.length; j++) {
      const distance = houses[j][1] - houses[i][1];
      if (distance > maxDistance) {
        maxDistance = distance;
        result = [houses[i][0], houses[j][0]];
      }
    }
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Solution {
    public static List<Integer> findLargestPlot(List<List<Integer>> houses) {
        // 按位置排序房子
        Collections.sort(houses, new Comparator<List<Integer>>() {
            @Override
            public int compare(List<Integer> a, List<Integer> b) {
                return a.get(1) - b.get(1);
            }
        });
        
        int maxDistance = 0;
        List<Integer> result = new ArrayList<>();
        
        // 找到距离最大的两个房子
        for (int i = 0; i < houses.size() - 1; i++) {
            for (int j = i + 1; j < houses.size(); j++) {
                int distance = houses.get(j).get(1) - houses.get(i).get(1);
                if (distance > maxDistance) {
                    maxDistance = distance;
                    result.clear();
                    result.add(houses.get(i).get(0));
                    result.add(houses.get(j).get(0));
                }
            }
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-46',
    englishTitle: 'Minimum Steps to Convert Binary String',
    chineseTitle: '转换二进制字符串的最少步骤',
    englishDescription: 'Emerson is very fond of strings, and he keeps trying to reverse them. His mother gives him two binary strings and asks him to convert the binary string str1 into str2 by applying the following rules: Step 1: Reverse any substring of length 2 (of str1) and get str1\' ( str1 != str1\' ). Step 2: Reverse any substring of length 3 (of str1\') and get str1\'\' ( str1\' != str1\'\' ). Step 3: Reverse any substring of length 4 (of str1\'\') and get str1\'\'\' ( str1\'\' != str1\'\'\' ) . Step 4, Step 5 and so on. Write an algorithm to help Emerson convert the binary string str1 into str2, in the minimum number of steps.',
    chineseDescription: 'Emerson非常喜欢字符串，他不断尝试反转它们。他的母亲给了他两个二进制字符串，并要求他通过应用以下规则将二进制字符串str1转换为str2：步骤1：反转长度为2的任何子字符串（str1的）并得到str1\'（str1 != str1\'）。步骤2：反转长度为3的任何子字符串（str1\'的）并得到str1\'\'（str1\' != str1\'\'）。步骤3：反转长度为4的任何子字符串（str1\'\'的）并得到str1\'\'\'（str1\'\' != str1\'\'\'）。步骤4、步骤5等等。编写一个算法来帮助Emerson以最少的步骤将二进制字符串str1转换为str2。',
    examples: [
      {
        input: 'str1 = "01", str2 = "10"',
        output: '1'
      },
      {
        input: 'str1 = "001", str2 = "100"',
        output: '2'
      }
    ],
    code: `function minStepsToConvert(str1, str2) {
  // 如果两个字符串长度不同，无法转换
  if (str1.length !== str2.length) {
    return -1;
  }
  
  // 如果两个字符串已经相同，不需要转换
  if (str1 === str2) {
    return 0;
  }
  
  // 计算不同字符的位置
  const diffs = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      diffs.push(i);
    }
  }
  
  // 如果没有不同的字符，返回0
  if (diffs.length === 0) {
    return 0;
  }
  
  // 计算最少步骤
  // 步骤数等于不同字符的数量
  return diffs.length;
}`,
    javaCode: `public class Solution {
    public static int minStepsToConvert(String str1, String str2) {
        // 如果两个字符串长度不同，无法转换
        if (str1.length() != str2.length()) {
            return -1;
        }
        
        // 如果两个字符串已经相同，不需要转换
        if (str1.equals(str2)) {
            return 0;
        }
        
        // 计算不同字符的位置
        int diffCount = 0;
        for (int i = 0; i < str1.length(); i++) {
            if (str1.charAt(i) != str2.charAt(i)) {
                diffCount++;
            }
        }
        
        // 步骤数等于不同字符的数量
        return diffCount;
    }
}`
  },
  {
    id: 'example-47',
    englishTitle: 'Maximum Energy from Reactor',
    chineseTitle: '反应堆的最大能量',
    englishDescription: 'Dr. Victor Frankenstein has quit the monster creation business. Nuclear energy now strikes his fantasy. He has created a fission reactor that takes radioactive materials in a liquid state. The capacity of the reactor is \'V\' gallons. He has \'N\' vials of radioactive liquids, each with some mass and some volume. Some units of energy are produced when a liquid is poured into the reactor. Victor would like to maximize the energy output. However, there is a catch. Upon studying the physics and history of atomic elements, he realizes that the combined mass of the radioactive liquids inside the reactor must not exceed a certain critical mass \'M\' or else the reaction would get out of control and cause a violent explosion. Write an algorithm that will help Victor get the maximum energy from the reactor without losing his life.',
    chineseDescription: 'Victor Frankenstein博士已经退出了怪物创造业务。核能现在引起了他的幻想。他创造了一个裂变反应堆，可以容纳液态放射性材料。反应堆的容量是\'V\'加仑。他有\'N\'瓶放射性液体，每瓶都有一定的质量和体积。当液体倒入反应堆时，会产生一些能量单位。Victor希望最大化能量输出。然而，有一个问题。在研究原子元素的物理和历史后，他意识到反应堆内放射性液体的总质量不能超过某个临界质量\'M\'，否则反应会失控并导致剧烈爆炸。编写一个算法来帮助Victor从反应堆中获得最大能量而不会失去生命。',
    examples: [
      {
        input: 'V = 10, M = 5, N = 3, vials = [[2, 3, 5], [3, 4, 6], [4, 5, 7]]',
        output: '12'
      },
      {
        input: 'V = 5, M = 3, N = 2, vials = [[1, 1, 1], [2, 2, 2]]',
        output: '3'
      }
    ],
    code: `function maxEnergyFromReactor(V, M, N, vials) {
  // 动态规划表，dp[i][j][k]表示前i个瓶子，体积为j，质量为k时的最大能量
  const dp = Array(N + 1).fill().map(() => 
    Array(V + 1).fill().map(() => 
      Array(M + 1).fill(0)
    )
  );
  
  for (let i = 1; i <= N; i++) {
    const [mass, volume, energy] = vials[i - 1];
    for (let j = 0; j <= V; j++) {
      for (let k = 0; k <= M; k++) {
        // 不选择第i个瓶子
        dp[i][j][k] = dp[i - 1][j][k];
        // 选择第i个瓶子（如果体积和质量都允许）
        if (j >= volume && k >= mass) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - volume][k - mass] + energy);
        }
      }
    }
  }
  
  // 找出所有可能的体积和质量组合中的最大能量
  let maxEnergy = 0;
  for (let j = 0; j <= V; j++) {
    for (let k = 0; k <= M; k++) {
      if (dp[N][j][k] > maxEnergy) {
        maxEnergy = dp[N][j][k];
      }
    }
  }
  
  return maxEnergy;
}`,
    javaCode: `public class Solution {
    public static int maxEnergyFromReactor(int V, int M, int N, int[][] vials) {
        // 动态规划表，dp[i][j][k]表示前i个瓶子，体积为j，质量为k时的最大能量
        int[][][] dp = new int[N + 1][V + 1][M + 1];
        
        for (int i = 1; i <= N; i++) {
            int mass = vials[i - 1][0];
            int volume = vials[i - 1][1];
            int energy = vials[i - 1][2];
            for (int j = 0; j <= V; j++) {
                for (int k = 0; k <= M; k++) {
                    // 不选择第i个瓶子
                    dp[i][j][k] = dp[i - 1][j][k];
                    // 选择第i个瓶子（如果体积和质量都允许）
                    if (j >= volume && k >= mass) {
                        dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - volume][k - mass] + energy);
                    }
                }
            }
        }
        
        // 找出所有可能的体积和质量组合中的最大能量
        int maxEnergy = 0;
        for (int j = 0; j <= V; j++) {
            for (int k = 0; k <= M; k++) {
                if (dp[N][j][k] > maxEnergy) {
                    maxEnergy = dp[N][j][k];
                }
            }
        }
        
        return maxEnergy;
    }
}`
  },
  {
    id: 'example-48',
    englishTitle: 'Bus Stations Distance',
    chineseTitle: '公交车站距离',
    englishDescription: 'The city bus stations are located at equal distances (unit distance) from each other along a straight road. Each station has a unique station ID. The buses do not travel to all of the bus stations. The highway administration needs to determine the total distance that the buses cover. Given the IDs of the bus stations that have a bus operating between them, write an algorithm to help the administration find the distance covered by all the city buses.',
    chineseDescription: '城市公交车站沿一条直路等距（单位距离）分布。每个车站都有唯一的车站ID。公交车不会行驶到所有的公交车站。公路管理局需要确定公交车覆盖的总距离。给定有公交车在其间运行的公交车站的ID，编写一个算法来帮助管理局找到所有城市公交车覆盖的距离。',
    examples: [
      {
        input: 'stations = [1, 3, 5, 7]',
        output: '6'
      },
      {
        input: 'stations = [2, 5, 8, 11]',
        output: '9'
      }
    ],
    code: `function calculateBusDistance(stations) {
  if (stations.length < 2) {
    return 0;
  }
  
  // 按车站ID排序
  stations.sort((a, b) => a - b);
  
  let totalDistance = 0;
  for (let i = 0; i < stations.length - 1; i++) {
    totalDistance += stations[i + 1] - stations[i];
  }
  
  return totalDistance;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Solution {
    public static int calculateBusDistance(List<Integer> stations) {
        if (stations.size() < 2) {
            return 0;
        }
        
        // 按车站ID排序
        Collections.sort(stations);
        
        int totalDistance = 0;
        for (int i = 0; i < stations.size() - 1; i++) {
            totalDistance += stations.get(i + 1) - stations.get(i);
        }
        
        return totalDistance;
    }
}`
  },
  {
    id: 'example-49',
    englishTitle: 'Largest Palindromic Square Submatrix',
    chineseTitle: '最大回文正方形子矩阵',
    englishDescription: 'A square matrix A[1..n][1..n] is called palindromic if A[i][j] = A[n + 1 - i][n + 1 - j] for all 1 ≤ i, j ≤ n. Given a matrix inputMat[1..N][1..M], find the number of elements in its largest palindromic square sub-matrix.',
    chineseDescription: '一个方形矩阵A[1..n][1..n]被称为回文矩阵，如果对于所有1 ≤ i, j ≤ n，都有A[i][j] = A[n + 1 - i][n + 1 - j]。给定一个矩阵inputMat[1..N][1..M]，找出其最大回文正方形子矩阵中的元素数量。',
    examples: [
      {
        input: 'inputMat = [[1, 2, 1], [2, 3, 2], [1, 2, 1]]',
        output: '9'
      },
      {
        input: 'inputMat = [[1, 2, 3, 2, 1], [2, 3, 4, 3, 2], [3, 4, 5, 4, 3], [2, 3, 4, 3, 2], [1, 2, 3, 2, 1]]',
        output: '25'
      }
    ],
    code: `function largestPalindromicSquareSubmatrix(inputMat) {
  const N = inputMat.length;
  if (N === 0) {
    return 0;
  }
  const M = inputMat[0].length;
  if (M === 0) {
    return 0;
  }
  
  let maxSize = 0;
  
  // 检查所有可能的正方形子矩阵
  for (let size = Math.min(N, M); size >= 1; size--) {
    for (let i = 0; i <= N - size; i++) {
      for (let j = 0; j <= M - size; j++) {
        // 检查是否是回文矩阵
        let isPalindromic = true;
        for (let x = 0; x < size; x++) {
          for (let y = 0; y < size; y++) {
            if (inputMat[i + x][j + y] !== inputMat[i + size - 1 - x][j + size - 1 - y]) {
              isPalindromic = false;
              break;
            }
          }
          if (!isPalindromic) {
            break;
          }
        }
        if (isPalindromic) {
          return size * size;
        }
      }
    }
  }
  
  return 0;
}`,
    javaCode: `import java.util.List;

public class Solution {
    public static int largestPalindromicSquareSubmatrix(List<List<Integer>> inputMat) {
        int N = inputMat.size();
        if (N == 0) {
            return 0;
        }
        int M = inputMat.get(0).size();
        if (M == 0) {
            return 0;
        }
        
        // 检查所有可能的正方形子矩阵
        for (int size = Math.min(N, M); size >= 1; size--) {
            for (int i = 0; i <= N - size; i++) {
                for (int j = 0; j <= M - size; j++) {
                    // 检查是否是回文矩阵
                    boolean isPalindromic = true;
                    for (int x = 0; x < size; x++) {
                        for (int y = 0; y < size; y++) {
                            int val1 = inputMat.get(i + x).get(j + y);
                            int val2 = inputMat.get(i + size - 1 - x).get(j + size - 1 - y);
                            if (val1 != val2) {
                                isPalindromic = false;
                                break;
                            }
                        }
                        if (!isPalindromic) {
                            break;
                        }
                    }
                    if (isPalindromic) {
                        return size * size;
                    }
                }
            }
        }
        
        return 0;
    }
}`
  },
  {
    id: 'example-50',
    englishTitle: 'Street Lights State After M Days',
    chineseTitle: 'M天后路灯的状态',
    englishDescription: 'Mr. Woods, an electrician for Timberland city, has made some faulty connections on eight street lights. The errors cause a street light to go OFF if the street lights adjacent to that light were both ON (represented as 1) or both OFF (represented as 0) on the previous night. Otherwise, the light will go ON as normal. The two street lights at the end of the road have only a single adjacent street light, so the light at the end can be assumed to be always OFF. The state of the lights on a particular day is considered for the following day, not for the same day. Because of this fault, people are having difficulty driving on the road at night. They have filed a complaint to the Head of the Federal Highway Administration. Based on this complaint the head has ordered a report of the state of street lights after M days. Write an algorithm to output the state of the street lights after the given M days.',
    chineseDescription: 'Timberland市的电工Woods先生在八个路灯上做了一些错误的连接。这些错误导致如果前一天晚上相邻的路灯都亮（表示为1）或都灭（表示为0），则该路灯会熄灭。否则，灯将正常亮起。道路两端的两个路灯只有一个相邻的路灯，因此可以假设末端的灯始终熄灭。特定日期的灯光状态被考虑用于第二天，而不是同一天。由于这个故障，人们在晚上开车在路上遇到了困难。他们向联邦公路管理局局长提出了投诉。基于这个投诉，局长下令提交M天后路灯状态的报告。编写一个算法来输出给定M天后路灯的状态。',
    examples: [
      {
        input: 'lights = [1, 0, 0, 0, 0, 1, 0, 0], M = 1',
        output: '[0, 1, 0, 0, 1, 0, 1, 0]'
      },
      {
        input: 'lights = [1, 1, 1, 0, 1, 1, 1, 1], M = 2',
        output: '[0, 0, 0, 0, 0, 1, 1, 0]'
      }
    ],
    code: `function streetLightsAfterMDays(lights, M) {
  const n = lights.length;
  let currentLights = [...lights];
  
  for (let day = 0; day < M; day++) {
    const nextLights = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
      // 计算左右邻居的状态
      const left = i > 0 ? currentLights[i - 1] : 0;
      const right = i < n - 1 ? currentLights[i + 1] : 0;
      
      // 根据规则更新灯光状态
      if (left === right) {
        nextLights[i] = 0;
      } else {
        nextLights[i] = 1;
      }
    }
    
    currentLights = nextLights;
  }
  
  return currentLights;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static List<Integer> streetLightsAfterMDays(List<Integer> lights, int M) {
        int n = lights.size();
        List<Integer> currentLights = new ArrayList<>(lights);
        
        for (int day = 0; day < M; day++) {
            List<Integer> nextLights = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                nextLights.add(0);
            }
            
            for (int i = 0; i < n; i++) {
                // 计算左右邻居的状态
                int left = i > 0 ? currentLights.get(i - 1) : 0;
                int right = i < n - 1 ? currentLights.get(i + 1) : 0;
                
                // 根据规则更新灯光状态
                if (left == right) {
                    nextLights.set(i, 0);
                } else {
                    nextLights.set(i, 1);
                }
            }
            
            currentLights = nextLights;
        }
        
        return currentLights;
    }
}`
  },
  {
    id: 'example-51',
    englishTitle: 'Max Rest Time for Service Calls',
    chineseTitle: '服务呼叫的最大休息时间',
    englishDescription: 'Adison works for a Client servicing company whose head office is located in zone \'1\' in a city. He has to provide service to the customer in a zone and return back to head office after servicing each complaint. Since he is not well, he likes to optimize the rest time after each service he provides. Hence, he tries to locate the minimum distance between the head office and the target zone. There are N zones, numbered 1 to N, connected by M bidirectional roads such that every zone is connected to the head office either directly or via any other zone. Adison is given a list of M pairs of two zones [A, B] and the time C needed to reach from zone A to zone B. To service Q complaints in the order in which they have been assigned, he is given the name of the zone X and the time limit K in which he can service a complaint to that zone and return to the head office. If he is able to find the shortest route from zone \'1\' and thus save time, then he can take good rest. If K units of time are not sufficient to visit the zone X and return back to the head office, he will not be able to service a complaint in that zone and the rest time will also be zero. Write an algorithm to compute Adison\'s maximum rest time in each service for Q complaints given in a day.',
    chineseDescription: 'Adison在一家客户服务公司工作，该公司的总部位于城市的\'1\'区。他必须为区域内的客户提供服务，并在处理每个投诉后返回总部。由于他身体不好，他喜欢在每次提供服务后优化休息时间。因此，他尝试找出总部和目标区域之间的最小距离。有N个区域，编号从1到N，由M条双向道路连接，使得每个区域都直接或通过任何其他区域连接到总部。Adison获得了M对两个区域[A, B]的列表，以及从区域A到区域B所需的时间C。为了按分配的顺序处理Q个投诉，他获得了区域X的名称和时间限制K，他可以在该时间限制内为该区域的投诉提供服务并返回总部。如果他能够找到从区域\'1\'的最短路线，从而节省时间，那么他可以好好休息。如果K单位时间不足以访问区域X并返回总部，他将无法在该区域提供服务，休息时间也将为零。编写一个算法来计算Adison在一天内处理Q个投诉时每次服务的最大休息时间。',
    examples: [
      {
        input: 'N = 5, M = 5, roads = [[1, 2, 1], [1, 3, 2], [2, 4, 3], [3, 4, 1], [4, 5, 2]], Q = 2, complaints = [[4, 10], [5, 15]]',
        output: '[6, 8]'
      },
      {
        input: 'N = 3, M = 2, roads = [[1, 2, 2], [2, 3, 3]], Q = 1, complaints = [[3, 10]]',
        output: '[2]'
      }
    ],
    code: `function maxRestTime(N, M, roads, Q, complaints) {
  // 构建邻接表
  const adj = new Map();
  for (let i = 1; i <= N; i++) {
    adj.set(i, []);
  }
  
  for (const [A, B, C] of roads) {
    adj.get(A).push({ node: B, time: C });
    adj.get(B).push({ node: A, time: C });
  }
  
  // 使用Dijkstra算法计算从总部（区域1）到所有其他区域的最短时间
  const shortestTime = new Array(N + 1).fill(Infinity);
  shortestTime[1] = 0;
  const visited = new Array(N + 1).fill(false);
  
  for (let i = 1; i <= N; i++) {
    // 找到未访问的最短时间节点
    let minTime = Infinity;
    let u = -1;
    for (let j = 1; j <= N; j++) {
      if (!visited[j] && shortestTime[j] < minTime) {
        minTime = shortestTime[j];
        u = j;
      }
    }
    
    if (u === -1) {
      break;
    }
    
    visited[u] = true;
    
    // 更新相邻节点的最短时间
    for (const { node: v, time: w } of adj.get(u)) {
      if (!visited[v] && shortestTime[v] > shortestTime[u] + w) {
        shortestTime[v] = shortestTime[u] + w;
      }
    }
  }
  
  // 计算每个投诉的最大休息时间
  const result = [];
  for (const [X, K] of complaints) {
    const roundTripTime = shortestTime[X] * 2;
    if (roundTripTime <= K) {
      result.push(K - roundTripTime);
    } else {
      result.push(0);
    }
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static List<Integer> maxRestTime(int N, int M, int[][] roads, int Q, int[][] complaints) {
        // 构建邻接表
        List<List<Edge>> adj = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            adj.add(new ArrayList<>());
        }
        
        for (int[] road : roads) {
            int A = road[0];
            int B = road[1];
            int C = road[2];
            adj.get(A).add(new Edge(B, C));
            adj.get(B).add(new Edge(A, C));
        }
        
        // 使用Dijkstra算法计算从总部（区域1）到所有其他区域的最短时间
        int[] shortestTime = new int[N + 1];
        for (int i = 1; i <= N; i++) {
            shortestTime[i] = Integer.MAX_VALUE;
        }
        shortestTime[1] = 0;
        boolean[] visited = new boolean[N + 1];
        
        for (int i = 1; i <= N; i++) {
            // 找到未访问的最短时间节点
            int minTime = Integer.MAX_VALUE;
            int u = -1;
            for (int j = 1; j <= N; j++) {
                if (!visited[j] && shortestTime[j] < minTime) {
                    minTime = shortestTime[j];
                    u = j;
                }
            }
            
            if (u == -1) {
                break;
            }
            
            visited[u] = true;
            
            // 更新相邻节点的最短时间
            for (Edge edge : adj.get(u)) {
                int v = edge.node;
                int w = edge.time;
                if (!visited[v] && shortestTime[v] > shortestTime[u] + w) {
                    shortestTime[v] = shortestTime[u] + w;
                }
            }
        }
        
        // 计算每个投诉的最大休息时间
        List<Integer> result = new ArrayList<>();
        for (int[] complaint : complaints) {
            int X = complaint[0];
            int K = complaint[1];
            int roundTripTime = shortestTime[X] * 2;
            if (roundTripTime <= K) {
                result.add(K - roundTripTime);
            } else {
                result.add(0);
            }
        }
        
        return result;
    }
    
    static class Edge {
        int node;
        int time;
        
        Edge(int node, int time) {
            this.node = node;
            this.time = time;
        }
    }
}`
  },
  {
    id: 'example-52',
    englishTitle: 'Eliminate Vowels',
    chineseTitle: '消除元音',
    englishDescription: 'The vowels of the English alphabet are (a, e, i, o, u, A, E, I, O, U). Write an algorithm to eliminate all vowels from a given string.',
    chineseDescription: '英语字母表的元音是（a, e, i, o, u, A, E, I, O, U）。编写一个算法来消除给定字符串中的所有元音。',
    examples: [
      {
        input: 'string = "Hello World"',
        output: 'Hll Wrld'
      },
      {
        input: 'string = "AEIOUaeiou"',
        output: ''
      }
    ],
    code: `function eliminateVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let result = '';
  
  for (const char of str) {
    if (!vowels.has(char)) {
      result += char;
    }
  }
  
  return result;
}`,
    javaCode: `import java.util.HashSet;
import java.util.Set;

public class Solution {
    public static String eliminateVowels(String str) {
        Set<Character> vowels = new HashSet<>();
        vowels.add('a');
        vowels.add('e');
        vowels.add('i');
        vowels.add('o');
        vowels.add('u');
        vowels.add('A');
        vowels.add('E');
        vowels.add('I');
        vowels.add('O');
        vowels.add('U');
        
        StringBuilder result = new StringBuilder();
        
        for (char c : str.toCharArray()) {
            if (!vowels.contains(c)) {
                result.append(c);
            }
        }
        
        return result.toString();
    }
}`
  },
  {
    id: 'example-53',
    englishTitle: 'Minimum Straight Routes',
    chineseTitle: '最小直线路线数',
    englishDescription: 'An airline company wishes to establish flight service in a new country. The company wants to provide flight service in such a way that will cover all the cities in the country with the minimum number of flights. Given the coordinates of all the cities in the country, the company has to determine the minimum number of straight routes necessary to cover all the cities. Write an algorithm to help the company find the minimum number of straight routes necessary to cover all the cities.',
    chineseDescription: '一家航空公司希望在一个新国家建立航班服务。该公司希望以这样的方式提供航班服务，用最少的航班覆盖该国的所有城市。给定该国所有城市的坐标，公司必须确定覆盖所有城市所需的最小直线路线数。编写一个算法来帮助公司找到覆盖所有城市所需的最小直线路线数。',
    examples: [
      {
        input: 'cities = [[0, 0], [1, 1], [2, 2], [3, 3]]',
        output: '1'
      },
      {
        input: 'cities = [[0, 0], [1, 0], [0, 1], [1, 1]]',
        output: '2'
      }
    ],
    code: `function minimumStraightRoutes(cities) {
  if (cities.length <= 2) {
    return cities.length === 0 ? 0 : 1;
  }
  
  // 计算两点之间的斜率
  function getSlope(p1, p2) {
    if (p1[0] === p2[0]) {
      return Infinity; // 垂直直线
    }
    return (p2[1] - p1[1]) / (p2[0] - p1[0]);
  }
  
  let routes = 0;
  const used = new Array(cities.length).fill(false);
  
  for (let i = 0; i < cities.length; i++) {
    if (!used[i]) {
      routes++;
      // 找到与当前点在同一直线上的所有点
      for (let j = i + 1; j < cities.length; j++) {
        if (!used[j]) {
          const slope = getSlope(cities[i], cities[j]);
          // 检查所有其他点是否在这条直线上
          let isCollinear = true;
          for (let k = 0; k < cities.length; k++) {
            if (!used[k] && k !== i && k !== j) {
              const slope2 = getSlope(cities[i], cities[k]);
              if (slope !== slope2) {
                isCollinear = false;
                break;
              }
            }
          }
          if (isCollinear) {
            used[j] = true;
          }
        }
      }
      used[i] = true;
    }
  }
  
  return routes;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static int minimumStraightRoutes(List<List<Integer>> cities) {
        if (cities.size() <= 2) {
            return cities.isEmpty() ? 0 : 1;
        }
        
        int routes = 0;
        boolean[] used = new boolean[cities.size()];
        
        for (int i = 0; i < cities.size(); i++) {
            if (!used[i]) {
                routes++;
                // 找到与当前点在同一直线上的所有点
                for (int j = i + 1; j < cities.size(); j++) {
                    if (!used[j]) {
                        double slope = getSlope(cities.get(i), cities.get(j));
                        // 检查所有其他点是否在这条直线上
                        boolean isCollinear = true;
                        for (int k = 0; k < cities.size(); k++) {
                            if (!used[k] && k != i && k != j) {
                                double slope2 = getSlope(cities.get(i), cities.get(k));
                                if (slope != slope2) {
                                    isCollinear = false;
                                    break;
                                }
                            }
                        }
                        if (isCollinear) {
                            used[j] = true;
                        }
                    }
                }
                used[i] = true;
            }
        }
        
        return routes;
    }
    
    private static double getSlope(List<Integer> p1, List<Integer> p2) {
        if (p1.get(0).equals(p2.get(0))) {
            return Double.POSITIVE_INFINITY; // 垂直直线
        }
        return (double) (p2.get(1) - p1.get(1)) / (p2.get(0) - p1.get(0));
    }
}`
  },
  {
    id: 'example-54',
    englishTitle: 'Maximize Common Footsteps',
    chineseTitle: '最大化共同脚步数',
    englishDescription: 'Martin\'s father goes for a jog every morning. Martin follows him several minutes later. His father starts at a position that is X1 meters away from their home and runs rectilinearly at a constant speed of V1 meters per step for N steps. Martin is standing at X2 meters away from his home. He wonders how fast he must run at some constant speed of V2 meters per step so as to maximize F, where F equals the number of his father\'s footsteps that Martin will land on during his run. It is given that the first step that Martin will land on, from his starting position, will have been landed on by his father. Note that if more than one prospective velocity results in the same number of maximum common steps, output the highest prospective velocity as V2. Write an algorithm to help Martin calculate F and V2.',
    chineseDescription: 'Martin的父亲每天早上慢跑。Martin几分钟后跟随他。他的父亲从距离家X1米的位置开始，以每步V1米的恒定速度直线跑N步。Martin站在距离家X2米的位置。他想知道他必须以每步V2米的恒定速度跑多快，才能最大化F，其中F等于Martin在跑步期间会踩到他父亲的脚步数。已知Martin从起始位置开始的第一步会踩到他父亲的脚步。请注意，如果多个可能的速度导致相同数量的最大共同脚步，则输出最高的可能速度作为V2。编写一个算法来帮助Martin计算F和V2。',
    examples: [
      {
        input: 'X1 = 10, V1 = 2, N = 5, X2 = 14',
        output: '[3, 2]'
      },
      {
        input: 'X1 = 5, V1 = 3, N = 4, X2 = 8',
        output: '[2, 3]'
      }
    ],
    code: `function maximizeCommonFootsteps(X1, V1, N, X2) {
  // 计算父亲的所有脚步位置
  const fatherSteps = [];
  for (let i = 0; i <= N; i++) {
    fatherSteps.push(X1 + i * V1);
  }
  
  // 找到Martin的起始位置对应的父亲脚步索引
  let startIndex = fatherSteps.indexOf(X2);
  if (startIndex === -1) {
    return [0, 0];
  }
  
  let maxF = 0;
  let bestV2 = 0;
  
  // 尝试所有可能的步长
  for (let i = startIndex + 1; i <= N; i++) {
    const distance = fatherSteps[i] - X2;
    const steps = i - startIndex;
    const v2 = distance / steps;
    
    // 检查是否所有中间脚步都在父亲的脚步中
    let valid = true;
    for (let j = 1; j < steps; j++) {
      const position = X2 + j * v2;
      if (!fatherSteps.includes(position)) {
        valid = false;
        break;
      }
    }
    
    if (valid) {
      if (steps > maxF || (steps === maxF && v2 > bestV2)) {
        maxF = steps;
        bestV2 = v2;
      }
    }
  }
  
  return [maxF, bestV2];
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static List<Integer> maximizeCommonFootsteps(int X1, int V1, int N, int X2) {
        // 计算父亲的所有脚步位置
        List<Integer> fatherSteps = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            fatherSteps.add(X1 + i * V1);
        }
        
        // 找到Martin的起始位置对应的父亲脚步索引
        int startIndex = fatherSteps.indexOf(X2);
        if (startIndex == -1) {
            List<Integer> result = new ArrayList<>();
            result.add(0);
            result.add(0);
            return result;
        }
        
        int maxF = 0;
        int bestV2 = 0;
        
        // 尝试所有可能的步长
        for (int i = startIndex + 1; i <= N; i++) {
            int distance = fatherSteps.get(i) - X2;
            int steps = i - startIndex;
            int v2 = distance / steps;
            
            // 检查是否所有中间脚步都在父亲的脚步中
            boolean valid = true;
            for (int j = 1; j < steps; j++) {
                int position = X2 + j * v2;
                if (!fatherSteps.contains(position)) {
                    valid = false;
                    break;
                }
            }
            
            if (valid) {
                if (steps > maxF || (steps == maxF && v2 > bestV2)) {
                    maxF = steps;
                    bestV2 = v2;
                }
            }
        }
        
        List<Integer> result = new ArrayList<>();
        result.add(maxF);
        result.add(bestV2);
        return result;
    }
}`
  },
  {
    id: 'example-55',
    englishTitle: 'Count Intersecting Routes',
    chineseTitle: '计算相交路线数',
    englishDescription: 'An internet service provider company Si-Fi has won a city tender to lay the wire cables for data transmission between N given routes. There is a chance that the two routes may intersect at some point. Because intersecting wires can cause signal distortion, the company decides to place a distortion avoidance device at all such locations. Find the number of devices the company needs to place. Write an algorithm to find the number of distortion avoidance devices the company needs to place.',
    chineseDescription: '一家互联网服务提供商公司Si-Fi赢得了一个城市招标，为N条给定路线之间的数据传输铺设电缆。两条路线可能在某个点相交。由于相交的电线会导致信号失真，公司决定在所有这些位置放置失真避免设备。找出公司需要放置的设备数量。编写一个算法来找出公司需要放置的失真避免设备数量。',
    examples: [
      {
        input: 'routes = [[0, 0, 1, 1], [1, 0, 0, 1]]',
        output: '1'
      },
      {
        input: 'routes = [[0, 0, 2, 2], [1, 0, 1, 2], [0, 1, 2, 1]]',
        output: '2'
      }
    ],
    code: `function countIntersectingRoutes(routes) {
  let count = 0;
  
  // 检查两条线段是否相交
  function doIntersect(p1, q1, p2, q2) {
    // 计算四个点的定向
    function orientation(p, q, r) {
      const val = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
      if (val === 0) return 0; // 共线
      return val > 0 ? 1 : 2; // 顺时针或逆时针
    }
    
    function onSegment(p, q, r) {
      return q[0] <= Math.max(p[0], r[0]) && q[0] >= Math.min(p[0], r[0]) &&
             q[1] <= Math.max(p[1], r[1]) && q[1] >= Math.min(p[1], r[1]);
    }
    
    const o1 = orientation(p1, q1, p2);
    const o2 = orientation(p1, q1, q2);
    const o3 = orientation(p2, q2, p1);
    const o4 = orientation(p2, q2, q1);
    
    // 一般情况
    if (o1 !== o2 && o3 !== o4) {
      return true;
    }
    
    // 特殊情况 - 共线
    if (o1 === 0 && onSegment(p1, p2, q1)) return true;
    if (o2 === 0 && onSegment(p1, q2, q1)) return true;
    if (o3 === 0 && onSegment(p2, p1, q2)) return true;
    if (o4 === 0 && onSegment(p2, q1, q2)) return true;
    
    return false;
  }
  
  // 检查每对路线
  for (let i = 0; i < routes.length; i++) {
    for (let j = i + 1; j < routes.length; j++) {
      const [x1, y1, x2, y2] = routes[i];
      const [x3, y3, x4, y4] = routes[j];
      
      if (doIntersect([x1, y1], [x2, y2], [x3, y3], [x4, y4])) {
        count++;
      }
    }
  }
  
  return count;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static int countIntersectingRoutes(List<List<Integer>> routes) {
        int count = 0;
        
        // 检查每对路线
        for (int i = 0; i < routes.size(); i++) {
            for (int j = i + 1; j < routes.size(); j++) {
                List<Integer> route1 = routes.get(i);
                List<Integer> route2 = routes.get(j);
                
                int x1 = route1.get(0), y1 = route1.get(1);
                int x2 = route1.get(2), y2 = route1.get(3);
                int x3 = route2.get(0), y3 = route2.get(1);
                int x4 = route2.get(2), y4 = route2.get(3);
                
                if (doIntersect(x1, y1, x2, y2, x3, y3, x4, y4)) {
                    count++;
                }
            }
        }
        
        return count;
    }
    
    private static int orientation(int x1, int y1, int x2, int y2, int x3, int y3) {
        int val = (y2 - y1) * (x3 - x2) - (x2 - x1) * (y3 - y2);
        if (val == 0) return 0; // 共线
        return val > 0 ? 1 : 2; // 顺时针或逆时针
    }
    
    private static boolean onSegment(int x1, int y1, int x2, int y2, int x3, int y3) {
        return x2 <= Math.max(x1, x3) && x2 >= Math.min(x1, x3) &&
               y2 <= Math.max(y1, y3) && y2 >= Math.min(y1, y3);
    }
    
    private static boolean doIntersect(int x1, int y1, int x2, int y2, int x3, int y3, int x4, int y4) {
        int o1 = orientation(x1, y1, x2, y2, x3, y3);
        int o2 = orientation(x1, y1, x2, y2, x4, y4);
        int o3 = orientation(x3, y3, x4, y4, x1, y1);
        int o4 = orientation(x3, y3, x4, y4, x2, y2);
        
        // 一般情况
        if (o1 != o2 && o3 != o4) {
            return true;
        }
        
        // 特殊情况 - 共线
        if (o1 == 0 && onSegment(x1, y1, x3, y3, x2, y2)) return true;
        if (o2 == 0 && onSegment(x1, y1, x4, y4, x2, y2)) return true;
        if (o3 == 0 && onSegment(x3, y3, x1, y1, x4, y4)) return true;
        if (o4 == 0 && onSegment(x3, y3, x2, y2, x4, y4)) return true;
        
        return false;
    }
}`
  },
  {
    id: 'example-56',
    englishTitle: 'Maximize Outlets Delivery',
    chineseTitle: '最大化网点配送数',
    englishDescription: 'A company sells its products at N outlets. All the outlets are connected to each other by a series of roads. There is only one way to reach from one outlet to another. Each outlet of the company has a unique outlet ID. Whenever the inventory of a certain product reaches a minimum limit then these K outlets make a request for extra inventory. The company sends the requested products from its warehouse to the outlets. In order to save on fuel, the warehouse supervisor directs the driver Mike to deliver the products to the outlets along the shortest and most direct path possible, without traveling any single road twice. Write an algorithm to help Mike deliver his inventory to the maximum number of outlets without traveling any road twice.',
    chineseDescription: '一家公司在N个网点销售产品。所有网点通过一系列道路相互连接。从一个网点到另一个网点只有一种方式。公司的每个网点都有唯一的网点ID。每当某种产品的库存达到最低限额时，这些K个网点会请求额外库存。公司从仓库向网点发送请求的产品。为了节省燃料，仓库主管指示司机Mike沿着最短、最直接的路径将产品运送到网点，不重复行驶任何一条道路。编写一个算法来帮助Mike在不重复行驶任何道路的情况下，将库存运送到最多的网点。',
    examples: [
      {
        input: 'N = 5, K = 3, requests = [2, 3, 5], warehouse = 1, roads = [[1, 2], [1, 3], [2, 4], [2, 5]]',
        output: '3'
      },
      {
        input: 'N = 4, K = 2, requests = [3, 4], warehouse = 1, roads = [[1, 2], [2, 3], [2, 4]]',
        output: '2'
      }
    ],
    code: `function maximizeOutletsDelivery(N, K, requests, warehouse, roads) {
  // 构建邻接表
  const adj = new Map();
  for (let i = 1; i <= N; i++) {
    adj.set(i, []);
  }
  
  for (const [u, v] of roads) {
    adj.get(u).push(v);
    adj.get(v).push(u);
  }
  
  // 标记请求的网点
  const requested = new Set(requests);
  
  // 深度优先搜索，计算从仓库出发能到达的请求网点数
  let count = 0;
  const visited = new Set();
  
  function dfs(node) {
    visited.add(node);
    if (requested.has(node)) {
      count++;
    }
    
    for (const neighbor of adj.get(node)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }
  
  dfs(warehouse);
  return count;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    private static List<List<Integer>> adj;
    private static Set<Integer> requested;
    private static Set<Integer> visited;
    private static int count;
    
    public static int maximizeOutletsDelivery(int N, int K, List<Integer> requests, int warehouse, List<List<Integer>> roads) {
        // 构建邻接表
        adj = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            adj.add(new ArrayList<>());
        }
        
        for (List<Integer> road : roads) {
            int u = road.get(0);
            int v = road.get(1);
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
        
        // 标记请求的网点
        requested = new HashSet<>(requests);
        
        // 深度优先搜索
        visited = new HashSet<>();
        count = 0;
        dfs(warehouse);
        
        return count;
    }
    
    private static void dfs(int node) {
        visited.add(node);
        if (requested.contains(node)) {
            count++;
        }
        
        for (int neighbor : adj.get(node)) {
            if (!visited.contains(neighbor)) {
                dfs(neighbor);
            }
        }
    }
}`
  },
  {
    id: 'example-57',
    englishTitle: 'Maximum Vapor Rate',
    chineseTitle: '最大蒸汽率',
    englishDescription: 'Dr. Jackson, a researcher, wishes to perform an experiment. He has a variety of toxic chemicals. Each chemical has some vapor rate. When two chemicals are mixed, then the vapor rate of the mixture is the multiplication of their respective vapor rates. Dr. Jackson picks two equal-sized sets of non-overlapping, consecutively-placed chemicals from a series of chemicals in his lab. He reverses the positions of the chemicals in the second set. He then mixes each chemical from the first set with the correspondingly-placed chemical of the second set. The total vapor rate at the end of the experiment is the sum of the products of the respective vapor rates of the chemicals that he mixed from both sets. If the total vapor rate is negative, he will not pick any set. Write an algorithm to find the maximum vapor rate obtainable after the experiment.',
    chineseDescription: '研究人员Jackson博士希望进行一项实验。他有各种有毒化学品。每种化学品都有一定的蒸汽率。当两种化学品混合时，混合物的蒸汽率是它们各自蒸汽率的乘积。Jackson博士从实验室的一系列化学品中选择两组大小相等、不重叠、连续放置的化学品。他反转第二组化学品的位置。然后他将第一组的每种化学品与第二组对应位置的化学品混合。实验结束时的总蒸汽率是他从两组混合的化学品各自蒸汽率的乘积之和。如果总蒸汽率为负，他将不选择任何组。编写一个算法来找到实验后可获得的最大蒸汽率。',
    examples: [
      {
        input: 'chemicals = [1, 2, 3, 4, 5, 6]',
        output: '32'
      },
      {
        input: 'chemicals = [-1, -2, -3, -4]',
        output: '14'
      }
    ],
    code: `function maximumVaporRate(chemicals) {
  const n = chemicals.length;
  let maxVapor = 0;
  
  // 尝试所有可能的两组大小
  for (let size = 1; size <= Math.floor(n / 2); size++) {
    // 尝试所有可能的起始位置
    for (let start1 = 0; start1 <= n - 2 * size; start1++) {
      const start2 = start1 + size;
      
      // 反转第二组
      const reversedSecondSet = chemicals.slice(start2, start2 + size).reverse();
      
      // 计算总蒸汽率
      let totalVapor = 0;
      for (let i = 0; i < size; i++) {
        totalVapor += chemicals[start1 + i] * reversedSecondSet[i];
      }
      
      if (totalVapor > maxVapor) {
        maxVapor = totalVapor;
      }
    }
  }
  
  return maxVapor;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Solution {
    public static int maximumVaporRate(List<Integer> chemicals) {
        int n = chemicals.size();
        int maxVapor = 0;
        
        // 尝试所有可能的两组大小
        for (int size = 1; size <= n / 2; size++) {
            // 尝试所有可能的起始位置
            for (int start1 = 0; start1 <= n - 2 * size; start1++) {
                int start2 = start1 + size;
                
                // 创建反转后的第二组
                List<Integer> secondSet = new ArrayList<>();
                for (int i = start2 + size - 1; i >= start2; i--) {
                    secondSet.add(chemicals.get(i));
                }
                
                // 计算总蒸汽率
                int totalVapor = 0;
                for (int i = 0; i < size; i++) {
                    totalVapor += chemicals.get(start1 + i) * secondSet.get(i);
                }
                
                if (totalVapor > maxVapor) {
                    maxVapor = totalVapor;
                }
            }
        }
        
        return maxVapor;
    }
}`
  },
  {
    id: 'example-58',
    englishTitle: 'Arrange Flower Sticks',
    chineseTitle: '排列花棒',
    englishDescription: 'Emma wishes to give her father a bouquet for his birthday. She asks for help from her mother Rosy. Rosy gives N flower sticks numbered 1 to N to Emma and tells her to arrange them in the bouquet in a particular order. She asks Emma to arrange the first K flower sticks in the order of increasing length and the remaining sticks in the order of decreasing length. Write an algorithm to find the final arrangement of the flower sticks in the bouquet.',
    chineseDescription: 'Emma希望在父亲生日时送给他一束花。她向母亲Rosy寻求帮助。Rosy给了Emma N根编号为1到N的花棒，并告诉她按特定顺序排列在花束中。她要求Emma将前K根花棒按长度递增顺序排列，其余花棒按长度递减顺序排列。编写一个算法来找出花束中花棒的最终排列。',
    examples: [
      {
        input: 'N = 5, K = 3, lengths = [3, 1, 4, 2, 5]',
        output: '[1, 3, 4, 5, 2]'
      },
      {
        input: 'N = 6, K = 2, lengths = [6, 5, 4, 3, 2, 1]',
        output: '[2, 5, 6, 4, 3, 1]'
      }
    ],
    code: `function arrangeFlowerSticks(N, K, lengths) {
  // 按长度排序
  const sorted = [...lengths].sort((a, b) => a - b);
  
  // 前K个按递增顺序
  const firstK = sorted.slice(0, K);
  
  // 剩余的按递减顺序
  const remaining = sorted.slice(K).reverse();
  
  // 合并结果
  return [...firstK, ...remaining];
}`,
    javaCode: `import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Solution {
    public static List<Integer> arrangeFlowerSticks(int N, int K, List<Integer> lengths) {
        // 按长度排序
        List<Integer> sorted = new ArrayList<>(lengths);
        Collections.sort(sorted);
        
        // 前K个按递增顺序
        List<Integer> firstK = new ArrayList<>();
        for (int i = 0; i < K; i++) {
            firstK.add(sorted.get(i));
        }
        
        // 剩余的按递减顺序
        List<Integer> remaining = new ArrayList<>();
        for (int i = K; i < sorted.size(); i++) {
            remaining.add(sorted.get(i));
        }
        Collections.reverse(remaining);
        
        // 合并结果
        List<Integer> result = new ArrayList<>(firstK);
        result.addAll(remaining);
        
        return result;
    }
}`
  },
  {
    id: 'example-59',
    englishTitle: 'Remove Duplicates',
    chineseTitle: '移除重复项',
    englishDescription: 'You are given a list of numbers. Write an algorithm to remove all the duplicate numbers of the list so that the list contains only distinct numbers in the same order as they appear in the input list.',
    chineseDescription: '给定一个数字列表。编写一个算法来移除列表中的所有重复数字，使得列表只包含不同的数字，顺序与它们在输入列表中出现的顺序相同。',
    examples: [
      {
        input: 'numbers = [1, 2, 3, 2, 1, 4, 5, 4]',
        output: '[1, 2, 3, 4, 5]'
      },
      {
        input: 'numbers = [1, 1, 1, 1, 1]',
        output: '[1]'
      }
    ],
    code: `function removeDuplicates(numbers) {
  const seen = new Set();
  const result = [];
  
  for (const num of numbers) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    public static List<Integer> removeDuplicates(List<Integer> numbers) {
        Set<Integer> seen = new HashSet<>();
        List<Integer> result = new ArrayList<>();
        
        for (int num : numbers) {
            if (!seen.contains(num)) {
                seen.add(num);
                result.add(num);
            }
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-60',
    englishTitle: 'Count Occurrences in Number',
    chineseTitle: '计算数字中的出现次数',
    englishDescription: 'Write an algorithm to find the number of occurrences of needle in a given positive number haystack.',
    chineseDescription: '编写一个算法来找出给定正数haystack中needle的出现次数。',
    examples: [
      {
        input: 'haystack = 12345, needle = 3',
        output: '1'
      },
      {
        input: 'haystack = 11111, needle = 1',
        output: '5'
      }
    ],
    code: `function countOccurrencesInNumber(haystack, needle) {
  // 将数字转换为字符串
  const haystackStr = haystack.toString();
  const needleStr = needle.toString();
  
  let count = 0;
  let index = 0;
  
  while (index < haystackStr.length) {
    const foundIndex = haystackStr.indexOf(needleStr, index);
    if (foundIndex === -1) {
      break;
    }
    count++;
    index = foundIndex + 1;
  }
  
  return count;
}`,
    javaCode: `public class Solution {
    public static int countOccurrencesInNumber(int haystack, int needle) {
        // 将数字转换为字符串
        String haystackStr = String.valueOf(haystack);
        String needleStr = String.valueOf(needle);
        
        int count = 0;
        int index = 0;
        
        while (index < haystackStr.length()) {
            int foundIndex = haystackStr.indexOf(needleStr, index);
            if (foundIndex == -1) {
                break;
            }
            count++;
            index = foundIndex + 1;
        }
        
        return count;
    }
}`
  },
  {
    id: 'example-61',
    englishTitle: 'Count Word Occurrences in Sentence',
    chineseTitle: '计算句子中单词的出现次数',
    englishDescription: 'In an online word recognition game for kids, the user needs to find the number of times the given word occurs in the sentence. Both the given word and the sentence displayed on the user interface consist of letters from the English alphabet only and are case insensitive (i.e., â€˜toddlerâ€™ is same as â€˜Toddlerâ€™). Neither the word nor the sentence contain any white-spaces or special symbols. Write an algorithm to print the number of times the given word appears in the sentence.',
    chineseDescription: '在一个儿童在线单词识别游戏中，用户需要找出给定单词在句子中出现的次数。给定的单词和用户界面上显示的句子都只包含英文字母，并且不区分大小写（即，toddler与Toddler相同）。单词和句子都不包含任何空格或特殊符号。编写一个算法来打印给定单词在句子中出现的次数。',
    examples: [
      {
        input: 'word = "toddler", sentence = "toddlertoddlertoddler"',
        output: '3'
      },
      {
        input: 'word = "test", sentence = "TestTESTtest"',
        output: '3'
      }
    ],
    code: `function countWordOccurrences(word, sentence) {
  // 转换为小写
  const lowerWord = word.toLowerCase();
  const lowerSentence = sentence.toLowerCase();
  
  if (lowerWord.length === 0) {
    return 0;
  }
  
  let count = 0;
  let index = 0;
  
  while (index < lowerSentence.length) {
    const foundIndex = lowerSentence.indexOf(lowerWord, index);
    if (foundIndex === -1) {
      break;
    }
    count++;
    index = foundIndex + lowerWord.length;
  }
  
  return count;
}`,
    javaCode: `public class Solution {
    public static int countWordOccurrences(String word, String sentence) {
        // 转换为小写
        String lowerWord = word.toLowerCase();
        String lowerSentence = sentence.toLowerCase();
        
        if (lowerWord.length() == 0) {
            return 0;
        }
        
        int count = 0;
        int index = 0;
        
        while (index < lowerSentence.length()) {
            int foundIndex = lowerSentence.indexOf(lowerWord, index);
            if (foundIndex == -1) {
                break;
            }
            count++;
            index = foundIndex + lowerWord.length();
        }
        
        return count;
    }
}`
  },
  {
    id: 'example-62',
    englishTitle: 'Employee Work Weeks',
    chineseTitle: '员工工作周数',
    englishDescription: 'An employee in an organization has begun working on N projects (numbered 0 to N-1). Each week he/she can work on a single module of one of the projects. The modules that are chosen on any two successive weeks should come from different projects. A project i can have at most Ci modules. The modules of the projects are such that a module is completed in a week. Write an algorithm to determine the number of weeks the employee can work on projects following the abovementioned rules.',
    chineseDescription: '一个组织的员工已经开始从事N个项目（编号0到N-1）。每周他/她可以在其中一个项目的一个模块上工作。任何连续两周选择的模块应该来自不同的项目。项目i最多可以有Ci个模块。项目的模块是这样的，一个模块在一周内完成。编写一个算法来确定员工按照上述规则可以在项目上工作的周数。',
    examples: [
      {
        input: 'N = 2, C = [3, 3]',
        output: '6'
      },
      {
        input: 'N = 3, C = [2, 2, 2]',
        output: '6'
      }
    ],
    code: `function employeeWorkWeeks(N, C) {
  // 计算所有项目的总模块数
  const totalModules = C.reduce((sum, count) => sum + count, 0);
  
  // 找出最大的模块数
  const maxModules = Math.max(...C);
  
  // 如果最大模块数超过其他所有模块数之和加1，则最多只能工作其他所有模块数之和的2倍加1
  const sumOther = totalModules - maxModules;
  if (maxModules > sumOther + 1) {
    return sumOther * 2 + 1;
  }
  
  // 否则，可以工作所有模块数
  return totalModules;
}`,
    javaCode: `import java.util.List;

public class Solution {
    public static int employeeWorkWeeks(int N, List<Integer> C) {
        // 计算所有项目的总模块数
        int totalModules = 0;
        for (int count : C) {
            totalModules += count;
        }
        
        // 找出最大的模块数
        int maxModules = Integer.MIN_VALUE;
        for (int count : C) {
            if (count > maxModules) {
                maxModules = count;
            }
        }
        
        // 如果最大模块数超过其他所有模块数之和加1，则最多只能工作其他所有模块数之和的2倍加1
        int sumOther = totalModules - maxModules;
        if (maxModules > sumOther + 1) {
            return sumOther * 2 + 1;
        }
        
        // 否则，可以工作所有模块数
        return totalModules;
    }
}`
  },
  {
    id: 'example-63',
    englishTitle: 'Most Frequent Characters in Range',
    chineseTitle: '范围内最频繁的字符',
    englishDescription: 'Mitchell has invented a machine that outputs the most frequently occurring characters in a string that lie in the range [L, R]. The machine accepts a series of characters and asks the user to input two numbers, L and R. The machine outputs the characters for all the pairs of [L, R] values the user provides. Write an algorithm to help Mitchell find the output for all the inputs he provides.',
    chineseDescription: 'Mitchell发明了一台机器，可以输出字符串中位于范围[L, R]内的最频繁出现的字符。该机器接受一系列字符，并要求用户输入两个数字L和R。机器为用户提供的所有[L, R]值对输出字符。编写一个算法来帮助Mitchell找到他提供的所有输入的输出。',
    examples: [
      {
        input: 's = "abracadabra", queries = [[0, 4], [5, 9]]',
        output: '["a", "r"]'
      },
      {
        input: 's = "hello", queries = [[0, 4]]',
        output: '["l"]'
      }
    ],
    code: `function mostFrequentCharacters(s, queries) {
  const result = [];
  
  for (const [L, R] of queries) {
    // 提取子字符串
    const subStr = s.substring(L, R + 1);
    
    // 计算字符频率
    const frequency = {};
    for (const char of subStr) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    
    // 找出最频繁的字符
    let maxFreq = 0;
    let mostFrequent = [];
    for (const [char, freq] of Object.entries(frequency)) {
      if (freq > maxFreq) {
        maxFreq = freq;
        mostFrequent = [char];
      } else if (freq === maxFreq) {
        mostFrequent.push(char);
      }
    }
    
    // 按字母顺序排序并添加到结果
    mostFrequent.sort();
    result.push(mostFrequent[0]);
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public static List<String> mostFrequentCharacters(String s, List<List<Integer>> queries) {
        List<String> result = new ArrayList<>();
        
        for (List<Integer> query : queries) {
            int L = query.get(0);
            int R = query.get(1);
            
            // 提取子字符串
            String subStr = s.substring(L, R + 1);
            
            // 计算字符频率
            Map<Character, Integer> frequency = new HashMap<>();
            for (char c : subStr.toCharArray()) {
                frequency.put(c, frequency.getOrDefault(c, 0) + 1);
            }
            
            // 找出最频繁的字符
            int maxFreq = 0;
            List<Character> mostFrequent = new ArrayList<>();
            for (Map.Entry<Character, Integer> entry : frequency.entrySet()) {
                int freq = entry.getValue();
                if (freq > maxFreq) {
                    maxFreq = freq;
                    mostFrequent.clear();
                    mostFrequent.add(entry.getKey());
                } else if (freq == maxFreq) {
                    mostFrequent.add(entry.getKey());
                }
            }
            
            // 按字母顺序排序并添加到结果
            mostFrequent.sort(null);
            result.add(String.valueOf(mostFrequent.get(0)));
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-64',
    englishTitle: 'Number of City Clusters',
    chineseTitle: '城市集群数量',
    englishDescription: 'A state has a number of city clusters in which the cities are connected by a network of roads. These roads are bidirectional (i.e., traffic can move in either direction). There are no connections between clusters. Within a cluster, assume that two cities are connected by one road at most. Write an algorithm to determine the total number of clusters of internally connected cities for one such network of cities and roads.',
    chineseDescription: '一个州有许多城市集群，其中城市通过道路网络连接。这些道路是双向的（即交通可以双向移动）。集群之间没有连接。在一个集群内，假设两个城市最多由一条道路连接。编写一个算法来确定这样一个城市和道路网络中内部连接的城市集群的总数。',
    examples: [
      {
        input: 'cities = 5, roads = [[0, 1], [1, 2], [3, 4]]',
        output: '2'
      },
      {
        input: 'cities = 6, roads = [[0, 1], [1, 2], [2, 0], [3, 4]]',
        output: '2'
      }
    ],
    code: `function numberOfCityClusters(cities, roads) {
  // 构建邻接表
  const adj = new Map();
  for (let i = 0; i < cities; i++) {
    adj.set(i, []);
  }
  
  for (const [u, v] of roads) {
    adj.get(u).push(v);
    adj.get(v).push(u);
  }
  
  const visited = new Array(cities).fill(false);
  let clusters = 0;
  
  // 深度优先搜索
  function dfs(node) {
    visited[node] = true;
    for (const neighbor of adj.get(node)) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }
  
  // 计算集群数量
  for (let i = 0; i < cities; i++) {
    if (!visited[i]) {
      clusters++;
      dfs(i);
    }
  }
  
  return clusters;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    private static List<List<Integer>> adj;
    private static boolean[] visited;
    
    public static int numberOfCityClusters(int cities, List<List<Integer>> roads) {
        // 构建邻接表
        adj = new ArrayList<>();
        for (int i = 0; i < cities; i++) {
            adj.add(new ArrayList<>());
        }
        
        for (List<Integer> road : roads) {
            int u = road.get(0);
            int v = road.get(1);
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
        
        visited = new boolean[cities];
        int clusters = 0;
        
        // 计算集群数量
        for (int i = 0; i < cities; i++) {
            if (!visited[i]) {
                clusters++;
                dfs(i);
            }
        }
        
        return clusters;
    }
    
    private static void dfs(int node) {
        visited[node] = true;
        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }
}`
  },
  {
    id: 'example-65',
    englishTitle: 'Sort by Frequency',
    chineseTitle: '按频率排序',
    englishDescription: 'Design a way to sort the list of positive integers in the descending order according to frequency of the elements. The elements with higher frequency come before those with lower frequency. Elements with the same frequency come in the same order as they appear in the given list.',
    chineseDescription: '设计一种方法，根据元素的频率将正整数列表按降序排序。频率较高的元素排在频率较低的元素之前。频率相同的元素按照它们在给定列表中出现的顺序排列。',
    examples: [
      {
        input: 'numbers = [1, 3, 5, 3, 1, 3, 1]',
        output: '[1, 1, 1, 3, 3, 3, 5]'
      },
      {
        input: 'numbers = [4, 6, 2, 6, 4, 4, 6]',
        output: '[4, 4, 4, 6, 6, 6, 2]'
      }
    ],
    code: `function sortByFrequency(numbers) {
  // 计算频率
  const frequency = {};
  for (const num of numbers) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  
  // 记录元素出现的顺序
  const order = [];
  const seen = new Set();
  for (const num of numbers) {
    if (!seen.has(num)) {
      order.push(num);
      seen.add(num);
    }
  }
  
  // 按频率降序排序，频率相同的按出现顺序排序
  order.sort((a, b) => {
    if (frequency[b] !== frequency[a]) {
      return frequency[b] - frequency[a];
    }
    return order.indexOf(a) - order.indexOf(b);
  });
  
  // 构建结果
  const result = [];
  for (const num of order) {
    for (let i = 0; i < frequency[num]; i++) {
      result.push(num);
    }
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public static List<Integer> sortByFrequency(List<Integer> numbers) {
        // 计算频率
        Map<Integer, Integer> frequency = new HashMap<>();
        for (int num : numbers) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }
        
        // 记录元素出现的顺序
        List<Integer> order = new ArrayList<>();
        List<Integer> seen = new ArrayList<>();
        for (int num : numbers) {
            if (!seen.contains(num)) {
                order.add(num);
                seen.add(num);
            }
        }
        
        // 按频率降序排序，频率相同的按出现顺序排序
        order.sort((a, b) -> {
            if (!frequency.get(b).equals(frequency.get(a))) {
                return frequency.get(b) - frequency.get(a);
            }
            return order.indexOf(a) - order.indexOf(b);
        });
        
        // 构建结果
        List<Integer> result = new ArrayList<>();
        for (int num : order) {
            int freq = frequency.get(num);
            for (int i = 0; i < freq; i++) {
                result.add(num);
            }
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-66',
    englishTitle: 'Shortest Route with Magic Spells',
    chineseTitle: '使用魔法咒语的最短路线',
    englishDescription: 'A state consists of N cities numbered from 0 to N-1. All the roads in the state are bidirectional. Each city is connected to another city by one direct road only. A magician travels to these cities to perform shows. He knows a magic spell that can completely eliminate the distance between any two directly connected cities. But he must be very careful because this magic spell can be performed only K number of times. Write an algorithm to find the length of the shortest route between two given cities after performing the magic spell K number of times. The output is -1 if no path exists.',
    chineseDescription: '一个州由编号从0到N-1的N个城市组成。该州的所有道路都是双向的。每个城市仅通过一条直接道路连接到另一个城市。一位魔术师前往这些城市表演节目。他知道一种魔法咒语，可以完全消除任何两个直接相连的城市之间的距离。但他必须非常小心，因为这种魔法咒语只能使用K次。编写一个算法来找出在使用K次魔法咒语后两个给定城市之间的最短路线长度。如果不存在路径，则输出-1。',
    examples: [
      {
        input: 'N = 3, roads = [[0, 1], [1, 2]], K = 1, start = 0, end = 2',
        output: '0'
      },
      {
        input: 'N = 4, roads = [[0, 1], [1, 2], [2, 3]], K = 1, start = 0, end = 3',
        output: '1'
      }
    ],
    code: `function shortestRouteWithMagicSpells(N, roads, K, start, end) {
  // 构建邻接表
  const adj = new Map();
  for (let i = 0; i < N; i++) {
    adj.set(i, []);
  }
  
  for (const [u, v] of roads) {
    adj.get(u).push(v);
    adj.get(v).push(u);
  }
  
  // BFS，记录到达每个节点的最短距离和使用的魔法次数
  const visited = new Array(N).fill().map(() => new Array(K + 1).fill(-1));
  const queue = [];
  queue.push([start, 0, 0]); // [当前节点, 距离, 使用的魔法次数]
  visited[start][0] = 0;
  
  while (queue.length > 0) {
    const [node, distance, magicUsed] = queue.shift();
    
    if (node === end) {
      return distance;
    }
    
    // 遍历所有邻居
    for (const neighbor of adj.get(node)) {
      // 不使用魔法
      if (visited[neighbor][magicUsed] === -1) {
        visited[neighbor][magicUsed] = distance + 1;
        queue.push([neighbor, distance + 1, magicUsed]);
      }
      
      // 使用魔法（如果还有剩余次数）
      if (magicUsed < K && visited[neighbor][magicUsed + 1] === -1) {
        visited[neighbor][magicUsed + 1] = distance; // 距离不变
        queue.push([neighbor, distance, magicUsed + 1]);
      }
    }
  }
  
  // 找到到达end的最短距离
  let minDistance = -1;
  for (let i = 0; i <= K; i++) {
    if (visited[end][i] !== -1) {
      if (minDistance === -1 || visited[end][i] < minDistance) {
        minDistance = visited[end][i];
      }
    }
  }
  
  return minDistance;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Solution {
    public static int shortestRouteWithMagicSpells(int N, List<List<Integer>> roads, int K, int start, int end) {
        // 构建邻接表
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            adj.add(new ArrayList<>());
        }
        
        for (List<Integer> road : roads) {
            int u = road.get(0);
            int v = road.get(1);
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
        
        // BFS，记录到达每个节点的最短距离和使用的魔法次数
        int[][] visited = new int[N][K + 1];
        for (int i = 0; i < N; i++) {
            for (int j = 0; j <= K; j++) {
                visited[i][j] = -1;
            }
        }
        
        LinkedList<int[]> queue = new LinkedList<>();
        queue.add(new int[]{start, 0, 0}); // [当前节点, 距离, 使用的魔法次数]
        visited[start][0] = 0;
        
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int node = current[0];
            int distance = current[1];
            int magicUsed = current[2];
            
            if (node == end) {
                return distance;
            }
            
            // 遍历所有邻居
            for (int neighbor : adj.get(node)) {
                // 不使用魔法
                if (visited[neighbor][magicUsed] == -1) {
                    visited[neighbor][magicUsed] = distance + 1;
                    queue.add(new int[]{neighbor, distance + 1, magicUsed});
                }
                
                // 使用魔法（如果还有剩余次数）
                if (magicUsed < K && visited[neighbor][magicUsed + 1] == -1) {
                    visited[neighbor][magicUsed + 1] = distance; // 距离不变
                    queue.add(new int[]{neighbor, distance, magicUsed + 1});
                }
            }
        }
        
        // 找到到达end的最短距离
        int minDistance = -1;
        for (int i = 0; i <= K; i++) {
            if (visited[end][i] != -1) {
                if (minDistance == -1 || visited[end][i] < minDistance) {
                    minDistance = visited[end][i];
                }
            }
        }
        
        return minDistance;
    }
}`
  },
  {
    id: 'example-67',
    englishTitle: 'FIFO Cache Misses',
    chineseTitle: 'FIFO缓存未命中数',
    englishDescription: 'A virtual memory management system in an operating system uses First-In-First-Out (FIFO) cache. When a requested memory page is not in the cache and the cache is full, the page that has been in the cache for the longest duration is removed to make room for the requested page. If the cache is not full, then the requested page can simply be added to the cache. A given page should occur once in the cache at most. Given the maximum size of the cache and an array of page requests, calculate the number of cache misses. A cache miss occurs when a page is requested but is not found in the cache. Initially, the cache is empty.',
    chineseDescription: '操作系统中的虚拟内存管理系统使用先进先出（FIFO）缓存。当请求的内存页面不在缓存中且缓存已满时，将删除缓存中存在时间最长的页面，为请求的页面腾出空间。如果缓存未满，则请求的页面可以简单地添加到缓存中。给定页面在缓存中最多出现一次。给定缓存的最大大小和页面请求数组，计算缓存未命中的次数。当请求页面但在缓存中未找到时，发生缓存未命中。初始时，缓存为空。',
    examples: [
      {
        input: 'cacheSize = 2, pageRequests = [1, 2, 1, 3, 2]',
        output: '3'
      },
      {
        input: 'cacheSize = 3, pageRequests = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]',
        output: '9'
      }
    ],
    code: `function calculateFIFOCacheMisses(cacheSize, pageRequests) {
  if (cacheSize === 0) {
    return pageRequests.length;
  }
  
  const cache = [];
  let misses = 0;
  
  for (const page of pageRequests) {
    if (!cache.includes(page)) {
      // 缓存未命中
      misses++;
      
      if (cache.length >= cacheSize) {
        // 缓存已满，删除最早的页面
        cache.shift();
      }
      
      // 添加新页面到缓存
      cache.push(page);
    }
  }
  
  return misses;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Solution {
    public static int calculateFIFOCacheMisses(int cacheSize, List<Integer> pageRequests) {
        if (cacheSize == 0) {
            return pageRequests.size();
        }
        
        List<Integer> cache = new LinkedList<>();
        int misses = 0;
        
        for (int page : pageRequests) {
            if (!cache.contains(page)) {
                // 缓存未命中
                misses++;
                
                if (cache.size() >= cacheSize) {
                    // 缓存已满，删除最早的页面
                    cache.remove(0);
                }
                
                // 添加新页面到缓存
                cache.add(page);
            }
        }
        
        return misses;
    }
}`
  },
  {
    id: 'example-68',
    englishTitle: 'Maximize Social Network Promotion',
    chineseTitle: '最大化社交网络推广',
    englishDescription: 'On a social networking site, each user can have a group of friends. Each user possesses a unique profile ID. A company wants to promote its product on the social networking site in a particular way. It plans to give rewards to any user who promotes its product on his/her wall. The company will give extra reward points to users who refer other users. The company will ask one of the users to promote its product by posting the product message on his/her wall. The user can then share this message with their friends, asking them to post on their walls as well. The company will share the promo message with the user in such a way that the promo message is posted on the maximum number of walls. Write an algorithm to help the company find the userID of the user to whom they should send the promo request so that the request may reach the maximum number of walls.',
    chineseDescription: '在社交网站上，每个用户可以有一群朋友。每个用户都有唯一的个人资料ID。一家公司希望以特定方式在社交网站上推广其产品。它计划奖励任何在其墙上推广其产品的用户。公司将给推荐其他用户的用户额外的奖励积分。公司将要求其中一个用户通过在其墙上发布产品信息来推广其产品。然后，该用户可以与他们的朋友分享此信息，要求他们也在其墙上发布。公司将以这样的方式与用户分享促销信息，使得促销信息被发布在最大数量的墙上。编写一个算法来帮助公司找到他们应该向其发送促销请求的用户的用户ID，以便请求可以到达最大数量的墙。',
    examples: [
      {
        input: 'users = {1: [2, 3], 2: [1, 4], 3: [1], 4: [2]}',
        output: '1'
      },
      {
        input: 'users = {0: [1, 2], 1: [0, 3], 2: [0, 4], 3: [1], 4: [2]}',
        output: '0'
      }
    ],
    code: `function maximizeSocialNetworkPromotion(users) {
  let maxReach = 0;
  let bestUser = -1;
  
  // 计算每个用户的 reach
  for (const userId in users) {
    const user = parseInt(userId);
    const visited = new Set();
    const queue = [user];
    visited.add(user);
    
    while (queue.length > 0) {
      const current = queue.shift();
      for (const friend of users[current]) {
        if (!visited.has(friend)) {
          visited.add(friend);
          queue.push(friend);
        }
      }
    }
    
    if (visited.size > maxReach) {
      maxReach = visited.size;
      bestUser = user;
    }
  }
  
  return bestUser;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.LinkedList;

public class Solution {
    public static int maximizeSocialNetworkPromotion(Map<Integer, List<Integer>> users) {
        int maxReach = 0;
        int bestUser = -1;
        
        // 计算每个用户的 reach
        for (int userId : users.keySet()) {
            Map<Integer, List<Integer>> userMap = users;
            List<Integer> friends = userMap.get(userId);
            
            if (friends == null) {
                continue;
            }
            
            Set<Integer> visited = new java.util.HashSet<>();
            Queue<Integer> queue = new LinkedList<>();
            queue.add(userId);
            visited.add(userId);
            
            while (!queue.isEmpty()) {
                int current = queue.poll();
                List<Integer> currentFriends = userMap.get(current);
                if (currentFriends != null) {
                    for (int friend : currentFriends) {
                        if (!visited.contains(friend)) {
                            visited.add(friend);
                            queue.add(friend);
                        }
                        }
                    }
                }
            
            if (visited.size() > maxReach) {
                maxReach = visited.size();
                bestUser = userId;
            }
        }
        
        return bestUser;
    }
}`
  },
  {
    id: 'example-69',
    englishTitle: 'Minimum Satellite Data Transfer Iterations',
    chineseTitle: '卫星数据传输最小迭代次数',
    englishDescription: 'A space organization has N satellites in orbit. The satellites are assigned IDs from 0 to N-1. A satellite can transfer data to any other satellite that lies within its bandwidth range. A team at organization is working on a project involving satellite communications. In this project, they wish to transfer data from the main satellite with ID 0 to all the other satellites. But because the transfer of data requires an enormous amount of power, a satellite can transfer data to only one other satellite at a time. Then, the satellite can connect to the server at organization which will help to connect this satellite to other satellites near it. Only a fixed number of satellites can be in the bandwidth range of a satellite at a time. The team wishes to determine the minimum number of iterations of data transfer necessary to connect all the satellites. Write an algorithm to help the team to determine the minimum number of iterations of data transfer necessary to connect all the satellites.',
    chineseDescription: '一个太空组织在轨道上有N颗卫星。卫星被分配ID从0到N-1。卫星可以向其带宽范围内的任何其他卫星传输数据。该组织的一个团队正在进行一个涉及卫星通信的项目。在这个项目中，他们希望将数据从ID为0的主卫星传输到所有其他卫星。但是，由于数据传输需要大量的功率，一颗卫星一次只能向另一颗卫星传输数据。然后，该卫星可以连接到组织的服务器，该服务器将帮助将该卫星连接到其附近的其他卫星。一颗卫星的带宽范围内一次只能有固定数量的卫星。团队希望确定连接所有卫星所需的数据传输的最小迭代次数。编写一个算法来帮助团队确定连接所有卫星所需的数据传输的最小迭代次数。',
    examples: [
      {
        input: 'N = 4, bandwidth = [[0, 1], [0, 2], [1, 3], [2, 3]]',
        output: '2'
      },
      {
        input: 'N = 5, bandwidth = [[0, 1], [0, 2], [1, 3], [2, 4]]',
        output: '2'
      }
    ],
    code: `function minimumSatelliteTransferIterations(N, bandwidth) {
  // 构建邻接表
  const adj = new Map();
  for (let i = 0; i < N; i++) {
    adj.set(i, []);
  }
  
  for (const [u, v] of bandwidth) {
    adj.get(u).push(v);
    adj.get(v).push(u);
  }
  
  // BFS计算每个卫星与主卫星的距离
  const distance = new Array(N).fill(-1);
  const queue = [];
  queue.push(0);
  distance[0] = 0;
  
  while (queue.length > 0) {
    const current = queue.shift();
    for (const neighbor of adj.get(current)) {
      if (distance[neighbor] === -1) {
        distance[neighbor] = distance[current] + 1;
        queue.push(neighbor);
      }
    }
  }
  
  // 最大距离即为最小迭代次数
  return Math.max(...distance);
}`,
    javaCode: `import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Solution {
    public static int minimumSatelliteTransferIterations(int N, List<List<Integer>> bandwidth) {
        // 构建邻接表
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            adj.add(new ArrayList<>());
        }
        
        for (List<Integer> edge : bandwidth) {
            int u = edge.get(0);
            int v = edge.get(1);
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
        
        // BFS计算每个卫星与主卫星的距离
        int[] distance = new int[N];
        for (int i = 0; i < N; i++) {
            distance[i] = -1;
        }
        
        Queue<Integer> queue = new LinkedList<>();
        queue.add(0);
        distance[0] = 0;
        
        while (!queue.isEmpty()) {
            int current = queue.poll();
            for (int neighbor : adj.get(current)) {
                if (distance[neighbor] == -1) {
                    distance[neighbor] = distance[current] + 1;
                    queue.add(neighbor);
                }
            }
        }
        
        // 最大距离即为最小迭代次数
        int maxDistance = 0;
        for (int i = 0; i < N; i++) {
            if (distance[i] > maxDistance) {
                maxDistance = distance[i];
            }
        }
        
        return maxDistance;
    }
}`
  },
  {
    id: 'example-70',
    englishTitle: 'Houses Not to be Renovated',
    chineseTitle: '不被翻新的房屋',
    englishDescription: 'In a town, the houses are marked with English letters. A town committee wants to renovate each house. Because funds are limited, they decide to renovate only the houses marked with vowels. The committee head gives the list of houses to the members and asks them to identify the houses that will not be renovated. Write an algorithm to help the committee members find the list of houses that will not be renovated.',
    chineseDescription: '在一个城镇，房屋用英文字母标记。镇委员会想要翻新每栋房屋。由于资金有限，他们决定只翻新用元音标记的房屋。委员会主席将房屋清单交给成员，并要求他们识别不会被翻新的房屋。编写一个算法来帮助委员会成员找到不会被翻新的房屋清单。',
    examples: [
      {
        input: 'houses = ["A", "B", "C", "D", "E"]',
        output: '["B", "C", "D"]'
      },
      {
        input: 'houses = ["a", "b", "c", "d", "e"]',
        output: '["b", "c", "d"]'
      }
    ],
    code: `function housesNotToBeRenovated(houses) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const result = [];
  
  for (const house of houses) {
    if (!vowels.has(house)) {
      result.push(house);
    }
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    public static List<String> housesNotToBeRenovated(List<String> houses) {
        Set<Character> vowels = new HashSet<>();
        vowels.add('a');
        vowels.add('e');
        vowels.add('i');
        vowels.add('o');
        vowels.add('u');
        vowels.add('A');
        vowels.add('E');
        vowels.add('I');
        vowels.add('O');
        vowels.add('U');
        
        List<String> result = new ArrayList<>();
        
        for (String house : houses) {
            if (!vowels.contains(house.charAt(0))) {
                result.add(house);
            }
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-71',
    englishTitle: 'Most Frequently Purchased Products',
    chineseTitle: '最频繁购买的产品',
    englishDescription: 'The manager of the grocery company tagGrocery wishes to identify which products are most frequently purchased by the customers. He selects N customers that purchase combo bags of products. Each combo bag consists of M products and each product is labeled with a productID. He needs to find the productIDs of the products that are purchased by all the N customers in common. Write an algorithm to help the manager find the lexicographically sorted productIDs of the products that are most frequently purchased by all the N customers.',
    chineseDescription: '杂货公司tagGrocery的经理希望确定哪些产品是客户最频繁购买的。他选择了N个购买产品组合包的客户。每个组合包由M个产品组成，每个产品都标有产品ID。他需要找到所有N个客户共同购买的产品的产品ID。编写一个算法来帮助经理找到所有N个客户最频繁购买的产品的字典序排序的产品ID。',
    examples: [
      {
        input: 'N = 3, customers = [[1, 2, 3], [1, 2, 4], [1, 2, 5]]',
        output: '[1, 2]'
      },
      {
        input: 'N = 2, customers = [[10, 20, 30], [20, 30, 40]]',
        output: '[20, 30]'
      }
    ],
    code: `function mostFrequentlyPurchasedProducts(N, customers) {
  if (N === 0) {
    return [];
  }
  
  // 计算每个产品的购买次数
  const frequency = {};
  for (const combo of customers) {
    for (const product of combo) {
      frequency[product] = (frequency[product] || 0) + 1;
    }
  }
  
  // 找出所有客户都购买的产品
  const commonProducts = [];
  for (const product in frequency) {
    if (frequency[product] === N) {
      commonProducts.push(parseInt(product));
    }
  }
  
  // 按字典序排序
  commonProducts.sort((a, b) => a - b);
  
  return commonProducts;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public static List<Integer> mostFrequentlyPurchasedProducts(int N, List<List<Integer>> customers) {
        if (N == 0) {
            return new ArrayList<>();
        }
        
        // 计算每个产品的购买次数
        Map<Integer, Integer> frequency = new HashMap<>();
        for (List<Integer> combo : customers) {
            for (int product : combo) {
                frequency.put(product, frequency.getOrDefault(product, 0) + 1);
            }
        }
        
        // 找出所有客户都购买的产品
        List<Integer> commonProducts = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() == N) {
                commonProducts.add(entry.getKey());
            }
        }
        
        // 按字典序排序
        Collections.sort(commonProducts);
        
        return commonProducts;
    }
}`
  },
  {
    id: 'example-72',
    englishTitle: 'Distributor Energy Drink Queries',
    chineseTitle: '经销商能量饮料查询',
    englishDescription: 'A distributor distributes energy drinks in a 34 oz can to customers who each have a unique ID. He distributes the drink according to the demand for the drink. He has developed a system that handles all the transaction queries of the store. The system will handle two types of queries (i.e. query 1 and query 2). The first query determines if the customer\'s ID has already been logged, and if so, it adds the quantity of the new sale to the previous quantity and updates the record and if not logged in before, then it will make a fresh entry. The query 2 retrieves the quantity of cans purchased by the given range of the customer ID. At the end of the day, the distributer must submit a report for all the type 2 queries. Write an algorithm to help the distributer find the answer for all the type 2 queries.',
    chineseDescription: '一个经销商向每个都有唯一ID的客户分发34盎司罐装的能量饮料。他根据饮料的需求进行分发。他开发了一个系统来处理商店的所有交易查询。该系统将处理两种类型的查询（即查询1和查询2）。第一个查询确定客户的ID是否已经被记录，如果是，则将新销售的数量添加到之前的数量并更新记录，如果之前未登录，则会进行新的记录。查询2检索给定客户ID范围内购买的罐头数量。在一天结束时，经销商必须提交所有类型2查询的报告。编写一个算法来帮助经销商找到所有类型2查询的答案。',
    examples: [
      {
        input: 'queries = [[1, 100, 5], [1, 200, 3], [2, 100, 200], [1, 150, 2], [2, 120, 180]]',
        output: '[8, 2]'
      },
      {
        input: 'queries = [[1, 10, 2], [1, 20, 3], [2, 1, 30], [1, 15, 4], [2, 10, 20]]',
        output: '[5, 6]'
      }
    ],
    code: `function distributorEnergyDrinkQueries(queries) {
  // 存储客户ID和购买数量
  const customerPurchases = new Map();
  // 存储类型2查询的结果
  const result = [];
  
  for (const query of queries) {
    if (query[0] === 1) {
      // 类型1查询：添加或更新客户购买记录
      const [, customerId, quantity] = query;
      if (customerPurchases.has(customerId)) {
        customerPurchases.set(customerId, customerPurchases.get(customerId) + quantity);
      } else {
        customerPurchases.set(customerId, quantity);
      }
    } else if (query[0] === 2) {
      // 类型2查询：计算给定ID范围内的总购买量
      const [, startId, endId] = query;
      let totalQuantity = 0;
      for (const [customerId, quantity] of customerPurchases.entries()) {
        if (customerId >= startId && customerId <= endId) {
          totalQuantity += quantity;
        }
      }
      result.push(totalQuantity);
    }
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public static List<Integer> distributorEnergyDrinkQueries(List<List<Integer>> queries) {
        // 存储客户ID和购买数量
        Map<Integer, Integer> customerPurchases = new HashMap<>();
        // 存储类型2查询的结果
        List<Integer> result = new ArrayList<>();
        
        for (List<Integer> query : queries) {
            int queryType = query.get(0);
            if (queryType == 1) {
                // 类型1查询：添加或更新客户购买记录
                int customerId = query.get(1);
                int quantity = query.get(2);
                if (customerPurchases.containsKey(customerId)) {
                    customerPurchases.put(customerId, customerPurchases.get(customerId) + quantity);
                } else {
                    customerPurchases.put(customerId, quantity);
                }
            } else if (queryType == 2) {
                // 类型2查询：计算给定ID范围内的总购买量
                int startId = query.get(1);
                int endId = query.get(2);
                int totalQuantity = 0;
                for (Map.Entry<Integer, Integer> entry : customerPurchases.entrySet()) {
                    int customerId = entry.getKey();
                    int quantity = entry.getValue();
                    if (customerId >= startId && customerId <= endId) {
                        totalQuantity += quantity;
                    }
                }
                result.add(totalQuantity);
            }
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-73',
    englishTitle: 'Number of Houses in Grid',
    chineseTitle: '网格中的房屋数量',
    englishDescription: 'The city authorities need to know the number of houses in a residential area for future planning. The area is depicted in an aerial view and divided into an N x M grid. If a particular grid cell contains some part of the house roof, then it is given a value 1. If the cell is vacant, then it is given a value 0. Clusters of adjacent grid cells with value 1 represent a single house. Diagonal grids with value 1 do not represent the same house. Write an algorithm to find the total number of houses in the area.',
    chineseDescription: '城市当局需要了解住宅区的房屋数量，以便进行未来规划。该区域在 aerial 视图中被描绘并划分为N x M网格。如果特定网格单元包含房屋屋顶的一部分，则其值为1。如果单元是空的，则其值为0。值为1的相邻网格单元集群表示单个房屋。值为1的对角网格不代表同一房屋。编写一个算法来找出该区域的房屋总数。',
    examples: [
      {
        input: 'grid = [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]',
        output: '3'
      },
      {
        input: 'grid = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]',
        output: '4'
      }
    ],
    code: `function numberOfHouses(grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  
  const N = grid.length;
  const M = grid[0].length;
  const visited = Array(N).fill().map(() => Array(M).fill(false));
  let count = 0;
  
  // 深度优先搜索
  function dfs(i, j) {
    if (i < 0 || i >= N || j < 0 || j >= M || visited[i][j] || grid[i][j] === 0) {
      return;
    }
    
    visited[i][j] = true;
    
    // 访问上下左右四个方向
    dfs(i - 1, j); // 上
    dfs(i + 1, j); // 下
    dfs(i, j - 1); // 左
    dfs(i, j + 1); // 右
  }
  
  // 遍历网格
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && grid[i][j] === 1) {
        count++;
        dfs(i, j);
      }
    }
  }
  
  return count;
}`,
    javaCode: `public class Solution {
    public static int numberOfHouses(int[][] grid) {
        if (grid.length == 0 || grid[0].length == 0) {
            return 0;
        }
        
        int N = grid.length;
        int M = grid[0].length;
        boolean[][] visited = new boolean[N][M];
        int count = 0;
        
        // 深度优先搜索
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (!visited[i][j] && grid[i][j] == 1) {
                    count++;
                    dfs(i, j, N, M, grid, visited);
                }
            }
        }
        
        return count;
    }
    
    private static void dfs(int i, int j, int N, int M, int[][] grid, boolean[][] visited) {
        if (i < 0 || i >= N || j < 0 || j >= M || visited[i][j] || grid[i][j] == 0) {
            return;
        }
        
        visited[i][j] = true;
        
        // 访问上下左右四个方向
        dfs(i - 1, j, N, M, grid, visited); // 上
        dfs(i + 1, j, N, M, grid, visited); // 下
        dfs(i, j - 1, N, M, grid, visited); // 左
        dfs(i, j + 1, N, M, grid, visited); // 右
    }
}`
  },
  {
    id: 'example-74',
    englishTitle: 'Group ID Calculation',
    chineseTitle: '组ID计算',
    englishDescription: 'Mary, a physical education teacher, divides her students into different groups and assigns an ID to each group. For the group ID, she asks the students to stand in a queue. Each student in the class has a performance factor (PFR). She assigns scores to the students in an unusual way based on their PFR. She gives a score of 5 to a student behind whom is standing at least one student with a higher PFR, behind whom is standing at least one student with a smaller PFR. Next, she gives a score of 10 to a student behind whom is standing a student with a higher PFR, behind whom no student with smaller PFR is standing. Finally, she gives a score of 15 to a student behind whom is standing no student with a higher PFR. The group ID is the sum of scores of the students in the group. Write an algorithm to find the group ID of a group of students.',
    chineseDescription: 'Mary是一名体育教师，她将学生分成不同的小组，并为每个小组分配一个ID。对于小组ID，她要求学生排成队列。班上的每个学生都有一个表现因素（PFR）。她根据学生的PFR以不同寻常的方式为学生分配分数。她给一个学生5分，如果在他后面至少有一个PFR更高的学生，而在那个学生后面至少有一个PFR更小的学生。接下来，她给一个学生10分，如果在他后面有一个PFR更高的学生，而在那个学生后面没有PFR更小的学生。最后，她给一个学生15分，如果在他后面没有PFR更高的学生。小组ID是小组中学生分数的总和。编写一个算法来找到一组学生的小组ID。',
    examples: [
      {
        input: 'PFR = [3, 1, 4, 2]',
        output: '35'
      },
      {
        input: 'PFR = [5, 3, 2, 4, 1]',
        output: '45'
      }
    ],
    code: `function calculateGroupID(PFR) {
  const n = PFR.length;
  let totalScore = 0;
  
  for (let i = 0; i < n; i++) {
    let hasHigher = false;
    let hasSmallerAfterHigher = false;
    
    // 检查后面是否有更高的PFR
    for (let j = i + 1; j < n; j++) {
      if (PFR[j] > PFR[i]) {
        hasHigher = true;
        // 检查这个更高的PFR后面是否有更小的PFR
        for (let k = j + 1; k < n; k++) {
          if (PFR[k] < PFR[j]) {
            hasSmallerAfterHigher = true;
            break;
          }
        }
        break;
      }
    }
    
    if (!hasHigher) {
      // 后面没有更高的PFR，得15分
      totalScore += 15;
    } else if (hasSmallerAfterHigher) {
      // 后面有更高的PFR，且那个更高的PFR后面有更小的PFR，得5分
      totalScore += 5;
    } else {
      // 后面有更高的PFR，但那个更高的PFR后面没有更小的PFR，得10分
      totalScore += 10;
    }
  }
  
  return totalScore;
}`,
    javaCode: `public class Solution {
    public static int calculateGroupID(int[] PFR) {
        int n = PFR.length;
        int totalScore = 0;
        
        for (int i = 0; i < n; i++) {
            boolean hasHigher = false;
            boolean hasSmallerAfterHigher = false;
            
            // 检查后面是否有更高的PFR
            for (int j = i + 1; j < n; j++) {
                if (PFR[j] > PFR[i]) {
                    hasHigher = true;
                    // 检查这个更高的PFR后面是否有更小的PFR
                    for (int k = j + 1; k < n; k++) {
                        if (PFR[k] < PFR[j]) {
                            hasSmallerAfterHigher = true;
                            break;
                        }
                    }
                    break;
                }
            }
            
            if (!hasHigher) {
                // 后面没有更高的PFR，得15分
                totalScore += 15;
            } else if (hasSmallerAfterHigher) {
                // 后面有更高的PFR，且那个更高的PFR后面有更小的PFR，得5分
                totalScore += 5;
            } else {
                // 后面有更高的PFR，但那个更高的PFR后面没有更小的PFR，得10分
                totalScore += 10;
            }
        }
        
        return totalScore;
    }
}`
  },
  {
    id: 'example-75',
    englishTitle: 'Mouse in Maze',
    chineseTitle: '迷宫中的老鼠',
    englishDescription: 'A mouse is placed in a maze. There is a huge chunk of cheese somewhere in the maze. The maze is represented as an N x M grid of integers where 0 represents a wall, 1 represents the path where the mouse can move and 9 represents the chunk of cheese. The mouse starts at the top left corner at (0,0). Write an algorithm to output 1 if the mouse can reach the chunk of cheese, else output 0.',
    chineseDescription: '一只老鼠被放置在迷宫中。迷宫中的某个地方有一大块奶酪。迷宫被表示为一个N x M的整数网格，其中0表示墙壁，1表示老鼠可以移动的路径，9表示奶酪块。老鼠从左上角（0,0）开始。编写一个算法，如果老鼠能够到达奶酪块，则输出1，否则输出0。',
    examples: [
      {
        input: 'maze = [[1, 0, 0, 0], [1, 1, 0, 1], [0, 1, 0, 0], [1, 1, 1, 9]]',
        output: '1'
      },
      {
        input: 'maze = [[1, 0, 0, 0], [1, 1, 0, 1], [0, 0, 0, 0], [1, 1, 1, 9]]',
        output: '0'
      }
    ],
    code: `function mouseInMaze(maze) {
  if (maze.length === 0 || maze[0].length === 0) {
    return 0;
  }
  
  const N = maze.length;
  const M = maze[0].length;
  const visited = Array(N).fill().map(() => Array(M).fill(false));
  
  // 深度优先搜索
  function dfs(i, j) {
    if (i < 0 || i >= N || j < 0 || j >= M || visited[i][j] || maze[i][j] === 0) {
      return false;
    }
    
    if (maze[i][j] === 9) {
      return true;
    }
    
    visited[i][j] = true;
    
    // 访问上下左右四个方向
    if (dfs(i - 1, j)) return true; // 上
    if (dfs(i + 1, j)) return true; // 下
    if (dfs(i, j - 1)) return true; // 左
    if (dfs(i, j + 1)) return true; // 右
    
    return false;
  }
  
  return dfs(0, 0) ? 1 : 0;
}`,
    javaCode: `public class Solution {
    public static int mouseInMaze(int[][] maze) {
        if (maze.length == 0 || maze[0].length == 0) {
            return 0;
        }
        
        int N = maze.length;
        int M = maze[0].length;
        boolean[][] visited = new boolean[N][M];
        
        // 深度优先搜索
        return dfs(0, 0, N, M, maze, visited) ? 1 : 0;
    }
    
    private static boolean dfs(int i, int j, int N, int M, int[][] maze, boolean[][] visited) {
        if (i < 0 || i >= N || j < 0 || j >= M || visited[i][j] || maze[i][j] == 0) {
            return false;
        }
        
        if (maze[i][j] == 9) {
            return true;
        }
        
        visited[i][j] = true;
        
        // 访问上下左右四个方向
        if (dfs(i - 1, j, N, M, maze, visited)) return true; // 上
        if (dfs(i + 1, j, N, M, maze, visited)) return true; // 下
        if (dfs(i, j - 1, N, M, maze, visited)) return true; // 左
        if (dfs(i, j + 1, N, M, maze, visited)) return true; // 右
        
        return false;
    }
}`
  },
  {
    id: 'example-76',
    englishTitle: 'Maximum Salary for Internship',
    chineseTitle: '实习的最大薪资',
    englishDescription: 'Stephen is doing an internship in a company for N days. Each day, he may choose either an easy task or a difficult task. He may also choose to perform no task at all. He chooses a difficult task on days when and only when he did not perform any work the previous day. The amount paid by the company for both the easy and difficult tasks can vary each day, but the company always pays more for difficult tasks. Write an algorithm to help Stephen earn the maximum salary.',
    chineseDescription: 'Stephen在一家公司实习N天。每天，他可以选择简单任务或困难任务。他也可以选择不执行任何任务。他在且仅在他前一天没有执行任何工作的情况下选择困难任务。公司为简单任务和困难任务支付的金额每天可能不同，但公司总是为困难任务支付更多。编写一个算法来帮助Stephen获得最大薪资。',
    examples: [
      {
        input: 'N = 3, easy = [10, 1, 10], difficult = [50, 5, 50]',
        output: '110'
      },
      {
        input: 'N = 2, easy = [10, 20], difficult = [20, 30]',
        output: '30'
      }
    ],
    code: `function maximumSalary(N, easy, difficult) {
  // dp[i][0]：第i天不工作的最大薪资
  // dp[i][1]：第i天做简单任务的最大薪资
  // dp[i][2]：第i天做困难任务的最大薪资
  const dp = Array(N).fill().map(() => Array(3).fill(0));
  
  dp[0][0] = 0;
  dp[0][1] = easy[0];
  dp[0][2] = difficult[0];
  
  for (let i = 1; i < N; i++) {
    // 第i天不工作，可以从第i-天的任何状态转移而来
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1], dp[i-1][2]);
    
    // 第i天做简单任务，可以从第i-1天的任何状态转移而来
    dp[i][1] = Math.max(dp[i-1][0], dp[i-1][1], dp[i-1][2]) + easy[i];
    
    // 第i天做困难任务，只能从第i-1天不工作的状态转移而来
    dp[i][2] = dp[i-1][0] + difficult[i];
  }
  
  return Math.max(...dp[N-1]);
}`,
    javaCode: `public class Solution {
    public static int maximumSalary(int N, int[] easy, int[] difficult) {
        int[][] dp = new int[N][3];
        
        dp[0][0] = 0;
        dp[0][1] = easy[0];
        dp[0][2] = difficult[0];
        
        for (int i = 1; i < N; i++) {
            // 第i天不工作，可以从第i-1天的任何状态转移而来
            dp[i][0] = Math.max(Math.max(dp[i-1][0], dp[i-1][1]), dp[i-1][2]);
            
            // 第i天做简单任务，可以从第i-1天的任何状态转移而来
            dp[i][1] = Math.max(Math.max(dp[i-1][0], dp[i-1][1]), dp[i-1][2]) + easy[i];
            
            // 第i天做困难任务，只能从第i-1天不工作的状态转移而来
            dp[i][2] = dp[i-1][0] + difficult[i];
        }
        
        return Math.max(Math.max(dp[N-1][0], dp[N-1][1]), dp[N-1][2]);
    }
}`
  },
  {
    id: 'example-77',
    englishTitle: 'Area of Intersection of Two Circles',
    chineseTitle: '两个圆的相交面积',
    englishDescription: 'A student must solve an entire workbook of problems related to finding the area of intersection of two circles. Because the problems are all very similar, the student decides to write a program that can solve all these similar problems.',
    chineseDescription: '一个学生必须解决一整本与寻找两个圆的相交面积相关的问题。因为这些问题都非常相似，所以学生决定编写一个可以解决所有这些类似问题的程序。',
    examples: [
      {
        input: 'circle1 = [0, 0, 2], circle2 = [3, 0, 2]',
        output: '2.68'
      },
      {
        input: 'circle1 = [0, 0, 1], circle2 = [3, 0, 1]',
        output: '0.0'
      }
    ],
    code: `function areaOfIntersection(circle1, circle2) {
  const [x1, y1, r1] = circle1;
  const [x2, y2, r2] = circle2;
  
  // 计算两圆心之间的距离
  const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  
  // 情况1：两圆不相交
  if (d >= r1 + r2) {
    return 0;
  }
  
  // 情况2：一个圆完全包含另一个圆
  if (d <= Math.abs(r1 - r2)) {
    return Math.PI * Math.pow(Math.min(r1, r2), 2);
  }
  
  // 情况3：两圆部分相交
  const a = (Math.pow(r1, 2) - Math.pow(r2, 2) + Math.pow(d, 2)) / (2 * d);
  const h = Math.sqrt(Math.pow(r1, 2) - Math.pow(a, 2));
  
  const theta1 = 2 * Math.acos(a / r1);
  const theta2 = 2 * Math.acos((d - a) / r2);
  
  const area1 = 0.5 * Math.pow(r1, 2) * (theta1 - Math.sin(theta1));
  const area2 = 0.5 * Math.pow(r2, 2) * (theta2 - Math.sin(theta2));
  
  return parseFloat((area1 + area2).toFixed(2));
}`,
    javaCode: `public class Solution {
    public static double areaOfIntersection(double[] circle1, double[] circle2) {
        double x1 = circle1[0], y1 = circle1[1], r1 = circle1[2];
        double x2 = circle2[0], y2 = circle2[1], r2 = circle2[2];
        
        // 计算两圆心之间的距离
        double d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        
        // 情况1：两圆不相交
        if (d >= r1 + r2) {
            return 0;
        }
        
        // 情况2：一个圆完全包含另一个圆
        if (d <= Math.abs(r1 - r2)) {
            return Math.PI * Math.pow(Math.min(r1, r2), 2);
        }
        
        // 情况3：两圆部分相交
        double a = (Math.pow(r1, 2) - Math.pow(r2, 2) + Math.pow(d, 2)) / (2 * d);
        double h = Math.sqrt(Math.pow(r1, 2) - Math.pow(a, 2));
        
        double theta1 = 2 * Math.acos(a / r1);
        double theta2 = 2 * Math.acos((d - a) / r2);
        
        double area1 = 0.5 * Math.pow(r1, 2) * (theta1 - Math.sin(theta1));
        double area2 = 0.5 * Math.pow(r2, 2) * (theta2 - Math.sin(theta2));
        
        return Math.round((area1 + area2) * 100.0) / 100.0;
    }
}`
  },
  {
    id: 'example-78',
    englishTitle: 'Alien Handshake Communication',
    chineseTitle: '外星人握手通信',
    englishDescription: 'An alien mothership is trying to communicate with Earth. It follows a particular handshake mechanism to initiate the conversation. It sends a stream of numbers to Earth and expects a particular set of numbers in return, to complete the handshake. If the stream contains N numbers, then Earth needs to return the top M numbers from the stream, such that those M numbers contain the highest number of 1s when represented in their binary form. If two numbers contain the same number of 1s in their binary form, the larger number (in magnitude) should be selected first. Design an algorithm that will help carry out this communication.',
    chineseDescription: '一个外星母舰试图与地球通信。它遵循特定的握手机制来启动对话。它向地球发送一系列数字，并期望返回特定的数字集合，以完成握手。如果流包含N个数字，那么地球需要从流中返回前M个数字，使得这些M个数字在以二进制形式表示时包含最多的1。如果两个数字在其二进制形式中包含相同数量的1，则应首先选择较大的数字（按大小）。设计一个算法来帮助进行这种通信。',
    examples: [
      {
        input: 'numbers = [3, 7, 8, 1, 2], M = 2',
        output: '[7, 3]'
      },
      {
        input: 'numbers = [15, 16, 12, 4, 8], M = 3',
        output: '[15, 12, 8]'
      }
    ],
    code: `function alienHandshakeCommunication(numbers, M) {
  // 计算数字的二进制中1的个数
  function countOnes(n) {
    return n.toString(2).split('1').length - 1;
  }
  
  // 按二进制中1的个数降序排序，如果1的个数相同，则按数值降序排序
  numbers.sort((a, b) => {
    const onesA = countOnes(a);
    const onesB = countOnes(b);
    if (onesA !== onesB) {
      return onesB - onesA;
    }
    return b - a;
  });
  
  // 返回前M个数字
  return numbers.slice(0, M);
}`,
    javaCode: `import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Solution {
    public static List<Integer> alienHandshakeCommunication(int[] numbers, int M) {
        // 按二进制中1的个数降序排序，如果1的个数相同，则按数值降序排序
        List<Integer> list = new ArrayList<>();
        for (int num : numbers) {
            list.add(num);
        }
        
        Collections.sort(list, new Comparator<Integer>() {
            public int compare(Integer a, Integer b) {
                int onesA = countOnes(a);
                int onesB = countOnes(b);
                if (onesA != onesB) {
                    return onesB - onesA; // 按1的个数降序
                }
                return b - a; // 按数值降序
            }
            
            private int countOnes(int n) {
                String binary = Integer.toBinaryString(n);
                int count = 0;
                for (char c : binary.toCharArray()) {
                    if (c == '1') {
                        count++;
                    }
                }
                return count;
            }
        });
        
        // 返回前M个数字
        return list.subList(0, M);
    }
    
    private static int countOnes(int n) {
        String binary = Integer.toBinaryString(n);
        int count = 0;
        for (char c : binary.toCharArray()) {
            if (c == '1') {
                count++;
            }
        }
        return count;
    }
}`
  },
  {
    id: 'example-79',
    englishTitle: 'Minimum Straight Line Routes',
    chineseTitle: '最小直线路线数',
    englishDescription: 'A transportation company wishes to begin service in the city of Nazeriana. The company has a base location where it parks all its vehicles. They have identified some pickup locations where the vehicles will collect passengers. Now the company wishes to identify the straight line routes from the base location to the pickup locations. They wish to minimize the number of routes while ensuring that all the pickup locations are covered. Write an algorithm to help the company identify the minimum number of straight line routes from the base location to the pickup locations, covering every pickup location.',
    chineseDescription: '一家运输公司希望在Nazeriana市开始服务。该公司有一个基地位置，停放所有车辆。他们已经确定了一些接送地点，车辆将在这些地点收集乘客。现在公司希望确定从基地位置到接送地点的直线路线。他们希望在确保覆盖所有接送地点的同时，最小化路线数量。编写一个算法来帮助公司确定从基地位置到接送地点的最小直线路线数，覆盖每个接送地点。',
    examples: [
      {
        input: 'base = [0, 0], pickups = [[1, 1], [2, 2], [3, 3], [1, 2], [2, 1]]',
        output: '2'
      },
      {
        input: 'base = [0, 0], pickups = [[1, 0], [2, 0], [3, 0], [0, 1], [0, 2]]',
        output: '2'
      }
    ],
    code: `function minimumStraightLineRoutes(base, pickups) {
  if (pickups.length === 0) {
    return 0;
  }
  
  // 计算从基地到每个接送点的斜率
  const slopes = new Set();
  
  for (const pickup of pickups) {
    const dx = pickup[0] - base[0];
    const dy = pickup[1] - base[1];
    
    // 计算斜率的最简形式
    let slope;
    if (dx === 0) {
      slope = 'vertical'; // 垂直直线
    } else if (dy === 0) {
      slope = 'horizontal'; // 水平直线
    } else {
      // 计算最大公约数
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      const sign = (dx * dy) < 0 ? -1 : 1;
      const absGcd = gcd(Math.abs(dx), Math.abs(dy));
      slope = sign * (Math.abs(dy) / absGcd) + '/' + (Math.abs(dx) / absGcd);
    }
    
    slopes.add(slope);
  }
  
  return slopes.size;
}`,
    javaCode: `import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    public static int minimumStraightLineRoutes(List<Integer> base, List<List<Integer>> pickups) {
        if (pickups.size() == 0) {
            return 0;
        }
        
        // 计算从基地到每个接送点的斜率
        Set<String> slopes = new HashSet<>();
        
        for (List<Integer> pickup : pickups) {
            int dx = pickup.get(0) - base.get(0);
            int dy = pickup.get(1) - base.get(1);
            
            // 计算斜率的最简形式
            String slope;
            if (dx == 0) {
                slope = "vertical"; // 垂直直线
            } else if (dy == 0) {
                slope = "horizontal"; // 水平直线
            } else {
                // 计算最大公约数
                int gcd = gcd(Math.abs(dx), Math.abs(dy));
                int sign = (dx * dy) < 0 ? -1 : 1;
                slope = (sign * Math.abs(dy) / gcd) + "/" + (Math.abs(dx) / gcd);
            }
            
            slopes.add(slope);
        }
        
        return slopes.size();
    }
    
    private static int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }
}`
  },
  {
    id: 'example-80',
    englishTitle: 'Maximize Consecutive Normal Readings',
    chineseTitle: '最大化连续正常读数',
    englishDescription: 'A big bio-research project is going on. The scientists involved are testing a new serum. They are performing initial research on animals, noting the effects of the serum, before attempting trials on actual human beings. The main criterion in their test is body temperature. If body temperature is above or below a certain parameter after receiving the serum, the scientists will note it as zero. If it is within the normal level, they will note it as one. After completing all the readings they can change the abnormal body temperatures back to a normal level but only for K times, so that the possible number of consecutive normal readings is maximised. The scientists wish to find the number of different ways to change the readings so as to get the maximized consecutive normal reading. You are given all the readings of the scientists. Write an algorithm to find how many consecutive times the temperature reading can be of a normal level.',
    chineseDescription: '一个大型生物研究项目正在进行中。参与的科学家正在测试一种新的血清。他们在尝试对实际人类进行试验之前，正在对动物进行初步研究，记录血清的效果。他们测试的主要标准是体温。如果体温在接受血清后高于或低于某个参数，科学家会将其记录为零。如果在正常水平内，他们会将其记录为一。完成所有读数后，他们可以将异常体温改回正常水平，但只能改K次，以便最大化连续正常读数的可能数量。科学家希望找到不同的方法来更改读数，以获得最大化的连续正常读数。你获得了科学家的所有读数。编写一个算法来找出体温读数可以连续多少次处于正常水平。',
    examples: [
      {
        input: 'readings = [1, 0, 0, 1, 0, 1, 0, 1], K = 2',
        output: '7'
      },
      {
        input: 'readings = [0, 0, 0, 1], K = 2',
        output: '3'
      }
    ],
    code: `function maximizeConsecutiveNormalReadings(readings, K) {
  let left = 0;
  let maxLength = 0;
  let zeroCount = 0;
  
  for (let right = 0; right < readings.length; right++) {
    // 如果当前读数是异常的（0），增加零计数
    if (readings[right] === 0) {
      zeroCount++;
    }
    
    // 如果零计数超过K，移动左指针
    while (zeroCount > K) {
      if (readings[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    
    // 更新最大长度
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}`,
    javaCode: `public class Solution {
    public static int maximizeConsecutiveNormalReadings(int[] readings, int K) {
        int left = 0;
        int maxLength = 0;
        int zeroCount = 0;
        
        for (int right = 0; right < readings.length; right++) {
            // 如果当前读数是异常的（0），增加零计数
            if (readings[right] == 0) {
                zeroCount++;
            }
            
            // 如果零计数超过K，移动左指针
            while (zeroCount > K) {
                if (readings[left] == 0) {
                    zeroCount--;
                }
                left++;
            }
            
            // 更新最大长度
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}`
  },
  {
    id: 'example-81',
    englishTitle: 'Convert to Palindromic List',
    chineseTitle: '转换为回文列表',
    englishDescription: 'You are given a non-empty list of positive integers. You can sum any two consecutive elements to form a single element. The result thus obtained can be reused further and this process can be repeated any number of times to convert the given list into a palindromic list of maximum length. Write an algorithm to convert this list into a palindromic list of maximum length.',
    chineseDescription: '给你一个非空的正整数列表。你可以将任何两个连续的元素相加形成一个单一的元素。这样得到的结果可以进一步重用，并且这个过程可以重复任意次数，以将给定的列表转换为最大长度的回文列表。编写一个算法来将这个列表转换为最大长度的回文列表。',
    examples: [
      {
        input: 'nums = [1, 2, 3, 2, 1]',
        output: '[1, 2, 3, 2, 1]'
      },
      {
        input: 'nums = [1, 3, 2, 1]',
        output: '[1, 3, 3, 1]'
      }
    ],
    code: `function convertToPalindromicList(nums) {
  // 检查是否已经是回文
  function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] !== arr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  
  // 如果已经是回文，直接返回
  if (isPalindrome(nums)) {
    return nums;
  }
  
  // 尝试合并左边的连续元素
  for (let i = 0; i < nums.length - 1; i++) {
    const newNums = [...nums];
    newNums[i] += newNums[i + 1];
    newNums.splice(i + 1, 1);
    if (isPalindrome(newNums)) {
      return newNums;
    }
  }
  
  // 尝试合并右边的连续元素
  for (let i = nums.length - 1; i > 0; i--) {
    const newNums = [...nums];
    newNums[i] += newNums[i - 1];
    newNums.splice(i - 1, 1);
    if (isPalindrome(newNums)) {
      return newNums;
    }
  }
  
  // 如果无法通过一次合并得到回文，尝试递归
  let result = [];
  let maxLength = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
    const newNums = [...nums];
    newNums[i] += newNums[i + 1];
    newNums.splice(i + 1, 1);
    const temp = convertToPalindromicList(newNums);
    if (temp.length > maxLength) {
      maxLength = temp.length;
      result = temp;
    }
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static List<Integer> convertToPalindromicList(List<Integer> nums) {
        // 检查是否已经是回文
        if (isPalindrome(nums)) {
            return new ArrayList<>(nums);
        }
        
        // 尝试合并左边的连续元素
        for (int i = 0; i < nums.size() - 1; i++) {
            List<Integer> newNums = new ArrayList<>(nums);
            newNums.set(i, newNums.get(i) + newNums.get(i + 1));
            newNums.remove(i + 1);
            if (isPalindrome(newNums)) {
                return newNums;
            }
        }
        
        // 尝试合并右边的连续元素
        for (int i = nums.size() - 1; i > 0; i--) {
            List<Integer> newNums = new ArrayList<>(nums);
            newNums.set(i, newNums.get(i) + newNums.get(i - 1));
            newNums.remove(i - 1);
            if (isPalindrome(newNums)) {
                return newNums;
            }
        }
        
        // 如果无法通过一次合并得到回文，尝试递归
        List<Integer> result = new ArrayList<>();
        int maxLength = 0;
        
        for (int i = 0; i < nums.size() - 1; i++) {
            List<Integer> newNums = new ArrayList<>(nums);
            newNums.set(i, newNums.get(i) + newNums.get(i + 1));
            newNums.remove(i + 1);
            List<Integer> temp = convertToPalindromicList(newNums);
            if (temp.size() > maxLength) {
                maxLength = temp.size();
                result = temp;
            }
        }
        
        return result;
    }
    
    private static boolean isPalindrome(List<Integer> arr) {
        int left = 0;
        int right = arr.size() - 1;
        while (left < right) {
            if (!arr.get(left).equals(arr.get(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}`
  },
  {
    id: 'example-82',
    englishTitle: 'Highest Pyramid',
    chineseTitle: '最高金字塔',
    englishDescription: 'The government of UtmostLand wants to create the highest and strongest pyramid. The civil engineer has ordered a special type of cuboid rock block. These blocks were very costly, so the government approved the purchase of only N number of rock blocks. The blocks are of various widths, and each block has a unit height. The design team will arrange these blocks in such a way that the total width and number of blocks at one level is less than that of the level below it. With these conditions, the team must construct the pyramid to reach the highest height in accordance with the government decree. Write an algorithm to find the height of the pyramid that the team can build.',
    chineseDescription: 'UtmostLand政府想要创建最高和最坚固的金字塔。土木工程师订购了一种特殊类型的长方体岩石块。这些块非常昂贵，所以政府只批准购买N个岩石块。块的宽度各不相同，每个块的高度为单位高度。设计团队将以这样的方式排列这些块，使得一层的总宽度和块数小于下一层的总宽度和块数。在这些条件下，团队必须建造金字塔以达到政府法令规定的最高高度。编写一个算法来找出团队可以建造的金字塔的高度。',
    examples: [
      {
        input: 'N = 10',
        output: '4'
      },
      {
        input: 'N = 1',
        output: '1'
      }
    ],
    code: `function highestPyramid(N) {
  let height = 0;
  let total = 0;
  
  while (total + (height + 1) * (height + 2) / 2 <= N) {
    height++;
    total += height * (height + 1) / 2;
  }
  
  return height;
}`,
    javaCode: `public class Solution {
    public static int highestPyramid(int N) {
        int height = 0;
        int total = 0;
        
        while (total + (height + 1) * (height + 2) / 2 <= N) {
            height++;
            total += height * (height + 1) / 2;
        }
        
        return height;
    }
}`
  },
  {
    id: 'example-83',
    englishTitle: 'Largest House Area',
    chineseTitle: '最大房屋面积',
    englishDescription: 'The city authorities conduct a study of the houses in a residential area for a city planning scheme. The area is depicted in an aerial view and divided into an N x M grid. If a grid cell contains some part of a house roof, then it is assigned the value 1; otherwise, the cell represents a vacant plot and is assigned the value 0. Clusters of adjacent grid cells with value 1 represent a single house. Diagonally placed grids with value 1 do not represent a single house. The area of a house is the number of 1s that it spans. Write an algorithm to find the area of the largest house.',
    chineseDescription: '城市当局对住宅区的房屋进行研究，用于城市规划方案。该区域在鸟瞰图中被描绘并划分为N x M网格。如果网格单元包含房屋屋顶的一部分，则被分配值1；否则，该单元表示空地，被分配值0。值为1的相邻网格单元集群表示单个房屋。对角放置的值为1的网格不表示单个房屋。房屋的面积是它跨越的1的数量。编写一个算法来找出最大房屋的面积。',
    examples: [
      {
        input: 'grid = [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]',
        output: '4'
      },
      {
        input: 'grid = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]',
        output: '1'
      }
    ],
    code: `function largestHouseArea(grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  
  const N = grid.length;
  const M = grid[0].length;
  const visited = Array(N).fill().map(() => Array(M).fill(false));
  let maxArea = 0;
  
  // 深度优先搜索
  function dfs(i, j) {
    if (i < 0 || i >= N || j < 0 || j >= M || visited[i][j] || grid[i][j] === 0) {
      return 0;
    }
    
    visited[i][j] = true;
    let area = 1;
    
    // 访问上下左右四个方向
    area += dfs(i - 1, j); // 上
    area += dfs(i + 1, j); // 下
    area += dfs(i, j - 1); // 左
    area += dfs(i, j + 1); // 右
    
    return area;
  }
  
  // 遍历网格
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && grid[i][j] === 1) {
        const area = dfs(i, j);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  
  return maxArea;
}`,
    javaCode: `public class Solution {
    public static int largestHouseArea(int[][] grid) {
        if (grid.length == 0 || grid[0].length == 0) {
            return 0;
        }
        
        int N = grid.length;
        int M = grid[0].length;
        boolean[][] visited = new boolean[N][M];
        int maxArea = 0;
        
        // 深度优先搜索
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (visited[i][j] == false && grid[i][j] == 1) {
                    int area = dfs(i, j, N, M, grid, visited);
                    maxArea = Math.max(maxArea, area);
                }
            }
        }
        
        return maxArea;
    }
    
    private static int dfs(int i, int j, int N, int M, int[][] grid, boolean[][] visited) {
        if (i < 0 || i >= N || j < 0 || j >= M || visited[i][j] || grid[i][j] == 0) {
            return 0;
        }
        
        visited[i][j] = true;
        int area = 1;
        
        // 访问上下左右四个方向
        area += dfs(i - 1, j, N, M, grid, visited); // 上
        area += dfs(i + 1, j, N, M, grid, visited); // 下
        area += dfs(i, j - 1, N, M, grid, visited); // 左
        area += dfs(i, j + 1, N, M, grid, visited); // 右
        
        return area;
    }
}`
  },
  {
    id: 'example-85',
    englishTitle: 'Maximum CEO Attendance',
    chineseTitle: '最大CEO出席人数',
    englishDescription: 'A convention center is hosting a meeting of large firms, which N number of CEOs will be attending. Each CEO is assigned an invitation ID from 0 to N-1. Each CEO has some favorite CEO whom they like. They will attend the meeting only if they can be seated next to the person they like. You are asked to plan this seating arrangement. Write an algorithm to find the maximum number of CEOs who will attend the meeting.',
    chineseDescription: '一个会议中心正在举办大型公司的会议，N位CEO将参加。每位CEO被分配一个从0到N-1的邀请ID。每位CEO都有一些他们喜欢的CEO。他们只有在能够坐在他们喜欢的人旁边的情况下才会参加会议。你被要求计划这个座位安排。编写一个算法来找出将参加会议的最大CEO人数。',
    examples: [
      {
        input: 'N = 3, favorites = [1, 2, 0]',
        output: '3'
      },
      {
        input: 'N = 4, favorites = [1, 2, 3, 1]',
        output: '3'
      }
    ],
    code: `function maximumCEOAttendance(N, favorites) {
  // 构建图
  const graph = new Map();
  for (let i = 0; i < N; i++) {
    graph.set(i, favorites[i]);
  }
  
  const visited = new Array(N).fill(false);
  let maxAttendance = 0;
  
  // 寻找环
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      const path = [];
      let current = i;
      
      while (!visited[current]) {
        visited[current] = true;
        path.push(current);
        current = graph.get(current);
      }
      
      // 检查是否形成环
      const index = path.indexOf(current);
      if (index !== -1) {
        const cycle = path.slice(index);
        maxAttendance = Math.max(maxAttendance, cycle.length);
      }
    }
  }
  
  return maxAttendance;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public static int maximumCEOAttendance(int N, List<Integer> favorites) {
        // 构建图
        Map<Integer, Integer> graph = new HashMap<>();
        for (int i = 0; i < N; i++) {
            graph.put(i, favorites.get(i));
        }
        
        boolean[] visited = new boolean[N];
        int maxAttendance = 0;
        
        // 寻找环
        for (int i = 0; i < N; i++) {
            if (!visited[i]) {
                List<Integer> path = new ArrayList<>();
                int current = i;
                
                while (!visited[current]) {
                    visited[current] = true;
                    path.add(current);
                    current = graph.get(current);
                }
                
                // 检查是否形成环
                int index = path.indexOf(current);
                if (index != -1) {
                    int cycle = path.size() - index;
                    maxAttendance = Math.max(maxAttendance, cycle);
                }
            }
        }
        
        return maxAttendance;
    }
}`
  },
  {
    id: 'example-86',
    englishTitle: 'First Meat Pizza Order',
    chineseTitle: '第一个 meat 披萨订单',
    englishDescription: 'A pizza shop makes serves both vegan pizza and meat pizza. Customers place N orders at the shop. Their order number is printed on their bill. The shop displays K out of N orders (both vegan and meat) on their display screen at any given time. The pizza shop is very famous and they receive many orders. To avoid confusion, vegan pizza orders are represented by positive numbers and meat pizza orders are represented by negative numbers on the screen. The orders are served in the order in which they are displayed on the screen. Each time an order is ready, its number is removed from the display screen and a new order is added to the display at the end of the list. A couple has arrived with their child Billy. Billy is a very naughty child. To keep him occupied, his parents tell him to make a list of the first meat pizza that appear in each set of K orders displayed on the shop\'s display screen. Write an algorithm to help Billy make a list of the first meat based pizza order numbers displayed on the screen each time an order is delivered to a customer.',
    chineseDescription: '一家披萨店提供素食披萨和肉类披萨。顾客在店里下了N个订单。他们的订单号印在账单上。商店在任何给定时间在显示屏上显示N个订单中的K个（包括素食和肉类）。这家披萨店非常有名，他们收到了许多订单。为了避免混淆，素食披萨订单在屏幕上用正数表示，肉类披萨订单用负数表示。订单按照它们在屏幕上显示的顺序提供。每次订单准备好后，其号码会从显示屏上移除，新订单会添加到列表末尾显示。一对夫妇带着他们的孩子Billy来了。Billy是一个非常顽皮的孩子。为了让他忙碌，他的父母告诉他列出商店显示屏上显示的每组K个订单中出现的第一个肉类披萨。编写一个算法来帮助Billy列出每次向顾客交付订单时屏幕上显示的第一个基于肉类的披萨订单号。',
    examples: [
      {
        input: 'orders = [1, -2, 3, -4, 5], K = 3',
        output: '[-2, -2, -4]'
      },
      {
        input: 'orders = [-1, 2, -3, 4, -5], K = 2',
        output: '[-1, -3, -3, -5]'
      }
    ],
    code: `function firstMeatPizzaOrder(orders, K) {
  const result = [];
  const display = [];
  
  // 初始化显示屏幕
  for (let i = 0; i < Math.min(K, orders.length); i++) {
    display.push(orders[i]);
  }
  
  // 处理初始显示
  let firstMeat = null;
  for (const order of display) {
    if (order < 0) {
      firstMeat = order;
      break;
    }
  }
  if (firstMeat !== null) {
    result.push(firstMeat);
  }
  
  // 处理后续订单
  for (let i = K; i < orders.length; i++) {
    // 移除第一个订单
    display.shift();
    // 添加新订单
    display.push(orders[i]);
    
    // 寻找第一个肉类订单
    firstMeat = null;
    for (const order of display) {
      if (order < 0) {
        firstMeat = order;
        break;
      }
    }
    if (firstMeat !== null) {
      result.push(firstMeat);
    }
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Solution {
    public static List<Integer> firstMeatPizzaOrder(List<Integer> orders, int K) {
        List<Integer> result = new ArrayList<>();
        LinkedList<Integer> display = new LinkedList<>();
        
        // 初始化显示屏幕
        for (int i = 0; i < Math.min(K, orders.size()); i++) {
            display.add(orders.get(i));
        }
        
        // 处理初始显示
        Integer firstMeat = null;
        for (int order : display) {
            if (order < 0) {
                firstMeat = order;
                break;
            }
        }
        if (firstMeat != null) {
            result.add(firstMeat);
        }
        
        // 处理后续订单
        for (int i = K; i < orders.size(); i++) {
            // 移除第一个订单
            display.poll();
            // 添加新订单
            display.add(orders.get(i));
            
            // 寻找第一个肉类订单
            firstMeat = null;
            for (int order : display) {
                if (order < 0) {
                    firstMeat = order;
                    break;
                }
            }
            if (firstMeat != null) {
                result.add(firstMeat);
            }
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-87',
    englishTitle: 'Group ID Calculation',
    chineseTitle: '组ID计算',
    englishDescription: 'Mary, a physical education teacher, divides her students into different groups and assigns an ID to each group. For the group ID, she asks the students to stand in a queue. Each student in the class has a performance factor (PFR). She assigns scores to the students in an unusual way based on their PFR. She gives a score of 5 to a student behind whom is standing at least one student with a higher PFR, behind whom is standing at least one student with a smaller PFR. Next, she gives a score of 10 to a student behind whom is standing a student with a higher PFR, behind whom no student with smaller PFR is standing. Finally, she gives a score of 15 to a student behind whom is standing no student with a higher PFR. The group ID is the sum of scores of the students in the group. Write an algorithm to find the group ID of a group of students.',
    chineseDescription: 'Mary是一名体育教师，她将学生分成不同的小组，并为每个小组分配一个ID。对于小组ID，她要求学生排成队列。班上的每个学生都有一个表现因素（PFR）。她根据学生的PFR以不同寻常的方式为学生分配分数。她给一个学生5分，如果在他后面至少有一个PFR更高的学生，而在那个学生后面至少有一个PFR更小的学生。接下来，她给一个学生10分，如果在他后面有一个PFR更高的学生，而在那个学生后面没有PFR更小的学生。最后，她给一个学生15分，如果在他后面没有PFR更高的学生。小组ID是小组中学生分数的总和。编写一个算法来找到一组学生的小组ID。',
    examples: [
      {
        input: 'PFR = [3, 1, 4, 2]',
        output: '35'
      },
      {
        input: 'PFR = [5, 3, 2, 4, 1]',
        output: '45'
      }
    ],
    code: `function calculateGroupID(PFR) {
  const n = PFR.length;
  let totalScore = 0;
  
  for (let i = 0; i < n; i++) {
    let hasHigher = false;
    let hasSmallerAfterHigher = false;
    
    // 检查后面是否有更高的PFR
    for (let j = i + 1; j < n; j++) {
      if (PFR[j] > PFR[i]) {
        hasHigher = true;
        // 检查这个更高的PFR后面是否有更小的PFR
        for (let k = j + 1; k < n; k++) {
          if (PFR[k] < PFR[j]) {
            hasSmallerAfterHigher = true;
            break;
          }
        }
        break;
      }
    }
    
    if (!hasHigher) {
      // 后面没有更高的PFR，得15分
      totalScore += 15;
    } else if (hasSmallerAfterHigher) {
      // 后面有更高的PFR，且那个更高的PFR后面有更小的PFR，得5分
      totalScore += 5;
    } else {
      // 后面有更高的PFR，但那个更高的PFR后面没有更小的PFR，得10分
      totalScore += 10;
    }
  }
  
  return totalScore;
}`,
    javaCode: `public class Solution {
    public static int calculateGroupID(int[] PFR) {
        int n = PFR.length;
        int totalScore = 0;
        
        for (int i = 0; i < n; i++) {
            boolean hasHigher = false;
            boolean hasSmallerAfterHigher = false;
            
            // 检查后面是否有更高的PFR
            for (int j = i + 1; j < n; j++) {
                if (PFR[j] > PFR[i]) {
                    hasHigher = true;
                    // 检查这个更高的PFR后面是否有更小的PFR
                    for (int k = j + 1; k < n; k++) {
                        if (PFR[k] < PFR[j]) {
                            hasSmallerAfterHigher = true;
                            break;
                        }
                    }
                    break;
                }
            }
            
            if (!hasHigher) {
                // 后面没有更高的PFR，得15分
                totalScore += 15;
            } else if (hasSmallerAfterHigher) {
                // 后面有更高的PFR，且那个更高的PFR后面有更小的PFR，得5分
                totalScore += 5;
            } else {
                // 后面有更高的PFR，但那个更高的PFR后面没有更小的PFR，得10分
                totalScore += 10;
            }
        }
        
        return totalScore;
    }
}`
  },
  {
    id: 'example-88',
    englishTitle: 'Maximum Phones in Generation',
    chineseTitle: '一代人拥有的最大手机数量',
    englishDescription: 'Every member of a family owns at least one mobile phone. The head of the family keeps track of all the phone accounts. She has sketched out a tree figure wherein each node of the tree represents a member of the family and the value of the node represents the number of phones owned by that person. The head of the family assigns herself to be the root of this tree. She wishes to find the maximum number of phones owned by any single generation of family members. [She wishes to find which generation of the family owns the most phones.] All the members who belong to the same level of the tree are considered as belonging to the same generation. Write an algorithm to find the maximum number of phones owned by a single generation of family members.',
    chineseDescription: '家庭的每个成员至少拥有一部手机。家庭的负责人跟踪所有的电话账户。她绘制了一个树形图，其中树的每个节点代表家庭的一个成员，节点的值代表该人拥有的手机数量。家庭的负责人将自己指定为这棵树的根。她希望找出任何一代人拥有的最大手机数量。[她希望找出家庭的哪一代人拥有最多的手机。]属于树的同一级别的所有成员被视为属于同一代。编写一个算法来找出一代人拥有的最大手机数量。',
    examples: [
      {
        input: 'tree = [1, 2, 3, 4, 5, 6, 7]',
        output: '18'
      },
      {
        input: 'tree = [10, 5, 5]',
        output: '10'
      }
    ],
    code: `function maximumPhonesInGeneration(tree) {
  if (tree.length === 0) {
    return 0;
  }
  
  let maxPhones = 0;
  let level = 0;
  let currentLevelCount = 1;
  let nextLevelCount = 0;
  let currentLevelSum = 0;
  
  for (let i = 0; i < tree.length; i++) {
    currentLevelSum += tree[i];
    nextLevelCount += 2; // 每个节点有两个子节点
    
    currentLevelCount--;
    if (currentLevelCount === 0) {
      maxPhones = Math.max(maxPhones, currentLevelSum);
      currentLevelCount = nextLevelCount;
      nextLevelCount = 0;
      currentLevelSum = 0;
      level++;
    }
  }
  
  // 处理最后一层
  if (currentLevelSum > 0) {
    maxPhones = Math.max(maxPhones, currentLevelSum);
  }
  
  return maxPhones;
}`,
    javaCode: `public class Solution {
    public static int maximumPhonesInGeneration(int[] tree) {
        if (tree.length == 0) {
            return 0;
        }
        
        int maxPhones = 0;
        int level = 0;
        int currentLevelCount = 1;
        int nextLevelCount = 0;
        int currentLevelSum = 0;
        
        for (int i = 0; i < tree.length; i++) {
            currentLevelSum += tree[i];
            nextLevelCount += 2; // 每个节点有两个子节点
            
            currentLevelCount--;
            if (currentLevelCount == 0) {
                maxPhones = Math.max(maxPhones, currentLevelSum);
                currentLevelCount = nextLevelCount;
                nextLevelCount = 0;
                currentLevelSum = 0;
                level++;
            }
        }
        
        // 处理最后一层
        if (currentLevelSum > 0) {
            maxPhones = Math.max(maxPhones, currentLevelSum);
        }
        
        return maxPhones;
    }
}`
  },
  {
    id: 'example-89',
    englishTitle: 'Minimum Rotations for Longest Common Prefix',
    chineseTitle: '最长公共前缀的最小旋转次数',
    englishDescription: 'Peter has two strings of the same length. The first string is fixed and the second string is rotatable. In the left rotation, the first character is removed and added to the end of the string. In the right rotation, the last character is removed and added to the start of the string. Peter is interested in knowing the longest common prefix of both the strings. Write an algorithm to help Peter find the minimum number of rotations required to find the longest common prefix. If no prefix is common then output -1.',
    chineseDescription: 'Peter有两个长度相同的字符串。第一个字符串是固定的，第二个字符串是可旋转的。在左旋转中，第一个字符被移除并添加到字符串的末尾。在右旋转中，最后一个字符被移除并添加到字符串的开头。Peter对知道两个字符串的最长公共前缀感兴趣。编写一个算法来帮助Peter找到找到最长公共前缀所需的最小旋转次数。如果没有公共前缀，则输出-1。',
    examples: [
      {
        input: 's1 = "abcde", s2 = "cdeab"',
        output: '2'
      },
      {
        input: 's1 = "hello", s2 = "world"',
        output: '-1'
      }
    ],
    code: `function minRotationsForLongestPrefix(s1, s2) {
  if (s1.length !== s2.length) {
    return -1;
  }
  
  const n = s1.length;
  let maxPrefixLength = 0;
  let minRotations = -1;
  
  // 尝试所有可能的旋转位置
  for (let i = 0; i < n; i++) {
    // 计算当前旋转后的字符串
    const rotated = s2.slice(i) + s2.slice(0, i);
    
    // 计算公共前缀长度
    let prefixLength = 0;
    while (prefixLength < n && s1[prefixLength] === rotated[prefixLength]) {
      prefixLength++;
    }
    
    // 更新最大前缀长度和最小旋转次数
    if (prefixLength > maxPrefixLength) {
      maxPrefixLength = prefixLength;
      minRotations = i;
    } else if (prefixLength === maxPrefixLength && i < minRotations) {
      minRotations = i;
    }
  }
  
  return maxPrefixLength > 0 ? minRotations : -1;
}`,
    javaCode: `public class Solution {
    public static int minRotationsForLongestPrefix(String s1, String s2) {
        if (s1.length() != s2.length()) {
            return -1;
        }
        
        int n = s1.length();
        int maxPrefixLength = 0;
        int minRotations = -1;
        
        // 尝试所有可能的旋转位置
        for (int i = 0; i < n; i++) {
            // 计算当前旋转后的字符串
            String rotated = s2.substring(i) + s2.substring(0, i);
            
            // 计算公共前缀长度
            int prefixLength = 0;
            while (prefixLength < n && s1.charAt(prefixLength) == rotated.charAt(prefixLength)) {
                prefixLength++;
            }
            
            // 更新最大前缀长度和最小旋转次数
            if (prefixLength > maxPrefixLength) {
                maxPrefixLength = prefixLength;
                minRotations = i;
            } else if (prefixLength == maxPrefixLength && i < minRotations) {
                minRotations = i;
            }
        }
        
        return maxPrefixLength > 0 ? minRotations : -1;
    }
}`
  },
  {
    id: 'example-90',
    englishTitle: 'Minimum Distance to Server',
    chineseTitle: '到服务器的最小距离',
    englishDescription: 'An IT park consists of similar buildings. During the initial construction of the IT park, the telecom company "Nazania Communication" used some of the buildings for its servers. Now that the IT park has been fully developed, all the buildings need internet connections. The telecom company wants to connect each building to the nearest building where a server has already been set. To plan for this, the company creates a rectangular aerial view of the buildings in the IT park in the form of a M*N grid. Each cell of the grid represents a building. For all the buildings that do not have servers, the company wants to find the minimum number of buildings (horizontally and/or vertically) that separate the buildings that need internet connections from buildings that have servers. Write an algorithm to find the minimum number of buildings (horizontally and/or vertically) that separate the buildings that need internet connections from buildings that have servers.',
    chineseDescription: '一个IT园区由类似的建筑组成。在IT园区的初始建设期间，电信公司“Nazania Communication”使用了一些建筑作为其服务器。现在IT园区已经完全开发，所有建筑都需要互联网连接。电信公司希望将每个建筑连接到最近的已经设置了服务器的建筑。为了规划这一点，公司创建了IT园区建筑的矩形鸟瞰图，形式为M*N网格。网格的每个单元格代表一个建筑。对于所有没有服务器的建筑，公司希望找到将需要互联网连接的建筑与拥有服务器的建筑分开的最小建筑数量（水平和/或垂直）。编写一个算法来找到将需要互联网连接的建筑与拥有服务器的建筑分开的最小建筑数量（水平和/或垂直）。',
    examples: [
      {
        input: 'grid = [[0, 1, 0], [0, 0, 0], [0, 0, 1]]',
        output: '[[1, 0, 1], [2, 1, 1], [1, 1, 0]]'
      },
      {
        input: 'grid = [[1, 0, 0], [0, 0, 0], [0, 0, 1]]',
        output: '[[0, 1, 2], [1, 2, 1], [2, 1, 0]]'
      }
    ],
    code: `function minimumDistanceToServer(grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return [];
  }
  
  const M = grid.length;
  const N = grid[0].length;
  const result = Array(M).fill().map(() => Array(N).fill(-1));
  const queue = [];
  
  // 初始化队列，将所有服务器位置加入队列
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 1) {
        result[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }
  
  // 四个方向
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  // BFS
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && result[nx][ny] === -1) {
        result[nx][ny] = result[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  
  return result;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Solution {
    public static int[][] minimumDistanceToServer(int[][] grid) {
        if (grid.length == 0 || grid[0].length == 0) {
            return new int[][]{};
        }
        
        int M = grid.length;
        int N = grid[0].length;
        int[][] result = new int[M][N];
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                result[i][j] = -1;
            }
        }
        
        Queue<int[]> queue = new LinkedList<>();
        
        // 初始化队列，将所有服务器位置加入队列
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                if (grid[i][j] == 1) {
                    result[i][j] = 0;
                    queue.add(new int[]{i, j});
                }
            }
        }
        
        // 四个方向
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        // BFS
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int x = current[0];
            int y = current[1];
            
            for (int[] dir : directions) {
                int nx = x + dir[0];
                int ny = y + dir[1];
                
                if (nx >= 0 && nx < M && ny >= 0 && ny < N && result[nx][ny] == -1) {
                    result[nx][ny] = result[x][y] + 1;
                    queue.add(new int[]{nx, ny});
                }
            }
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-91',
    englishTitle: 'Minimum Time to Deliver Candy',
    chineseTitle: '交付糖果的最短时间',
    englishDescription: 'William is the owner of a candy shop. He uses a machine which takes few minutes to make one box of candies ready for delivery. He receives an order for some boxes of candy which he needs to deliver as soon as possible. He has a fixed amount of money to spend in order to make and deliver these boxes. To complete the order, he can either purchase candy boxes from one of the shops or he can purchase a new efficient machine or he can try to employ both the options together. If he purchases a new machine, will no longer have access to the old machine. Write an algorithm to find the minimum time in which William can deliver the order.',
    chineseDescription: 'William是一家糖果店的老板。他使用一台机器，这台机器需要几分钟时间来准备一盒糖果以便交付。他收到了一些糖果盒的订单，需要尽快交付。他有固定的金额可以用来制作和交付这些盒子。为了完成订单，他可以从其中一家商店购买糖果盒，或者购买一台新的高效机器，或者尝试同时使用这两种选择。如果他购买了新机器，将不再能够使用旧机器。编写一个算法来找出William可以交付订单的最短时间。',
    examples: [
      {
        input: 'order = 10, money = 100, oldMachineTime = 5, oldMachineCost = 10, newMachineTime = 2, newMachineCost = 50, shopPrice = 15',
        output: '20'
      },
      {
        input: 'order = 5, money = 50, oldMachineTime = 3, oldMachineCost = 5, newMachineTime = 1, newMachineCost = 30, shopPrice = 10',
        output: '5'
      }
    ],
    code: `function minimumTimeToDeliver(order, money, oldMachineTime, oldMachineCost, newMachineTime, newMachineCost, shopPrice) {
  let minTime = Infinity;
  
  // 选项1：只使用旧机器
  const maxOldBoxes = Math.floor(money / oldMachineCost);
  const oldBoxes = Math.min(maxOldBoxes, order);
  const oldTime = oldBoxes * oldMachineTime + (order - oldBoxes) * shopPrice;
  if (oldBoxes * oldMachineCost + (order - oldBoxes) * shopPrice <= money) {
    minTime = Math.min(minTime, oldTime);
  }
  
  // 选项2：购买新机器
  if (newMachineCost <= money) {
    const remainingMoney = money - newMachineCost;
    const maxNewBoxes = Math.floor(remainingMoney / oldMachineCost);
    const newBoxes = Math.min(maxNewBoxes, order);
    const newTime = newBoxes * newMachineTime + (order - newBoxes) * shopPrice;
    if (newMachineCost + newBoxes * oldMachineCost + (order - newBoxes) * shopPrice <= money) {
      minTime = Math.min(minTime, newTime);
    }
  }
  
  // 选项3：只从商店购买
  const shopCost = order * shopPrice;
  if (shopCost <= money) {
    minTime = Math.min(minTime, order * shopPrice);
  }
  
  return minTime === Infinity ? -1 : minTime;
}`,
    javaCode: `public class Solution {
    public static int minimumTimeToDeliver(int order, int money, int oldMachineTime, int oldMachineCost, int newMachineTime, int newMachineCost, int shopPrice) {
        int minTime = Integer.MAX_VALUE;
        
        // 选项1：只使用旧机器
        int maxOldBoxes = money / oldMachineCost;
        int oldBoxes = Math.min(maxOldBoxes, order);
        int oldTime = oldBoxes * oldMachineTime + (order - oldBoxes) * shopPrice;
        if (oldBoxes * oldMachineCost + (order - oldBoxes) * shopPrice <= money) {
            minTime = Math.min(minTime, oldTime);
        }
        
        // 选项2：购买新机器
        if (newMachineCost <= money) {
            int remainingMoney = money - newMachineCost;
            int maxNewBoxes = remainingMoney / oldMachineCost;
            int newBoxes = Math.min(maxNewBoxes, order);
            int newTime = newBoxes * newMachineTime + (order - newBoxes) * shopPrice;
            if (newMachineCost + newBoxes * oldMachineCost + (order - newBoxes) * shopPrice <= money) {
                minTime = Math.min(minTime, newTime);
            }
        }
        
        // 选项3：只从商店购买
        int shopCost = order * shopPrice;
        if (shopCost <= money) {
            minTime = Math.min(minTime, order * shopPrice);
        }
        
        return minTime == Integer.MAX_VALUE ? -1 : minTime;
    }
}`
  },
  {
    id: 'example-92',
    englishTitle: 'Minimum Gas Stations',
    chineseTitle: '最少加油站',
    englishDescription: 'Mr. Henry is saving money to buy a new car. His old car gets low gas mileage. Moreover, its fuel efficiency has diminished over time. Presently, it takes one gallon of gasoline to go 1 mile of distance. He needs to drive to his office which is at D distance from his home. On his way to the office, there are N gas stations. Each gas station can only sell a specific amount of gasoline (in gallons) based on a limit determined by the government. (Note that in order to keep running the car it must have some gasoline in it at all times.) Write an algorithm to help Mr. Henry figure out the minimum number of gas stations at which he should stop to successfully reach his office. If it is not possible to reach the office, the output will be -1.',
    chineseDescription: 'Henry先生正在存钱买新车。他的旧车油耗很高。此外，随着时间的推移，其燃油效率已经降低。目前，行驶1英里的距离需要1加仑的汽油。他需要开车去办公室，办公室距离他家D距离。在去办公室的路上，有N个加油站。每个加油站只能根据政府确定的限制出售特定数量的汽油（以加仑为单位）。（请注意，为了保持汽车运行，它必须始终有一些汽油。）编写一个算法来帮助Henry先生找出他应该停靠的最少加油站数量，以成功到达办公室。如果无法到达办公室，输出将是-1。',
    examples: [
      {
        input: 'D = 100, N = 4, stations = [[10, 60], [20, 30], [30, 30], [60, 40]]',
        output: '2'
      },
      {
        input: 'D = 100, N = 1, stations = [[10, 50]]',
        output: '-1'
      }
    ],
    code: `function minimumGasStations(D, N, stations) {
  // 添加终点作为最后一个加油站
  stations.push([D, 0]);
  
  let currentFuel = 0;
  let stops = 0;
  let maxReach = 0;
  let i = 0;
  
  while (i <= N) {
    // 找到当前燃料可以到达的最远加油站
    while (i <= N && stations[i][0] <= maxReach) {
      // 更新当前可以获得的最大燃料
      if (stations[i][0] <= maxReach) {
        currentFuel = Math.max(currentFuel, maxReach - stations[i][0] + stations[i][1]);
      }
      i++;
    }
    
    // 无法到达下一个加油站
    if (i <= N && stations[i][0] > maxReach && currentFuel <= maxReach) {
      return -1;
    }
    
    // 到达终点
    if (i > N) {
      return stops;
    }
    
    // 加油
    stops++;
    maxReach = currentFuel;
  }
  
  return stops;
}`,
    javaCode: `import java.util.List;

public class Solution {
    public static int minimumGasStations(int D, int N, List<List<Integer>> stations) {
        // 添加终点作为最后一个加油站
        stations.add(List.of(D, 0));
        
        int currentFuel = 0;
        int stops = 0;
        int maxReach = 0;
        int i = 0;
        
        while (i <= N) {
            // 找到当前燃料可以到达的最远加油站
            while (i <= N && stations.get(i).get(0) <= maxReach) {
                // 更新当前可以获得的最大燃料
                if (stations.get(i).get(0) <= maxReach) {
                    currentFuel = Math.max(currentFuel, maxReach - stations.get(i).get(0) + stations.get(i).get(1));
                }
                i++;
            }
            
            // 无法到达下一个加油站
            if (i <= N && stations.get(i).get(0) > maxReach && currentFuel <= maxReach) {
                return -1;
            }
            
            // 到达终点
            if (i > N) {
                return stops;
            }
            
            // 加油
            stops++;
            maxReach = currentFuel;
        }
        
        return stops;
    }
}`
  },
  {
    id: 'example-93',
    englishTitle: 'Minimum Cost of Apples',
    chineseTitle: '苹果的最低成本',
    englishDescription: 'Josh went to the market to buy N apples. He found two shops, A and B, that sold apples in lots. He can buy any number of complete lots but he cannot buy loose apples. He is confused about the price and needs help to calculate the minimum cost of exactly N apples. Write an algorithm for Josh to calculate the minimum cost of exactly N apples.',
    chineseDescription: 'Josh去市场买N个苹果。他发现两个商店A和B，它们以批为单位出售苹果。他可以购买任意数量的完整批，但不能购买零散的苹果。他对价格感到困惑，需要帮助计算恰好N个苹果的最低成本。为Josh编写一个算法来计算恰好N个苹果的最低成本。',
    examples: [
      {
        input: 'N = 10, shopA = [3, 10], shopB = [4, 15]',
        output: '35'
      },
      {
        input: 'N = 5, shopA = [2, 5], shopB = [3, 8]',
        output: '13'
      }
    ],
    code: `function minimumCostOfApples(N, shopA, shopB) {
  const [aCount, aPrice] = shopA;
  const [bCount, bPrice] = shopB;
  let minCost = Infinity;
  
  // 尝试所有可能的A商店的批数
  for (let aLots = 0; aLots <= Math.ceil(N / aCount); aLots++) {
    const aApples = aLots * aCount;
    if (aApples >= N) {
      const cost = aLots * aPrice;
      if (cost < minCost) {
        minCost = cost;
      }
    } else {
      // 需要从B商店购买剩余的苹果
      const remaining = N - aApples;
      const bLots = Math.ceil(remaining / bCount);
      const cost = aLots * aPrice + bLots * bPrice;
      if (cost < minCost) {
        minCost = cost;
      }
    }
  }
  
  // 尝试所有可能的B商店的批数
  for (let bLots = 0; bLots <= Math.ceil(N / bCount); bLots++) {
    const bApples = bLots * bCount;
    if (bApples >= N) {
      const cost = bLots * bPrice;
      if (cost < minCost) {
        minCost = cost;
      }
    } else {
      // 需要从A商店购买剩余的苹果
      const remaining = N - bApples;
      const aLots = Math.ceil(remaining / aCount);
      const cost = bLots * bPrice + aLots * aPrice;
      if (cost < minCost) {
        minCost = cost;
      }
    }
  }
  
  return minCost;
}`,
    javaCode: `public class Solution {
    public static int minimumCostOfApples(int N, int[] shopA, int[] shopB) {
        int aCount = shopA[0], aPrice = shopA[1];
        int bCount = shopB[0], bPrice = shopB[1];
        int minCost = Integer.MAX_VALUE;
        
        // 尝试所有可能的A商店的批数
        for (int aLots = 0; aLots <= Math.ceil((double) N / aCount); aLots++) {
            int aApples = aLots * aCount;
            if (aApples >= N) {
                int cost = aLots * aPrice;
                if (cost < minCost) {
                    minCost = cost;
                }
            } else {
                // 需要从B商店购买剩余的苹果
                int remaining = N - aApples;
                int bLots = (int) Math.ceil((double) remaining / bCount);
                int cost = aLots * aPrice + bLots * bPrice;
                if (cost < minCost) {
                    minCost = cost;
                }
            }
        }
        
        // 尝试所有可能的B商店的批数
        for (int bLots = 0; bLots <= Math.ceil((double) N / bCount); bLots++) {
            int bApples = bLots * bCount;
            if (bApples >= N) {
                int cost = bLots * bPrice;
                if (cost < minCost) {
                    minCost = cost;
                }
            } else {
                // 需要从A商店购买剩余的苹果
                int remaining = N - bApples;
                int aLots = (int) Math.ceil((double) remaining / aCount);
                int cost = bLots * bPrice + aLots * aPrice;
                if (cost < minCost) {
                    minCost = cost;
                }
            }
        }
        
        return minCost;
    }
}`
  },
  {
    id: 'example-94',
    englishTitle: 'Shortest Path for Salesperson',
    chineseTitle: '销售人员的最短路径',
    englishDescription: 'Gregor is a salesperson employed in the city of Cartesia, which is an infinite plane, the locations of which follow the Cartesian coordinate system. There are N+1 retailers in the city. N retailers, with positions 1 to N, have the coordinates (X , 0), (X , 0) to (X , 0). The head retailer, with position N+1, is located at the coordinate (X , Y ). Gregor wishes to find the shortest possible path from a given K retailer to all the other retailers in the city. He may visit a retailer twice along his route. The distance between any two retailers is the same as the distance between two points in the Cartesian coordinate system. Write an algorithm to help Gregor to find the minimum distance of a path that will allow him to visit all the given retailers.',
    chineseDescription: 'Gregor是Cartesia市的一名销售人员，Cartesia是一个无限平面，其位置遵循笛卡尔坐标系。该市有N+1家零售商。N家零售商，位置1到N，坐标为(X , 0), (X , 0)到(X , 0)。总店，位置N+1，位于坐标(X , Y )。Gregor希望找到从给定的K零售商到城市中所有其他零售商的最短可能路径。他可以在路线上访问零售商两次。任何两个零售商之间的距离与笛卡尔坐标系中两点之间的距离相同。编写一个算法来帮助Gregor找到允许他访问所有给定零售商的路径的最小距离。',
    examples: [
      {
        input: 'N = 3, K = 2, retailers = [[1, 0], [2, 0], [3, 0], [2, 1]]',
        output: '4.0'
      },
      {
        input: 'N = 2, K = 1, retailers = [[0, 0], [2, 0], [1, 1]]',
        output: '4.0'
      }
    ],
    code: `function shortestPathForSalesperson(N, K, retailers) {
  // 计算所有零售商之间的距离
  const distances = [];
  for (let i = 0; i <= N; i++) {
    distances[i] = [];
    for (let j = 0; j <= N; j++) {
      const [x1, y1] = retailers[i];
      const [x2, y2] = retailers[j];
      distances[i][j] = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
  }
  
  // 动态规划：dp[mask][i] 表示访问了mask中的零售商，最后在i的最短距离
  const maskSize = 1 << (N + 1);
  const dp = Array(maskSize).fill().map(() => Array(N + 1).fill(Infinity));
  dp[1 << K][K] = 0;
  
  for (let mask = 0; mask < maskSize; mask++) {
    for (let i = 0; i <= N; i++) {
      if (dp[mask][i] !== Infinity) {
        for (let j = 0; j <= N; j++) {
          if (!(mask & (1 << j))) {
            const newMask = mask | (1 << j);
            dp[newMask][j] = Math.min(dp[newMask][j], dp[mask][i] + distances[i][j]);
          }
        }
      }
    }
  }
  
  return Math.min(...dp[maskSize - 1]);
}`,
    javaCode: `import java.util.List;

public class Solution {
    public static double shortestPathForSalesperson(int N, int K, List<List<Integer>> retailers) {
        double[][] distances = new double[N + 1][N + 1];
        for (int i = 0; i <= N; i++) {
            for (int j = 0; j <= N; j++) {
                double x1 = retailers.get(i).get(0);
                double y1 = retailers.get(i).get(1);
                double x2 = retailers.get(j).get(0);
                double y2 = retailers.get(j).get(1);
                distances[i][j] = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            }
        }
        
        int maskSize = 1 << (N + 1);
        double[][] dp = new double[maskSize][N + 1];
        for (double[] row : dp) {
            java.util.Arrays.fill(row, Double.MAX_VALUE);
        }
        dp[1 << K][K] = 0;
        
        for (int mask = 0; mask < maskSize; mask++) {
            for (int i = 0; i <= N; i++) {
                if (dp[mask][i] != Double.MAX_VALUE) {
                    for (int j = 0; j <= N; j++) {
                        if ((mask & (1 << j)) == 0) {
                            int newMask = mask | (1 << j);
                            dp[newMask][j] = Math.min(dp[newMask][j], dp[mask][i] + distances[i][j]);
                        }
                    }
                }
            }
        }
        
        double minDist = Double.MAX_VALUE;
        for (double d : dp[maskSize - 1]) {
            minDist = Math.min(minDist, d);
        }
        return minDist;
    }
}`
  },
  {
    id: 'example-95',
    englishTitle: 'Number of Submatrices with Product ≤ K',
    chineseTitle: '乘积 ≤ K 的子矩阵数量',
    englishDescription: 'Given a matrix A[1..N][1..M] of integers, the product of a submatrix of A is the product of all the elements of the submatrix. Write an algorithm to find the number of non-empty submatrices that contain the top left element of matrix A (i.e. submatrices B[1..X][1..Y] for 1 ≤ X ≤ N, 1 ≤ Y ≤ M) with a product ≤ K.',
    chineseDescription: '给定一个整数矩阵A[1..N][1..M]，A的子矩阵的乘积是该子矩阵所有元素的乘积。编写一个算法来找出包含矩阵A左上角元素的非空子矩阵（即子矩阵B[1..X][1..Y]，其中1 ≤ X ≤ N，1 ≤ Y ≤ M）且乘积 ≤ K的数量。',
    examples: [
      {
        input: 'matrix = [[1, 2], [3, 4]], K = 10',
        output: '4'
      },
      {
        input: 'matrix = [[1, 1, 1], [1, 1, 1], [1, 1, 1]], K = 1',
        output: '9'
      }
    ],
    code: `function numberOfSubmatrices(matrix, K) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }
  
  const N = matrix.length;
  const M = matrix[0].length;
  let count = 0;
  
  for (let i = 0; i < N; i++) {
    let product = 1;
    for (let j = 0; j < M; j++) {
      // 计算从(0,0)到(i,j)的子矩阵的乘积
      if (i === 0) {
        // 第一行
        if (j === 0) {
          product = matrix[i][j];
        } else {
          product *= matrix[i][j];
        }
      } else {
        // 其他行，需要重新计算
        product = 1;
        for (let x = 0; x <= i; x++) {
          for (let y = 0; y <= j; y++) {
            product *= matrix[x][y];
          }
        }
      }
      
      if (product <= K) {
        count++;
      } else {
        break; // 后面的子矩阵乘积会更大，直接 break
      }
    }
  }
  
  return count;
}`,
    javaCode: `public class Solution {
    public static int numberOfSubmatrices(int[][] matrix, int K) {
        if (matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        }
        
        int N = matrix.length;
        int M = matrix[0].length;
        int count = 0;
        
        for (int i = 0; i < N; i++) {
            int product = 1;
            for (int j = 0; j < M; j++) {
                // 计算从(0,0)到(i,j)的子矩阵的乘积
                if (i == 0) {
                    // 第一行
                    if (j == 0) {
                        product = matrix[i][j];
                    } else {
                        product *= matrix[i][j];
                    }
                } else {
                    // 其他行，需要重新计算
                    product = 1;
                    for (int x = 0; x <= i; x++) {
                        for (int y = 0; y <= j; y++) {
                            product *= matrix[x][y];
                        }
                    }
                }
                
                if (product <= K) {
                    count++;
                } else {
                    break; // 后面的子矩阵乘积会更大，直接 break
                }
            }
        }
        
        return count;
    }
}`
  },
  {
    id: 'example-96',
    englishTitle: 'Number of Unique Lines',
    chineseTitle: '唯一线条数量',
    englishDescription: 'Tim, a seventh grade student, is introduced to the concept of lines in basic geometry class. He applies this concept in real life. If he considers his house as one point and his friend Bill\'s house as another point, he can draw a line between these two points. Similarly, if the houses of all his friends are considered as different points, he can draw multiple lines with his own house as the common point in each line. By taking his school as the reference, Tim marks the coordinates of his N friends\' houses. Write an algorithm to help Tim that takes the coordinates of his house (x , y ) and his friends\' houses (x , y ) and outputs the number of unique lines that can be drawn with Tim\'s house as the common point in each line.',
    chineseDescription: 'Tim是一名七年级学生，在基础几何课上学习了线条的概念。他将这个概念应用到现实生活中。如果他将自己的房子视为一个点，将他的朋友Bill的房子视为另一个点，他可以在这两个点之间画一条线。同样，如果将他所有朋友的房子视为不同的点，他可以画多条线，每条线都以他自己的房子作为公共点。通过以学校为参考，Tim标记了他N个朋友房子的坐标。编写一个算法来帮助Tim，该算法接受他的房子的坐标(x , y )和他朋友的房子的坐标(x , y )，并输出可以以Tim的房子作为公共点绘制的唯一线条数量。',
    examples: [
      {
        input: 'timHouse = [0, 0], friends = [[1, 1], [2, 2], [3, 3], [1, 2]]',
        output: '2'
      },
      {
        input: 'timHouse = [1, 1], friends = [[2, 2], [3, 3], [4, 4], [5, 5]]',
        output: '1'
      }
    ],
    code: `function numberOfUniqueLines(timHouse, friends) {
  const [tx, ty] = timHouse;
  const slopes = new Set();
  
  for (const [fx, fy] of friends) {
    // 计算斜率
    let slope;
    if (fx === tx) {
      slope = 'vertical'; // 垂直直线
    } else if (fy === ty) {
      slope = 'horizontal'; // 水平直线
    } else {
      // 计算斜率的最简形式
      const dx = fx - tx;
      const dy = fy - ty;
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      const sign = (dx * dy) < 0 ? -1 : 1;
      const absGcd = gcd(Math.abs(dx), Math.abs(dy));
      slope = sign * (Math.abs(dy) / absGcd) + '/' + (Math.abs(dx) / absGcd);
    }
    
    slopes.add(slope);
  }
  
  return slopes.size;
}`
,
    javaCode: `import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    public static int numberOfUniqueLines(List<Integer> timHouse, List<List<Integer>> friends) {
        int tx = timHouse.get(0);
        int ty = timHouse.get(1);
        Set<String> slopes = new HashSet<>();
        
        for (List<Integer> friend : friends) {
            int fx = friend.get(0);
            int fy = friend.get(1);
            
            // 计算斜率
            String slope;
            if (fx == tx) {
                slope = "vertical"; // 垂直直线
            } else if (fy == ty) {
                slope = "horizontal"; // 水平直线
            } else {
                // 计算斜率的最简形式
                int dx = fx - tx;
                int dy = fy - ty;
                int gcd = gcd(Math.abs(dx), Math.abs(dy));
                int sign = (dx * dy) < 0 ? -1 : 1;
                slope = sign * (Math.abs(dy) / gcd) + "/" + (Math.abs(dx) / gcd);
            }
            
            slopes.add(slope);
        }
        
        return slopes.size();
    }
    
    private static int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}`,
  },
  {
    id: 'example-97',
    englishTitle: 'Count Elements Less Than K',
    chineseTitle: '计算小于K的元素数量',
    algorithm: '线性遍历',
    algorithmDescription: '线性遍历是一种基本的算法，通过一次遍历数组中的每个元素，检查是否满足特定条件。在这个问题中，我们需要遍历整个数组，统计小于给定值K的元素数量。',
    englishDescription: 'You are given a list of integers and an integer K. Write an algorithm to find the number of elements in the list that are strictly less than K.',
    chineseDescription: '给定一个整数列表和一个整数K，编写一个算法来找出列表中严格小于K的元素数量。',
    examples: [
      {
        input: '7\n7 4 5 6 3 2\n5',
        output: '4'
      }
    ],
    code: `function countElementsLessThanK(arr, K) {
  let count = 0;
  for (let num of arr) {
    if (num < K) {
      count++;
    }
  }
  return count;
}`,
    javaCode: `public class Solution {
    public static int countElementsLessThanK(int[] arr, int K) {
        int count = 0;
        for (int num : arr) {
            if (num < K) {
                count++;
            }
        }
        return count;
    }
}`
  },
  {
    id: 'example-98',
    englishTitle: 'Replace Elements with Indices',
    chineseTitle: '用索引值替换元素',
    algorithm: '线性遍历',
    algorithmDescription: '线性遍历是一种基本的算法，通过一次遍历数组中的每个元素，执行特定操作。在这个问题中，我们需要遍历整个数组，将每个元素替换为其在数组中的索引值。',
    englishDescription: 'You are given a list of N unique positive numbers ranging from 0 to (N-1). Write an algorithm to replace the value of each number with its corresponding index value in the list.',
    chineseDescription: '给定一个包含N个唯一正整数的列表，这些数的范围从0到(N-1)。编写一个算法，将列表中每个数的值替换为其在列表中的索引值。',
    examples: [
      {
        input: '4\n3 2 0 1',
        output: '2 3 1 0'
      }
    ],
    code: `function replaceElementsWithIndices(arr) {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = i;
  }
  return result;
}`,
    javaCode: `public class Solution {
    public static int[] replaceElementsWithIndices(int[] arr) {
        int[] result = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            result[arr[i]] = i;
        }
        return result;
    }
}`
  },
  {
    id: 'example-99',
    englishTitle: 'Count Digit Occurrences',
    chineseTitle: '计算数字出现次数',
    algorithm: '字符串处理',
    algorithmDescription: '字符串处理是一种常见的算法类型，通过将数字转换为字符串，然后遍历字符串中的每个字符来统计特定数字的出现次数。',
    englishDescription: 'Write an algorithm to find the number of occurrences of needle in a given positive number haystack.',
    chineseDescription: '编写一个算法，找出给定正整数haystack中needle出现的次数。',
    examples: [
      {
        input: '2\n123228',
        output: '3'
      }
    ],
    code: `function countDigitOccurrences(needle, haystack) {
  const haystackStr = haystack.toString();
  const needleStr = needle.toString();
  let count = 0;
  for (let char of haystackStr) {
    if (char === needleStr) {
      count++;
    }
  }
  return count;
}`,
    javaCode: `public class Solution {
    public static int countDigitOccurrences(int needle, int haystack) {
        String haystackStr = String.valueOf(haystack);
        String needleStr = String.valueOf(needle);
        int count = 0;
        for (char c : haystackStr.toCharArray()) {
            if (String.valueOf(c).equals(needleStr)) {
                count++;
            }
        }
        return count;
    }
}`
  },
  {
    id: 'example-100',
    englishTitle: 'Minimum Steps to Convert Binary Strings',
    chineseTitle: '转换二进制字符串的最小步骤',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。在这个问题中，我们需要找到将一个二进制字符串转换为另一个的最小步骤数。',
    englishDescription: 'Emerson is very fond of strings, and he keeps trying to reverse them. His mother gives him two binary strings and asks him to convert the string str1 into str2 by applying the following rules: Step 1: Reverse any substring of length 2 (of str1) and get str1 (str1 != str1). Step 2: Reverse any substring of length 3 (of str1) and get str1" (str1 != str1"). Step 3: Reverse any substring of length 4 (of str1") and get str1" (str1" != str1""). Step 4, Step 5 and so on. Write an algorithm to help Emerson convert the binary string str1 into str2, in the minimum number of steps. If there is no such way of conversion, then print "-1".',
    chineseDescription: 'Emerson非常喜欢字符串，他不断尝试反转它们。他的母亲给了他两个二进制字符串，要求他通过应用以下规则将字符串str1转换为str2：步骤1：反转长度为2的任何子串（str1的）并得到str1（str1 != str1）。步骤2：反转长度为3的任何子串（str1的）并得到str1"（str1 != str1"）。步骤3：反转长度为4的任何子串（str1"的）并得到str1"（str1" != str1"）。步骤4、步骤5等等。编写一个算法来帮助Emerson以最少的步骤将二进制字符串str1转换为str2。如果没有这样的转换方式，则打印"-1"。',
    examples: [
      {
        input: '01\n10',
        output: '1'
      },
      {
        input: '001\n010',
        output: '2'
      }
    ],
    code: `function minimumStepsToConvert(str1, str2) {
  // 如果两个字符串长度不同，直接返回-1
  if (str1.length !== str2.length) {
    return -1;
  }
  
  // 如果两个字符串已经相同，返回0
  if (str1 === str2) {
    return 0;
  }
  
  // 计算不同字符的位置
  const diffIndices = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      diffIndices.push(i);
    }
  }
  
  // 如果不同字符的数量为0，返回0
  if (diffIndices.length === 0) {
    return 0;
  }
  
  // 如果不同字符的数量为奇数，返回-1（因为每次操作都会改变偶数个字符的位置）
  if (diffIndices.length % 2 !== 0) {
    return -1;
  }
  
  // 计算最小步骤数
  // 每次操作可以处理两个不同的字符，所以步骤数等于不同字符的数量除以2
  return Math.floor(diffIndices.length / 2);
}`,
    javaCode: `public class Solution {
    public static int minimumStepsToConvert(String str1, String str2) {
        // 如果两个字符串长度不同，直接返回-1
        if (str1.length() != str2.length()) {
            return -1;
        }
        
        // 如果两个字符串已经相同，返回0
        if (str1.equals(str2)) {
            return 0;
        }
        
        // 计算不同字符的位置
        int count = 0;
        for (int i = 0; i < str1.length(); i++) {
            if (str1.charAt(i) != str2.charAt(i)) {
                count++;
            }
        }
        
        // 如果不同字符的数量为0，返回0
        if (count == 0) {
            return 0;
        }
        
        // 如果不同字符的数量为奇数，返回-1（因为每次操作都会改变偶数个字符的位置）
        if (count % 2 != 0) {
            return -1;
        }
        
        // 计算最小步骤数
        // 每次操作可以处理两个不同的字符，所以步骤数等于不同字符的数量除以2
        return count / 2;
    }
}`
  },
  {
    id: 'example-101',
    englishTitle: 'Count Lucky Customers',
    chineseTitle: '计算幸运顾客数量',
    algorithm: '哈希表',
    algorithmDescription: '哈希表是一种通过哈希函数将键映射到值的数据结构，用于快速查找和插入操作。在这个问题中，我们可以使用哈希表来统计每个价格出现的次数，然后计算满足价格差为K的产品对数量。',
    englishDescription: 'The manager of a supermarket wishes to hold an event at which he will distribute gift baskets to lucky customers. Each gift basket contains a pair of products. Each basket contains different product pairs, but the overall value of the baskets may be the same. There are N types of products and each product has a price. The gift baskets will awarded to the customers that pick a product pair that has a difference in price equal to the given integer value K. Write an algorithm to help the Manager find the total numbers of lucky customers who will win a gift basket.',
    chineseDescription: '超市经理希望举办一个活动，向幸运顾客分发礼品篮。每个礼品篮包含一对产品。每个篮子包含不同的产品对，但篮子的总价值可能相同。有N种类型的产品，每种产品都有一个价格。礼品篮将颁发给挑选价格差等于给定整数值K的产品对的顾客。编写一个算法来帮助经理找出将赢得礼品篮的幸运顾客总数。',
    examples: [
      {
        input: '5\n1 5 3 4 2\n1',
        output: '4'
      }
    ],
    code: `function countLuckyCustomers(prices, K) {
  const priceMap = new Map();
  let count = 0;
  
  // 统计每个价格出现的次数
  for (let price of prices) {
    priceMap.set(price, (priceMap.get(price) || 0) + 1);
  }
  
  // 计算满足条件的产品对数量
  for (let price of priceMap.keys()) {
    const target = price + K;
    if (priceMap.has(target)) {
      count += priceMap.get(price) * priceMap.get(target);
    }
  }
  
  return count;
}`,
    javaCode: `import java.util.HashMap;
import java.util.Map;

public class Solution {
    public static int countLuckyCustomers(int[] prices, int K) {
        Map<Integer, Integer> priceMap = new HashMap<>();
        int count = 0;
        
        // 统计每个价格出现的次数
        for (int price : prices) {
            priceMap.put(price, priceMap.getOrDefault(price, 0) + 1);
        }
        
        // 计算满足条件的产品对数量
        for (int price : priceMap.keySet()) {
            int target = price + K;
            if (priceMap.containsKey(target)) {
                count += priceMap.get(price) * priceMap.get(target);
            }
        }
        
        return count;
    }
}`
  },
  {
    id: 'example-102',
    englishTitle: 'Count Non-Common Elements',
    chineseTitle: '计算不共有的元素数量',
    algorithm: '哈希集合',
    algorithmDescription: '哈希集合是一种用于存储唯一元素的数据结构，支持快速的查找、插入和删除操作。在这个问题中，我们可以使用两个哈希集合来存储两个列表中的元素，然后计算不共有的元素数量。',
    englishDescription: 'You are given two lists of different lengths of positive integers. Write an algorithm to count the number of elements that are not common to each list.',
    chineseDescription: '给定两个不同长度的正整数列表，编写一个算法来计算不共有的元素数量。',
    examples: [
      {
        input: '11\n1 1 2 3 4 5 5 6 7 9 10\n10\n11 12 13 4 5 6 7 8 19 20',
        output: '12'
      }
    ],
    code: `function countNonCommonElements(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  let count = 0;
  
  // 统计list1中不在list2中的元素
  for (let num of set1) {
    if (!set2.has(num)) {
      count++;
    }
  }
  
  // 统计list2中不在list1中的元素
  for (let num of set2) {
    if (!set1.has(num)) {
      count++;
    }
  }
  
  return count;
}`,
    javaCode: `import java.util.HashSet;
import java.util.Set;

public class Solution {
    public static int countNonCommonElements(int[] list1, int[] list2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        int count = 0;
        
        // 将list1中的元素添加到set1
        for (int num : list1) {
            set1.add(num);
        }
        
        // 将list2中的元素添加到set2
        for (int num : list2) {
            set2.add(num);
        }
        
        // 统计list1中不在list2中的元素
        for (int num : set1) {
            if (!set2.contains(num)) {
                count++;
            }
        }
        
        // 统计list2中不在list1中的元素
        for (int num : set2) {
            if (!set1.contains(num)) {
                count++;
            }
        }
        
        return count;
    }
}`
  },
  {
    id: 'example-103',
    englishTitle: 'Maximum Alumni Attendance',
    chineseTitle: '最大校友参会人数',
    algorithm: '图论 - 环检测',
    algorithmDescription: '图论中的环检测是一种用于检测图中是否存在环的算法。在这个问题中，我们可以将校友和他们喜欢的人视为图中的节点和边，然后找到最大的环，因为只有在环中，每个人都能坐在喜欢的人旁边。',
    englishDescription: 'A University has invited N alumni to a dinner. The dinner table is circular in shape. The university has assigned each alumnus an invitation ID from 1 to N. Each alumnus likes exactly one fellow alumnus and will attend the dinner only if he/she can be seated next to that person. You are asked to plan the seating arrangement. Write an algorithm to find the maximum number of alumni who will attend the dinner.',
    chineseDescription: '一所大学邀请了N位校友参加晚宴。晚宴桌是圆形的。大学为每位校友分配了一个从1到N的邀请ID。每位校友恰好喜欢一位其他校友，并且只有当他/她能坐在喜欢的人旁边时才会参加晚宴。你被要求规划座位安排。编写一个算法来找出将参加晚宴的最大校友人数。',
    examples: [
      {
        input: '4\n2 3 4 1',
        output: '4'
      }
    ],
    code: `function maximumAlumniAttendance(likes) {
  const n = likes.length;
  const visited = new Array(n).fill(false);
  let maxAttendance = 0;
  
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      const cycle = [];
      let current = i;
      
      while (!visited[current]) {
        visited[current] = true;
        cycle.push(current);
        current = likes[current] - 1; // 转换为0-based索引
      }
      
      // 检查是否形成环
      const cycleStartIndex = cycle.indexOf(current);
      if (cycleStartIndex !== -1) {
        const cycleLength = cycle.length - cycleStartIndex;
        maxAttendance = Math.max(maxAttendance, cycleLength);
      }
    }
  }
  
  return maxAttendance;
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static int maximumAlumniAttendance(int[] likes) {
        int n = likes.length;
        boolean[] visited = new boolean[n];
        int maxAttendance = 0;
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                List<Integer> cycle = new ArrayList<>();
                int current = i;
                
                while (!visited[current]) {
                    visited[current] = true;
                    cycle.add(current);
                    current = likes[current] - 1; // 转换为0-based索引
                }
                
                // 检查是否形成环
                int cycleStartIndex = cycle.indexOf(current);
                if (cycleStartIndex != -1) {
                    int cycleLength = cycle.size() - cycleStartIndex;
                    maxAttendance = Math.max(maxAttendance, cycleLength);
                }
            }
        }
        
        return maxAttendance;
    }
}`
  },
  {
    id: 'example-104',
    englishTitle: 'Encrypt Secret Code',
    chineseTitle: '加密秘密代码',
    algorithm: '模运算',
    algorithmDescription: '模运算是一种数学运算，用于计算除法的余数。在这个问题中，我们需要使用模运算来加密秘密代码，避免数值过大导致溢出。',
    englishDescription: 'Bob has to send a secret code S to his boss. He designs a method to encrypt the code using two key values N and M. The formula that he uses to develop the encrypted code is shown below: (((S^N) % 10)^M) % 1000000007. Write an algorithm to help Bob encrypt the code.',
    chineseDescription: 'Bob需要向他的老板发送一个秘密代码S。他设计了一种使用两个键值N和M来加密代码的方法。他用于生成加密代码的公式如下：(((S^N) % 10)^M) % 1000000007。编写一个算法来帮助Bob加密代码。',
    examples: [
      {
        input: '2\n3\n4',
        output: '256'
      }
    ],
    code: `function encryptSecretCode(secretCode, firstKey, secondKey) {
  const MOD = 1000000007;
  
  // 计算(S^N) % 10
  let part1 = 1;
  for (let i = 0; i < firstKey; i++) {
    part1 = (part1 * secretCode) % 10;
  }
  
  // 计算(part1^M) % MOD
  let part2 = 1;
  for (let i = 0; i < secondKey; i++) {
    part2 = (part2 * part1) % MOD;
  }
  
  return part2;
}
`,
    javaCode: `public class Solution {
    public static long encryptSecretCode(long secretCode, long firstKey, long secondKey) {
        final long MOD = 1000000007;
        
        // 计算(S^N) % 10
        long part1 = 1;
        for (long i = 0; i < firstKey; i++) {
            part1 = (part1 * secretCode) % 10;
        }
        
        // 计算(part1^M) % MOD
        long part2 = 1;
        for (long i = 0; i < secondKey; i++) {
            part2 = (part2 * part1) % MOD;
        }
        
        return part2;
    }
}`
  },
  {
    id: 'example-105',
    englishTitle: 'Organization Reputation',
    chineseTitle: '组织声誉',
    algorithm: '优先队列',
    algorithmDescription: '优先队列是一种特殊的队列，其中每个元素都有一个优先级，优先级高的元素先出队。在这个问题中，我们可以使用优先队列来跟踪每个团队中效率最低的员工，以便在需要时快速找到并移除他们。',
    englishDescription: 'In an organization, N employees with employee IDs from 1 to N are working in different teams. Each employee shares a bond of great understanding with his/her fellow team members. Each employee is assigned an integer X that represents the employees efficiency. The sum of efficiencies of all the employees indicates the reputation of the organization. Edwin, being short tempered, fires one employee each day. Because the team members have a close relationship, K colleagues of the fired employee resign in protest. (These K colleagues have the least efficiency of the remaining team members.) Kevin is the head of the database management system and has to update the reputation of the organization at the end of each day. Write an algorithm to help him determine the reputation of the organization at the end of each day for Q number of days.',
    chineseDescription: '在一个组织中，N个员工（员工ID从1到N）在不同的团队中工作。每个员工与他/她的团队成员有着深厚的理解纽带。每个员工被分配一个整数X，表示员工的效率。所有员工的效率之和表示组织的声誉。Edwin脾气暴躁，每天解雇一名员工。由于团队成员关系密切，被解雇员工的K个同事会辞职抗议。（这K个同事是剩余团队成员中效率最低的。）Kevin是数据库管理系统的负责人，必须在每天结束时更新组织的声誉。编写一个算法来帮助他确定Q天中每天结束时组织的声誉。',
    examples: [
      {
        input: '5\n1 2 3 4 5\n5\n1 2 1 1 2\n2\n2 2\n2 0',
        output: '7 5'
      }
    ],
    code: `function organizationReputation(n, efficiencies, teamIDs, Q, days) {
  // 初始化团队信息
  const teams = new Map();
  let totalReputation = efficiencies.reduce((sum, eff) => sum + eff, 0);
  
  // 按团队分组，存储每个团队的效率列表
  for (let i = 0; i < n; i++) {
    const teamId = teamIDs[i];
    if (!teams.has(teamId)) {
      teams.set(teamId, []);
    }
    teams.get(teamId).push(efficiencies[i]);
  }
  
  // 对每个团队的效率进行排序，方便快速获取最低效率
  for (let team of teams.values()) {
    team.sort((a, b) => a - b);
  }
  
  const results = [];
  
  for (let day of days) {
    const [empId, K] = day;
    const employeeIndex = empId - 1; // 转换为0-based索引
    const teamId = teamIDs[employeeIndex];
    const team = teams.get(teamId);
    
    // 移除被解雇的员工
    const firedEfficiency = efficiencies[employeeIndex];
    totalReputation -= firedEfficiency;
    
    // 从团队中移除该员工的效率
    const firedIndex = team.indexOf(firedEfficiency);
    if (firedIndex !== -1) {
      team.splice(firedIndex, 1);
    }
    
    // 移除K个效率最低的同事
    for (let i = 0; i < K && team.length > 0; i++) {
      const lowestEfficiency = team.shift();
      totalReputation -= lowestEfficiency;
    }
    
    results.push(totalReputation);
  }
  
  return results;
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Collections;

public class Solution {
    public static List<Long> organizationReputation(int n, int[] efficiencies, int[] teamIDs, int Q, List<List<Integer>> days) {
        // 初始化团队信息
        Map<Integer, List<Integer>> teams = new HashMap<>();
        long totalReputation = 0;
        
        // 按团队分组，存储每个团队的效率列表
        for (int i = 0; i < n; i++) {
            int teamId = teamIDs[i];
            if (!teams.containsKey(teamId)) {
                teams.put(teamId, new ArrayList<>());
            }
            teams.get(teamId).add(efficiencies[i]);
            totalReputation += efficiencies[i];
        }
        
        // 对每个团队的效率进行排序，方便快速获取最低效率
        for (List<Integer> team : teams.values()) {
            Collections.sort(team);
        }
        
        List<Long> results = new ArrayList<>();
        
        for (List<Integer> day : days) {
            int empId = day.get(0);
            int K = day.get(1);
            int employeeIndex = empId - 1; // 转换为0-based索引
            int teamId = teamIDs[employeeIndex];
            List<Integer> team = teams.get(teamId);
            
            // 移除被解雇的员工
            int firedEfficiency = efficiencies[employeeIndex];
            totalReputation -= firedEfficiency;
            
            // 从团队中移除该员工的效率
            team.remove(Integer.valueOf(firedEfficiency));
            
            // 移除K个效率最低的同事
            for (int i = 0; i < K && !team.isEmpty(); i++) {
                int lowestEfficiency = team.remove(0);
                totalReputation -= lowestEfficiency;
            }
            
            results.add(totalReputation);
        }
        
        return results;
    }
}`
  },
  {
    id: 'example-106',
    englishTitle: 'Shortest Job First Scheduling',
    chineseTitle: '最短作业优先调度',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。在这个问题中，我们使用最短作业优先（SJF）算法来调度任务，优先执行持续时间最短的任务。',
    englishDescription: 'Shortest Job First (SJF) is a system for scheduling task requests. Each task request is characterized by its request time (i.e., the time at which the task is submitted to the system) and its duration (i.e., the time needed to complete the task). When the SJF system completes a task, it selects the task with the smallest duration to execute next. If multiple tasks have the same smallest duration, SJF selects the task with the earliest request time. The waiting time for a task is the difference between the request time and the actual start time (i.e., the time it spends waiting in the system to execute it). You may assume that the tasks arrive in such frequency that the system executes tasks constantly and is never idle. Given a list of request times and duration times, calculate the average waiting time when scheduled using the Shortest Job First (SJF) algorithm.',
    chineseDescription: '最短作业优先（SJF）是一种用于调度任务请求的系统。每个任务请求由其请求时间（即任务提交到系统的时间）和持续时间（即完成任务所需的时间）来表征。当SJF系统完成一个任务时，它选择持续时间最短的任务 next 执行。如果多个任务具有相同的最短持续时间，SJF选择请求时间最早的任务。任务的等待时间是请求时间和实际开始时间之间的差异（即它在系统中等待执行的时间）。你可以假设任务到达的频率使得系统持续执行任务，从不空闲。给定请求时间和持续时间的列表，计算使用最短作业优先（SJF）算法调度时的平均等待时间。',
    examples: [
      {
        input: '3\n0 1 2\n3\n3 1 2',
        output: '1.3333333333'
      }
    ],
    code: `function calculateAverageWaitingTime(requestTimes, durations) {
  const n = requestTimes.length;
  const tasks = requestTimes.map((time, index) => ({
    requestTime: time,
    duration: durations[index],
    index
  }));
  
  // 按请求时间排序
  tasks.sort((a, b) => a.requestTime - b.requestTime);
  
  const minHeap = [];
  let currentTime = 0;
  let totalWaitingTime = 0;
  let taskIndex = 0;
  
  while (taskIndex < n || minHeap.length > 0) {
    // 将所有到达时间小于等于当前时间的任务加入堆
    while (taskIndex < n && tasks[taskIndex].requestTime <= currentTime) {
      minHeap.push(tasks[taskIndex]);
      // 按持续时间排序，持续时间相同则按请求时间排序
      minHeap.sort((a, b) => {
        if (a.duration !== b.duration) {
          return a.duration - b.duration;
        }
        return a.requestTime - b.requestTime;
      });
      taskIndex++;
    }
    
    if (minHeap.length > 0) {
      // 取出持续时间最短的任务
      const currentTask = minHeap.shift();
      // 计算等待时间
      const waitingTime = currentTime - currentTask.requestTime;
      totalWaitingTime += waitingTime;
      // 更新当前时间
      currentTime += currentTask.duration;
    } else {
      // 没有任务可执行，直接跳到下一个任务的到达时间
      if (taskIndex < n) {
        currentTime = tasks[taskIndex].requestTime;
      }
    }
  }
  
  // 计算平均等待时间
  return totalWaitingTime / n;
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;

public class Solution {
    public static double calculateAverageWaitingTime(List<Integer> requestTimes, List<Integer> durations) {
        int n = requestTimes.size();
        List<Task> tasks = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            tasks.add(new Task(requestTimes.get(i), durations.get(i), i));
        }
        
        // 按请求时间排序
        tasks.sort(Comparator.comparingInt(Task::getRequestTime));
        
        // 使用优先队列，按照持续时间排序，持续时间相同则按请求时间排序
        PriorityQueue<Task> minHeap = new PriorityQueue<>((a, b) -> {
            if (a.getDuration() != b.getDuration()) {
                return a.getDuration() - b.getDuration();
            }
            return a.getRequestTime() - b.getRequestTime();
        });
        
        int currentTime = 0;
        long totalWaitingTime = 0;
        int taskIndex = 0;
        
        while (taskIndex < n || !minHeap.isEmpty()) {
            // 将所有到达时间小于等于当前时间的任务加入堆
            while (taskIndex < n && tasks.get(taskIndex).getRequestTime() <= currentTime) {
                minHeap.add(tasks.get(taskIndex));
                taskIndex++;
            }
            
            if (!minHeap.isEmpty()) {
                // 取出持续时间最短的任务
                Task currentTask = minHeap.poll();
                // 计算等待时间
                int waitingTime = currentTime - currentTask.getRequestTime();
                totalWaitingTime += waitingTime;
                // 更新当前时间
                currentTime += currentTask.getDuration();
            } else {
                // 没有任务可执行，直接跳到下一个任务的到达时间
                if (taskIndex < n) {
                    currentTime = tasks.get(taskIndex).getRequestTime();
                }
            }
        }
        
        // 计算平均等待时间
        return (double) totalWaitingTime / n;
    }
    
    static class Task {
        private int requestTime;
        private int duration;
        private int index;
        
        public Task(int requestTime, int duration, int index) {
            this.requestTime = requestTime;
            this.duration = duration;
            this.index = index;
        }
        
        public int getRequestTime() {
            return requestTime;
        }
        
        public int getDuration() {
            return duration;
        }
        
        public int getIndex() {
            return index;
        }
    }
}`
  },
  {
    id: 'example-107',
    englishTitle: 'Bus Distance Calculation',
    chineseTitle: '公交车距离计算',
    algorithm: '线性计算',
    algorithmDescription: '线性计算是一种基本的算法，通过简单的数学运算来解决问题。在这个问题中，我们需要计算每辆公交车行驶的距离，并将它们相加得到总距离。',
    englishDescription: 'The city bus stations are located at equal distance (unit distance) from each other along a straight road. Each station has a unique station ID. The buses do not travel to all of the bus stations. The highway administration needs to determine the total distance that the buses cover. Given the IDs of the bus stations that have a bus operating between them, write an algorithm to help the administration find the distance covered by all the city buses.',
    chineseDescription: '城市公交车站沿着一条直路等距离（单位距离）分布。每个车站都有一个唯一的车站ID。公交车不会行驶到所有的公交车站。公路管理部门需要确定公交车覆盖的总距离。给定有公交车运行的车站ID，编写一个算法来帮助管理部门找到所有城市公交车覆盖的距离。',
    examples: [
      {
        input: '3 2\n2 4\n3 5\n6 7',
        output: '4'
      }
    ],
    code: `function calculateBusDistance(num, constM, busRoutes) {
  let totalDistance = 0;
  
  for (let route of busRoutes) {
    const [start, end] = route;
    totalDistance += end - start;
  }
  
  return totalDistance;
}
`,
    javaCode: `import java.util.List;

public class Solution {
    public static int calculateBusDistance(int num, int constM, List<List<Integer>> busRoutes) {
        int totalDistance = 0;
        
        for (List<Integer> route : busRoutes) {
            int start = route.get(0);
            int end = route.get(1);
            totalDistance += end - start;
        }
        
        return totalDistance;
    }
}`
  },
  {
    id: 'example-108',
    englishTitle: 'Max Common Footsteps',
    chineseTitle: '最大共同脚步数',
    algorithm: '数学分析',
    algorithmDescription: '数学分析是一种通过数学方法来解决问题的算法。在这个问题中，我们需要分析Martin和他父亲的脚步位置，找出Martin能踩中父亲多少个脚印，以及对应的最大速度。',
    englishDescription: 'Martin is standing at X2 meters away from his home. He wonders how fast he must run at some constant speed of V2 meters per step so as to maximize F, where F equals the number of his father\'s footsteps that Martin will land on during his run. It is given that the first step that Martin will land on, from his starting position, will have been landed on by his father. Note that if more than one prospective velocity results in the same number of maximum common steps, output the highest prospective velocity as V2.',
    chineseDescription: 'Martin站在离家X2米的地方。他想知道他必须以多快的速度（每步V2米的恒定速度）奔跑，才能最大化F，其中F等于Martin在奔跑过程中踩中他父亲脚印的数量。已知Martin从起始位置开始的第一步会踩中他父亲的脚印。注意，如果多个可能的速度导致相同的最大共同步数，则输出最高的可能速度作为V2。',
    examples: [
      {
        input: '0\n5\n1\n10',
        output: '5 1'
      }
    ],
    code: `function maxCommonFootsteps(fatherPos, martinPos, velFather, steps) {
  // 计算父亲的所有脚印位置
  const fatherSteps = [];
  for (let i = 0; i <= steps; i++) {
    fatherSteps.push(fatherPos + i * velFather);
  }
  
  // 计算Martin需要覆盖的距离
  const distance = fatherSteps[fatherSteps.length - 1] - martinPos;
  
  let maxF = 0;
  let bestV2 = 0;
  
  // 遍历可能的V2值
  // 由于Martin的第一步必须踩中父亲的脚印，所以V2必须满足：martinPos + k*V2 = fatherSteps[j] 对于某个k和j
  // 我们可以从最大的可能V2开始遍历，这样一旦找到最大的F，就可以直接返回
  
  // 最大的可能V2是distance（一步到达）
  for (let V2 = distance; V2 >= 1; V2--) {
    let currentPos = martinPos;
    let f = 0;
    
    // 检查每一步是否踩中父亲的脚印
    while (currentPos <= fatherSteps[fatherSteps.length - 1]) {
      if (fatherSteps.includes(currentPos)) {
        f++;
      }
      currentPos += V2;
    }
    
    if (f > maxF) {
      maxF = f;
      bestV2 = V2;
    } else if (f === maxF && V2 > bestV2) {
      bestV2 = V2;
    }
  }
  
  return [maxF, bestV2];
}`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static List<Integer> maxCommonFootsteps(int fatherPos, int martinPos, int velFather, int steps) {
        // 计算父亲的所有脚印位置
        List<Integer> fatherSteps = new ArrayList<>();
        for (int i = 0; i <= steps; i++) {
            fatherSteps.add(fatherPos + i * velFather);
        }
        
        // 计算Martin需要覆盖的距离
        int distance = fatherSteps.get(fatherSteps.size() - 1) - martinPos;
        
        int maxF = 0;
        int bestV2 = 0;
        
        // 遍历可能的V2值
        // 由于Martin的第一步必须踩中父亲的脚印，所以V2必须满足：martinPos + k*V2 = fatherSteps[j] 对于某个k和j
        // 我们可以从最大的可能V2开始遍历，这样一旦找到最大的F，就可以直接返回
        
        // 最大的可能V2是distance（一步到达）
        for (int V2 = distance; V2 >= 1; V2--) {
            int currentPos = martinPos;
            int f = 0;
            
            // 检查每一步是否踩中父亲的脚印
            while (currentPos <= fatherSteps.get(fatherSteps.size() - 1)) {
                if (fatherSteps.contains(currentPos)) {
                    f++;
                }
                currentPos += V2;
            }
            
            if (f > maxF) {
                maxF = f;
                bestV2 = V2;
            } else if (f == maxF && V2 > bestV2) {
                bestV2 = V2;
            }
        }
        
        List<Integer> result = new ArrayList<>();
        result.add(maxF);
        result.add(bestV2);
        return result;
    }
}`
  },
  {
    id: 'example-109',
    englishTitle: 'Alternate Sort',
    chineseTitle: '交替排序',
    algorithm: '排序算法',
    algorithmDescription: '排序算法是一种将元素按照特定顺序排列的算法。在这个问题中，我们需要先对输入列表进行升序排序，然后取交替元素（从第一个位置开始）。',
    englishDescription: 'An alternate sort of a list consists of alternate elements (starting from the first position) of the given list after sorting it in an ascending order. You are given a list of unsorted elements. Write an algorithm to find the alternate sort of the given list.',
    chineseDescription: '列表的交替排序由给定列表按升序排序后的交替元素（从第一个位置开始）组成。给定一个未排序的元素列表，编写一个算法来找到给定列表的交替排序。',
    examples: [
      {
        input: '8\n3 5 1 5 9 10 2 6',
        output: '1 3 5 9'
      }
    ],
    code: `function alternateSort(arr) {
  // 对数组进行升序排序
  arr.sort((a, b) => a - b);
  
  // 取交替元素（从第一个位置开始）
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  
  return result;
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
    public static List<Integer> alternateSort(int[] arr) {
        // 对数组进行升序排序
        Arrays.sort(arr);
        
        // 取交替元素（从第一个位置开始）
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < arr.length; i += 2) {
            result.add(arr[i]);
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-110',
    englishTitle: 'FIFO Cache Misses',
    chineseTitle: 'FIFO缓存未命中次数',
    algorithm: '队列',
    algorithmDescription: '队列是一种先进先出（FIFO）的数据结构。在这个问题中，我们使用队列来模拟FIFO缓存的页面置换过程，计算缓存未命中的次数。',
    englishDescription: 'A virtual memory management system in an operating system uses First-In-First-Out (FIFO) page replacement. When a requested page is not in the cache and the cache is full, the page that has been in the cache for the longest duration is removed to make room for the requested page. If the cache is not full, then the requested page is simply added to the cache. A page request occurs once in the page requests. Given the maximum size of the cache and an array of page requests, calculate the number of cache misses. A cache miss occurs when the requested page is not found in the cache.',
    chineseDescription: '操作系统中的虚拟内存管理系统使用先进先出（FIFO）页面置换算法。当请求的页面不在缓存中且缓存已满时，将移除缓存中存在时间最长的页面，为请求的页面腾出空间。如果缓存未满，则将请求的页面简单地添加到缓存中。页面请求在页面请求数组中出现一次。给定缓存的最大大小和页面请求数组，计算缓存未命中的次数。当请求的页面在缓存中未找到时，发生缓存未命中。',
    examples: [
      {
        input: '6\n2 1 3 1 2\n2',
        output: '5'
      }
    ],
    code: `function calculateCacheMisses(pageRequests, maxCacheSize) {
  const cache = [];
  let misses = 0;
  
  for (let page of pageRequests) {
    if (!cache.includes(page)) {
      misses++;
      if (cache.length >= maxCacheSize) {
        cache.shift(); // 移除最早进入缓存的页面
      }
      cache.push(page);
    }
  }
  
  return misses;
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static int calculateCacheMisses(List<Integer> pageRequests, int maxCacheSize) {
        List<Integer> cache = new ArrayList<>();
        int misses = 0;
        
        for (int page : pageRequests) {
            if (!cache.contains(page)) {
                misses++;
                if (cache.size() >= maxCacheSize) {
                    cache.remove(0); // 移除最早进入缓存的页面
                }
                cache.add(page);
            }
        }
        
        return misses;
    }
}`
  },
  {
    id: 'example-111',
    englishTitle: 'Mixed Sort',
    chineseTitle: '混合排序',
    algorithm: '排序算法',
    algorithmDescription: '排序算法是一种将元素按照特定顺序排列的算法。在这个问题中，我们需要将列表的前K个元素按升序排序，剩余元素按降序排序。',
    englishDescription: 'You are given a list of integers of size N. Write an algorithm to sort the first K elements (from list[0] to list[K-1]) of the list in ascending order and the remaining (list[K] to list[N-1]) elements in descending order.',
    chineseDescription: '给定一个大小为N的整数列表，编写一个算法将列表的前K个元素（从list[0]到list[K-1]）按升序排序，剩余元素（list[K]到list[N-1]）按降序排序。',
    examples: [
      {
        input: '8\n11 7 5 10 46 23 16 8\n3',
        output: '5 7 11 46 23 16 10 8'
      }
    ],
    code: `function mixedSort(arr, K) {
  // 对前K个元素进行升序排序
  const firstK = arr.slice(0, K).sort((a, b) => a - b);
  // 对剩余元素进行降序排序
  const remaining = arr.slice(K).sort((a, b) => b - a);
  // 合并两个部分
  return [...firstK, ...remaining];
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Solution {
    public static List<Integer> mixedSort(int[] arr, int K) {
        List<Integer> result = new ArrayList<>();
        
        // 对前K个元素进行升序排序
        int[] firstK = Arrays.copyOfRange(arr, 0, K);
        Arrays.sort(firstK);
        
        // 对剩余元素进行降序排序
        Integer[] remaining = new Integer[arr.length - K];
        for (int i = K; i < arr.length; i++) {
            remaining[i - K] = arr[i];
        }
        Arrays.sort(remaining, Collections.reverseOrder());
        
        // 合并两个部分
        for (int num : firstK) {
            result.add(num);
        }
        for (int num : remaining) {
            result.add(num);
        }
        
        return result;
    }
}`
  },
  {
    id: 'example-112',
    englishTitle: 'Street Lights State After M Days',
    chineseTitle: 'M天后的路灯状态',
    algorithm: '模拟',
    algorithmDescription: '模拟是一种通过按照规则逐步计算状态变化的算法。在这个问题中，我们需要根据给定的规则，模拟M天后路灯的状态变化。',
    englishDescription: 'Mr. Woods, an electrician has made some faulty connections of eight street lights in Timberland city. The connections are such that if the street lights adjacent to a particular light are both ON (represented as 1) or both OFF (represented as 0), then that street light goes OFF the next night. Otherwise, it remains ON the next night. The two street lights at the end of the road have only a single adjacent street light, so the other adjacent light can be assumed to be always OFF. The state of the lights on a particular day is considered for the next day and not for the same day. Due to this fault, the people of the city are facing difficulty in driving on the road at night. So, they have filed a complaint about this to the Head of the Federal Highway Administration. Based on this complaint the head has asked for the report of the state of street lights after M days. Write an algorithm to output the state of the street lights after the given M days.',
    chineseDescription: 'Woods先生是一名电工，他在Timberland市对八个路灯进行了错误的连接。连接方式是这样的：如果某个路灯的相邻路灯都开着（表示为1）或都关着（表示为0），那么该路灯在第二天晚上会关闭。否则，它在第二天晚上保持开启。道路两端的两个路灯只有一个相邻的路灯，所以另一个相邻的路灯可以假设始终关闭。某一天的路灯状态会影响第二天的状态，而不是当天的状态。由于这个故障，城市居民在夜间驾驶时遇到了困难。因此，他们向联邦公路管理局局长投诉了这一问题。基于这一投诉，局长要求提供M天后路灯状态的报告。编写一个算法来输出给定M天后的路灯状态。',
    examples: [
      {
        input: '8\n1 1 1 0 1 1 1 1\n2',
        output: '0 0 0 0 0 1 1 0'
      }
    ],
    code: `function streetLightsAfterMDays(currentState, days) {
  let state = [...currentState];
  const n = state.length;
  
  for (let day = 0; day < days; day++) {
    const newState = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
      let left, right;
      
      // 处理两端的路灯
      if (i === 0) {
        left = 0; // 假设左边始终关闭
        right = state[i + 1];
      } else if (i === n - 1) {
        left = state[i - 1];
        right = 0; // 假设右边始终关闭
      } else {
        left = state[i - 1];
        right = state[i + 1];
      }
      
      // 根据规则计算新状态
      if (left === right) {
        newState[i] = 0;
      } else {
        newState[i] = 1;
      }
    }
    
    state = newState;
  }
  
  return state;
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static List<Integer> streetLightsAfterMDays(List<Integer> currentState, int days) {
        List<Integer> state = new ArrayList<>(currentState);
        int n = state.size();
        
        for (int day = 0; day < days; day++) {
            List<Integer> newState = new ArrayList<>(n);
            for (int i = 0; i < n; i++) {
                newState.add(0);
            }
            
            for (int i = 0; i < n; i++) {
                int left, right;
                
                // 处理两端的路灯
                if (i == 0) {
                    left = 0; // 假设左边始终关闭
                    right = state.get(i + 1);
                } else if (i == n - 1) {
                    left = state.get(i - 1);
                    right = 0; // 假设右边始终关闭
                } else {
                    left = state.get(i - 1);
                    right = state.get(i + 1);
                }
                
                // 根据规则计算新状态
                if (left == right) {
                    newState.set(i, 0);
                } else {
                    newState.set(i, 1);
                }
            }
            
            state = newState;
        }
        
        return state;
    }
}`
  },
  {
    id: 'example-113',
    englishTitle: 'Shortest Job First Scheduling with Average Waiting Time',
    chineseTitle: '带平均等待时间的最短作业优先调度',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。在这个问题中，我们使用最短作业优先（SJF）算法来调度任务，计算平均等待时间。',
    englishDescription: 'Shortest Job First (SJF) is a system for scheduling task requests. Each task request is characterized by its request time (i.e., the time at which the task is submitted to the system) and its duration (i.e., the time needed to complete the task). When the SJF system completes a task, it selects the task with the smallest duration to execute next. If multiple tasks have the same smallest duration, SJF selects the task with the earliest request time. The waiting time for a task is the difference between the request time and the actual start time (i.e., the time it spends waiting for the system to execute it). You may assume that the tasks arrive in such frequency that the system executes tasks constantly and is never idle. Given a list of request times and duration times, calculate the average task waiting time when scheduled using the Shortest Job First (SJF) algorithm. Print the output up to two decimal places only.',
    chineseDescription: '最短作业优先（SJF）是一种用于调度任务请求的系统。每个任务请求由其请求时间（即任务提交到系统的时间）和持续时间（即完成任务所需的时间）来表征。当SJF系统完成一个任务时，它选择持续时间最短的任务 next 执行。如果多个任务具有相同的最短持续时间，SJF选择请求时间最早的任务。任务的等待时间是请求时间和实际开始时间之间的差异（即它在系统中等待执行的时间）。你可以假设任务到达的频率使得系统持续执行任务，从不空闲。给定请求时间和持续时间的列表，计算使用最短作业优先（SJF）算法调度时的平均任务等待时间。仅输出两位小数。',
    examples: [
      {
        input: '3\n0 1 2\n3 1 2',
        output: '1.33'
      }
    ],
    code: `function calculateAverageWaitingTimeSJF(requestTimes, durations) {
  const n = requestTimes.length;
  const tasks = requestTimes.map((time, index) => ({
    requestTime: time,
    duration: durations[index],
    index
  }));
  
  // 按请求时间排序
  tasks.sort((a, b) => a.requestTime - b.requestTime);
  
  const minHeap = [];
  let currentTime = 0;
  let totalWaitingTime = 0;
  let taskIndex = 0;
  
  while (taskIndex < n || minHeap.length > 0) {
    // 将所有到达时间小于等于当前时间的任务加入堆
    while (taskIndex < n && tasks[taskIndex].requestTime <= currentTime) {
      minHeap.push(tasks[taskIndex]);
      // 按持续时间排序，持续时间相同则按请求时间排序
      minHeap.sort((a, b) => {
        if (a.duration !== b.duration) {
          return a.duration - b.duration;
        }
        return a.requestTime - b.requestTime;
      });
      taskIndex++;
    }
    
    if (minHeap.length > 0) {
      // 取出持续时间最短的任务
      const currentTask = minHeap.shift();
      // 计算等待时间
      const waitingTime = currentTime - currentTask.requestTime;
      totalWaitingTime += waitingTime;
      // 更新当前时间
      currentTime += currentTask.duration;
    } else {
      // 没有任务可执行，直接跳到下一个任务的到达时间
      if (taskIndex < n) {
        currentTime = tasks[taskIndex].requestTime;
      }
    }
  }
  
  // 计算平均等待时间并保留两位小数
  return (totalWaitingTime / n).toFixed(2);
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;

public class Solution {
    public static String calculateAverageWaitingTimeSJF(List<Integer> requestTimes, List<Integer> durations) {
        int n = requestTimes.size();
        List<Task> tasks = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            tasks.add(new Task(requestTimes.get(i), durations.get(i), i));
        }
        
        // 按请求时间排序
        tasks.sort(Comparator.comparingInt(Task::getRequestTime));
        
        // 使用优先队列，按照持续时间排序，持续时间相同则按请求时间排序
        PriorityQueue<Task> minHeap = new PriorityQueue<>((a, b) -> {
            if (a.getDuration() != b.getDuration()) {
                return a.getDuration() - b.getDuration();
            }
            return a.getRequestTime() - b.getRequestTime();
        });
        
        int currentTime = 0;
        long totalWaitingTime = 0;
        int taskIndex = 0;
        
        while (taskIndex < n || !minHeap.isEmpty()) {
            // 将所有到达时间小于等于当前时间的任务加入堆
            while (taskIndex < n && tasks.get(taskIndex).getRequestTime() <= currentTime) {
                minHeap.add(tasks.get(taskIndex));
                taskIndex++;
            }
            
            if (!minHeap.isEmpty()) {
                // 取出持续时间最短的任务
                Task currentTask = minHeap.poll();
                // 计算等待时间
                int waitingTime = currentTime - currentTask.getRequestTime();
                totalWaitingTime += waitingTime;
                // 更新当前时间
                currentTime += currentTask.getDuration();
            } else {
                // 没有任务可执行，直接跳到下一个任务的到达时间
                if (taskIndex < n) {
                    currentTime = tasks.get(taskIndex).getRequestTime();
                }
            }
        }
        
        // 计算平均等待时间并保留两位小数
        double averageWaitingTime = (double) totalWaitingTime / n;
        return String.format("%.2f", averageWaitingTime);
    }
    
    static class Task {
        private int requestTime;
        private int duration;
        private int index;
        
        public Task(int requestTime, int duration, int index) {
            this.requestTime = requestTime;
            this.duration = duration;
            this.index = index;
        }
        
        public int getRequestTime() {
            return requestTime;
        }
        
        public int getDuration() {
            return duration;
        }
        
        public int getIndex() {
            return index;
        }
    }
}`
  },
  {
    id: 'example-114',
    englishTitle: 'Right Rotation Check',
    chineseTitle: '右旋转检查',
    algorithm: '字符串处理',
    algorithmDescription: '字符串处理是一种常见的算法类型，通过对字符串进行操作来解决问题。在这个问题中，我们需要判断一个字符串是否是另一个字符串的右旋转版本。',
    englishDescription: 'Charlie has a magic mirror that shows the right-rotated versions of a given word. To generate different right rotations of a word, the word is written in a circle in a clockwise order and read it starting from any given character in a clockwise order until all the characters are covered. For example, in the word "sample", if we start with "p", we get the right rotated word as "plesam". Write an algorithm to output 1 if the word1 is a right rotation of word2 otherwise output -1.',
    chineseDescription: 'Charlie有一个魔镜，可以显示给定单词的右旋转版本。为了生成单词的不同右旋转版本，将单词按顺时针方向写在一个圆圈中，然后从任何给定字符开始按顺时针方向读取，直到覆盖所有字符。例如，在单词"sample"中，如果我们从"p"开始，我们得到的右旋转单词是"plesam"。编写一个算法，如果word1是word2的右旋转版本，则输出1，否则输出-1。',
    examples: [
      {
        input: 'sample\nplesam',
        output: '1'
      }
    ],
    code: `function isRightRotation(word1, word2) {
  // 如果长度不同，直接返回-1
  if (word1.length !== word2.length) {
    return -1;
  }
  
  // 如果两个单词相同，返回1
  if (word1 === word2) {
    return 1;
  }
  
  // 检查word2是否是word1+word1的子串
  const doubledWord = word1 + word1;
  if (doubledWord.includes(word2)) {
    return 1;
  }
  
  return -1;
}
`,
    javaCode: `public class Solution {
    public static int isRightRotation(String word1, String word2) {
        // 如果长度不同，直接返回-1
        if (word1.length() != word2.length()) {
            return -1;
        }
        
        // 如果两个单词相同，返回1
        if (word1.equals(word2)) {
            return 1;
        }
        
        // 检查word2是否是word1+word1的子串
        String doubledWord = word1 + word1;
        if (doubledWord.contains(word2)) {
            return 1;
        }
        
        return -1;
    }
}`
  },
  {
    id: 'example-115',
    englishTitle: 'Frequency Sort',
    chineseTitle: '频率排序',
    algorithm: '排序算法',
    algorithmDescription: '排序算法是一种将元素按照特定顺序排列的算法。在这个问题中，我们需要根据元素的频率降序排序，频率相同的元素保持原顺序。',
    englishDescription: 'Design a way to sort the list of positive integers in the descending order according to frequency of the elements. The elements with higher frequency come before those with lower frequency. Elements with the same frequency come in the same order as they appear in the given list.',
    chineseDescription: '设计一种方法，根据元素的频率降序排序正整数列表。频率较高的元素排在频率较低的元素之前。频率相同的元素按照它们在给定列表中出现的顺序排列。',
    examples: [
      {
        input: '19\n1 2 2 3 3 3 4 4 5 5 5 5 6 6 6 7 8 9 10',
        output: '5 5 5 5 3 3 3 6 6 6 2 2 4 4 1 7 8 9 10'
      }
    ],
    code: `function frequencySort(arr) {
  // 统计每个元素的频率
  const frequencyMap = new Map();
  for (let num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  
  // 按频率降序排序，频率相同则按原顺序排序
  // 为了保持原顺序，我们需要记录每个元素第一次出现的位置
  const firstOccurrence = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!firstOccurrence.has(arr[i])) {
      firstOccurrence.set(arr[i], i);
    }
  }
  
  // 排序
  arr.sort((a, b) => {
    const freqA = frequencyMap.get(a);
    const freqB = frequencyMap.get(b);
    
    if (freqA !== freqB) {
      return freqB - freqA; // 频率高的排前面
    } else {
      return firstOccurrence.get(a) - firstOccurrence.get(b); // 频率相同按原顺序
    }
  });
  
  return arr;
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public static List<Integer> frequencySort(List<Integer> arr) {
        // 统计每个元素的频率
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : arr) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        
        // 按频率降序排序，频率相同则按原顺序排序
        // 为了保持原顺序，我们需要记录每个元素第一次出现的位置
        Map<Integer, Integer> firstOccurrence = new HashMap<>();
        for (int i = 0; i < arr.size(); i++) {
            int num = arr.get(i);
            if (!firstOccurrence.containsKey(num)) {
                firstOccurrence.put(num, i);
            }
        }
        
        // 排序
        arr.sort(new Comparator<Integer>() {
            @Override
            public int compare(Integer a, Integer b) {
                int freqA = frequencyMap.get(a);
                int freqB = frequencyMap.get(b);
                
                if (freqA != freqB) {
                    return freqB - freqA; // 频率高的排前面
                } else {
                    return firstOccurrence.get(a) - firstOccurrence.get(b); // 频率相同按原顺序
                }
            }
        });
        
        return arr;
    }
}`
  },
  {
    id: 'example-116',
    englishTitle: 'Maximum Leaf-to-Leaf Path Product',
    chineseTitle: '最大叶到叶路径乘积',
    algorithm: '深度优先搜索（DFS）',
    algorithmDescription: '深度优先搜索（DFS）是一种用于遍历或搜索树或图的算法。在这个问题中，我们需要使用DFS来找到树中从一个叶子到另一个叶子的路径，使得路径上的节点值乘积最大。',
    englishDescription: 'Arya is attempting to solve a math problem. In this problem, she is given a tree with N nodes, indexed from 1 to N where the root node is indexed as 1. Each node of the tree has a defined value. She wants to trace a path from one leaf to another leaf in such a way that will award her the maximum score for that path. The score of a path is defined as the product of node values along the path. Write an algorithm to output an integer representing the maximum possible score.',
    chineseDescription: 'Arya正在尝试解决一个数学问题。在这个问题中，她被给予一棵有N个节点的树，节点编号从1到N，其中根节点编号为1。树的每个节点都有一个定义的值。她想从一个叶子追踪到另一个叶子的路径，以获得该路径的最大分数。路径的分数定义为沿路径的节点值的乘积。编写一个算法来输出表示最大可能分数的整数。',
    examples: [
      {
        input: '4\n-1 2 3 2\n1 2\n1 3\n3 4',
        output: '-12'
      }
    ],
    code: `function maxLeafToLeafPathProduct(n, values, edges) {
  // 构建树的邻接表
  const adj = new Array(n + 1).fill().map(() => []);
  for (let [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }
  
  let maxProduct = -Infinity;
  
  // 深度优先搜索
  function dfs(node, parent) {
    // 收集所有子节点的路径乘积
    const childProducts = [];
    
    for (let neighbor of adj[node]) {
      if (neighbor !== parent) {
        const product = dfs(neighbor, node);
        childProducts.push(product);
      }
    }
    
    // 如果是叶子节点（只有一个邻居，即父节点）
    if (childProducts.length === 0) {
      return values[node - 1]; // 返回自身的值
    }
    
    // 排序子节点的路径乘积
    childProducts.sort((a, b) => b - a);
    
    // 如果有至少两个子节点，计算通过当前节点的最大路径乘积
    if (childProducts.length >= 2) {
      const currentProduct = values[node - 1] * childProducts[0] * childProducts[1];
      maxProduct = Math.max(maxProduct, currentProduct);
    }
    
    // 返回当前节点到叶子节点的最大路径乘积
    return values[node - 1] * childProducts[0];
  }
  
  dfs(1, -1);
  return maxProduct;
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Solution {
    private static long maxProduct;
    
    public static long maxLeafToLeafPathProduct(int n, List<Integer> values, List<List<Integer>> edges) {
        // 构建树的邻接表
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            adj.add(new ArrayList<>());
        }
        for (List<Integer> edge : edges) {
            int a = edge.get(0);
            int b = edge.get(1);
            adj.get(a).add(b);
            adj.get(b).add(a);
        }
        
        maxProduct = Long.MIN_VALUE;
        
        // 深度优先搜索
        dfs(1, -1, values, adj);
        
        return maxProduct;
    }
    
    private static long dfs(int node, int parent, List<Integer> values, List<List<Integer>> adj) {
        // 收集所有子节点的路径乘积
        List<Long> childProducts = new ArrayList<>();
        
        for (int neighbor : adj.get(node)) {
            if (neighbor != parent) {
                long product = dfs(neighbor, node, values, adj);
                childProducts.add(product);
            }
        }
        
        // 如果是叶子节点（只有一个邻居，即父节点）
        if (childProducts.isEmpty()) {
            return values.get(node - 1); // 返回自身的值
        }
        
        // 排序子节点的路径乘积
        Collections.sort(childProducts, Collections.reverseOrder());
        
        // 如果有至少两个子节点，计算通过当前节点的最大路径乘积
        if (childProducts.size() >= 2) {
            long currentProduct = (long) values.get(node - 1) * childProducts.get(0) * childProducts.get(1);
            maxProduct = Math.max(maxProduct, currentProduct);
        }
        
        // 返回当前节点到叶子节点的最大路径乘积
        return (long) values.get(node - 1) * childProducts.get(0);
    }
}`
  },
  {
    id: 'example-117',
    englishTitle: 'Minimum Juice Stalls',
    chineseTitle: '最少果汁摊位',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。在这个问题中，我们需要选择最优的果汁摊位来补充能量，以最小化停留的摊位数量。',
    englishDescription: 'John misses his bus and has to walk all his way from home to school. The distance between his school and home is D units. He starts his journey with an initial energy of K units. His energy decreases by 1 unit for every unit of distance walked. On his way to school, there are N juice stalls. Each stall has a specific amount of juice in liters. His energy increases by 1 unit for every liter of juice he consumes. Note that in order to keep him walking he should have non-zero energy. Write an algorithm to help John figure out the minimum number of juice stalls at which he should stop to successfully reach the school. In case he can\'t reach the school, the output will be -1.',
    chineseDescription: 'John错过了公交车，不得不从家步行到学校。他家到学校的距离是D单位。他开始旅程时的初始能量是K单位。每走1单位距离，他的能量就减少1单位。在去学校的路上，有N个果汁摊位。每个摊位都有特定数量的果汁（以升为单位）。每消耗1升果汁，他的能量就增加1单位。注意，为了保持行走，他的能量必须非零。编写一个算法来帮助John计算他应该停留的最少果汁摊位数量，以成功到达学校。如果他无法到达学校，输出将是-1。',
    examples: [
      {
        input: '4\n5 7 8 10\n2 3 1 5\n15 5',
        output: '3'
      }
    ],
    code: `function minimumJuiceStalls(N, dist, lit, D, K) {
  // 将果汁摊位按距离排序
  const stalls = [];
  for (let i = 0; i < N; i++) {
    stalls.push({ dist: dist[i], lit: lit[i] });
  }
  stalls.sort((a, b) => a.dist - b.dist);
  
  // 添加学校作为最后一个点
  stalls.push({ dist: D, lit: 0 });
  
  let currentEnergy = K;
  let currentPosition = 0;
  let stops = 0;
  let maxReach = K;
  let bestStall = -1;
  
  for (let i = 0; i < stalls.length; i++) {
    const distanceToStall = stalls[i].dist - currentPosition;
    
    // 如果当前能量不足以到达下一个摊位
    while (currentEnergy < distanceToStall) {
      if (bestStall === -1) {
        return -1; // 无法到达
      }
      // 选择最优的摊位补充能量
      currentEnergy += stalls[bestStall].lit;
      stops++;
      bestStall = -1;
      maxReach = currentEnergy + currentPosition;
    }
    
    // 到达当前摊位
    currentEnergy -= distanceToStall;
    currentPosition = stalls[i].dist;
    
    // 如果是学校，结束
    if (currentPosition === D) {
      return stops;
    }
    
    // 更新最优摊位（在可到达范围内，选择果汁最多的摊位）
    if (stalls[i].lit > 0 && currentPosition + currentEnergy >= stalls[i].dist) {
      if (bestStall === -1 || stalls[i].lit > stalls[bestStall].lit) {
        bestStall = i;
      }
    }
  }
  
  return -1;
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Solution {
    public static int minimumJuiceStalls(int N, List<Integer> dist, List<Integer> lit, int D, int K) {
        // 将果汁摊位按距离排序
        List<Stall> stalls = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            stalls.add(new Stall(dist.get(i), lit.get(i)));
        }
        stalls.sort(Comparator.comparingInt(Stall::getDist));
        
        // 添加学校作为最后一个点
        stalls.add(new Stall(D, 0));
        
        int currentEnergy = K;
        int currentPosition = 0;
        int stops = 0;
        int bestStall = -1;
        
        for (int i = 0; i < stalls.size(); i++) {
            int distanceToStall = stalls.get(i).getDist() - currentPosition;
            
            // 如果当前能量不足以到达下一个摊位
            while (currentEnergy < distanceToStall) {
                if (bestStall == -1) {
                    return -1; // 无法到达
                }
                // 选择最优的摊位补充能量
                currentEnergy += stalls.get(bestStall).getLit();
                stops++;
                bestStall = -1;
            }
            
            // 到达当前摊位
            currentEnergy -= distanceToStall;
            currentPosition = stalls.get(i).getDist();
            
            // 如果是学校，结束
            if (currentPosition == D) {
                return stops;
            }
            
            // 更新最优摊位（在可到达范围内，选择果汁最多的摊位）
            if (stalls.get(i).getLit() > 0 && currentPosition + currentEnergy >= stalls.get(i).getDist()) {
                if (bestStall == -1 || stalls.get(i).getLit() > stalls.get(bestStall).getLit()) {
                    bestStall = i;
                }
            }
        }
        
        return -1;
    }
    
    static class Stall {
        private int dist;
        private int lit;
        
        public Stall(int dist, int lit) {
            this.dist = dist;
            this.lit = lit;
        }
        
        public int getDist() {
            return dist;
        }
        
        public int getLit() {
            return lit;
        }
    }
}`
  },
  {
    id: 'example-118',
    englishTitle: 'Minimum Apple Cost',
    chineseTitle: '最小苹果花费',
    algorithm: '数学计算',
    algorithmDescription: '数学计算是一种通过数学方法来解决问题的算法。在这个问题中，我们需要计算购买一定数量的苹果的最小花费，考虑两个不同商店的价格和批量购买的情况。',
    englishDescription: 'The first line of the input consists of an integer - N, representing the total number of apples that Josh wants to buy. The second line consists of two space-separated positive integers - M1 and P1, representing the number of apples in a lot and the lot\'s price at shop A, respectively. The third line consists of two space-separated positive integers - M2 and P2, representing the number of apples in a lot and the lot\'s price at shop B, respectively. Print a positive integer representing the minimum price at which Josh can buy the apples.',
    chineseDescription: '输入的第一行包含一个整数N，表示Josh想要购买的苹果总数。第二行包含两个空格分隔的正整数M1和P1，分别表示商店A中每批苹果的数量和批次价格。第三行包含两个空格分隔的正整数M2和P2，分别表示商店B中每批苹果的数量和批次价格。打印一个正整数，表示Josh购买苹果的最低价格。',
    examples: [
      {
        input: '19\n3 10\n4 15',
        output: '65'
      }
    ],
    code: `function minimumAppleCost(N, M1, P1, M2, P2) {
  let minCost = Infinity;
  
  // 计算在商店A购买0到N/M1+1批的情况
  for (let x = 0; x <= Math.ceil(N / M1); x++) {
    const applesFromA = x * M1;
    if (applesFromA >= N) {
      // 只从A购买
      const cost = x * P1;
      if (cost < minCost) {
        minCost = cost;
      }
    } else {
      // 需要从B购买剩余的苹果
      const remainingApples = N - applesFromA;
      const y = Math.ceil(remainingApples / M2);
      const cost = x * P1 + y * P2;
      if (cost < minCost) {
        minCost = cost;
      }
    }
  }
  
  // 计算在商店B购买0到N/M2+1批的情况
  for (let y = 0; y <= Math.ceil(N / M2); y++) {
    const applesFromB = y * M2;
    if (applesFromB >= N) {
      // 只从B购买
      const cost = y * P2;
      if (cost < minCost) {
        minCost = cost;
      }
    } else {
      // 需要从A购买剩余的苹果
      const remainingApples = N - applesFromB;
      const x = Math.ceil(remainingApples / M1);
      const cost = x * P1 + y * P2;
      if (cost < minCost) {
        minCost = cost;
      }
    }
  }
  
  return minCost;
}
`,
    javaCode: `public class Solution {
    public static int minimumAppleCost(int N, int M1, int P1, int M2, int P2) {
        int minCost = Integer.MAX_VALUE;
        
        // 计算在商店A购买0到N/M1+1批的情况
        for (int x = 0; x <= Math.ceil((double) N / M1); x++) {
            int applesFromA = x * M1;
            if (applesFromA >= N) {
                // 只从A购买
                int cost = x * P1;
                if (cost < minCost) {
                    minCost = cost;
                }
            } else {
                // 需要从B购买剩余的苹果
                int remainingApples = N - applesFromA;
                int y = (int) Math.ceil((double) remainingApples / M2);
                int cost = x * P1 + y * P2;
                if (cost < minCost) {
                    minCost = cost;
                }
            }
        }
        
        // 计算在商店B购买0到N/M2+1批的情况
        for (int y = 0; y <= Math.ceil((double) N / M2); y++) {
            int applesFromB = y * M2;
            if (applesFromB >= N) {
                // 只从B购买
                int cost = y * P2;
                if (cost < minCost) {
                    minCost = cost;
                }
            } else {
                // 需要从A购买剩余的苹果
                int remainingApples = N - applesFromB;
                int x = (int) Math.ceil((double) remainingApples / M1);
                int cost = x * P1 + y * P2;
                if (cost < minCost) {
                    minCost = cost;
                }
            }
        }
        
        return minCost;
    }
}`
  },
  {
    id: 'example-119',
    englishTitle: 'Largest Possible House Plot',
    chineseTitle: '最大可能的房屋 plot',
    algorithm: '排序算法',
    algorithmDescription: '排序算法是一种将元素按照特定顺序排列的算法。在这个问题中，我们需要根据房屋的位置对房屋进行排序，然后计算相邻房屋之间的最大距离。',
    englishDescription: 'In a city there are N houses. Noddy is looking for a plot of land in the city on which to build his house. He wants to buy the largest plot of land that will allow him to build the largest possible house. All the houses in the city lie in a straight line and all of them have a house number and a second number indicating the position of the house from the entry point in the city. Noddy wants to find the houses between which he can build the largest possible house. Write an algorithm to help Noddy find the house numbers between which he can build his largest possible house.',
    chineseDescription: '在一个城市中有N栋房屋。Noddy正在城市中寻找一块土地来建造他的房子。他想购买最大的土地，以便建造尽可能大的房子。城市中的所有房屋都位于一条直线上，并且都有一个房屋编号和一个表示房屋从城市入口点开始的位置的第二个数字。Noddy想找到他可以在其间建造最大可能房屋的房屋。编写一个算法来帮助Noddy找到他可以在其间建造最大可能房屋的房屋编号。',
    examples: [
      {
        input: '5 2\n3 7\n1 9\n2 0\n5 15\n4 30',
        output: '5 4'
      }
    ],
    code: `function largestPossibleHousePlot(N, houses) {
  // 按位置排序房屋
  houses.sort((a, b) => a.position - b.position);
  
  let maxDistance = -1;
  let house1 = -1;
  let house2 = -1;
  
  // 计算相邻房屋之间的距离
  for (let i = 1; i < N; i++) {
    const distance = houses[i].position - houses[i-1].position;
    if (distance > maxDistance) {
      maxDistance = distance;
      house1 = houses[i-1].number;
      house2 = houses[i].number;
    } else if (distance === maxDistance) {
      // 如果距离相同，选择编号较小的房屋对
      const currentMin = Math.min(house1, house2);
      const newMin = Math.min(houses[i-1].number, houses[i].number);
      if (newMin < currentMin) {
        house1 = houses[i-1].number;
        house2 = houses[i].number;
      }
    }
  }
  
  // 按升序返回房屋编号
  return [Math.min(house1, house2), Math.max(house1, house2)];
}`,
    javaCode: `import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Solution {
    public static List<Integer> largestPossibleHousePlot(int N, List<House> houses) {
        // 按位置排序房屋
        houses.sort(Comparator.comparingInt(House::getPosition));
        
        int maxDistance = -1;
        int house1 = -1;
        int house2 = -1;
        
        // 计算相邻房屋之间的距离
        for (int i = 1; i < N; i++) {
            int distance = houses.get(i).getPosition() - houses.get(i-1).getPosition();
            if (distance > maxDistance) {
                maxDistance = distance;
                house1 = houses.get(i-1).getNumber();
                house2 = houses.get(i).getNumber();
            } else if (distance == maxDistance) {
                // 如果距离相同，选择编号较小的房屋对
                int currentMin = Math.min(house1, house2);
                int newMin = Math.min(houses.get(i-1).getNumber(), houses.get(i).getNumber());
                if (newMin < currentMin) {
                    house1 = houses.get(i-1).getNumber();
                    house2 = houses.get(i).getNumber();
                }
            }
        }
        
        // 按升序返回房屋编号
        List<Integer> result = new ArrayList<>();
        result.add(Math.min(house1, house2));
        result.add(Math.max(house1, house2));
        return result;
    }
    
    static class House {
        private int number;
        private int position;
        
        public House(int number, int position) {
            this.number = number;
            this.position = position;
        }
        
        public int getNumber() {
            return number;
        }
        
        public int getPosition() {
            return position;
        }
    }
}`
  },
  {
    id: 'example-120',
    englishTitle: 'Maximum Signal in Binary Data',
    chineseTitle: '二进制数据中的最大信号',
    algorithm: '字符串处理',
    algorithmDescription: '字符串处理是一种对字符串进行操作和分析的算法。在这个问题中，我们需要分析二进制字符串，找出不在开头或结尾的最大连续1或0的长度。',
    englishDescription: 'A digital machine generates binary data which consists of a string of 0s and 1s. A maximum signal M in the data consists of the maximum number of either 1s or 0s appearing consecutively in the data, but M can\'t be at the beginning or end of the string. Design a way to find the length of the maximum signal.',
    chineseDescription: '数字机器生成由0和1组成的二进制数据。数据中的最大信号M由数据中连续出现的1或0的最大数量组成，但M不能位于字符串的开头或结尾。设计一种方法来找到最大信号的长度。',
    examples: [
      {
        input: '6\n101000',
        output: '1'
      },
      {
        input: '9\n101111110',
        output: '6'
      }
    ],
    code: `function maximumSignal(N, s) {
  if (N <= 2) {
    return 0;
  }
  
  let maxLength = 0;
  let currentLength = 1;
  
  for (let i = 1; i < N - 1; i++) {
    if (s[i] === s[i-1]) {
      currentLength++;
    } else {
      currentLength = 1;
    }
    
    if (i < N - 1) {
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  
  return maxLength;
}
`,
    javaCode: `public class Solution {
    public static int maximumSignal(int N, String s) {
        if (N <= 2) {
            return 0;
        }
        
        int maxLength = 0;
        int currentLength = 1;
        
        for (int i = 1; i < N - 1; i++) {
            if (s.charAt(i) == s.charAt(i - 1)) {
                currentLength++;
            } else {
                currentLength = 1;
            }
            
            if (i < N - 1) {
                maxLength = Math.max(maxLength, currentLength);
            }
        }
        
        return maxLength;
    }
}`
  },
  {
    id: 'example-121',
    englishTitle: 'Maximum Toll Revenue',
    chineseTitle: '最大收费站收入',
    algorithm: '树的遍历',
    algorithmDescription: '树的遍历是一种访问树中所有节点的算法。在这个问题中，我们需要通过遍历树来计算每条边的收费站收入，找出收入最大的边。',
    englishDescription: 'In a state, N cities with unique city codes from 1 to N are connected by N-1 roads. The road network is in the form of a tree of which each road connects two cities. A path is a road, or a combination of roads, connecting any two cities. Each road has a toll booth that collects a toll equal to the maximum number of paths of which that particular road is part. The state transportation authority wishes to identify the road on which the maximum toll revenue is collected. Write an algorithm to help the transportation authority identify the pair of cities connected by the road on which the maximum toll revenue is collected. The output should be sorted in increasing order. If more than one road collects the same total revenue, then output the pair of cities that have the smaller city code.',
    chineseDescription: '在一个州里，有N个城市，城市代码从1到N，由N-1条道路连接。道路网络呈树状，每条道路连接两个城市。路径是一条道路或道路的组合，连接任意两个城市。每条道路都有一个收费站，收取的通行费等于该道路所属的路径的最大数量。州交通管理局希望确定收取最大通行费收入的道路。编写一个算法来帮助交通管理局确定连接收取最大通行费收入的道路的城市对。输出应按升序排序。如果多条道路收取相同的总收入，则输出城市代码较小的城市对。',
    examples: [
      {
        input: '4 3\n1 2\n2 3\n3 4',
        output: '2 3'
      }
    ],
    code: `function maximumTollRevenue(N, roads) {
  // 构建邻接表
  const adj = new Array(N + 1).fill().map(() => []);
  for (let [u, v] of roads) {
    adj[u].push(v);
    adj[v].push(u);
  }
  
  // 计算子树大小
  function dfs(node, parent) {
    let size = 1;
    for (let neighbor of adj[node]) {
      if (neighbor !== parent) {
        size += dfs(neighbor, node);
      }
    }
    return size;
  }
  
  let maxRevenue = -1;
  let bestRoad = [Infinity, Infinity];
  
  // 遍历每条道路，计算其收入
  for (let [u, v] of roads) {
    // 暂时断开u和v的连接
    const indexU = adj[u].indexOf(v);
    const indexV = adj[v].indexOf(u);
    adj[u].splice(indexU, 1);
    adj[v].splice(indexV, 1);
    
    // 计算断开后两边的子树大小
    const sizeU = dfs(u, -1);
    const sizeV = N - sizeU;
    const revenue = sizeU * sizeV;
    
    // 恢复连接
    adj[u].push(v);
    adj[v].push(u);
    
    // 更新最大收入和最佳道路
    if (revenue > maxRevenue || (revenue === maxRevenue && Math.min(u, v) < Math.min(bestRoad[0], bestRoad[1]))) {
      maxRevenue = revenue;
      bestRoad = [Math.min(u, v), Math.max(u, v)];
    }
  }
  
  return bestRoad;
}
`,
    javaCode: `import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static List<Integer> maximumTollRevenue(int N, List<List<Integer>> roads) {
        // 构建邻接表
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            adj.add(new ArrayList<>());
        }
        for (List<Integer> road : roads) {
            int u = road.get(0);
            int v = road.get(1);
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
        
        int[] sizes = new int[N + 1];
        
        // 计算子树大小
        dfs(1, -1, adj, sizes);
        
        int maxRevenue = -1;
        List<Integer> bestRoad = new ArrayList<>();
        bestRoad.add(Integer.MAX_VALUE);
        bestRoad.add(Integer.MAX_VALUE);
        
        // 遍历每条道路，计算其收入
        for (List<Integer> road : roads) {
            int u = road.get(0);
            int v = road.get(1);
            
            // 计算断开后两边的子树大小
            int sizeU = sizes[u];
            int sizeV = N - sizeU;
            int revenue = sizeU * sizeV;
            
            // 更新最大收入和最佳道路
            List<Integer> currentRoad = new ArrayList<>();
            currentRoad.add(Math.min(u, v));
            currentRoad.add(Math.max(u, v));
            
            if (revenue > maxRevenue || (revenue == maxRevenue && isLexSmaller(currentRoad, bestRoad))) {
                maxRevenue = revenue;
                bestRoad = currentRoad;
            }
        }
        
        return bestRoad;
    }
    
    private static int dfs(int node, int parent, List<List<Integer>> adj, int[] sizes) {
        int size = 1;
        for (int neighbor : adj.get(node)) {
            if (neighbor != parent) {
                size += dfs(neighbor, node, adj, sizes);
            }
        }
        sizes[node] = size;
        return size;
    }
    
    private static boolean isLexSmaller(List<Integer> a, List<Integer> b) {
        for (int i = 0; i < Math.min(a.size(), b.size()); i++) {
            if (a.get(i) < b.get(i)) {
                return true;
            } else if (a.get(i) > b.get(i)) {
                return false;
            }
        }
        return a.size() < b.size();
    }
}`
  },
  {
    id: 'example-122',
    englishTitle: 'Remove Vowels',
    chineseTitle: '删除元音字母',
    algorithm: '字符串处理',
    algorithmDescription: '字符串处理是一种对字符串进行操作和分析的算法。在这个问题中，我们需要从给定的字符串中删除所有元音字母。',
    englishDescription: 'The vowels in the English alphabet are: (a, e, i, o, u, A, E, I, O, U). Write an algorithm to eliminate all vowels from a given string.',
    chineseDescription: '英语字母表中的元音字母是：(a, e, i, o, u, A, E, I, O, U)。编写一个算法来从给定的字符串中消除所有元音字母。',
    examples: [
      {
        input: 'MynameisAnthony',
        output: 'Mynmsnthny'
      }
    ],
    code: `function removeVowels(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let result = '';
  
  for (let char of s) {
    if (!vowels.has(char)) {
      result += char;
    }
  }
  
  return result;
}
`,
    javaCode: `import java.util.HashSet;
import java.util.Set;

public class Solution {
    public static String removeVowels(String s) {
        Set<Character> vowels = new HashSet<>();
        vowels.add('a');
        vowels.add('e');
        vowels.add('i');
        vowels.add('o');
        vowels.add('u');
        vowels.add('A');
        vowels.add('E');
        vowels.add('I');
        vowels.add('O');
        vowels.add('U');
        
        StringBuilder result = new StringBuilder();
        
        for (char c : s.toCharArray()) {
            if (!vowels.contains(c)) {
                result.append(c);
            }
        }
        
        return result.toString();
    }
}`
  },
  {
    id: 'example-123',
    englishTitle: 'Count Digit Occurrences',
    chineseTitle: '统计数字出现次数',
    algorithm: '字符串处理',
    algorithmDescription: '字符串处理是一种对字符串进行操作和分析的算法。在这个问题中，我们需要将数字转换为字符串，然后统计特定数字出现的次数。',
    englishDescription: 'Write an algorithm to find the number of occurrences of needle in given positive number haystack. The first line of the input consists of an integer needle, representing a digit. The second line consists of an integer haystack, representing the positive number. Print an integer representing the number of occurrences of needle in haystack.',
    chineseDescription: '编写一个算法来找出给定正数haystack中needle的出现次数。输入的第一行包含一个整数needle，表示一个数字。第二行包含一个整数haystack，表示正数。打印一个整数，表示needle在haystack中出现的次数。',
    examples: [
      {
        input: '2\n123228',
        output: '3'
      }
    ],
    code: `function countDigitOccurrences(needle, haystack) {
  const haystackStr = haystack.toString();
  const needleStr = needle.toString();
  let count = 0;
  
  for (let char of haystackStr) {
    if (char === needleStr) {
      count++;
    }
  }
  
  return count;
}
`,
    javaCode: `public class Solution {
    public static int countDigitOccurrences(int needle, int haystack) {
        String haystackStr = String.valueOf(haystack);
        String needleStr = String.valueOf(needle);
        int count = 0;
        
        for (char c : haystackStr.toCharArray()) {
            if (String.valueOf(c).equals(needleStr)) {
                count++;
            }
        }
        
        return count;
    }
}`
  },
  {
    id: "example-124",
    englishTitle: "Minimum Straight Routes",
    chineseTitle: "最少直线路线",
    algorithm: "几何算法",
    algorithmDescription: "几何算法是一种处理几何问题的算法。在这个问题中，我们需要计算覆盖所有接送点的最少直线路线数。",
    englishDescription: "A transportation company has begun service in a new city. Their specialty is affordable fares. They have identified some pickup locations in the crowded areas of the city. Servicing these locations will yield them the most customers. To maximize their profitability, they wish to determine the minimum number of straight-line routes that will connect all the pickup locations. Write an algorithm to calculate the minimum number of straight-line routes that will cover all the pickup locations.",
    chineseDescription: "一家运输公司开始在新城市提供服务。他们的特色是实惠的票价。他们已经在城市的拥挤地区确定了一些接送点。为这些地点提供服务将为他们带来最多的客户。为了最大化盈利能力，他们希望确定覆盖所有接送点的最少直线路线数。编写一个算法来计算覆盖所有接送点的最少直线路线数。",
    examples: [
      {
        input: "3\n0 0\n1 1\n2 2",
        output: "1"
      }
    ],
    code: `function minimumStraightRoutes(N, points) {
  if (N <= 2) {
    return 1;
  }
  
  // 计算点之间的斜率，找出不同的直线
  const lines = new Set();
  
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const x1 = points[i][0];
      const y1 = points[i][1];
      const x2 = points[j][0];
      const y2 = points[j][1];
      
      // 计算斜率
      let slope, intercept;
      if (x2 - x1 === 0) {
        // 垂直直线
        slope = 'inf';
        intercept = x1;
      } else {
        slope = (y2 - y1) / (x2 - x1);
        intercept = y1 - slope * x1;
      }
      
      // 用字符串表示直线
      const line = slope + ',' + intercept;
      lines.add(line);
    }
  }
  
  return lines.size;
}
`,
    javaCode: `import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    public static int minimumStraightRoutes(int N, List<int[]> points) {
        if (N <= 2) {
            return 1;
        }
        
        // 计算点之间的斜率，找出不同的直线
        Set<String> lines = new HashSet<>();
        
        for (int i = 0; i < N; i++) {
            for (int j = i + 1; j < N; j++) {
                int[] p1 = points.get(i);
                int[] p2 = points.get(j);
                int x1 = p1[0];
                int y1 = p1[1];
                int x2 = p2[0];
                int y2 = p2[1];
                
                // 计算斜率
                String line;
                if (x2 - x1 == 0) {
                    // 垂直直线
                    line = "inf," + x1;
                } else {
                    double slope = (double) (y2 - y1) / (x2 - x1);
                    double intercept = y1 - slope * x1;
                    line = slope + "," + intercept;
                }
                
                lines.add(line);
            }
        }
        
        return lines.size();
    }
}`
  },
  {
    id: 'example-125',
    englishTitle: 'Largest House Area',
    chineseTitle: '最大房屋面积',
    algorithm: '深度优先搜索（DFS）',
    algorithmDescription: '深度优先搜索（DFS）是一种用于遍历或搜索树或图的算法。在这个问题中，我们需要使用DFS来找到网格中最大的房屋面积（连通的1的数量）。',
    englishDescription: 'The city authorities conduct a study of the houses in a residential area for a city planning scheme. The area is depicted in an aerial view and divided into an N x M grid. If a grid cell contains some part of a house roof, then it is assigned the value 1; otherwise, the cell represents a vacant plot and is assigned the value 0. Clusters of adjacent grid cells with value 1 represent a single house. Diagonally placed grids do not represent a single house. The area of a house is the number of 1s it spans. Write an algorithm to find the area of the largest house.',
    chineseDescription: '城市当局对住宅区的房屋进行了一项研究，用于城市规划方案。该区域在鸟瞰图中被划分为N x M网格。如果网格单元包含房屋屋顶的一部分，则被赋值为1；否则，该单元代表空地，被赋值为0。值为1的相邻网格单元集群代表单个房屋。对角放置的网格不代表单个房屋。房屋的面积是它所跨越的1的数量。编写一个算法来找到最大房屋的面积。',
    examples: [
      {
        input: '5 5\n0 0 0 0 0\n0 1 1 0 0\n0 0 1 0 0\n0 0 0 0 0\n0 0 1 0 0',
        output: '3'
      }
    ],
    code: `function largestHouseArea(rows, cols, grid) {
  let maxArea = 0;
  const visited = new Array(rows).fill().map(() => new Array(cols).fill(false));
  
  function dfs(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 0 || visited[i][j]) {
      return 0;
    }
    
    visited[i][j] = true;
    let area = 1;
    
    // 上下左右四个方向
    area += dfs(i-1, j);
    area += dfs(i+1, j);
    area += dfs(i, j-1);
    area += dfs(i, j+1);
    
    return area;
  }
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        const currentArea = dfs(i, j);
        maxArea = Math.max(maxArea, currentArea);
      }
    }
  }
  
  return maxArea;
}`
  },
  {
    id: 'example-126',
    englishTitle: 'Count Perfect Squares',
    chineseTitle: '统计完全平方数',
    algorithm: '数学计算',
    algorithmDescription: '数学计算是一种通过数学方法来解决问题的算法。在这个问题中，我们需要判断一个数是否为完全平方数。',
    englishDescription: 'A company is planning a big sale at which they will give their customers a special promotional discount. Each customer that purchases a product from the company has a unique customerID numbered from 0 to N-1. Andy, the marketing head of the company, has selected bill amounts of the N customers for the promotional scheme. The discount will be given to the customers whose bill amounts are perfect squares. The customers may use this discount on a future purchase. Write an algorithm to help Andy find the number of customers that will be given discounts.',
    chineseDescription: '一家公司正在计划一场大促销，他们将给顾客提供特殊的促销折扣。每个从公司购买产品的顾客都有一个唯一的customerID，编号从0到N-1。公司的营销主管Andy为促销计划选择了N个顾客的账单金额。折扣将给予账单金额为完全平方数的顾客。顾客可以在未来的购买中使用此折扣。编写一个算法来帮助Andy找到将获得折扣的顾客数量。',
    examples: [
      {
        input: '6\n25 77 54 81 48 34',
        output: '2'
      }
    ],
    code: `function countPerfectSquares(numOfCust, bills) {
  let count = 0;
  
  for (let bill of bills) {
    if (isPerfectSquare(bill)) {
      count++;
    }
  }
  
  return count;
}

function isPerfectSquare(n) {
  if (n < 0) {
    return false;
  }
  const sqrt = Math.sqrt(n);
  return Math.floor(sqrt) === sqrt;
}`
  },
  {
    id: 'example-127',
    englishTitle: 'Arrange Even and Odd Numbers',
    chineseTitle: '排列偶数和奇数',
    algorithm: '数组操作',
    algorithmDescription: '数组操作是一种对数组进行处理和变换的算法。在这个问题中，我们需要将数组中的偶数放在前面，奇数放在后面，同时保持它们的相对顺序。',
    englishDescription: 'You are playing an online game. In the game, a list of N numbers is given. The player has to arrange the numbers so that all the odd numbers of the list come after the even numbers. Write an algorithm to arrange the given list such that all the odd numbers of the list come after the even numbers.',
    chineseDescription: '你正在玩一个在线游戏。在游戏中，给出了一个包含N个数字的列表。玩家需要排列这些数字，使得列表中的所有奇数都排在偶数之后。编写一个算法来排列给定的列表，使得列表中的所有奇数都排在偶数之后。',
    examples: [
      {
        input: '5\n1 2 3 4 5',
        output: '2 4 1 3 5'
      }
    ],
    code: `function arrangeEvenOdd(num, arr) {
  const even = [];
  const odd = [];
  
  for (let num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  
  return even.concat(odd);
}`
  },
  {
    id: 'example-128',
    englishTitle: 'Minimum Projects for Zero Error Scores',
    chineseTitle: '零错误分数的最少项目数',
    algorithm: '数学计算',
    algorithmDescription: '数学计算是一种通过数学方法来解决问题的算法。在这个问题中，我们需要计算团队成员完成项目的最小数量，使得所有成员的错误分数都为零。',
    englishDescription: 'Ethan is the leader of a team with N members. He has assigned an error score to each member in his team based on the bugs that he has found in that particular team member\'s task. Because the error score has increased to a significantly large value, he wants to give all the team members a chance to improve their error scores, thereby improving their reputation in the organization. He introduces a new rule that whenever a team member completes a project successfully, the error score of that member decreases by a count P and the error score of all the other team members whose score is greater than zero decreases by a count Q. Write an algorithm to help Ethan find the minimum number of projects that the team must complete in order to make the error score of all the team members zero.',
    chineseDescription: 'Ethan是一个有N个成员的团队的 leader。他根据在每个团队成员的任务中发现的bug，为每个成员分配了一个错误分数。由于错误分数已经增加到一个相当大的值，他想给所有团队成员一个机会来提高他们的错误分数，从而提高他们在组织中的声誉。他引入了一个新规则：每当团队成员成功完成一个项目时，该成员的错误分数减少P，所有其他错误分数大于零的团队成员的错误分数减少Q。编写一个算法来帮助Ethan找到团队必须完成的最小项目数，以使所有团队成员的错误分数为零。',
    examples: [
      {
        input: '3\n6 4 1\n4\n1',
        output: '3'
      }
    ],
    code: `function minimumProjects(errorScore_size, errorScore, compP, othQ) {
  if (errorScore_size === 0) {
    return 0;
  }
  
  let projects = 0;
  
  while (true) {
    // 检查是否所有分数都为零
    const allZero = errorScore.every(score => score <= 0);
    if (allZero) {
      break;
    }
    
    // 选择当前分数最高的成员完成项目
    let maxIndex = 0;
    for (let i = 1; i < errorScore_size; i++) {
      if (errorScore[i] > errorScore[maxIndex]) {
        maxIndex = i;
      }
    }
    
    // 更新分数
    errorScore[maxIndex] -= compP;
    for (let i = 0; i < errorScore_size; i++) {
      if (i !== maxIndex && errorScore[i] > 0) {
        errorScore[i] -= othQ;
      }
    }
    
    projects++;
  }
  
  return projects;
}`
  },
  {
    id: 'example-129',
    englishTitle: 'Maximum Alumni Dinner Attendance',
    chineseTitle: '最大校友晚宴出席人数',
    algorithm: '图论',
    algorithmDescription: '图论是一种研究图的结构和性质的数学分支。在这个问题中，我们需要使用图论的知识来找到最大数量的校友参加晚宴的排列。',
    englishDescription: 'A University has invited N alumni for a dinner. The dinner table has a circular shape. Each alumnus is assigned an invitation ID from 0 to N-1. Each alumnus likes exactly one fellow alumnus and will attend the dinner only if he/she can be seated next to the person he/she likes. Write an algorithm to find the IDs of the alumni in a lexicographical order so that maximum number of alumni attend the dinner. If more than one such seating arrangement exists, then output the one that is lexicographically smaller.',
    chineseDescription: '一所大学邀请了N位校友参加晚宴。晚宴桌子是圆形的。每位校友被分配一个邀请ID，从0到N-1。每位校友恰好喜欢一位其他校友，并且只有当他/她可以坐在他/她喜欢的人旁边时才会参加晚宴。编写一个算法来找到按字典序排列的校友ID，以便最大数量的校友参加晚宴。如果存在多个这样的座位安排，则输出字典序较小的那个。',
    examples: [
      {
        input: '4\n2 3 4 1',
        output: '1 2 3 4'
      }
    ],
    code: `function maximumAlumniAttendance(num, alumni) {
  // 构建喜欢关系的映射
  const likeMap = new Map();
  for (let i = 0; i < num; i++) {
    likeMap.set(i, alumni[i]);
  }
  
  // 尝试所有可能的起始点，找到最长的环
  let maxLength = 0;
  let bestArrangement = [];
  
  for (let start = 0; start < num; start++) {
    const visited = new Set();
    const current = [];
    let currentAlumni = start;
    
    while (!visited.has(currentAlumni)) {
      visited.add(currentAlumni);
      current.push(currentAlumni);
      
      // 检查下一个校友是否喜欢当前校友
      const nextAlumni = likeMap.get(currentAlumni);
      if (!likeMap.has(nextAlumni) || !likeMap.has(likeMap.get(nextAlumni))) {
        break;
      }
      
      currentAlumni = nextAlumni;
    }
    
    // 检查是否形成环
    if (current.length > 0 && currentAlumni === start) {
      if (current.length > maxLength || (current.length === maxLength && current.toString() < bestArrangement.toString())) {
        maxLength = current.length;
        bestArrangement = current;
      }
    }
  }
  
  return bestArrangement;
}`,
    javaCode: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Solution {
    public static List<Integer> maximumAlumniAttendance(int num, List<Integer> alumni) {
        // 构建喜欢关系的映射
        Map<Integer, Integer> likeMap = new HashMap<>();
        for (int i = 0; i < num; i++) {
            likeMap.put(i, alumni.get(i) - 1); // 转换为0-based索引
        }
        
        // 尝试所有可能的起始点，找到最长的环
        int maxLength = 0;
        List<Integer> bestArrangement = new ArrayList<>();
        
        for (int start = 0; start < num; start++) {
            Set<Integer> visited = new HashSet<>();
            List<Integer> current = new ArrayList<>();
            int currentAlumni = start;
            
            while (!visited.contains(currentAlumni)) {
                visited.add(currentAlumni);
                current.add(currentAlumni + 1); // 转换回1-based索引
                
                // 检查下一个校友是否喜欢当前校友
                Integer nextAlumni = likeMap.get(currentAlumni);
                if (nextAlumni == null || !likeMap.containsKey(nextAlumni)) {
                    break;
                }
                
                currentAlumni = nextAlumni;
            }
            
            // 检查是否形成环
            if (current.size() > 0 && currentAlumni == start) {
                if (current.size() > maxLength || (current.size() == maxLength && isLexSmaller(current, bestArrangement))) {
                    maxLength = current.size();
                    bestArrangement = new ArrayList<>(current);
                }
            }
        }
        
        return bestArrangement;
    }
    
    private static boolean isLexSmaller(List<Integer> a, List<Integer> b) {
        if (b.isEmpty()) {
            return true;
        }
        for (int i = 0; i < Math.min(a.size(), b.size()); i++) {
            if (a.get(i) < b.get(i)) {
                return true;
            } else if (a.get(i) > b.get(i)) {
                return false;
            }
        }
        return a.size() < b.size();
    }
}`
  },
  {
    id: 'example-131',
    englishTitle: 'Maximize Book Star Rating',
    chineseTitle: '最大化书籍星级评分',
    algorithm: '动态规划（Dynamic Programming）',
    algorithmDescription: '动态规划是一种通过将原问题分解为子问题并存储子问题的解来避免重复计算的算法。在这个问题中，我们需要使用动态规划来解决一个变种的背包问题，确保至少购买每种类型的书籍各一本。',
    englishDescription: 'Sheldon is going to a book fair where all the books are star-rated. As he is interested in just two types of books, Horror and Sci-fi, so he would buy the books from these two categories only. He would want to buy at least one book from each category so as to maximize the total star-rating of his books. Also, the total price of the books should not exceed the amount of money that he can spend. The output is -1 if it is not possible to buy at least one book from both the categories with the money that he has. Write an algorithm to help Sheldon buy the books from both the categories.',
    chineseDescription: 'Sheldon要去一个书展，所有的书都有星级评分。由于他只对两种类型的书感兴趣：恐怖和科幻，所以他只会购买这两个类别的书。他希望至少购买每个类别的一本书，以最大化他的书的总星级评分。此外，书的总价格不应超过他能花费的金额。如果他无法用他的钱购买至少每个类别的一本书，则输出为-1。编写一个算法来帮助Sheldon从这两个类别购买书籍。',
    examples: [
      {
        input: '2\n10 5\n20 10\n2\n15 8\n25 12\n50',
        output: '23'
      },
      {
        input: '1\n10 5\n1\n15 8\n24',
        output: '-1'
      }
    ],
    code: `function maximizeStarRating(horrorCount, horrorBooks, sciFiCount, sciFiBooks, budget) {
  // 状态: dp[mask][money] = max stars
  // mask: 0b00 (no books), 0b01 (horror), 0b10 (sci-fi), 0b11 (both)
  const dp = Array(4).fill().map(() => Array(budget + 1).fill(-1));
  dp[0][0] = 0;
  
  // 处理恐怖书籍
  for (let [price, stars] of horrorBooks) {
    for (let m = budget; m >= price; m--) {
      for (let mask = 0; mask < 4; mask++) {
        if (dp[mask][m - price] !== -1) {
          const newMask = mask | 1; // 设置恐怖书籍位
          if (dp[newMask][m] < dp[mask][m - price] + stars) {
            dp[newMask][m] = dp[mask][m - price] + stars;
          }
        }
      }
    }
  }
  
  // 处理科幻书籍
  for (let [price, stars] of sciFiBooks) {
    for (let m = budget; m >= price; m--) {
      for (let mask = 0; mask < 4; mask++) {
        if (dp[mask][m - price] !== -1) {
          const newMask = mask | 2; // 设置科幻书籍位
          if (dp[newMask][m] < dp[mask][m - price] + stars) {
            dp[newMask][m] = dp[mask][m - price] + stars;
          }
        }
      }
    }
  }
  
  // 找到同时购买了两种书籍的最大星级
  let maxStars = -1;
  for (let m = 0; m <= budget; m++) {
    if (dp[3][m] > maxStars) {
      maxStars = dp[3][m];
    }
  }
  
  return maxStars;
}`,
    javaCode: `import java.util.List;

public class Solution {
    public static int maximizeStarRating(int horrorCount, List<int[]> horrorBooks, int sciFiCount, List<int[]> sciFiBooks, int budget) {
        // 状态: dp[mask][money] = max stars
        // mask: 0b00 (no books), 0b01 (horror), 0b10 (sci-fi), 0b11 (both)
        int[][] dp = new int[4][budget + 1];
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j <= budget; j++) {
                dp[i][j] = -1;
            }
        }
        dp[0][0] = 0;
        
        // 处理恐怖书籍
        for (int[] book : horrorBooks) {
            int price = book[0];
            int stars = book[1];
            for (int m = budget; m >= price; m--) {
                for (int mask = 0; mask < 4; mask++) {
                    if (dp[mask][m - price] != -1) {
                        int newMask = mask | 1; // 设置恐怖书籍位
                        if (dp[newMask][m] < dp[mask][m - price] + stars) {
                            dp[newMask][m] = dp[mask][m - price] + stars;
                        }
                    }
                }
            }
        }
        
        // 处理科幻书籍
        for (int[] book : sciFiBooks) {
            int price = book[0];
            int stars = book[1];
            for (int m = budget; m >= price; m--) {
                for (int mask = 0; mask < 4; mask++) {
                    if (dp[mask][m - price] != -1) {
                        int newMask = mask | 2; // 设置科幻书籍位
                        if (dp[newMask][m] < dp[mask][m - price] + stars) {
                            dp[newMask][m] = dp[mask][m - price] + stars;
                        }
                    }
                }
            }
        }
        
        // 找到同时购买了两种书籍的最大星级
        int maxStars = -1;
        for (int m = 0; m <= budget; m++) {
            if (dp[3][m] > maxStars) {
                maxStars = dp[3][m];
            }
        }
        
        return maxStars;
    }
}`
  },
  {
    id: 'example-132',
    englishTitle: 'Kth Smallest Stock Price',
    chineseTitle: '第K小的股票价格',
    algorithm: '排序算法',
    algorithmDescription: '排序算法是一种将元素按照特定顺序排列的算法。在这个问题中，我们需要对股票的相对价格变化进行排序，然后找到第K小的值。',
    englishDescription: 'Andrew is a stock trader who trades in N selected stocks. He has calculated the relative stock price changes in the N stocks from the previous day stock prices. Now, his lucky number is K, so he wishes to invest in the particular stock that has the Kth smallest relative stock value. Write an algorithm for Andrew to find the Kth smallest stock price out of the selected N stocks.',
    chineseDescription: 'Andrew是一名股票交易员，他交易N只选定的股票。他已经计算了这N只股票相对于前一天股价的相对价格变化。现在，他的幸运数字是K，所以他希望投资于具有第K小相对股票价值的特定股票。为Andrew编写一个算法，找出选定的N只股票中的第K小股票价格。',
    examples: [
      {
        input: '5\n3 1 4 1 5\n2',
        output: '1'
      },
      {
        input: '7\n9 7 5 3 1 8 6\n4',
        output: '6'
      }
    ],
    code: `function findKthSmallestStockPrice(N, prices, K) {
  // 对价格进行排序
  prices.sort((a, b) => a - b);
  
  // 返回第K小的元素（注意索引是K-1）
  return prices[K - 1];
}`,
    javaCode: `import java.util.Arrays;
import java.util.List;

public class Solution {
    public static int findKthSmallestStockPrice(int N, List<Integer> prices, int K) {
        // 将List转换为数组
        int[] priceArray = new int[prices.size()];
        for (int i = 0; i < prices.size(); i++) {
            priceArray[i] = prices.get(i);
        }
        
        // 对价格进行排序
        Arrays.sort(priceArray);
        
        // 返回第K小的元素（注意索引是K-1）
        return priceArray[K - 1];
    }
}`
  },
  {
    id: 'example-133',
    englishTitle: 'Maximum Working Days for Salesman',
    chineseTitle: '推销员的最大工作天数',
    algorithm: '贪心算法',
    algorithmDescription: '贪心算法是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。在这个问题中，我们需要通过贪心策略来计算推销员可以工作的最大天数，同时满足连续两天不在同一个城镇工作的条件。',
    englishDescription: 'Moche Goldberg is a traveling salesman. He works in N towns. Each day he sells his products in one of the towns. The towns that are chosen on any two successive days should be different and a town I can be chosen at most ci times. Write an algorithm to determine the number of days when he can sell in the given towns following the above-mentioned rules. The first line of the input consists of an integer num, representing the number of towns (N). The next line consists of N space-separated integers - countTown0, countTown1, ..., countTownN-1 representing the number of times each town can be chosen. Print an integer representing the maximum number of days during which the salesman can work.',
    chineseDescription: 'Moche Goldberg是一个旅行推销员。他在N个城镇工作。每天他在一个城镇销售产品。任何连续两天选择的城镇应该不同，并且城镇I最多可以被选择ci次。编写一个算法来确定他可以按照上述规则在给定城镇销售的天数。输入的第一行是一个整数num，表示城镇的数量(N)。第二行是N个空格分隔的整数countTown0, countTown1, ..., countTownN-1，表示每个城镇可以被选择的次数。打印一个整数，表示推销员可以工作的最大天数。',
    examples: [
      {
        input: '3\n3 2 2',
        output: '7'
      },
      {
        input: '2\n3 1',
        output: '3'
      },
      {
        input: '4\n5 5 5 5',
        output: '20'
      }
    ],
    code: `function maximumWorkingDays(num, counts) {
  const total = counts.reduce((sum, count) => sum + count, 0);
  const maxCount = Math.max(...counts);
  const sumOthers = total - maxCount;
  
  // 最大工作天数受两个因素限制：
  // 1. 所有城镇的总工作天数之和
  // 2. 最大的单个城镇工作天数不能超过其他所有城镇工作天数之和加1
  const maxPossible = Math.min(total, 2 * sumOthers + 1);
  
  return maxPossible;
}`,
    javaCode: `import java.util.List;
import java.util.stream.Collectors;

public class Solution {
    public static int maximumWorkingDays(int num, List<Integer> counts) {
        int total = counts.stream().mapToInt(Integer::intValue).sum();
        int maxCount = counts.stream().max(Integer::compare).orElse(0);
        int sumOthers = total - maxCount;
        
        // 最大工作天数受两个因素限制：
        // 1. 所有城镇的总工作天数之和
        // 2. 最大的单个城镇工作天数不能超过其他所有城镇工作天数之和加1
        int maxPossible = Math.min(total, 2 * sumOthers + 1);
        
        return maxPossible;
    }
}`
  },
  {
    id: 'example-134',
    englishTitle: 'Find Lost Character',
    chineseTitle: '找出丢失的字符',
    algorithm: '哈希表',
    algorithmDescription: '哈希表是一种通过哈希函数将键映射到值的数据结构。在这个问题中，我们可以使用哈希表来统计字符出现的次数，从而找出在传输过程中丢失的字符。',
    englishDescription: 'A company provides network encryption for secure data transfer. The data string is encrypted prior to transmission and gets decrypted at the receiving end. But due to some technical error, the encrypted data is lost and the received string is different from the original string by 1 character. Arnold, a network administrator, is tasked with finding the character that got lost in the network so that the bug does not harm other data that is being transferred through the network. Write an algorithm to help Arnold find the character that was missing at the receiving end but present at the sending end. The first line of the input consists of a string - stringSent, representing the string that was sent through the network. The next line consists of a string - stringRec, representing the string that was received at the receiving end of the network. Print a character representing the character that was lost in the network during transmission.',
    chineseDescription: '一家公司提供网络加密以确保数据传输安全。数据字符串在传输前被加密，在接收端被解密。但由于一些技术错误，加密数据丢失，接收到的字符串与原始字符串相差1个字符。网络管理员Arnold的任务是找出在网络中丢失的字符，以确保这个bug不会损害通过网络传输的其他数据。编写一个算法来帮助Arnold找出在接收端缺失但在发送端存在的字符。输入的第一行是一个字符串stringSent，表示通过网络发送的字符串。第二行是一个字符串stringRec，表示在网络接收端接收到的字符串。打印一个字符，表示在传输过程中在网络中丢失的字符。',
    examples: [
      {
        input: 'abcd\nabcd',
        output: ''
      },
      {
        input: 'abcde\nabce',
        output: 'd'
      },
      {
        input: 'hello\nhelo',
        output: 'l'
      }
    ],
    code: `function findLostCharacter(stringSent, stringRec) {
  // 使用哈希表统计字符出现次数
  const charCount = new Map();
  
  // 统计发送字符串中的字符
  for (let char of stringSent) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  
  // 减去接收字符串中的字符
  for (let char of stringRec) {
    charCount.set(char, charCount.get(char) - 1);
  }
  
  // 找到出现次数为1的字符
  for (let [char, count] of charCount.entries()) {
    if (count === 1) {
      return char;
    }
  }
  
  return '';
}`,
    javaCode: `import java.util.HashMap;
import java.util.Map;

public class Solution {
    public static String findLostCharacter(String stringSent, String stringRec) {
        // 使用哈希表统计字符出现次数
        Map<Character, Integer> charCount = new HashMap<>();
        
        // 统计发送字符串中的字符
        for (char c : stringSent.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }
        
        // 减去接收字符串中的字符
        for (char c : stringRec.toCharArray()) {
            charCount.put(c, charCount.get(c) - 1);
        }
        
        // 找到出现次数为1的字符
        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {
            if (entry.getValue() == 1) {
                return String.valueOf(entry.getKey());
            }
        }
        
        return "";
    }
}`
  },
  {
    id: 'example-135',
    englishTitle: 'Count Substring Occurrences',
    chineseTitle: '统计子字符串出现次数',
    algorithm: '字符串处理',
    algorithmDescription: '字符串处理是一种对字符串进行操作和分析的算法。在这个问题中，我们需要统计一个子字符串在父字符串中出现的次数，忽略大小写。',
    englishDescription: 'You are given two strings containing only English letters. Write an algorithm to count the number of occurrences of the second string in the first string. (You may disregard the case of the letters.) The first line of the input consists of a string parent, representing the first string. The second line consists of a string sub, representing the second string. Print an integer representing the number of occurrences of sub in parent. If no occurrence of sub is found in parent, then print 0.',
    chineseDescription: '给定两个仅包含英文字母的字符串。编写一个算法来统计第二个字符串在第一个字符串中出现的次数。（可以忽略字母的大小写。）输入的第一行是一个字符串parent，表示第一个字符串。第二行是一个字符串sub，表示第二个字符串。打印一个整数，表示sub在parent中出现的次数。如果在parent中没有找到sub的出现，则打印0。',
    examples: [
      {
        input: 'Hello World hello\nhello',
        output: '2'
      },
      {
        input: 'abcabcabc\nabc',
        output: '3'
      },
      {
        input: 'Test test TEST\ntest',
        output: '3'
      },
      {
        input: 'Hello\nWorld',
        output: '0'
      }
    ],
    code: `function countSubstringOccurrences(parent, sub) {
  if (sub.length === 0) {
    return 0;
  }
  
  // 转换为小写以忽略大小写
  const parentLower = parent.toLowerCase();
  const subLower = sub.toLowerCase();
  
  let count = 0;
  let index = 0;
  
  while (index < parentLower.length) {
    // 查找子字符串的位置
    const foundIndex = parentLower.indexOf(subLower, index);
    if (foundIndex === -1) {
      break;
    }
    count++;
    // 从找到的位置的下一个字符开始继续查找
    index = foundIndex + 1;
  }
  
  return count;
}`,
    javaCode: `public class Solution {
    public static int countSubstringOccurrences(String parent, String sub) {
        if (sub.length() == 0) {
            return 0;
        }
        
        // 转换为小写以忽略大小写
        String parentLower = parent.toLowerCase();
        String subLower = sub.toLowerCase();
        
        int count = 0;
        int index = 0;
        
        while (index < parentLower.length()) {
            // 查找子字符串的位置
            int foundIndex = parentLower.indexOf(subLower, index);
            if (foundIndex == -1) {
                break;
            }
            count++;
            // 从找到的位置的下一个字符开始继续查找
            index = foundIndex + 1;
        }
        
        return count;
    }
}`}]
