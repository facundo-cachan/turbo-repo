// @ts-nocheck

importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js")

const firebaseConfig = {
	apiKey: "AIzaSyD9GYVnMPGHmfhXW9f_VpITVwhbwVwlGSM",
	authDomain: "push-notifications-fc.firebaseapp.com",
	databaseURL: "https://push-notifications-fc-default-rtdb.firebaseio.com",
	projectId: "push-notifications-fc",
	storageBucket: "push-notifications-fc.appspot.com",
	messagingSenderId: "193139985154",
	appId: "1:193139985154:web:820dc605a3234dbe5f901b",
	measurementId: "G-MDY1J48GSH"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(({ notification: { body, title } }) => {
	console.log("Recibiste mensaje mientras estabas ausente");

	const notificationTitle = title;
	const notificationOptions = {
		body,
		icon: "/logo.png"
	};

	return self.registration.showNotification(
		notificationTitle,
		notificationOptions
	)
})
