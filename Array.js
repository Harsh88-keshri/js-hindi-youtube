 const arr =[1,2,3,4,5,6]
 const arr1 =["harsh", "kumar"]

 const arr2= new Array(1,2,3,4)
 //console.log(arr[1]);

 // Array Methods 
 arr.push(7)
 arr.push(8) //push method adds an elements in an existence array

 arr.pop()// while pop array delete an element from an existence array
 arr.pop()

 arr.unshift(9) // add an element in 0th index
 arr.shift()// remove an element from 0th index
 //console.log(arr);
 
// console.log(arr.includes(15));// it checks the element is present or not and give boolean result i.e true or false
 //console.log(arr.indexOf(5));
 
 const newArr= arr.join()//join function convert array into string

 //console.log(arr);
 //console.log(newArr);
 
 
 // slice , splice function
 console.log("A", arr);

 const myn1 = arr.slice(1, 3)//1st and 2nd index sirf print hoga , range nhi include hota yani ki 3rd index include nhhi hoga
console.log(myn1);
 
 console.log("B", arr);
 const myn2 = arr.splice(1, 3)//splice me range index bhi include hota hai aur ye original array se wo sare elements ko bhi nikal deta hai.
 console.log(myn2);
 console.log(arr);
 



 const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
 