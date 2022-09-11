var ui = new firebaseui.auth.AuthUI(firebase.auth());
import { GoogleAuthProvider } from "firebase/auth";
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = "it";
provider.setCustomParameters({
	login_hint: "user@example.com",
});
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
	.then((result) => {
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		// The signed-in user info.
		const user = result.user;
		// ...
	})
	.catch((error) => {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.customData.email;
		// The AuthCredential type that was used.
		const credential = GoogleAuthProvider.credentialFromError(error);
		// ...
	});

const provider = new GoogleAuthProvider();
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/app";
const firebaseConfig = {
	apiKey: "AIzaSyC0xyTcV8cLK_ducPzzXJOCDXwtcuU8qOI",
	authDomain: "jis-grade12.firebaseapp.com",
	databaseURL:
		"https://jis-grade12-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "jis-grade12",
	storageBucket: "jis-grade12.appspot.com",
	messagingSenderId: "189452419298",
	appId: "1:189452419298:web:0ac371b7484ea023865ebb",
	measurementId: "G-349L78RWFM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login-btn").addEventListener("click", function () {
	const loginEmail = document.getElementById("login-email").value;
	const loginPassword = document.getElementById("login-password").value;

	signInWithEmailAndPassword(auth, loginEmail, loginPassword)
		.then((userCredential) => {
			const user = userCredential.user;
			document.getElementById("result-box").style.display = "block";
			document.getElementById("result").innerHTML =
				"Welcome Back<br>" + loginEmail + " was Login Successfully";
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			document.getElementById("result-box").style.display = "block";
			document.getElementById("result").innerHTML =
				"Sorry ! <br>" + errorMessage;
		});
});

document.getElementById("register-btn").addEventListener("click", function () {
	const registerEmail = document.getElementById("register-email").value;
	const registerPassword = document.getElementById("register-password").value;

	createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
		.then((userCredential) => {
			const user = userCredential.user;
			document.getElementById("result-box").style.display = "block";
			document.getElementById("result").innerHTML =
				"Welcome <br>" + registerEmail + " was Registered Successfully";
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			document.getElementById("result-box").style.display = "block";
			document.getElementById("result").innerHTML =
				"Sorry ! <br>" + errorMessage;
		});
});

document.getElementById("log-out-btn").addEventListener("click", function () {
	signOut(auth)
		.then(() => {
			document.getElementById("result").innerHTML =
				registerEmail + "successfully Logged Out!";
		})
		.catch((error) => {
			document.getElementById("result").innerHTML =
				"Sorry ! <br>" + errorMessage;
		});
});
