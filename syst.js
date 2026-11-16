const questions4 = ["A quelle vitesse les gibbons se deplacent ils dans les arbres?",
    "Ou vivent ils?", "Quelle est leur principale source d alimentation?",
    "Pourquoi les gibbons crient ils?",
    "Comment appelle-t-on le mode de locomotion principal des gibbons?",
    "Quelle caracteristique anatomique distingue les gibbons?",
    "Quel type de structure sociale les gibbons forment-ils generalement?",
];
const ans4 = [
    ["56kmh", "45kmh", "73kmh", "64kmh"],
    ["En asie du sud est", "En asie centrale", "En amazonie", "En afrique"],
    ["Les fruits", "Les insectes", "Les feuilles d arbre", "Les petits animaux"],
    ["defendre leur territoire", "Signaler de la nourriture", "Alerter de l arrivee de la nuit", "Embetter les touristes"],
    ["La branchiation", "Le vol plane", "La staligrade", "La quadrupedie"],
    ["ls n ont pas de queue", "Ils ont une fourrure entierrement blanche", "Ils possedent 4 pouces opposables", "Ils ont des branchies vestigiales"],
    ["Des unites familiales monogames", "Un harem dirige par un male dominant", "Des individus strictement solitairs", "De grandes troupes multi males et multi femelles"]
];


function GOTO(ref) {
    window.location.href = ref;
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function countdown(number) {


    for (let count = number; count > 0; count--) {


        document.body.innerHTML = `
            <h1 style="text-align: center; font-size: 150px; color: blue;">${count}</h1>
        `;


        await delay(1000);
    }
}




function chooseRandom(max) {
    return Math.floor(Math.random() * max);
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0 ; i--) {
        let j = chooseRandom(i+1);


        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function indexOf(elem, array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] == elem) {
            return index;
        }
    }
    return -1;
}


let numQuest = 0;
let num = 0;
let quests = "";
let ansBuffer = [0,0,0,0];
let questnum = 0;
let rightAns = 0;
let inputAns = 5;
let currentQuestion = "";
let index = 0;
let answered = false;


function newQuestion() {
    if (index == 0) {
        quests = shuffleArray([...questions4]);
    }
    if (index < questions4.length) {
        currentQuestion = quests[index];


        num = chooseRandom(4);


        questnum = indexOf(currentQuestion, questions4);


        ansBuffer = shuffleArray([...ans4[questnum]]);


        rightAns = indexOf(ans4[questnum][0], ansBuffer);


        index = index + 1;


    } else {
        window.location.href = "endQuiz.html";


        numQuest = 0;
        num = 0;
        quests = "";
        ansBuffer = [0, 0, 0, 0];
        questnum = 0;
        rightAns = 0;
        inputAns = 5;
        currentQuestion = "";
        index = 0;
    }
}


function checkAnswer(butt) {
    if (answered == false) {
        answered = true;
        if (butt == rightAns) {
            numQuest++;
            document.getElementById("feedback").textContent = "Bonne reponse !";
            document.getElementById("feedback").style.color = "green";
            document.getElementById("feedback").style.fontSize = "30px";
        } else {
            document.getElementById("feedback").textContent = "Mauvaise reponse !";
            document.getElementById("feedback").style.color = "red";
            document.getElementById("feedback").style.fontSize = "30px";
        }
        document.getElementById("scor").textContent = "Your score is: " + numQuest;
        document.querySelectorAll(".buttons button").forEach(button => {
            button.disabled = true;
        });
        document.getElementById("next").style.display = '';
    }
}
function displayQuestion() {
    answered = false;
    document.getElementById("feedback").textContent = "";
    document.getElementById("next").style.display = "none";
    document.getElementById("question").textContent = currentQuestion;
    document.getElementById("points").textContent = index;
   
    for (let i = 0; i < 4; i++) {
        document.querySelector(".button" + (i + 1)).textContent = ansBuffer[i];
    }
    document.querySelectorAll(".buttons button").forEach(button => {
            button.disabled = false;
    });
    document.getElementById("next").style.display = 'none';
}
async function startQuiz() {
    await countdown(3);
    window.location.href = "question.html";
   


}
function nextQuestion() {
    answered = false;
    newQuestion();
    if (index <= questions4.length) {
        displayQuestion();
    }
}


if (document.getElementById("question")) {
    newQuestion();
    displayQuestion();
}
