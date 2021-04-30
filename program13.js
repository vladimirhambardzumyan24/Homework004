let num=-789
num=Math.abs(num)
let firstNum=num.toString().substring(0, num.toString().length - 1)
let lastNum=num.toString().split("").pop()+firstNum
console.log(lastNum)
