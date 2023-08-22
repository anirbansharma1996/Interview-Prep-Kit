//1. Reverse a string:

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

//2. Find the first non-repeated character in a string:

function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let repeated = false;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        repeated = true;
        break;
      }
    }
    if (!repeated) {
      return str[i];
    }
  }
  return null;
}

// 3. Implement a function to check if two strings are anagrams:

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}
// 4. Rotate an array to the right by k steps:

function rotateArray(nums, k) {
  const n = nums.length;
  k %= n;
  
  for (let i = 0; i < k; i++) {
    const last = nums[n - 1];
    for (let j = n - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = last;
  }
  
  return nums;
}

// 5. Implement a function to remove duplicates from an array:

function removeDuplicates(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (nums[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(nums[i]);
    }
  }
  return result;
}

// 6. Find the intersection of two arrays:

function intersection(nums1, nums2) {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
      result.push(nums1[i]);
    }
  }
  return result;
}
// 7. Implement a function to find the maximum subarray sum:

function maxSubarraySum(nums) {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

//8. Merge two sorted arrays into a single sorted array:

function mergeSortedArrays(nums1, nums2) {
  const result = [...nums1, ...nums2];
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

// 9. Determine if there are any duplicates within k distance of each other in an array:

function containsNearbyDuplicate(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
}
// 10. Implement a function to perform basic string compression using the counts of repeated characters:

function compressString(str) {
  let compressed = '';
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  
  return compressed.length < str.length ? compressed : str;
}

//11.Longest Palindromic Substring:Find the longest palindromic substring within a given string.

function longestPalindrome(s) {
  let longest = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.slice(i, j);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }

  return longest;
}

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}


//12. Longest Substring Without Repeating Characters:Find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    const set = new Set();
    let len = 0;
    for (let j = i; j < s.length; j++) {
      if (!set.has(s[j])) {
        set.add(s[j]);
        len++;
        maxLen = Math.max(maxLen, len);
      } else {
        break;
      }
    }
  }
  return maxLen;
}

//13. Valid Palindrome:Determine if a given string is a palindrome, considering only alphanumeric characters and ignoring cases.

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

//14. Group Anagrams:Given an array of strings, group anagrams together.

function groupAnagrams(strs) {
  const map = {};
  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (!map[sortedStr]) {
      map[sortedStr] = [];
    }
    map[sortedStr].push(str);
  }
  return Object.values(map);
}

//15. Implement Hash Map: Design a simple hash map class that supports put, get, and remove operations.

class HashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  remove(key) {
    delete this.map[key];
  }
}

//16. 3Sum : Given an array of integers, find all unique triplets that sum up to zero.

function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        if (j === i + 1 || (j > i + 1 && nums[j] !== nums[j - 1])) {
          for (let k = j + 1; k < nums.length; k++) {
            if (k === j + 1 || (k > j + 1 && nums[k] !== nums[k - 1])) {
              if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]]);
              }
            }
          }
        }
      }
    }
  }

  return result;
}

//17.Two Sum:Given an array of integers, find two numbers that add up to a specific target.


function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

//18.Container With Most Water: Given an array of non-negative integers representing vertical lines, determine the container with the most water that can be held between any two lines.

function maxArea(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      max = Math.max(max, area);
    }
  }
  return max;
}
