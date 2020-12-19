import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCwgZPZIAN-oBIcYnxU8cdoB07zheYEkek",
  authDomain: "the-empire-types-back.firebaseapp.com",
  projectId: "the-empire-types-back",
});

export function signIn() {
  firebase.auth().signInAnonymously();
}

var db = firebase.firestore();

var scores = [];

export function getScores() {
  scores = [];
  var user = firebase.auth().currentUser;
  if (!user) signIn();
  const fetchedScores = db
    .collection("hiscores")
    .orderBy("score", "desc")
    .limit(10)
    .get();
  fetchedScores.then((snapshot) => {
    snapshot.docs.forEach((entry) => {
      scores.push(entry.data().score);
    });
  });
  return fetchedScores;
}

export function checkScore(score) {
  let outcome = false;
  scores.forEach((hiscore) => {
    if (score > hiscore) outcome = true;
  });

  return outcome;
}

export function addScore(name, score) {
  var d = new Date();
  var n = d.toDateString();
  return db
    .collection("hiscores")
    .add({
      name: name,
      score: score,
      date: n,
    })
    .then(() => true)
    .catch(() => false);
}

export function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      db.collection("hiscores")
        .add({
          name: OUT,
          score: 0,
        })
        .then(() => true)
        .catch(() => false);
    });
}
