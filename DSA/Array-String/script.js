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
