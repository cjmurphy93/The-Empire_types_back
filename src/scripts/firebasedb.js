import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCwgZPZIAN-oBIcYnxU8cdoB07zheYEkek",
    authDomain: "the-empire-types-back.firebaseapp.com",
    projectId: "the-empire-types-back",
});

var db = firebase.firestore();



export function getScores(){
    return db.collection(hiscores).orderBy('score', 'desc').limit(10).get()
}

export function addScore(name, score){
    db.collection(hiscores).add({
        name: name,
        score: score
    })
    .then( () => true)
    .catch( () => false )
}