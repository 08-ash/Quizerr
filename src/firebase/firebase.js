import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyBxx3tBR7mEfiF1GTh_Bl3Uc2cGeRhdxmg",
	authDomain: "quizdom-27a97.firebaseapp.com",
	databaseURL: "https://quizdom-27a97-default-rtdb.firebaseio.com",
	projectId: "quizdom-27a97",
	storageBucket: "quizdom-27a97.appspot.com",
	messagingSenderId: "427961111330",
	appId: "1:427961111330:web:c729ec074db8ea77c74b7b",
	measurementId: "G-9JT71M3YP3"
  };
  
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()

export default firebase;