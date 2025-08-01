/*const obj={
    firstname:"Princy",
    mark:98,
}
class Person{
    constructor(firstname,mark){
        this.firstname = firstname;
        this.mark = mark;
    }
}
const obj2 = new Person("Nancy,100")
const obj3 = new Person("Nancy,100")
console.log(obj2.firstname)*/


const arr = [5,4,9,7,10,8]
//foreach
arr.forEach((x)=>{console.log(x)})

//filter
let filteredArr = arr.filter((x)=>x%2==0)
console.log(filteredArr)

//reduce
let sum = arr.reduce((acc,val)=>acc+val)
console.log(sum)

//slice
let copyArr = arr.slice(2)
console.log(copyArr)

//splice
arr.splice(2,4)
console.log(arr)