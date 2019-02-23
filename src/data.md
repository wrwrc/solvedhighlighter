~~Before 8/31(Fri.) Task: https://leetcode.com/problemset/top-interview-questions/~~

# 7/21(Sat.)

## 1. [Two Sum](https://leetcode.com/problems/two-sum/description/) (W)
- Use hashMap to add performance:
http://alrightchiu.github.io/SecondRound/hash-tableintrojian-jie.html
- How to implement HashMap
https://www.programcreek.com/2011/07/java-equals-and-hashcode-contract/

## 2. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/) (W)
- Basic Link List Problem
- Iteration
- Recursive

## 3. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/) (W)
- HashMap

## 4. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/) (W)
- Time Complexity = $O(log(m+n))$ => Binary Search

## 5. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/description/) (W)
- DP (Dynamic Programming)
`boolean[][] dp = new boolean[s.length()][s.length()];` 
```java
class Solution {
    public String longestPalindrome(String s) {        
        boolean[][] dp = new boolean[s.length()][s.length()];
        int maxStart = 0;
        int maxEnd = 0;
        for (int i = 0; i < s.length(); i++) {
            for (int j = 0; j < s.length() - i; j++) {
                if (i == 0 || (s.charAt(j) == s.charAt(j + i) && (i == 1 || dp[j + 1][j + i - 1]))) {
                    dp[j][j + i] = true;
                    maxStart = j;
                    maxEnd = j + i;
                }
            }
        }        
        return s.substring(maxStart, maxEnd + 1);
    }
}
```

## 7. [Reverse Integer](https://leetcode.com/problems/reverse-integer/description/) (W)

## 8. [String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/description/) (W)

## 11. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/) (W)

## 10. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/description/) (W)

    Mi, s*, i , s*, p*, .
    Mi, s*, i , s*, j , p*, .
    Mi, s*, ij, s*, p*, .
    Mississippi
    
    b
    ab
    aab
    aaaaab

|   | A | * | C | B |
|:-:|:-:|:-:|:-:|:-:|
| A | V | V |
| a | V |
| a | V |
| b |   |   | V |
| b |   |   |   | V |


+ `If p.charAt(j) == s.charAt(i) :  dp[i][j] = dp[i-1][j-1];`
+ `If p.charAt(j) == '.' : dp[i][j] = dp[i-1][j-1];`
+ `If p.charAt(j) == '*': `
   here are two sub conditions,
   - `a*` only counts as empty:
      `if p.charAt(j-1) != s.charAt(i) : dp[i][j] = dp[i][j-2]`
   - `if p.charAt(i-1) == s.charAt(i) or p.charAt(i-1) == '.'`:
       * `a*` counts as multiple `a`
          `dp[i][j] = dp[i-1][j]` 
       * `a*` counts as single `a`
          `dp[i][j] = dp[i][j-1]`
       * `a*` counts as `empty`
          `dp[i][j] = dp[i][j-2]`

```java
class Solution {
    Result[][] memo;

    public boolean isMatch(String text, String pattern) {
        memo = new Result[text.length() + 1][pattern.length() + 1];
        return dp(0, 0, text, pattern);
    }

    public boolean dp(int i, int j, String text, String pattern) {
        if (memo[i][j] != null) {
            return memo[i][j] == Result.TRUE;
        }
        boolean ans;
        if (j == pattern.length()){
            ans = i == text.length();
        } else{
            boolean first_match = (i < text.length() &&
                                   (pattern.charAt(j) == text.charAt(i) ||
                                    pattern.charAt(j) == '.'));

            if (j + 1 < pattern.length() && pattern.charAt(j+1) == '*'){
                ans = (dp(i, j+2, text, pattern) ||
                       first_match && dp(i+1, j, text, pattern));
            } else {
                ans = first_match && dp(i+1, j+1, text, pattern);
            }
        }
        memo[i][j] = ans ? Result.TRUE : Result.FALSE;
        return ans;
    }
}
```
```java
class Solution {
    public boolean isMatch(String text, String pattern) {
        boolean[][] dp = new boolean[text.length() + 1][pattern.length() + 1];
        dp[text.length()][pattern.length()] = true;

        for (int i = text.length(); i >= 0; i--){
            for (int j = pattern.length() - 1; j >= 0; j--){
                boolean first_match = (i < text.length() &&
                                       (pattern.charAt(j) == text.charAt(i) ||
                                        pattern.charAt(j) == '.'));
                if (j + 1 < pattern.length() && pattern.charAt(j+1) == '*'){
                        dp[i][j] = dp[i][j+2] || first_match && dp[i+1][j];
                } else {
                        dp[i][j] = first_match && dp[i+1][j+1];
                }
            }
        }
        return dp[0][0];
    }
}
```
- Recursion

- DP (Dynamic Programming)
  ```java
  Result[][] memo;
  memo = new Result[text.length() + 1][pattern.length() + 1]; 
  ```
Given an input string ($s$) and a pattern ($p$), implement regular expression matching with support for `.` and `*`.
`.` Matches any single character.
`*` Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

**Note:**
- $s$ could be empty and contains only lowercase letters `a-z`.
- $p$ could be empty and contains only lowercase letters `a-z`, and characters like `.` or `*`.


## 13. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/) (W)

## 14. [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/) (W)

## 20. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/) (W)

## 15. [3Sum](https://leetcode.com/problems/3sum/description/) (W)

## 17. [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/) (W)
- BFS (Implement FIFO queue by linkedList)

## 19. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/) (W)

## 21. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/) (W)

## 26. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/) (W)

## 38. [Count and Say](https://leetcode.com/problems/count-and-say/description/) (W)


# 8/18(Sat.) - Back-Tracking

## [78. Subset I](https://leetcode.com/problems/subsets/)
```python
class Solution:
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        self.res = []
        self.dfs(nums, [], 0)
        return self.res
        
        
    
    def dfs(self, nums, temp, i):
        self.res.append(temp[:])
        for i in range(i, len(nums)):
            temp.append(nums[i])
            
            self.dfs(nums, temp, i + 1)
            
            temp.pop()
```
```
Given a set of distinct integers, nums, return all possible subsets (the power set).
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

## [90. Subset II](https://leetcode.com/problems/subsets-ii/description/)
```
1, 2, 2’
0
1 | 1, 2 | 1, 2 , 2’
  | 1, 2’| 1, 2’, 2
```
```python
class Solution:
    def subsetsWithDup(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        self.res = []
        self.dfs(sorted(nums), [], 0)
        
        return list(self.res)
        
    def dfs(self, nums, temp, index):
        
        self.res.append(temp[:])
        
        for i in range(index, len(nums)):
            if i != index and nums[i] == nums[i-1]: continue    
            temp.append(nums[i])
            self.dfs(nums, temp, i+1)
            temp.pop()
```
```
Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

[1, 2, 3]

1 | 1, 2 | 1, 2, 3
  | 1, 3
2 | 2, 3
3
```
## [46. Permutation I](https://leetcode.com/problems/permutations/description/)
```python
class Solution:
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        self.res = []
        self.used = [False] * len(nums)
        self.dfs(nums, [])
        return self.res
        
        
    def dfs(self, nums, temp):
        if len(temp) == len(nums):
            self.res.append(temp[:])
        
        for i in range(len(nums)):
    If self.used[i]: continue
            #if nums[i] in temp:
            #    continue
 self.used[i] = True
            temp.append(nums[i])
            self.dfs(nums, temp)
     self.used[i] = False
            temp.pop()


///////////////

def p(c, l):
    if len(l) == 0:
            return [c]
    t = []
    for i in range(0,len(l)):
             t+=p(c+[l[i]], l[0:i]+l[i+1:])
    return t
    
class Solution:
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        return p([],nums)
```

```
len(temp) == len(nums):
 ans.append(temp)

1 | 1, 2 | 1, 2, 3
  | 1, 3 | 1, 3, 2
2 | 2, 1 | 2, 1, 3
  




Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

## [47. Permutation II](https://leetcode.com/problems/permutations-ii/description/)
```python
class Solution:
    def permuteUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        self.res = []
        self.used = [False] * len(nums)
        self.dfs(sorted(nums), [])
        return self.res
        
        
    def dfs(self, nums, temp):
        if len(nums) == len(temp):
            self.res.append(temp[:])
        
        for i in range(len(nums)):
            if self.used[i]: continue
            if i > 0 and nums[i] == nums[i-1] and self.used[i-1]: continue
            temp.append(nums[i])
            self.used[i] = True
            self.dfs(nums, temp)
            self.used[i] = False
            temp.pop()
```
```
I            0  1  2

[[1, 1, 1, 2], [1, 1, 2, 1], [1, 2, 1, 1], [2, 1, 1, 1]]

Nums[i] 1, 1’, 1’’, 2

1, 1’, 1’’, 2
Temp = [1, 1’’]
dfs()
I = 2
Used[1] = F

1 | 1, 1 | 1, 1, 2
  | 1, 2 | 1, 2, 1
Del 1’| 1’ 1 | ….
2    | 2, 1 | 2, 1, 1’
del  | 2, 1’| 2, 1’, 1
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

1
21
12
321
231
213
312
132
123
```
## [39. Combination sum](https://leetcode.com/problems/combination-sum/description/)


## [40. Combination sum II](https://leetcode.com/problems/combination-sum-ii/)


## [51. N-Queens](https://leetcode.com/problems/n-queens/description/) (Ya-Han Task) => DFS Solution


$T(n) = n * T(n-1)$

```
4
[".Q..",  // Solution 1
 "...Q",
 "Q...",
 "..Q."],
```
```java
private void backtracking(List<List<String>> results, int n, int row, int[] used) {
   if (row == n) {
       List<String> list = genBoard(used); // Ex: ..Q.
       results.add(list);
       return;
   }

   for (int col = 0; col < n; col++) {
       if (!isValid(used, row, col)) continue;
       used[row] = col;
       backtracking(results, n, row + 1, used);
   }
}

private boolean isValid(int[] used, int row, int col) {
   for (int i = 0; i < row; i++) {
       if (used[i] == col) return false;
   }
   for (int i = 1; i <= row; i++) {
       if (used[row - i] == col - i) return false;
       if (used[row - i] == col + i) return false;
   }
   return true;
}
```

## [52. N-Queens II](https://leetcode.com/problems/n-queens-ii/description/)

![N-Queens](https://i.imgur.com/ug18xNs.png =96x)

```java
private void backtracking(int n, int row, boolean[] usedCol, boolean[] leftDiag,
                          boolean[] rightDiag) {
    if (row == n) {
        numOfSol++;
        return;
    }

    for (int col = 0; col < n; col++) {
        if (usedCol[col] | leftDiag[row - col + n - 1] | rightDiag[row + col]) continue;
        usedCol[col] = true;
        leftDiag[row - col + n - 1] = true;
        rightDiag[row + col] = true;

        backtracking(n, row + 1, usedCol, leftDiag, rightDiag);

        usedCol[col] = false;
        leftDiag[row - col + n - 1] = false;
        rightDiag[row + col] = false;
    }
}
```

# 9/22(Sat.) - Stack & Queue Problem
## [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/description/)
- By two stacks


## [621. Task Scheduler](https://leetcode.com/problems/task-scheduler/description/)
- Priority Queue


```java
public class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] map = new int[26];
        for (char c: tasks)
            map[c - 'A']++;
        Arrays.sort(map);
        int time = 0;
        while (map[25] > 0) {
            int i = 0;
            while (i <= n) {
                if (map[25] == 0)
                    break;
                if (i < 26 && map[25 - i] > 0)
                    map[25 - i]--;
                time++;
                i++;
            }
            Arrays.sort(map);
        }
        return time;
    }
}
```
AAAABBBCCD, cooling time = 2

```java
public class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] map = new int[26];
        for (char c: tasks)
            map[c - 'A']++;
        PriorityQueue < Integer > queue = new PriorityQueue < > (26, Collections.reverseOrder());
        for (int f: map) {
            if (f > 0)
                queue.add(f);
        }
        int time = 0;
        while (!queue.isEmpty()) {
            int i = 0;
            List < Integer > temp = new ArrayList < > ();
            while (i <= n) {
                if (!queue.isEmpty()) {
                    if (queue.peek() > 1)
                        temp.add(queue.poll() - 1);
                    else
                        queue.poll();
                }
                time++;
                if (queue.isEmpty() && temp.size() == 0)
                    break;
                i++;
            }
            for (int l: temp)
                queue.add(l);
        }
        return time;
    }
}
```
```java
public class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] map = new int[26];
        for (char c: tasks)
            map[c - 'A']++;
            
        Arrays.sort(map);    // !important
        
        int max_val = map[25] - 1, idle_slots = max_val * n;
        for (int i = 24; i >= 0 && map[i] > 0; i--) {
            idle_slots -= Math.min(map[i], max_val);
        }
        return idle_slots > 0 ? idle_slots + tasks.length : tasks.length;
    }
}
```

## [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/description/)

1. The left side of a palindrome is a mirror image of its right side.
2. **(Case 1)** A third palindrome whose center is within the right side of a first palindrome will have exactly the same length as that of a second palindrome anchored at the mirror center on the left side, f the second palindrome is within the bounds of the first palindrome by at least one character (not meeting the left bound of the first palindrome).
3. **(Case 2)** If the second palindrome meets or extends beyond the left bound of the first palindrome, then the distance from the center of the second palindrome to the left bound of the first palindrome is exactly equal to the distance from the center of the third palindrome to the right bound of the first palindrome.
4. To find the length of the third palindrome under _Case 2_, the next character after the right outermost character of the first palindrome would then be compared with its mirror character about the center of the third palindrome, until there is no match or no more characters to compare.
5. **(Case 3)** Neither the first nor second palindrome provides information to help determine the palindromic length of a fourth palindrome whose center is outside the right side of the first palindrome.
6. It is therefore desirable to have a palindrome as a reference (i.e., the role of the first palindrome) that possesses characters farthest to the right in a string when determining from left to right the palindromic length of a substring in the string (and consequently, the third palindrome in _Case 2_ and the fourth palindrome in _Case 3_ could replace the first palindrome to become the new reference).
7. Regarding the time complexity of palindromic length determination for each character in a string: there is no character comparison for _Case 1_, while for _Cases 2_ and _3_ only the characters in the string beyond the right outermost character of the reference palindrome are candidates for comparison (and consequently _Case 3_ always results in a new reference palindrome while _Case 2_ does so only if the third palindrome is actually longer than its guaranteed minimum length).
8. For even-length palindromes, the center is at the boundary of the two characters in the middle.

![Manacher](https://i.imgur.com/1IaLdSn.png)

```csharp
public class Solution {
    public int CountSubstrings(string s) {
        if (string.IsNullOrEmpty(s)) return 0;
        
        var s2 = AddBoundaries(s);
        
        // palindromic span for each element in s2, where each 
        // boundary is counted towards the length (e.g. a palindrome
        // that is 3 elements long has a palindromic span of 1)
        var p = new int[s2.Length];
        
        // center of palindrome currently known to include a boundary 
        // closest to the right end of s2.
        var c = 0;
        
        // right boundary of the palindrome. (i.e. r = c + p[c])
        var r = 0;

        for (var i = 1; i < p.Length - 1; i++) {
            if (i > r) {
                // There is no information to help determine the palindromic 
                // length of a palindrome whose center is outside the right
                // side of the one currently known.                
                p[i] = CountPalindromicSpan(s2, i - 1, i + 1);
            } else {
                // mirrored position of i around c
                var i2 = 2 * c - i;
                
                if (p[i2] < (r - i - 1)) {
                    p[i] = p[i2];
                } else {
                    p[i] = r - i + CountPalindromicSpan(s2, 2*i-r-1, r+1);
                }
            }
            
            if ((i + p[i]) > r) {
                c = i;
                r = i + p[i];
            }
        }
        
        return p.Sum(x => (x + 1)/2);
    }
    
    private static char[] AddBoundaries(string s) {
        var s2 = new char[2 * s.Length + 3];
        s2[0] = '^';
        s2[1] = '#';
        
        var t = 2;
        foreach (var c in s) {
            s2[t++] = c;
            s2[t++] = '#';
        }
        s2[t] = '$';

        return s2;
    }
    
    private static int CountPalindromicSpan(char[] s2, int m, int n) {
        var result = 0;
        while (s2[m] == s2[n]) {
            result++;
            m--;
            n++;
        }
        return result;
    }
}
```
# 9/29(Sat.) - Tree Traversal

## [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/description/) [Recursive, Stack]
- Inorder: 左中右

```python
class Solution:
    def inorderTraversal(self, root):
        stack = []
        ans = []
        
        while root or stack:
            if root: 
                # print(root.val)
                stack.append(root)
                root = root.left
            else:
                print(root)
                root = stack.pop()
                ans.append(root.val)
                root = root.right
        return ans
```

## [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/description/) [Recursive, Stack]
- PreOrder: 中左右
```python
class Solution:
    def preorderTraversal(self, root): 
        stack = []
        ans = []
        while(root or stack):
            if root:
                ans.append(root.val)
                stack.append(root.right)
                root = root.left
            else:
                root = stack.pop()
                
        return ans
```

## [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/description/) [Recursive, Stack]

- Postorder: 左右中
- 中右左 >> 左右中

```python
class Solution:
    def postorderTraversal(self, root):
        ans = []
        stack_1 = []
        stack_2 = []
        if root:
            stack_1.append(root)
        while(stack_1):
            root = stack_1.pop()
            stack_2.append(root)
            if root.left:
                stack_1.append(root.left)
            if root.right:
                stack_1.append(root.right)
        
        while(stack_2):
            node = stack_2.pop()
            ans.append(node.val)
            
        return ans
```


root 
stack_1 [, ]
中右左stack_2 [10, -10, 11, 0, 6, 5]
左右中ans [5, 6, 0, ]


## [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/description/) [Recursive]


            10
           /  \
         0    -10
        / \      \
       5   6      11

   -1
  
|root|left|right|ans    |         |      |
|---:|---:|----:|------:|---------|------|
|  10|   6|    1|     17|return 16|step 3|
|   0|   5|    6|     11|return 6 |step 1|
| -10|   0|   11|11 (-1)|return 1 |step 2|

```python
class Solution:
    def maxPathSum(self, root):
        self.ans = -sys.maxsize
        self.helper(root)
        return self.ans
                
    def helper(self, root):
        if not root:
            return 0
        l = max(0, self.helper(root.left))
        r = max(0, self.helper(root.right))
        self.ans = max(self.ans, root.val + l + r)
        
        return root.val + max(l, r)
```

# 11/18 (Sun.) - Tree Traversal Cont.

## [Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/solution/) (Weiti)
前序遍歷 (中 -> 左 -> 右)  
理論上的遍歷順序是：根、左子樹、右子樹。根排在前面。  

## [Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/solution/) (Weiti)
中序遍歷 (左 -> 中 -> 右)  
理論上的遍歷順序是：左子樹、根、右子樹。根排在中間。
Iterating method using Stack

## [Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/solution/) (Weiti)
後序遍歷 (左 -> 右 -> 中)  
理論上的遍歷順序是：左子樹、右子樹、根。根排在後面。  

## [136. Single Number](https://leetcode.com/problems/single-number/) (YAHAN)

## [268. Missing Number](https://leetcode.com/problems/missing-number/) (YAHAN)

## [371. Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers) (YAHAN)
[https://leetcode.com/problems/sum-of-two-integers/discuss/84290/Java-simple-easy-understand-solution-with-explanation](https://leetcode.com/problems/sum-of-two-integers/discuss/84290/Java-simple-easy-understand-solution-with-explanation)

## [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) (General & Divide and Conquer)
[https://leetcode.com/problems/maximum-subarray/discuss/20357/Divide-and-Conquer-Java-solution](https://leetcode.com/problems/maximum-subarray/discuss/20357/Divide-and-Conquer-Java-solution)

## [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)

## [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

## [155, Min Stack](https://leetcode.com/problems/min-stack/)
[https://leetcode.com/problems/min-stack/discuss/176995/Java-2-Stacks-Clean](https://leetcode.com/problems/min-stack/discuss/176995/Java-2-Stacks-Clean)!

## [Java Top 37 Interview Questions](https://www.codementor.io/blog/java-interview-sample-questions-answers-du107xs23)

## [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)
```java
class Solution {
    public int firstUniqChar(String s) {
        Map<Character, Integer> map = new LinkedHashMap<>();
        Set<Character> set = new HashSet<>();

        for (int i = 0; i < s.length(); i++) {
            if (set.contains(s.charAt(i))) {
                if (map.get(s.charAt(i)) != null) {
                    map.remove(s.charAt(i));
                }
            } else {
                map.put(s.charAt(i), i);
                set.add(s.charAt(i));
            }
        }

        return map.size() == 0
            ? -1 : map.entrySet().iterator().next().getValue();
    }
}
```

## [368. Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/)

## JavaScript prototype and binding
```javascript
X.a

Object.prototype

a={a: 0}

b={b: 1}

Object.setPrototypeOf(b, a)

B.a
  

//es6
class A {
    constructor() {
    }
    
    xxx(){
    }
}

//es5
function A() {
    this.a = 0
}

A.prototype = function a() {}

new A()

  

Object.create(null)

Function a () {
    return this === ‘abc’
}

a.bind(‘abc’)();
  

// 沒辦法 bind
o = {
    a() {
      console.log(this)
    },

    b: () => {
      console.log(this)
    }
};

function doTwice (fn) {
    fn();
    fn();
}

fn(o.a);

//
function a () {
    this
}

a.bind({})
```

# 12/8(Sat.)

## 同步 (Synchronization)  [https://sls.weco.net/node/21326](https://sls.weco.net/node/21326)

## [Spring IOC](https://hk.saowen.com/a/ad3ad5785c95025cbf94b47011ac3e86d1a3d2efeb0f2c42856a2bb15e1217c7)

## [198. House Robber](https://leetcode.com/problems/house-robber/) \[Simple DP\]

## [97\. Interleaving String](https://leetcode.com/problems/interleaving-string)
[https://leetcode.com/problems/interleaving-string/discuss/31946/Clear-Code-Java-1ms-Solution](https://leetcode.com/problems/interleaving-string/discuss/31946/Clear-Code-Java-1ms-Solution)

## [135\. Candy](https://leetcode.com/problems/candy/)
How to think the simple solution?
[https://leetcode.com/problems/candy/discuss/42794/Simple-O(n)-Java-solution-with-comments](https://leetcode.com/problems/candy/discuss/42794/Simple-O(n)-Java-solution-with-comments)

## [120\. Triangle](https://leetcode.com/problems/triangle/) \[Simple DP\]
[https://leetcode.com/problems/triangle/discuss/199581/Java-top_down-DP-faster-than-99.96](https://leetcode.com/problems/triangle/discuss/199581/Java-top_down-DP-faster-than-99.96)
[https://leetcode.com/problems/triangle/discuss/38724/7-lines-neat-Java-Solution](https://leetcode.com/problems/triangle/discuss/38724/7-lines-neat-Java-Solution)

## [121\. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
```java
public class Solution {
    public int maxProfit(int prices[]) {
        int minprice = Integer.MAX_VALUE;
        int maxprofit = 0;

        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < minprice)
                minprice = prices[i];
            else if (prices[i] - minprice > maxprofit)
                maxprofit = prices[i] - minprice;
        }

        return maxprofit;
    }
}
```

## [122\. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
```java
class Solution {
    public int maxProfit(int[] prices) {
        if (prices == null || prices.length <= 1)
            return 0;

        int sum = 0;

        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i-1]) {
                sum += prices[i] - prices[i-1];
            }
        }

        return sum;
}
```

## [123\. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
[https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/discuss/187849/Java-Simple-Solution-(1ms)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/discuss/187849/Java-Simple-Solution-(1ms))

       3 3 5 0 0 3 1 4
    0  0 0 0 0 0 0 0 0
    1  0 0 2 2 2 3 3 3
    2  0 0 2 2 2 5

    3 3 0 5 3 1 4

    dp[k][i] = max(dp[k][i - 1], prices[i] - prices[j] + dp[k - 1][j - 1]), j = 0 ... i-1

## [雅涵 Sharing](https://hackmd.io/s/rycGQcYBE#)


# 12/8(Sat.)

## System Design Interview
[http://blog.gainlo.co/index.php/2015/10/22/8-things-you-need-to-know-before-system-design-interviews/](http://blog.gainlo.co/index.php/2015/10/22/8-things-you-need-to-know-before-system-design-interviews/)
[http://blog.gainlo.co/index.php/2016/03/08/system-design-interview-question-create-tinyurl-system/](http://blog.gainlo.co/index.php/2016/03/08/system-design-interview-question-create-tinyurl-system/)
[https://searchaws.techtarget.com/definition/Amazon-Simple-Storage-Service-Amazon-S3](https://searchaws.techtarget.com/definition/Amazon-Simple-Storage-Service-Amazon-S3)

## [22\. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) \[Approach 2: Backtracking\]

## [17\. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

## [46\. Permutations](https://leetcode.com/problems/permutations/)
[https://leetcode.com/problems/permutations/discuss/18436/Java-Clean-Code-Two-recursive-solutions](https://leetcode.com/problems/permutations/discuss/18436/Java-Clean-Code-Two-recursive-solutions)
  

# 1/5(Sat.) LeetCode Day

> What to expect for preparing Google Interview:
> 
> The google hangout interview will be a 45 minute coding interview with one of our Engineers. Please ensure you have broadband and a current web browser. You will be sent a link to a Google Doc, on which you will be coding in real time during the interview. A headset may be useful as you will be talking and coding at the same time.
> 
> Google interviews focus very heavily on algorithms and data structures. You'll be expected to know and apply: lists, maps, stacks, priority queues, binary trees, graphs, bags, and sets. You'll need to to talk about how they're implemented and why you'd choose one implementation or data structure instead of another. For algorithms you'll want to know greedy algorithms, divide and conquer, dynamic programming, recursion, and brute force search. You'll definitely want to be conversant with Big­O notation, time­ space complexity, and real world performance of all of this. Most importantly you'll need to be able to pick the right data structure and algorithm for a specific problem.
> 
> Suggestions on reading material include:
> 
> -   Attached interview preparation guide(s)
>     
> -   [Steve Yegge’s Blog](http://steve-yegge.blogspot.co.uk/2008/03/get-that-job-at-google.html)
>     
> -   Old Algorithm / Data Structure Theory books
>     
> -   Google Style Guides ([C++](https://google.github.io/styleguide/cppguide.html), [Python](https://google.github.io/styleguide/pyguide.html), [Java](https://google.github.io/styleguide/javaguide.html); [Android](http://source.android.com/source/code%C2%ADstyle.html), [Javascript](https://google.github.io/styleguide/javascriptguide.xml))
>     
> -   [Coursera - Algorithms, Part 1](https://www.coursera.org/learn/algorithms-part1)
>     
> -   [Coursera - Algorithms, Part 2](https://www.coursera.org/learn/algorithms-part2)
>     
> -   [Udacity - Intro to Algorithms](https://www.udacity.com/course/intro-to-algorithms--cs215)
>     
> -   [MIT Open courseware - Introduction to Algorithms](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-spring-2008/)
    

---

## Math


---

## [728\. Self Dividing Numbers](https://leetcode.com/problems/self-dividing-numbers/)

Brute Force:
```java
class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
        List<Integer> ans = new ArrayList();

        for (int n = left; n <= right; ++n) {
            if (selfDividing(n))
                ans.add(n);
        }

        return ans;
    }

    public boolean selfDividing(int n) {
        for (char c: String.valueOf(n).toCharArray()) {
            if (c == '0' || (n % (c - '0') > 0))
                return false;
        }

        return true;
    
}
```
```java
class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
        List<Integer> res = new ArrayList<>();

        for (int i = left; i <= right; i++)
            if (dividingNumber(i)) res.add(i);

        return res;
    }

    boolean dividingNumber(int num) {
        for (int n = num; n > 0; n /= 10)
            if (n % 10 == 0 || num % (n % 10) != 0) return false;
        return true;
    }
}
```


---

### [Divide and Conquer](https://leetcode.com/tag/divide-and-conquer/)

---


## [53\. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
```java
public class Solution {
    public static int maxSubArray(int[] A) {
        int maxSoFar=A[0], maxEndingHere=A[0];

        for (int i=1;i<A.length;++i){
            maxEndingHere= Math.max(maxEndingHere+A[i],A[i]);
            maxSoFar=Math.max(maxSoFar, maxEndingHere); 
        }

        return maxSoFar;
    }
}
```

## [169\. Majority Element](https://leetcode.com/problems/majority-element/)
```java
class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        return nums[(int)(nums.length / 2)];
    }
}
```

## [4\. Median of Two Sorted Arrays (Hard)](https://leetcode.com/problems/median-of-two-sorted-arrays/) \[Homework\]

Solution: Binary Search

[https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2496/Concise-JAVA-solution-based-on-Binary-Search](https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2496/Concise-JAVA-solution-based-on-Binary-Search)

[https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2878/Accepted-Java-solution-with-O](https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2878/Accepted-Java-solution-with-O)
(log(min(nm))-iterations.

    A = [1,  3,  5,  7,  9]  => a_mid = 5
    B = [2,  4,  6, 10]      => b_mid = ???

[https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2471/Very-concise-O](https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2471/Very-concise-O)
(log(min(MN)))-iterative-solution-with-detailed-explanation
  
  

## [215\. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

Solution: Priority Queue
```java
public class Solution {
    public int findKthLargest(int\[\] nums, int k) {
        PriorityQueue<Integer> largeK = new PriorityQueue<Integer>(k + 1);
        for(int el : nums) {
            largeK.add(el);

            if (largeK.size() > k) {
                largeK.poll();
            }
        }

        return largeK.poll();
    }
}
```
Solution: Quick Select Solution (Can anyone help to explain?)

[https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/60510/97-2ms-Java-quick-select-solution](https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/60510/97-2ms-Java-quick-select-solution)

[https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/60312/AC-Clean-QuickSelect-Java-solution-avg.-O(n)-time](https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/60312/AC-Clean-QuickSelect-Java-solution-avg.-O(n)-time)

  

# 1/26(Sat.) 10pm:



## Graph (DFS, BFS) Topic


---

## [743\. Network Delay Time](https://leetcode.com/problems/network-delay-time/) \[Basic and Interesting Problem\]

[https://leetcode.com/problems/network-delay-time/solution/](https://leetcode.com/problems/network-delay-time/solution/)

+ DFS: $O(n^n + E \log E)$
```java
class Solution {
    Map<Integer, Integer> dist;

    public int networkDelayTime(int[][] times, int N, int K) {
        Map<Integer, List<int[]>> graph = new HashMap();

        for (int[] edge: times) {
            if (!graph.containsKey(edge[0]))
                graph.put(edge[0], new ArrayList<int[]>());

            graph.get(edge[0]).add(new int[] {
                edge[2], edge[1]
            });
        }

        for (int node: graph.keySet()) {
            Collections.sort(graph.get(node), (a, b) -> a[0] - b[0]);
        }

        dist = new HashMap();

        for (int node = 1; node <= N; ++node)
            dist.put(node, Integer.MAX_VALUE);

        dfs(graph, K, 0);

        int ans = 0;

        for (int cand: dist.values()) {
            if (cand == Integer.MAX_VALUE) return -1;
            ans = Math.max(ans, cand);
        }

        return ans;
    }

    public void dfs(Map<Integer, List<int[]>> graph, int node, int elapsed) {
        if (elapsed >= dist.get(node)) return;

        dist.put(node, elapsed);

        if (graph.containsKey(node))
            for (int[] info: graph.get(node))
                dfs(graph, info[1], elapsed + info[0]);
    }
}
```

+ Dijkstra's Algorithm: $O(n^2)$

[https://www.youtube.com/watch?v=NLp9C7AvJhk](https://www.youtube.com/watch?v=NLp9C7AvJhk)

[https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

[http://nthucad.cs.nthu.edu.tw/~yyliu/personal/nou/04ds/dijkstra.html](http://nthucad.cs.nthu.edu.tw/~yyliu/personal/nou/04ds/dijkstra.html)

```java
class Solution {
    Map<Integer, Integer> dist;

    public int networkDelayTime(int[][] times, int N, int K) {
        Map<Integer, List < int[]>> graph = new HashMap();

        for (int[] edge: times) {
            if (!graph.containsKey(edge[0]))
                graph.put(edge[0], new ArrayList<int[]> ());

            graph.get(edge[0]).add(new int[] {
                edge[1], edge[2]
            });
        }

        dist = new HashMap();
        for (int node = 1; node <= N; ++node)
            dist.put(node, Integer.MAX_VALUE);
        dist.put(K, 0);

        boolean[] seen = new boolean[N + 1];
        while (true) {
            int candNode = -1;
            int candDist = Integer.MAX_VALUE;

            for (int i = 1; i <= N; ++i) {
                if (!seen[i] && dist.get(i) < candDist) {
                    candDist = dist.get(i);
                    candNode = i;
                }
            }

            if (candNode < 0) break;

            seen[candNode] = true;

            if (graph.containsKey(candNode))
                for (int[] info: graph.get(candNode))
                    dist.put(info[0], Math.min(dist.get(info[0]), dist.get(candNode) + info[1]));
        }

        int ans = 0;
        for (int cand: dist.values()) {
            if (cand == Integer.MAX_VALUE) return -1;
            ans = Math.max(ans, cand);
        }

        return ans;
    }
}
```

+ Dijkstra's Algorithm: $O(n \log n)$

```java
class Solution {
    public int networkDelayTime(int[][] times, int N, int K) {
        Map<Integer, List<int[]>> graph = new HashMap();

        for (int[] edge: times) {
            if (!graph.containsKey(edge[0]))
                graph.put(edge[0], new ArrayList<int[]> ());

            graph.get(edge[0]).add(new int[] {
                edge[1], edge[2]
            });
        }

        PriorityQueue<int[]> heap =
            new PriorityQueue<int[]> ((info1, info2) - > info1[0] - info2[0]);
        heap.offer(new int[] { 0, K });

        Map<Integer, Integer> dist = new HashMap();
        while (!heap.isEmpty()) {
            int[] info = heap.poll();
            int d = info[0], node = info[1];

            if (dist.containsKey(node)) continue;

            dist.put(node, d);

            if (graph.containsKey(node))
                for (int[] edge: graph.get(node)) {
                    int nei = edge[0], d2 = edge[1];

                    if (!dist.containsKey(nei))
                        heap.offer(new int[] { d + d2, nei });
                }
        }

        if (dist.size() != N) return -1;

        int ans = 0;
        for (int cand: dist.values())
            ans = Math.max(ans, cand);

        return ans;
    }
}
```
  

## Weiti’s task: Study Vespa

[https://vespa.ai/](https://vespa.ai/)

[https://blog.longwin.com.tw/2017/11/vespa-yahoo-oath-open-source-data-process-engine-2017/](https://blog.longwin.com.tw/2017/11/vespa-yahoo-oath-open-source-data-process-engine-2017/)

  
  
  
  
# 2/16 (Sat.)
## [42\. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)

[https://awwapp.com/b/uebg3xlfo/](https://awwapp.com/b/uebg3xlfo/)

  
  

+ dynamic programming:
```python
if len(height) < 1: return 0

left_list = [height[0]]
right_list = [height[-1]]

left_max = height[0]
right_max = height[-1]

for i in range(1, len(height)):
    if left_max < height[i]:
        left_max = height[i]

    left_list.append(left_max)

for i in range(len(height) - 2, -1, -1):
    if right_max < height[i]:
        right_max = height[i]

    right_list = [right_max] + right_list

summary = 0

for i in range(len(height)):
    eachPoint = (min(left_list[i], right_list[i]) - height[i])  
    if eachPoint > 0:
        summary += eachPoint

print(left_list)

return summary
```

+ two pointer
```python
left_wall = 0
right_wall = 0

left = 0
right = len(height) - 1

water = 0

while left < right:
    if height[left] < height[right]:
        if height[left] > left_wall:
            left_wall = height[left]
        else:
            water += left_wall - height[left]

        left += 1
    else:
        if height[right] > right_wall:
            right_wall = height[right]
        else:
            water += right_wall - height[right]

        right -= 1
return water
```

    Input = [2, 1, 0, 1, 2]
    Stack = [0, ]
    Curr_idx = 4  => 2
    input[stack[-1]] = 1

    Bottom_idx

    Total_water = 0 + 1 + 0 + 3 =4
                                                  ______
                 |___|        ____ ____|           |
    Input[stack[-1]] = 1    input[Bottom_idx] = 1   input[curr_idx] =2
    (min(left, right) - bottom_idx)* (curr_idx - stack[-1] - 1)
              1   2                    1               4                  1
              2    2                 1                  4             0        - 1     = 1 * 3 = 3


  
  

+ with stack
```python
if len(height) < 3 :
    return 0

maxTrap = 0
stack=[]
i = 0

while i < len(height):
    if not stack or height[i] <= height[stack[-1]]:
        stack.append(i)
        i += 1
    else :
        bot = stack.pop()
        trap = 0 if not stack else (min(height[i],height[stack[-1]]) - height[bot] ) * (i-stack[-1]-1)
        maxTrap += trap

return maxTrap

if len(height) < 3:
    return 0
```

[https://docs.google.com/spreadsheets/d/1DfqKTbpf6oRrU0g3lu0GewMrPZIdRULJkOK_uerS6RM/edit#gid=0](https://docs.google.com/spreadsheets/d/1DfqKTbpf6oRrU0g3lu0GewMrPZIdRULJkOK_uerS6RM/edit#gid=0)

