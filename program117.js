let string = "Keep yourfriends close, but your enemies closer.";
let arr = string.split(" ");
let lastItem = arr[arr.length - 1];
let lastItem2 = lastItem.substring(lastItem.length - 1);
if (lastItem2 === "." || lastItem2 === "!") {
  lastItem = lastItem.substring(0, lastItem.length - 1);
}
arr[arr.length - 1] = lastItem;
console.log(arr);
