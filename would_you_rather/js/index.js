var set1 = [
    "live one life that lasts 1,000 years or live 10 lives that last 100 years each?",
    "use eye drops made of vinegar or toilet paper made from sandpaper?",
    "be without elbows or be without knees?",
    "experience a sharp pain in your side each time someone says your name or have a bell sound each time you are aroused?",
    "have a large 10 inch long belly button that swayed to music or have accordions for legs?",
    "have to sneeze but not be able to or have something stuck in your eye for an entire year?",
    "have a dragon or be a dragon?",
    "secretly have sex with a goat or have everyone think you had sex with a goat even though you didn’t?"
];

var set2 = [
  "Test",
  "tedtfdsksjdkjgs",
  "dfskjdfkjdsfjsdkfjsk"
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

$("#question-output").text("Choose a set of Questions to begin...");
