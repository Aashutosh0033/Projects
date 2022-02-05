

const scienceQuiz = [
    {
        q1:"Q1. What is the full form of ISRO?",
        a: "Indian Science Research Organisation",
        b: "Indian Student's Research Organisation",
        c: "Indian Space Research Organisation",
        d:"Indian Science Research Office",
        ans:"ans3"
    },

    {
        q1:"Q2. What is the name of the First Satellite launched by India?",
        a: "Cartosat",
        b: "Aryabhata",
        c: "GSAT",
        d:"Kalpana",
        ans:"ans2"
    },

    {
        q1:"Q3. Name of India's mission to mars?",
        a: "Mission Mars",
        b: "Operation Mars",
        c: "Mission Mangal",
        d:"Mangalyaan Mission",
        ans:"ans4"
    },

    
]

const question = document.getElementsByClassName("question")[0] ;
console.log(question)
const questionNo = document.getElementById('question-number').innerHTML;
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const submit = document.getElementById("submit");

const answers = document.querySelectorAll('.answer');
console.log(answers)


let  questionCount = 0;
let score = 0
const loadQuestion = () => {

    const questionList = scienceQuiz[questionCount];
    question.innerHTML = questionList.q1;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();


const getCheckedAnswer = () =>{
    let answer;
    answers.forEach((currentElem) => {
        if(currentElem.checked){
            answer = currentElem.id;
        }
    }
    );
    return answer;
    
    

}

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckedAnswer();
    if(checkedAnswer===scienceQuiz[questionCount].ans){
        score++;
    }
    questionCount++;
    if(questionCount<scienceQuiz.length){
        loadQuestion();
    }

    else{
        let button = document.querySelector('#button');
        button.style.display = 'none';
        
        let showScore = document.querySelector('#innerText');
        let showScore2 = document.querySelector('#showScore');
        showScore2.classList.remove('display');
        showScore.innerHTML = `<p>You scored ${score}/${scienceQuiz.length}<p>`
        showScore.style.margin = "-1rem auto 0 auto";

        let button2 = document.querySelector("#playAgain");
        button2.addEventListener('click', ()=>{
            location.href = "index.html";
        })
        
    }
});
    