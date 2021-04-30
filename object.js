// let user={}
// user.name="John"
// user.surname="Smith"
// user.name="Pete"
// delete user.name





// let schedule={}
// function isEmpty(schedule){
//     for (let key in schedule) {
//         if (key) {
//             return false
//         }
//       }
//       return true;
// }
// console.log(isEmpty())





// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);




let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiplyNumeric(menu));
