let arr=[4,6,63,39]
for(let x of arr){
    console.log(x)
}
for(let x in arr){
    console.log(x)
}



//let arr=[3,5,67,8,9]
arr .forEach(value => {console.log(value)
    
});


arr.map((value)=>{console.log(value)})


//javascript object
const obj={
    firstname:"Princy",
    lastname:"Mathew",
    age:19,
    graduated:false,
    joining_date:new Date("10/07/2024"),
    number_of_days:()=>{
        let curr = new Date()
        return curr - obj.joining_date
    }
    }
    console.log(obj)
