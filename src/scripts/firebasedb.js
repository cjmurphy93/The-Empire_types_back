import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyCwgZPZIAN-oBIcYnxU8cdoB07zheYEkek",
    authDomain: "the-empire-types-back.firebaseapp.com",
    projectId: "the-empire-types-back",
});

        // var firebaseConfig = {
        //     apiKey: "AIzaSyCwgZPZIAN-oBIcYnxU8cdoB07zheYEkek",
        //     authDomain: "the-empire-types-back.firebaseapp.com",
        //     databaseURL: "https://the-empire-types-back.firebaseio.com",
        //     projectId: "the-empire-types-back",
        //     storageBucket: "the-empire-types-back.appspot.com",
        //     messagingSenderId: "1000485639768",
        //     appId: "1:1000485639768:web:bb350ae944aba60c0cdc2d",
        // };
        // // Initialize Firebase
        // firebase.initializeApp(firebaseConfig);

        
export function signIn() {
    firebase.auth().signInAnonymously();            
}


        
var db = firebase.firestore();

const fetchedScores = db.collection('hiscores').orderBy('score', 'desc').limit(10).get();

var scores = [];
export function getScores(){
    fetchedScores.then(snapshot => {
        snapshot.docs.forEach( entry => {
            scores.push( entry.data().score)
        })
    })
    return fetchedScores;
};

export function checkScore(score){

    let outcome = false;
    scores.forEach(hiscore => {
        if (score> hiscore) outcome = true
    })

    return outcome
}


export function addScore(name, score){
   return db.collection('hiscores').add({
        name: name,
        score: score
    })
    .then( () => true)
    .catch( () => false )
}

export function signOut() {
    firebase.auth().signOut().then( () => {
        db.collection('hiscores').add({
        name: OUT,
        score: 0
    })
    .then( () => true)
    .catch( () => false );
    }
);
}