import Rebase from "re-base";
import firebase from "firebase";

/**
 *projectId: "webdb-9ace1",
  storageBucket: "webdb-9ace1.appspot.com",
  messagingSenderId: "631377575931"
 * 
 */

// const config = {
//   apiKey: "AIzaSyA-osWQdNdsGIN-HWqWYuiDHZMf7jENr4c",
//   authDomain: "webdb-9ace1.firebaseapp.com",
//   databaseURL: "https://webdb-9ace1.firebaseio.com",
//   projectId: "webdb-9ace1",
//   storageBucket: "webdb-9ace1.appspot.com",
//   messagingSenderId: "631377575931"
// };

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: ""
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
