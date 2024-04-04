// console.log('Hello ');
// var msg="Hello World";

// var age=18;
// console.log(msg);

// function env()
// {
// for(var i=0;i<5;i++)
// {
//     console.log(i);
// }
// console.log(i);
// }
// env();


// let msg="Hello";


// const msg="Hello";


// let age='20';
// console.log(typeof(age))


// let arr=['a','b','c','d'];
// arr[0]='abcd';
// console.log(arr);


// let str="12";
// let age=20;
// let ans=1-(-str);
// console.log(ans);


// let str='12.12';
// let p=parseInt(str);
// let n = Number(str);
// console.log(p,n);


// let a='12';
// let b=12;
// if(a==b)
// {
//     console.log('Yes');
// }
// else{
//     console.log('No');
// }



// let a='12';
// let b=12;
// if(a===b)
// {
//     console.log('Yes');
// }
// else{
//     console.log('No');
// }


// const str='Drishty';
// const usrName=`My name is  ${str}`;
// console.log(usrName);


// function print(str)
// {
//     console.log(str);
// } 
// const s='Hello';
// print(s);


// function sum(a,b)
// {
//     if(a&&b)
//     {
//     console.log(a+b);
//     }
//     else{
//         console.log(a);
//     }
// }
// sum(10,20);

//Function Declaration
// function print()
// {
// console.log('--');
// }


//Function Assignment(named)
// const a=function print(){ 
//     console.log('--');
// }

//Function Assignment(Anonymous)
// const b=function (){ 
//     console.log('--');
// }

//arrow function assignment 
// let c=() => {
// console.log('--');
// }


// print();
// a();
// b();
// c();

//switch case
// let a=2;
// switch(a)
// {
//     case 1:
//     {
//         console.log('one');
//         break;
//     }
//     case 2:
//     {
//         console.log('two');
//         break;
//     }
//     case3:
//     {
//         console.log('three');
//         break;
//     }
//     default:
//         {
//             console.log('Invalid Choice');
//         }
// }



// const obj=new Object();
// obj[1]='one';
// obj['name']='Drishty';
// obj[12]='twelve';
// console.log(obj);

// const obj={
//     1:'one',
// name:'Drishty',
// 12:'twelve',
// };
//  console.log(obj);

//  const obj={
//     'firstname':'Drishty',
//     'lastname':'Chaudhary',
//     'age':20,
//     'address':'Delhi',
// };
// const fullname1=obj.firstname+' '+obj.lastname;
// const fullname2=`${obj.firstname} ${obj.lastname}`;
// console.log(fullname1);
// console.log(fullname2);


const obj={
    'firstname':'Drishty',
    'lastname':'Chaudhary',
    'age':20,
    'address':'Delhi',
};

const x=prompt('Please the property to know');
// console.log(x);
console.log(obj(x));


