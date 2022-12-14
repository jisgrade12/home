(function newFact() {
  var facts = [
    "Mental Health is an important matter to discuss",
    "Mental health awareness protects us from consequences",
    "Better safe than sorry",
    "Mental health is very important",
    "Spread Positivity",
    "Spread Kindness",
    "Help others",
    "Be kind",
    "Be meaningful",
    "Advice other to good",
    "Bring your colleagues up",
    "Don't take mental health as a joke",
  ];
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById("factDisplay").innerHTML = facts[randomFact];
})();

Window.onload = (function loaderflow() {
  const loader = document.getElementById("loader1");
  const page = document.getElementById("body1");
  if (loader.style.display === "flex") {
    page.style.overflow = "hidden";
  } else {
    page.style.overflow = "auto";
  }
})();
