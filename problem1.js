// function cubeNumber(number) {
//     if(number <= 0){
//         return "only positive number allowed"
//     }

//     if(number !== 'number'){
//         return 'input only Number'
//     }

//     return Math.pow(number, 3)
// }



// function matchFinder(string1, string2) {
//   if (typeof string1 !== "string" || typeof string2 !== "string"){
//     return "validity check false";
//   }
  
//   return string1.includes(string2);
// }

// console.log(matchFinder('John Doe','ohn'))
// console.log(matchFinder('JavaScript','Code'))
// console.log(matchFinder('Peter Parker','Pen'))
// console.log(matchFinder('Peter Parker','pet'))

// function sortMaker(arr) {

//   if (!Array.isArray(arr)){
//     return 'Input type an Array'
//   }

//   if (arr.length !== 2){
//     return 'Array will contain 2 element'
//   }

//   let a = arr[0]
//   let b = arr[1]

//   if(a < b){
//     return [b,a]
//   }

//   if(a === b){
//     return 'equal'
//   }

//   if(a >= 0 && b >= 0){
//     if(a > b){
//       return[a, b]
//     }
//     else {
//       return [b, a]
//     }
//   }

//   else{
//     return "Invalid Input"
//   }

// }

// console.table(sortMaker([2,3]))
// console.table(sortMaker([4,2]))
// console.table(sortMaker([4,4]))
// console.table(sortMaker([1,2]))
// console.table(sortMaker([4,-2]))

// function findAddress(obj) {
//   if (!(typeof obj === "object" && !Array.isArray(obj))) {
//     return "Input Should be an object";
//   }
//   const allProperties = ["street", "house", "society"];
//   const result = {};

//   for (let i = 0; i < allProperties.length; i++) {
//     const prop = allProperties[i]; // prop = street
//     let value = obj[prop]; // value = 10

//     if (value === undefined) {
//       value = "__";
//     }

//     result[prop] = value; //street = 10
//   }

//   return Object.values(result);
// }



// function canPay(changeArray, totalDue) {
 
//   if(changeArray.length <= 0){
//     return 'Amar Kache tk nai';
//   }

//   let arrayTotalTK = 0
//   for(let i = 0; i < changeArray.length; i++){
//     arrayTotalTK += changeArray[i]
//   }

//   if(arrayTotalTK >= totalDue){
//     return true
//   }
//   else{
//     return false
//   }
// }



