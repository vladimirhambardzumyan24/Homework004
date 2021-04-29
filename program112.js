let str = "_, we have a _.";
let arr = ["Houston", "problem"];
let j = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "_") {
    console.log(arr[j]);
    str[i] = arr[j];
    j++;
    console.log(str[i]);
  }
}
console.log(str);
