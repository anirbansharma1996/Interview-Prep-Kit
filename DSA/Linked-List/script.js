//1. Implement a Linked List and Reverse It:

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

//2. Detect if a Linked List Has a Cycle:

function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

//3. Find the Middle Element of a Linked List:

function findMiddle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value;
}

//4. Merge Two Sorted Linked Lists into a Single Sorted Linked List:

function mergeSortedLists(list1, list2) {
  const mergedList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 && current2) {
    if (current1.value < current2.value) {
      mergedList.append(current1.value);
      current1 = current1.next;
    } else {
      mergedList.append(current2.value);
      current2 = current2.next;
    }
  }

  while (current1) {
    mergedList.append(current1.value);
    current1 = current1.next;
  }

  while (current2) {
    mergedList.append(current2.value);
    current2 = current2.next;
  }

  return mergedList;
}

//5. Remove Duplicates from a Sorted Linked List:

function removeDuplicates(head) {
  let current = head;
  while (current && current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
}


//6. Check if a Linked List is a Palindrome:

function isPalindrome(head) {
  const values = [];
  let current = head;
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  const reversedValues = values.slice().reverse();
  return JSON.stringify(values) === JSON.stringify(reversedValues);
}


//7. Add Two Numbers Represented by Linked Lists:

function addLists(list1, list2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (list1 || list2 || carry) {
    const value1 = list1 ? list1.value : 0;
    const value2 = list2 ? list2.value : 0;
    const sum = value1 + value2 + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (list1) list1 = list1.next;
    if (list2) list2 = list2.next;
  }

  return dummy.next;
}


//8. Split a Linked List into Two Halves:

function splitLinkedList(head) {
  if (!head) return [null, null];

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const firstHalf = head;
  const secondHalf = slow.next;
  slow.next = null;

  return [firstHalf, secondHalf];
}
