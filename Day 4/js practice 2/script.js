// let a=new String("Hello");
// let b="Hello";
// if(a===b)
// {
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }


// const obj={
//     "name":'Drishty',
//     "lname":'Chaudhary',
// }
// console.log(obj);
// document.write(obj);


// const obj={
//     "name":'Drishty',
//     "lname":'Chaudhary',
// }
// obj.age=20;
// console.log(obj);


// let arr=[1,2,3,4];
// arr=[2,3,4];
// arr[10]=20;
// arr.push(10);

// console.log(arr);
// console.log(typeof(arr));


// const obj={
//         "name":'Drishty',
//         "lname":'Chaudhary',
//     }
// const arr=[1,2,3];
// console.log(Array.isArray(obj));
// console.log(Array.isArray(arr));


// const obj={
//     "name":'Drishty',
//     "lname":'Chaudhary',
// }
// const arr=[1,2,3,4];
// function checkIfObject(x)
// {
// if(Array.isArray(x))
// {
//     console.log('Not object');
// }
// else if(typeof(x)=="object")
// {
//     console.log("object");
// }
// else
// {
//     console.log('Not Object');
// }
// }
// // checkIfObject([1,2,3,4]);
// checkIfObject(1);
// checkIfObject(arr);
// checkIfObject(obj);


// ------FOR LOOP------

const arr=['name',2];
const obj={
    "name":"Drishty",
    age:20,
}
// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }
// for(let i=0;i<2;i++)
// {
//     console.log(arr[i]);
// }
// console.log(obj);



// ------FOR OF LOOP------

// for(let i of arr )
// {
//     console.log(i);
// }


// for(let i of obj )
// {
//     console.log(i);
// }


// ------FOR IN LOOP-----

// for(let i in arr)
// {
//     console.log(i);
// }

// for(let i in obj )
// {
//     console.log(i);
// }

// -------QUERY SELECTORS-----

// console.log(window);
// console.log(innerHeight);
// console.log(innerWidth);

// console.log(window.document);
// console.log(window)
// console.dir(window)

//Iterable and Array
//divcopy and shallowcopy

// const res=document.getElementsByTagName('h3');
// const res=document.getElementById('ht1')
// console.log(res)
// console.dir(res)


// const res=document.querySelectorAll('h3')
// console.log(res)


// const res=document.getElementById("ht1");
// res.innerText="Hello,World"
// res.innerHTML="<h4>Hello</h4> "
// console.log(res);


const ne=document.createElement("h3");
ne.innerText="Dynamic Text";
// console.log(ne)
// document.body.appendChild(ne);
const firstDiv=document.getElementsByTagName('div');
// firstDiv[0].appendChild(ne);
firstDiv[0].removeChild(ne);










