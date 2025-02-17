// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getTimezoneOffset());

// let myCreateDate = new Date(2025,0,12)

// let myCreateDate = new Date(2025,0,12,1,3,3)

// let myCreateDate = new Date("2025-01-14")

let myCreateDate = new Date("01-14-2025")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp =  Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getTime());
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);

// '${newDate.getDay()} and the time '

newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate);