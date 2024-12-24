
let classifier;
let words = [
  "yes",
  "no",
];
let predictedWord = "";

function preload() {
  let options = { probabilityThreshold: 0.7 };
  classifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(650, 450);
  classifier.classifyStart(gotResult);
}

function draw() {
  background(250);
  displayWords();
  if (predictedWord !== "") {
    fill(211, 107, 255);
    textAlign(CENTER, CENTER);
    textSize(64);
    text(predictedWord, width / 2, 90);
  }
}


function displayWords() {
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(96);
  text("Say one of these words!", width / 2, 40);

  let x = width / 2;
  let y = 150;
  for (let i = 0; i < words.length; i++) {
    fill(158);
    text(words[i], x, y);
    y += 50;
  }
}


function gotResult(results) {
  console.log(results);
  let word = results[0].label;
  if (word === "yes" || word === "no") {
    predictedWord = word;
  } else {
    predictedWord = "";
  }
}
