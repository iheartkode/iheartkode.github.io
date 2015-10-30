var set1 = [
    "live one life that lasts 1,000 years or live 10 lives that last 100 years each?",
    "use eye drops made of vinegar or toilet paper made from sandpaper?",
    "be without elbows or be without knees?",
    "experience a sharp pain in your side each time someone says your name or have a bell sound each time you are aroused?",
    "have a large 10 inch long belly button that swayed to music or have accordions for legs?",
    "have to sneeze but not be able to or have something stuck in your eye for an entire year?",
    "have a dragon or be a dragon?",
    "have hair nowhere on your body or be very hairy all over and not be able to shave?",
    "never be able to speak again or always have to say everything that is on your mind?",
    "be able to read or be able to read minds (but be illiterate)?",
    "be able to speak fluently every language in the world or be the best in the world at something of your choosing?",
    "be in prison for five years in solitary confinement or not ever go to prison and not ever become rich?",
    "wear a snow suit in the desert or be naked in Antarctica?",
    "change the past or be able to see into the future?",
];

var set2 = [
  "mail an embarrassing email to your entire company or eat an entire stick of butter?",
  "never laugh again or never use your smartphone again?",
  "lose $1000 or lose all of your phone contacts?",
  "be stung by a jellyfish or give up Facebook for a week?",
  "eat the same meal for the rest of your life or never use Instagram again?",
  "give up alcohol for a year or give up your smartphone for a month?",
  "never have coffee again or live without TV forever?",
  "feel like you were hung over for a week or not use email for a week?",
  "win a trip to Hawaii or win a free laptop?",
  "give up shopping for six months or give up emoji for six months?"
];


// set two code
var set2Pos = 0;

$("#setTwo").on("click", function() {
  if (set2Pos < set2.length) {
    $("#question-output").text(set2[set2Pos]);
    set2Pos++;
  }else{
    alert("You Completed Set Two!");
  }
});


// set one code
var set1Pos = 0;

$("#setOne").on("click", function() {
  if (set1Pos < set1.length) {
      $("#question-output").text(set1[set1Pos]);
      set1Pos++;
  }else{
    alert("You Completed Set One!")
  }
 });

 $("#settings").on("click", function() {
     window.location.href = "index.html";
})

// set three code
$("#setThree").on("click",function() {
  $("#question-output").text("Set Three is coming soon...");
})

//set four code
$("#setFour").on("click",function() {
  $("#question-output").text("Set four is coming soon...");
})

$("#question-output").text("Choose a set of Questions to begin...");


