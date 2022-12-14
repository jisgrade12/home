(function newFact() {
  var facts = [
    "Mental Health is an important matter to discuss.",
    "Mental health awareness protects us from consequences.",
    "Better safe than sorry.",
    "Mental health is very important.",
  ];
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById("factDisplay").innerHTML = facts[randomFact];
})();
