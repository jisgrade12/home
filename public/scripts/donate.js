const donatebtn = document.getElementById("donate-button");
donatebtn.onclick = function () {
  donatepage();
};
const dpage = document.getElementById("donation-page");
const body = document.getElementById("body");
function donatepage() {
  dpage.style.filter = "opacity(1)";
  dpage.style.zIndex = "10000";
  dpage.style.transform = "scale(1)";
  body.style.overflow = "hidden";
}
function donateclose() {
  dpage.style.filter = "opacity(0)";
  dpage.style.zIndex = "-10000";
  dpage.style.transform = "scale(0)";
  body.style.overflow = "auto";
}
const cbut = document.getElementById("cash-button");
const cashd = document.getElementById("donate-cash");
cbut.onclick = function () {
  cashopen();
};
function cashopen() {
  cashd.style.filter = "opacity(1)";
  cashd.style.zIndex = "10000";
}
function cashclose() {
  cashd.style.filter = "opacity(0)";
  cashd.style.zIndex = "-10000";
}
const sbut = document.getElementById("stc-button");
const stcd = document.getElementById("donate-stc");
sbut.onclick = function () {
  stcopen();
};
function stcopen() {
  stcd.style.filter = "opacity(1)";
  stcd.style.zIndex = "10000";
}
function stcclose() {
  stcd.style.filter = "opacity(0)";
  stcd.style.zIndex = "-10000";
}
const crbut = document.getElementById("crypto-button");
const cryptod = document.getElementById("donate-crypto");
crbut.onclick = function () {
  cryptoopen();
};
function cryptoopen() {
  cryptod.style.filter = "opacity(1)";
  cryptod.style.zIndex = "10000";
}
function cryptoclose() {
  cryptod.style.filter = "opacity(0)";
  cryptod.style.zIndex = "-10000";
}
const crebut = document.getElementById("credit-button");
const creditd = document.getElementById("donate-credit");
crebut.onclick = function () {
  creditopen();
};
function creditopen() {
  creditd.style.filter = "opacity(1)";
  creditd.style.zIndex = "10000";
}
function creditclose() {
  creditd.style.filter = "opacity(0)";
  creditd.style.zIndex = "-10000";
}
const pbut = document.getElementById("paypal-button");
const payd = document.getElementById("donate-paypal");
pbut.onclick = function () {
  paypalopen();
};

function paypalopen() {
  payd.style.filter = "opacity(1)";
  payd.style.zIndex = "10000";
}
function paypalclose() {
  payd.style.filter = "opacity(0)";
  payd.style.zIndex = "-10000";
}
