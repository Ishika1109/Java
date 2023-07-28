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


document.querySelectorAll('[id=js-link-box-en]')

$$('[id*=js-link-box]')


$$('[id*=js-link-box]')


setTimeout(() => {  console.log("World!"); }, 5000);




var langList = $$('[id*=js-link-box]'); var len = langList.length;
for (var i = 0; i < len; i++){
    var lang = langList[i];
    console.log(lang.href);
}
$$('#js-lang-list-button')[0].click();
$$('#searchInput')[0].value = "New";
$$('#searchInput')[0].focus();
langList[0].click();



$$('.mw-logo-container')[0].click(); 







