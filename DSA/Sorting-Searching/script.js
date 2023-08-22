//1. Implement the Quicksort Algorithm:

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

//2. Implement the Mergesort Algorithm:

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

//3. Perform Binary Search on a Sorted Array:

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

//4. Find the kth Largest Element in an Unsorted Array:

function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

//5. Implement the Counting Sort Algorithm:

function countingSort(arr) {
  const max = Math.max(...arr);
  const countArray = Array(max + 1).fill(0);
  const result = [];

  for (const num of arr) {
    countArray[num]++;
  }

  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      result.push(i);
      countArray[i]--;
    }
  }

  return result;
}
