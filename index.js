var readlineSync = require("readline-sync");
var chalk = require("chalk");
var name = readlineSync.question("Enter your name: ");

var questions = [
  {
    q: "Where is my hometown in? ",
    a: "bihar"
  },

  {
    q: "What's my favourite color? ",
    a: "orange"
  },

  {
    q: "What street food do I love the most? ",
    a: "pani-puri"
  },

  {
    q: "Where do I live now? ",
    a: "pune"
  },

  {
    q: "Which game do I play most? ",
    a: "badminton"
  },
];

var highest_score = [
  { name: "Minku", score: 4 },
  { name: "Anjali", score: 2 }
]
var score = 0;

function welcome() {
  console.log(chalk.bgMagenta.bold("Hey " + name + "! Welcome to 'How well do you know Minku'!!\n"));

  console.log("Enter " + chalk.red("QUIT") + " if you want to quit the game!");
}

function endShow() {
  console.log("\n=============================\n");
  console.log("Thanks for playing!!")
  console.log(chalk.bgGreen.bold("YOUR SCORE: " + score));
  console.log("Check out the highest scores, if you have scored more than them, ping me, I'll update it: ");
  for (var i = 0; i < highest_score.length; i++) {
    console.log(highest_score[i].name + " : " + highest_score[i].score);
  }
  if (score > highest_score[0].score || score > highest_score[1].score) {
    console.log(chalk.bgMagenta.bold("Congrats, You are one of the highest scorers!!"))
  }
  console.log("=============================\n");
  return;
}

function quit() {
  endShow();
}

function showScore() {
  console.log(chalk.green("CURRENT SCORE: " + score));
  console.log("-----------------------\n");
}

function play(answer, user_ans) {

  user_ans = user_ans.toLocaleLowerCase();

  if (user_ans === answer) {
    console.log("🎉 That's the right ans!");
    score++;
  } else {
    console.log("❌ No, " + answer + " is the right option.");
    score--;
  }

  showScore();
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var user_ans = readlineSync.question((i + 1) + ") " + questions[i].q + "\n");
    if (user_ans === "quit") {
      quit();
      return;
    }
    play(questions[i].a, user_ans);
  }

  endShow();
}

welcome();
game();


