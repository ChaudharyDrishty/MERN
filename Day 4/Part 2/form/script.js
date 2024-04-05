// const firstnamechange=(e)=>
// {
// console.log(e.target.value);
// }
// const lastnamechange=(e)=>
// {
// console.log(e.target.value);
// }

const firstnamechange = (e) => {
  const val = e.target.value;
  if (val.length > 3) {
    console.log("correct");
  }
};


//validation
// -------------------------------------------------Event Delegation in JavaScript--------------------------------

// function submitform(e) {
//   e.preventDefault();
//   console.log(e);
// }



function submitform(e) {
  e.preventDefault();
  const t = e.target;
  const res = {
    hobbies: [],
  };
  for (let i = 0; i < t.length; i++) {
    const ty = t[i].type;

    // console.log(nm,ty,vl);
    // res[nm]=vl;
    // if(ty=='checkbox')
    // {
    //     console.log(t[i].checked)
    // }
    if (ty != "submit") {
      const vl = t[i].value;
      const nm = t[i].name;
      if (ty == "checkbox" && t[i.checked]) {
        res.hobbies.push(vl);
      }
      if (ty != "checkbox") {
        res[nm] = vl;
      }
    }
  }

console.log(res);
}



//higher order function and call back


// function sum(a,b)
// {
//     return a+b;
// }

// function print(x)
// {
//     console.log('    ****',x,'****       ')
// }
// const ans=sum(3,4);
// print(ans);


//

function sum(a,b, fun)
{
    const ans=a+b;
    fun(ans);
}
function print(x)
{
    console.log('    ****',x,'****       ')
}
sum(3,4, print);
