// Q.1 WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function) 


// class Node {
//     constructor(value) {
//         this.data = value;
//         this.next = null;
//     }
// }

// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);

// console.log("Initial Linked List:");
// let temp = head;
// while (temp != null) {
//     console.log(temp.data);
//     temp = temp.next;
// }

// let newNode = new Node(40);
// temp = head;
// while (temp.next != null) {
//     temp = temp.next;
// }
// temp.next = newNode;

// console.log("After Adding New Element:");
// temp = head;
// while (temp != null) {
//     console.log(temp.data);
//     temp = temp.next;
// }

// let key = 20;
// let prev = null;
// temp = head;

// while (temp != null && temp.data != key) {
//     prev = temp;
//     temp = temp.next;
// }

// if (temp == null) {
//     console.log("Element not found!");
// } else {
//     if (prev == null) {
//         head = temp.next;
//     } else {
//         prev.next = temp.next;
//     }
// }

// console.log("After Deleting Element 20:");
// temp = head;
// while (temp != null) {
//     console.log(temp.data);
//     temp = temp.next;
// }


// OUTPUT:-

// Initial Linked List:
// 10
// 20
// 30
// After Adding New Element:
// 10
// 20
// 30
// 40
// After Deleting Element 20:
// 10
// 30
// 40


// Q.2 WAP to implements Selection Sort using JavaScript DSA without any pre-defined function.


// let arr = [64, 25, 12, 22, 11];
// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIndex]) {
//             minIndex = j;
//         }
//     }

//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
// }

// console.log("Sorted Array:");
// for (let i = 0; i < n; i++) {
//     console.log(arr[i]);
// }


// OUTPUT:- 
// Sorted Array:
// 11
// 12
// 22
// 25
// 64


 
// Q.3 WAP to implements Stack using JavaScript without any functions?


// let stack = [];
// let topp = -1;
// let maxSize = 5;

// if (topp < maxSize - 1) { topp++; stack[topp] = 10; }
// if (topp < maxSize - 1) { topp++; stack[topp] = 20; }
// if (topp < maxSize - 1) { topp++; stack[topp] = 30; }

// let output = "";
// for (let i = 0; i <= topp; i++) {
//     output += stack[i] + " ";
// }
// console.log("Stack Elements:", output);

// if (topp != -1) {
//     console.log("Topp Element:", stack[topp]);
// }

// if (topp != -1) {
//     let popped = stack[topp];
//     topp--;
//     console.log("Popped Element:", popped);
// }

// output = "";
// for (let i = 0; i <= topp; i++) {
//     output += stack[i] + " ";
// }
// console.log("Stack after Pop:", output);


// output:- 
// Stack Elements: 10 20 30 
// Top Element: 30
// Popped Element: 30
// Stack after Pop: 10 20



// Q.4 WAP to implement binary Search using JavaScript with DSA?


// function binarysearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         }
//         else if (arr[mid] < target) {
//             left = mid + 1;
//         }
//         else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

// let data = [10, 20, 30, 40, 50, 60];
// let key = 50;
// let result = binarysearch(data, key);

// if (result !== -1) {
//     console.log("Element found at index: " + result);
// } else {
//     console.log("Element not found");
// }


// OUTPUT:-
// Element found at index: 4



// Q.5 WAP to implement Merge sort using JavaScript without any function?


// let arr = [38, 27, 43, 3, 9, 82, 10];
// let n = arr.length;

// let step = 1;
// while (step < n) {
//     let left = 0;

//     while (left + step < n) {
//         let mid = left + step;
//         let right = Math.min(left + 2 * step, n);

//         let temp = [];
//         let i = left, j = mid;

//         while (i < mid && j < right) {
//             if (arr[i] < arr[j]) temp.push(arr[i++]);
//             else temp.push(arr[j++]);
//         }
//         while (i < mid) temp.push(arr[i++]);
//         while (j < right) temp.push(arr[j++]);

//         for (let k = 0; k < temp.length; k++) {
//             arr[left + k] = temp[k];
//         }

//         left += 2 * step;
//     }
//     step *= 2;
// }

// console.log("Sorted Array: " + arr);


// OUTPUT:-
// Sorted Array: 3,9,10,27,38,43,82