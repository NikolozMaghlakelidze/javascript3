// console.log("hello world");

// 1
function numbers(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] > 0) {
         sum += nums[i];
       }
    }
    return sum;
   }
   
   console.log(numbers(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8));

// 2
   let numbers1 = [10, 50, 6, 7, 8, 11, 6, 3, 9];
let totalsum = 0;

for (let i = 0; i < numbers1.length; i++) {
 totalsum += numbers1[i];
}

console.log(totalsum); 

// 3
let user = {
    firstname: 'tom',
    lastname: 'tobias',
    age: 32,
    isloggedin: true
  }

function fullname(user) {
   if (user.isloggedin) {
       return "${user.firstname} ${user.lastname}";
   } else {
       return false;
   }
}
console.log(fullname(user)); 

// 4 
let numbers2 = [10,11,12,13,14,15,16,17];
function findMax(numbers2) {
    let max = -Infinity;
    for (let i = 0; i < numbers2.length; i++) {
        if (numbers2[i] > max) {
            max = numbers2[i];
        }
    }
    return max;
}

console.log(findMax(numbers2));


// 5

function numbers3(num) {
    if (num % 2 === 0) {
        return 'This number is even';
    } else {
        return 'This number is odd';
    }
}

console.log(numbers3(16));   

// 6
let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];

function cifrebi(arr) {
    let cifrebi = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            cifrebi.push(arr[i]);
        }
    }
    return cifrebi;
}

console.log(cifrebi(array));

// 7
let array1 = [1, 2, 3, 4, 5];

function reverse(arr) {
    let reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    return reverse;
}

console.log(reverse(array1)); 


// 8
let asaki = (age) => {
   if (age >= 18) {
    console.log('srulwlovania');
   }
  if (age < 18) {
    console.log("arasrulwlovania");
  }
  else {
console.log('error');
  }
   };
   console.log(asaki(12));
//    aq 111 xazze undefineds miwers da ver mivxvdi ratom 


// 9
let cifrebi1 = (num1, num2) => {
    if (num1 > num2) {
       console.log(num1 + ' is the largest');
    } else if (num2 > num1) {
       console.log(num2 + ' is the largest');
    } else {
       console.log('error');
    }
   };
   
console.log(cifrebi1(15, 20));

