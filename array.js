// let fruits = ["Apples", "Pear", "Orange"];
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// console.log( fruits.length );




// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// console.log( styles.shift() );
// styles.unshift("Rap", "Reggae");
// console.log(styles)




// let arr = ["a", "b"];

// arr.push(function () {
//   console.log(this);
// });

// arr[2]();






function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
  }
  console.log(getMaxSubSum([-1, 2, 3, -9]))