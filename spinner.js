import { mainHandler } from "./quizes.js";

export function showspinnerAndCheck(){
    let spinner =document.querySelector('.spinner');
    spinner.style.display='block';
    let Rezult=document.querySelector('.js-result');
    Rezult.style.display='none';

    setTimeout(() =>{
        spinner.style.display='none';
        document.querySelector('.js-submit').style.display='none';
        Rezult.style.display='block';
        document.querySelector('.js-try-again').style.display='block';

    },1000);
}
    document.querySelector('.js-try-again').addEventListener('click',()=>{
        refreshPage();
        document.querySelector('.js-result').innerHTML='';
        document.querySelector('.js-try-again').style.display='none';
        document.querySelector('.js-submit').style.display='block';
        mainHandler();
    });


export function refreshPage(){
    location.reload;
}
