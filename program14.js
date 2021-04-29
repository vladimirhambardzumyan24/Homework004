let number=4
if (number % 3 ===0 && number % 7===0) {
    console.log(`${number} is a multiple of 3 and 7.`)
}else if (number % 5 ===0 && number % 7===0) {
    console.log(`${number} is a multiple of 5 and 7.`)
}else if (number % 3 !==0 || number % 5!==0 || number % 7!==0) {
    console.log(`${number} is not a multiple of 3, 5 or 7.`)
}else if (number % 3 ===0 && number % 5===0 && number % 7===0) {
    console.log(`${number} is a multiple of 3, 5 and 7`)
}else if (number % 3===0) {
    console.log(`${number} is a multiple of 3`)
}