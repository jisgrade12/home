importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js"
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js"
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  messagingSenderId: "189452419298",
  apiKey: "AIzaSyC0xyTcV8cLK_ducPzzXJOCDXwtcuU8qOI",
  projectId: "jis-grade12",
  appId: "1:189452419298:web:0ac371b7484ea023865ebb",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "https://jis-grade12.web.app/images/12_l.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
