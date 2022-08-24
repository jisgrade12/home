// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC0xyTcV8cLK_ducPzzXJOCDXwtcuU8qOI",
	authDomain: "jis-grade12.firebaseapp.com",
	databaseURL:
		"https://jis-grade12-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "jis-grade12",
	storageBucket: "jis-grade12.appspot.com",
	messagingSenderId: "189452419298",
	appId: "1:189452419298:web:5dd56b80be401c58865ebb",
	measurementId: "G-06NMN6Y708",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
