import { showspinnerAndCheck } from "./spinner.js";
import { refreshPage } from "./spinner.js";

let qiuz=[
    {
        question:'what is the capital of France?',
        choices:{
            A:'Madrid',
            B:'Berlin',
            C:'Paris',
            D:'Rome'
        },
        answers:{
            ans:'Paris'
        }
    },
    {
        question:'which planet is known as the red planet?',
        choices:{
            A:'Earth',
            B:'Mars',
            C:'Jupiter',
            D:'Venus'
        },
        answers:{
            ans:'Mars'
        }
    },
    {
        question:'Who wrote the play Romeo and  Juliet?',
        choices:{
            A:'Charles Dickens',
            B:'William Shakespeare',
            C:'Jane Austen',
            D:'Mark TWain'
        },
        answers:{
            ans:'William Shakespeare'
        }
    },
    {
        question:'what is the largest ocean on earth',
        choices:{
            A:'Atlantic Ocean',
            B:'Indian Ocean',
            C:'Arctic Ocean',
            D:'Percific Ocean'
        },
        answers:{
            ans:'Percific Ocean'
        }
    },
    {
        question:'what is the chemical symbol of gold',
        choices:{
            A:'Au',
            B:'Ag',
            C:'Pb',
            D:'Fe'
        },
        answers:{
            ans:'Au'
        }
    },
    {
        question:'what year did Titanic sink',
        choices:{
            A:'1912',
            B:'1905',
            C:'1912',
            D:'1898'
        },
        answers:{
            ans:'1912'
        }
    },
    {
        question:'who painted Mona Lisa',
        choices:{
            A:'Vincent van Gogh',
            B:'Pablo picasso',
            C:'Leornad da Vinci',
            D:'Claude Monet'
        },
        answers:{
            ans:'Leornad da Vinci'
        }
    },
    {
        question:'what is the currency of Japan',
        choices:{
            A:'Yen',
            B:'Won',
            C:'Dollar',
            D:'Peso'
        },
        answers:{
            ans:'Yen'
        }
    },
    {
        question:'which element is neccesary for photosynthesis',
        choices:{
            A:'Carbon',
            B:'Oxygen',
            C:'Nitrogen',
            D:'Hydrogen'
        },
        answers:{
            ans:'Carbon'
        }
    },
    {
        question:'what is the hardest natural substance on Earth',
        choices:{
            A:'Gold',
            B:'Iron',
            C:'Diamond',
            D:'Quartz'
        },
        answers:{
            ans:'Diamond'
        }
    }
]
function Remarker(score){
    let Remarks='';
    let grade='';
    if(score>=7){
        grade='A';
        Remarks='Excellent Work!';
    }
    else if(score>=6 && score<7){
        grade='B';
        Remarks='Very Good!';
    }
    else if(score>=5 && score<6){
        grade='C';
        Remarks='Good Trial!';
    }
    else if(score<=4 && score<5){
        grade='D';
        Remarks='Poorly Performed';
    }
    else{
        grade='E';
        Remarks='Failed!'
    }
    return{
        gradeOb:grade,
        RemarksOb:Remarks
    }
}
 export function mainHandler(){
    
let correctAnswerArray=[];


let pageHTML=document.querySelector('.wrapper');
let renderHTML='';
qiuz.forEach((qiuzValue)=>{
    correctAnswerArray.push(qiuzValue.answers.ans);
    renderHTML+=`
           <div class="quiz-block">
               <p>${qiuzValue.question}?</p>
               <div class="answer-block">
                   <div class="quiz-ans-pair">
                        <input type="radio" value="${qiuzValue.choices.A}" name="${qiuzValue.choices.A}" class="js-input">
                        <p>${qiuzValue.choices.A}</p>
                   </div>
                   <div class="quiz-ans-pair">
                        <input type="radio" value="${qiuzValue.choices.B}" name="${qiuzValue.choices.A}" class="js-input">
                        <p>${qiuzValue.choices.B}</p>
                   </div>
                   <div class="quiz-ans-pair">
                        <input type="radio" value="${qiuzValue.choices.C}" name="${qiuzValue.choices.A}" class="js-input">
                        <p>${qiuzValue.choices.C}</p>
                   </div>
                   <div class="quiz-ans-pair">
                        <input type="radio" value="${qiuzValue.choices.D}" name="${qiuzValue.choices.A}" class="js-input">
                        <p>${qiuzValue.choices.D}</p>
               </div>
               </div>
           </div>`;
});
let score=0;
let answerGuessesArray=[];
pageHTML.innerHTML=renderHTML;
document.querySelector('.js-submit').addEventListener('click',()=>{
    document.querySelectorAll('.js-input:checked').forEach((selectedAnswers)=>{
        answerGuessesArray.push(selectedAnswers.value);
    });
    answerGuessesArray.forEach((valueGuessed,index)=>{
        if(valueGuessed===correctAnswerArray[index]){
            score+=1;
        }
    });
   if(answerGuessesArray.length===10){
    console.log(answerGuessesArray.length)
    let returnScore=Remarker(score);
    let performance=(score/10)*100;
    document.querySelector('.js-result').innerHTML=` <p>Total number of quizes :10</p>
            <p>Number of quizes gotten right:${score}</p>
            <p>Score :${performance}%</p>
            <p>Grade :${returnScore.gradeOb}</p>
            <p>Remarks:${returnScore.RemarksOb}</p>`;
    score=0;
    document.querySelector('.js-warning').remove();
    showspinnerAndCheck();
    document.querySelector('.js-submit').style.display='none';
    document.querySelector('.js-try-again').style.display='block';

   }  
   else{
    
    document.querySelector('.js-warning').innerHTML=`<p>please make sure that all questions are filled</p>`
   score=0;
   answerGuessesArray=[];
   refreshPage();

   }

});

 }
 mainHandler();