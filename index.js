"use strict";

/* array containing question and answer choices, including "value" field to set the "value" attribute of the appropriate radio button */
const questions = [
    {questionNumber: 1,
    text: "In 900 years of time and space, I've never met anyone who wasn't important before.",
        ans1: "Scorpius, 'Farscape'",
        ans1_value: "scorpius",
        ans2: "Simon Tam, 'Firefly'",
        ans2_value: "simon",
        ans3: "The 11th Doctor, 'Doctor Who'",
        ans3_value: "doctor",
        ans4: "Laurel Lance, 'Arrow'",
        ans4_value: "laurel"},

    {questionNumber: 2,
    text: "Yeah, it’s kind of like I’m dating Barry but in    Oliver’s body. A sentence you will never repeat to anyone.",
        ans1: "Clara Oswald, 'Doctor Who'",
        ans1_value: "clara",
        ans2: "Felicity Smoak, 'Arrow'",
        ans2_value: "felicity",
        ans3: "Zoe Washburne, 'Firefly'",
        ans3_value: "zoe",
        ans4: "Aeryn Sun, 'Farscape'",
        ans4_value: "aeryn"},

    {questionNumber: 3,
    text: "Now I know I shall meet my goddess and be accepted to her bosom. Sensitive D'Argo, exuberant Chiana, wise Rygel, selfless Aeryn, innocent Crichton. My children, my teachers, my loves, there is no guilt, there is no blame, only what is meant to be. Grow through your mistakes and know that if patient redemption will find you.",
        ans1: "Zotoh Zhaan, 'Farscape'",
        ans1_value: "zhaan",
        ans2: "Iris West, 'The Flash'",
        ans2_value: "iris",
        ans3: "Rose Tyler, 'Doctor Who'",
        ans3_value: "rose",
        ans4: "Malcolm Merlyn, 'Arrow'",
        ans4_value: "malcolm"},

    {questionNumber: 4,
    text: "Now, think real hard. You've been birddoggin' this township a while now. They wouldn't mind a corpse of you. Now, you can luxuriate in a nice jail cell, but if your hand touches metal, I swear, by my pretty floral bonnet, I will end you.",
        ans1: "Chiana, 'Farscape'",
        ans1_value: "chiana",
        ans2: "Malcolm Reynolds, 'Firefly'",
        ans2_value: "malcolm",
        ans3: "Roy Harper, 'Arrow'",
        ans3_value: "roy",
        ans4: "Caitlin Snow, 'The Flash'",
        ans4_value: "caitlin"},

    {questionNumber: 5,
    text: "You're just the man who kept me fed and in clothes, who sat by my bed every night until I fell asleep because I was afraid of the dark, helped me with my homework. You taught me how to drive, and shave... and you dropped me off to college. Sounds a lot like a dad to me.",
        ans1: "The 9th Doctor, 'Doctor Who'",
        ans1_value: "doctor",
        ans2: "Kaylee Frye, 'Firefly'",
        ans2_value: "kaylee",
        ans3: "Harvey, 'Farscape'",
        ans3_value: "harvey",
        ans4: "Barry Allen, 'The Flash'",
        ans4_value: "barry"},
    
    {questionNumber: 6,
    text: "A radiation wave hit and I got shot through a wormhole. Now I'm lost in some distant part of the universe on a ship, a living ship, full of strange alien life forms. Help me.",
        ans1: "Inara Serra, 'Firefly'",
        ans1_value: "inara",
        ans2: "Harrison Wells, 'The Flash'",
        ans2_value: "harrison",
        ans3: "John Crichton, 'Farscape'",
        ans3_value: "crichton",
        ans4: "Roy Harper, 'Arrow'",
        ans4_value: "roy"},

    {questionNumber: 7,
    text: "For five years I was stranded on an island with only one goal: survive. Now I will fulfill my father's dying wish - to use the list of names he left me and bring down those who are poisoning my city. To do this, I must become someone else. I must become something else.",
        ans1: "Oliver Queen, 'Arrow'",
        ans1_value: "oliver",
        ans2: "Captain Jack Harkness, 'Doctor Who'",
        ans2_value: "harkness",
        ans3: "Jayne Cobb, 'Firefly'",
        ans3_value: "jayne",
        ans4: "Wally West, 'The Flash'",
        ans4_value: "wally"},

    {questionNumber: 8,
    text: "Y'all, I don't do bees, ain't nobody got time for bees!",
        ans1: "Ka D'Argo, 'Farscape'",
        ans1_value: "dargo",
        ans2: "Cisco Ramon, 'The Flash'",
        ans2_value: "cisco",
        ans3: "Adrian Chase, 'Arrow'",
        ans3_value: "adrian",
        ans4: "The Master, 'Doctor Who'",
        ans4_value: "master"},

    {questionNumber: 9,
    text: "Everybody knows that everybody dies, but not every day. Not today. Some days are special. Some days are so, so blessed. Some days, nobody dies at all. Now and then, every once in a very long while, every day in a million days, when the wind stands fair and the Doctor comes to call, everybody lives.",
        ans1: "Shepherd Book, 'Firefly'",
        ans1_value: "book",
        ans2: "Bialar Crais, 'Farscape'",
        ans2_value: "bialar",
        ans3: "River Song, 'Doctor Who'",
        ans3_value: "river",
        ans4: "Joe West, 'The Flash'",
        ans4_value: "joe"},

    {questionNumber: 10,
    text: "I am a leaf on the wind...watch how I soar.",
        ans1: "Amy Pond, 'Doctor Who'",
        ans1_value: "amy",
        ans2: "Slade Wilson, 'Arrow'",
        ans2_value: "slade",
        ans3: "Pilot, 'Farscape'",
        ans3_value: "pilot",
        ans4: "Hoban Washburne, 'Firefly'",
        ans4_value: "hoban"},
]

