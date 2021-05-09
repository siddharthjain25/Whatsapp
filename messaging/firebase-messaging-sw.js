// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAOnd6lQ57l6ao1EzIotKX-25QQgcH6GrQ",
    authDomain: "whatsapp-4b28f.firebaseapp.com",
    databaseURL: "https://whatsapp-4b28f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "whatsapp-4b28f",
    storageBucket: "whatsapp-4b28f.appspot.com",
    messagingSenderId: "69659230475",
    appId: "1:69659230475:web:2a51d855b58d933724220e",
    measurementId: "G-1NTHWJJ5MD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



