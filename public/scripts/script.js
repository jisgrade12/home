import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { analytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
const firebaseConfig = {
	apiKey: "AIzaSyC0xyTcV8cLK_ducPzzXJOCDXwtcuU8qOI",
	authDomain: "jis-grade12.firebaseapp.com",
	databaseURL:
		"https://jis-grade12-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "jis-grade12",
	storageBucket: "jis-grade12.appspot.com",
	messagingSenderId: "189452419298",
	appId: "1:189452419298:web:0ac371b7484ea023865ebb",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.database();
const username = prompt("Please Tell Us Your Name");
document.getElementById("message-form").addEventListener("submit", sendMessage);
function sendMessage(e) {
	e.preventDefault();
	const timestamp = Date.now();
	const messageInput = document.getElementById("message-input");
	const message = messageInput.value;
	messageInput.value = "";
	document.getElementById("messages").scrollIntoView({
		behavior: "smooth",
		block: "end",
		inline: "nearest",
	});
	db.ref("messages/" + timestamp).set({
		username,
		message,
	});
}
const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
	const messages = snapshot.val();
	const message = `<li class=${
		username === messages.username ? "sent" : "receive"
	}><span>${messages.username}: </span>${messages.message}</li>`;
	document.getElementById("messages").innerHTML += message;
});