/* array containing correct answer for each question and values to compare with "value" attribute of selected radio buttong */
const answers = [
    {fullAnswer: "The 11th Doctor, 'Doctor Who'", value:"doctor"},
    {fullAnswer: "Felicity Smoak, 'Arrow'", value:"felicity"},
    {fullAnswer: "Zotoh Zhaan, 'Farscape'", value: "zhaan"},
    {fullAnswer: "Malcolm Reynolds, 'Firefly'", value: "malcolm"},
    {fullAnswer: "Barry Allen, 'The Flash'", value: "barry"},
    {fullAnswer: "John Crichton, 'Farscape'", value: "crichton",},
    {fullAnswer: "Oliver Queen, 'Arrow'", value: "oliver",},
    {fullAnswer: "Cisco Ramon, 'The Flash'", value: "cisco",},
    {fullAnswer: "River Song, 'Doctor Who'", value: "river",},
    {fullAnswer: "Hoban Washburne, 'Firefly'", value: "hoban"}
]

// images to be displayed for question feedback
const images = ["http://www.jbsuits.com/product_images/e/368/Matt_Smith_Eleventh_Doctor_Jacket__85044_zoom.JPG","https://vignette.wikia.nocookie.net/arrow/images/0/00/Arrow_season_4_promo_-_Felicity_Smoak.png/revision/latest?cb=20160224042816",
"https://vignette.wikia.nocookie.net/moviemorgue/images/e/e6/Zhaan_portrait.jpg/revision/latest?cb=20170419190817",
"https://vignette.wikia.nocookie.net/firefly/images/3/39/Mal.jpg/revision/latest?cb=20080301061839","http://www.essential.tv/images/uploads/characters/160214165106_275946435.jpeg",
"http://images4.fanpop.com/image/photos/21100000/John-Crichton-farscape-21175094-351-500.jpg",
"https://wallpaperstock.net/wallpapers/thumbs1/35231wide.jpg","https://vignette.wikia.nocookie.net/arrow-fanon/images/d/d9/640px-Cisco_Ramon-1-.png/revision/latest?cb=20171130114154",
"https://lgbtfansdeservebetter.com/static/uploads/2016/09/River-Song-Alex-Kingston.png",
"https://vignette.wikia.nocookie.net/firefly/images/f/fa/Wash.jpg/revision/latest?cb=20080301062346"
]

let currentQuestion = 0;
let currentScore = 0;

function getCurrentQuestion(questionArray) {
    const current = questionArray[currentQuestion];
    return current;
}

