import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC56tPD2YDX17dy6aEfd-osWV2sVBiccqI",
  authDomain: "vuedb-11076.firebaseapp.com",
  databaseURL: "https://vuedb-11076.firebaseio.com",
  projectId: "vuedb-11076",
  storageBucket: "vuedb-11076.appspot.com",
  messagingSenderId: "1006643028163"
};

let app = firebase.initializeApp(config)
export const db = app.database()