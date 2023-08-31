// store multiple things
//methods push slice length indexof lastindexof

//for of = Arrays, Strings, Maps, NodeLists, and more
//for in = interate obj key

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// numbers[numbers.length] = 7;
// console.log(numbers);

// slice - return portion of the array

// console.log(numbers.slice(0, 2)); //return values of 0 , 1 index

// console.log(numbers.indexOf(1)); // 0
// console.log(numbers.lastIndexOf(3)); //2
//index of vs last indexof
/*
  indexof return first ocuurence index 
  lastindexof return last occurence of index  
*/

function doubleArray(nums) {
  let result = [];
  for (const num of nums) {
    result.push(num * 2);
  }
  return result;
}

// console.log(doubleArray([1, 2, 3, 4, 5, 6]));

function sumOfArray(arr) {
  let sum = 0;
  for (const ele of arr) {
    sum += ele;
  }
  return sum;
}

// console.log(sumOfArray([1, 2, 3, 4, 5, 6]));

function max(arr) {
  let maxValue = arr[0];
  for (const ele of arr) {
    if (ele > maxValue) {
      maxValue = ele;
    }
  }
  return maxValue;
}
// console.log(max([1, 2, 3, 4, 5, 6, 7, 8]));

const latterFrequncy = (str) => {
  let result = {};

  for (const ch of str) {
    //check if letters is exist in result
    if (ch in result) {
      //exist than indecrement by 1
      result[ch] += 1;
    } else {
      // else assign n = 1
      result[ch] = 1;
    }
  }
  return result;
};
// console.log(latterFrequncy("nevil nevil"));

const wordFrequancy = (str) => {
  const word = str.split(" ");
  let freq = {};
  for (const ele of word) {
    if (ele in freq) {
      freq[ele]++;
    } else {
      freq[ele] = 1;
    }
  }
  return freq;
};

a = [1, 2, 3, 4, 5];

console.log(wordFrequancy("hello hello my name is nevil nevil"));