function createQuestion(questionObject) {
    // create template for questions, including form element
    return `
    <h2><p>Question ${questionObject.questionNumber}/10:</p> "${questionObject.text}"</h2>
    <div class="question-score col-6">
    <form action="/submit/" method="post" class="quiz-form">
    <label>
      <input type="radio" name="answer" value=${questionObject.ans1_value}>${questionObject.ans1}
    </label><br/>
    <label>
      <input type="radio" name="answer" value=${questionObject.ans2_value}>${questionObject.ans2}
    </label><br/>
    <label>
      <input type="radio" name="answer" value=${questionObject.ans3_value}>${questionObject.ans3}
    </label><br/>
    <label>
      <input type="radio" name="answer" value=${questionObject.ans4}>${questionObject.ans4}
    </label><br/>
    <button type="submit" class="js-submit-answer">Submit Answer</button>
    </form>
    <h3><p class="score-p">Current Score: <span class="score-span">${currentScore}</span>/${questionObject.questionNumber}</p></h3>
    </div>`
}

function startQuiz() {
    //starts quiz when start button pressed
    $(".js-start-quiz").click(function(event) {
        event.preventDefault();
        $(".quiz-body").text("");
        const currentObject = getCurrentQuestion(questions);
        const questionText = createQuestion(currentObject);
        $(".quiz-body").html(questionText);
    })
}

function getCurrentAnswer(answerArray) {
    const current = answerArray[currentQuestion];
    return current;
}

function createImage(imageArray) {
    const imageSrc = imageArray[currentQuestion];
    let img = $(`<img>`);
    img.attr("src", imageSrc);
    img.attr("alt", answers[currentQuestion].fullAnswer);
    $(".quiz-body").append(`<div class="col-4 feedback-div"></div>`);
    $(".feedback-div").html(img);
}

function increaseScore() {
    return currentScore++;
}

function increaseQuestion() {
    return currentQuestion++;
}

function createAnswer(answer) {
    /* create appropriate feedback text depending on whether or not selected answer is correct */
    const submittedAnswer = $("input[name=answer]:checked").val().toLowerCase();
    if(answer.value ===  submittedAnswer) {
        increaseScore();
        console.log(`current score: ${currentScore}`);
        $(".score-span").text(`${currentScore}`);
        return `<p class="full-correct">Correct! The answer was <span class="correct-answer">${answer.fullAnswer}</span></p>`
    } else {
        return `<p class="full-correct">Sorry, the correct answer was <span class="correction">${answer.fullAnswer}</span></p>`
    }
}

function submitAnswer() {
    //returns feedback when user submits answer
    $(".quiz-body").on("click", ".js-submit-answer", function (event) {
        event.preventDefault();
        if ($("input[type=radio]:checked").length > 0) {
            this.remove();
            if (currentQuestion < 9) {
            $("form").append(`<button type="button" class="next-question">Next Question</button>`)
            } else if (currentQuestion === 9) {
                $("form").append(`<button type="submit" class="next-question">Finish Quiz</button>`)
            }
            const correctAnswer = getCurrentAnswer(answers);
            const answerText = createAnswer(correctAnswer);
            createImage(images);
            $(".feedback-div img").before(answerText);
            $("input[type=radio]").attr('disabled', true); 
        } else {
            $(".quiz-form").before(`<span class="choose-answer">Please select an answer.</span>`);
        }
    })
}

function nextQuestion() {
    //moves to next question after user gets feedback
    $(".quiz-body").on("click", ".next-question", function (event) {
        event.preventDefault();
        if (currentQuestion < 9) {
            increaseQuestion();
            $(".quiz-body").text("");
            const currentObject = getCurrentQuestion(questions);
            const questionText = createQuestion(currentObject);
            $(".quiz-body").html(questionText)
        } else {
            $(".quiz-body").text("");
            const finalText = finalPage();
            $(".quiz-body").append(finalText);
        }
    })
}

function resetCurrentQuestion() {
    currentQuestion = 0;
}

function resetCurrentScore() {
    currentScore = 0;
}

function finalPage() {
    return `
        <h2>Your final score: ${currentScore}/10</h2>
        <h3>"Everything ends, and it's always sad. But everything begins again too, and that's always happy. Be happy."</h3>
        <h4>--The 12th Doctor, 'Doctor Who'<h4>
        <button type="submit" class="js-restart-quiz">Restart Quiz</button>`
}

function restartQuiz() {
    //restarts quiz
    $(".quiz-body").on("click", ".js-restart-quiz", function(event) {
        event.preventDefault();
        $(".quiz-body").text(""),
        resetCurrentQuestion();
        resetCurrentScore();
        const currentObject = getCurrentQuestion(questions);
        const questionText = createQuestion(currentObject);
        $(".quiz-body").html(questionText);
    })
}

function handleQuiz() {
    startQuiz();
    submitAnswer();
    nextQuestion();
    restartQuiz();
}

$(handleQuiz);
