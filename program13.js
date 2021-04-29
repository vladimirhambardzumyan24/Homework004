let number=4564605
let num=number.toString().split('')
if (num[num.length-1]==0) {
    console.log(number)
}else{
    console.log(number.toString().split('').reverse().join(''))
}
