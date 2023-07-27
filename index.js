et p1;

let p2;

let p3;





async function asynfunc(){




    let res1 = await p1;

    let res2 = await p2;

    let res3 = await p3;





    console.log(res1);

    console.log(res2);

    console.log(res3);








}




asynfunc();








function resolveAfter2Seconds() {

    return new Promise(resolve => {

      setTimeout(() => {

        resolve('resolved');

      }, 2000);

    });

  }

  

  async function asyncCall() {

    console.log('calling');

    const result = await resolveAfter2Seconds();

    console.log(result);

    // Expected output: "resolved"

  }




let p4;



  asyncCall();


<<<<<<< HEAD
console.log(c);

function myfunction(){

    alert("hello this is third push")
}



let p1;
let p2;
let p3;


async function asynfunc(){

    let res1 = await p1;
    let res2 = await p2;
    let res3 = await p3;


    console.log(res1);
    console.log(res2);
    console.log(res3);





}

asynfunc();





function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }




  asyncCall();






=======
>>>>>>> 914ce8ed06b3dffcadc485786ea7f5e23f3528fa
