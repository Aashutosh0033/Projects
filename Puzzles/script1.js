

const scienceQuiz = [
    {
        q1:"Q1. What's at the Earth's core (the bit in the middle)?",
        a: "Nothing it's just an empty space",
        b: "Mollten hot metal",
        c: "Gooey Caramel center",
        d:"A lost world full of Dinosaurs",
        ans:"ans2"
    },

    {
        q1:"Q2. Which Roman god was Earth named after?",
        a: "Earth, god of Rocks",
        b: "Earth, goddess of soil",
        c: "Earth, goddess of water",
        d:"Trick question, it's the only planet not named after any Roman god",
        ans:"ans4"
    },

    {
        q1:"Q3. What % of the Earth's surface is covered in water?",
        a: "10%",
        b: "30%",
        c: "50%",
        d:"70%",
        ans:"ans4"
    },

    {
        q1:"Q4. How many people live on Earth?",
        a: "About 2.5 billion",
        b: "About 4.5 billion",
        c: "About 7.5 billion",
        d:"About 10.5 billion",
        ans:"ans3"
    },

    {
        q1:"Q5. What's a tectonic plate?",
        a: "A layer of earth that moves and causes earthquake",
        b: "A type of mountain",
        c: "a flat desert",
        d:"A plate you eat your dinner off",
        ans:"ans1"
    },

    {
        q1:"Q6. How long does Earth take to rotate on it's axis (spin round)?",
        a: "23 Hours",
        b: "24 Hours",
        c: "25 Hours",
        d:"23 Hours 56 minutes and 4 seconds",
        ans:"ans4"
    },

    {
        q1:"Q7. How old is the Earth?",
        a: "1.5 Billion years",
        b: "4.5 Billion years",
        c: "10.5 Billion years",
        d:"At least 20 years definitely",
        ans:"ans2"
    },

    {
        q1:"Q8. Who is the first Indian Astronaut to go in Space from ISRO?",
        a: "Anil Menon",
        b: "Kalpanan Chawla",
        c: "Rakesh Sharma",
        d:"Sunita Williams",
        ans:"ans3"
    },

    {
        q1:"Q9. Name of India's mission to mars?",
        a: "Mission Mars",
        b: "Operation Mars",
        c: "Mission Mangal",
        d:"Mangalyaan Mission",
        ans:"ans4"
    },

    {
        q1:"Q10. What is the name of the First Satellite launched by India?",
        a: "Cartosat",
        b: "Aryabhata",
        c: "GSAT",
        d:"Kalpana",
        ans:"ans2"
    },

    {
        q1:"Q11. What is the full form of NASA?",
        a: "National Aircraft and Space Administration",
        b: "National Aeronautics and Space Administration",
        c: "National Aeronautics and Science Administration",
        d:"National Administration of Space Aircraft",
        ans:"ans2"
    },

    {
        q1:"Q12. What is the full form of ISRO?",
        a: "Indian Science Research Organisation",
        b: "Indian Student's Research Organisation",
        c: "Indian Space Research Organisation",
        d:"Indian Science Research Office",
        ans:"ans3"
    },

    {
        q1:"Q13. What is the name of earth's natural satellite",
        a: "Callisto",
        b: "Mars",
        c: "Sun",
        d:"Moon",
        ans:"ans4"
    },

    {
        q1:"Q14. What is the shape of earth?",
        a: "Irregularly shaped ellipsoid",
        b: "Spherical",
        c: "Oval",
        d:"Flat",
        ans:"ans1"
    },

    {
        q1:"Q15. How much time does earth take to revolve around sun?",
        a: "360 Days",
        b: "365 days",
        c: "368 Days",
        d:"300 days",
        ans:"ans2"
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

const deselect = () => {
    answers.forEach((currentElem) => currentElem.checked = false)
}
    


submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckedAnswer();
    if(checkedAnswer===scienceQuiz[questionCount].ans){
        score++;
    }
    questionCount++;
    deselect();
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
    