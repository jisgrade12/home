const donatebtn = document.getElementById("donate-button");
donatebtn.onclick = function () {
  donatepage();
};
const dpage = document.getElementById("donation-page");
function donatepage() {
  if (dpage.style.opacity === "0") {
    dpage.style.opacity = "1";
    dpage.style.display = "grid";
  } else {
    dpage.style.opacity = "0";
    dpage.style.display = "none";
  }
}
