import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB1QFWbSXU1-AYz25uEZCQT1_fgvq4a2s0",
    authDomain: "catch-of-the-day-6c0f8.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-6c0f8.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;