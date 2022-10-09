// let num = 100;

// function getRandomInt(num) {
//   return Math.floor(Math.random() * num);
// }
// alert(getRandomInt(100)); \

// let first = parseInt(document.querySelector('.first').value)
// let second = parseInt( document.querySelector('.second').value)


// function getRandomNumberBetween(first,second){
//   return Math.floor(Math.random()*(first-second+1)+second);


// }


// function alertRes() {
//   console.log(getRandomNumberBetween(first,second));
// }

function rand()
{
    let max = document.getElementById("max").value;
    let min = document.getElementById("min").value;

    let output = document.getElementById("output");

    let random = Math.floor(Math.random() * max + min);

    output.value = random;
}