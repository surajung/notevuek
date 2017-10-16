import Firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyABUkV6XLBovIPwZMSdv0bgkAhZlrKyUPA",
    authDomain: "notevuek-afea6.firebaseapp.com",
    databaseURL: "https://notevuek-afea6.firebaseio.com",
    projectId: "notevuek-afea6",
    storageBucket: "",
    messagingSenderId: "77292461458"
  };
  const app = Firebase.initializeApp(config);
  const db = app.database()
  const notesRef = db.ref('notes')

  export default { app, db, notesRef }