"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const express = require("express");
const firebase = require("firebase");
const server = express();
const config = {
    apiKey: "",
    authDomain: "iotproject-eit.firebaseapp.com",
    databaseURL: "https://iotproject-eit.firebaseio.com",
    projectId: "iotproject-eit",
    storageBucket: "iotproject-eit.appspot.com",
    messagingSenderId: "192509429154"
};
firebase.initializeApp(config);
const db = firebase.database();
server.get('/app', (req, res) => {
    res.send("hello app");
});
server.get('/db', (req, res) => {
    // res.send("hello db")
    db.ref('/user2').set({
        username: "Ania",
        surname: "Aniowska",
        metadata: {
            mail: ['i@', "j@", "sadadad"],
            other: "super"
        }
    });
});
server.get('/db-read', (req, res) => {
    db.ref('/user').on('value', snap => {
        console.log(snap.child('/metadata').val());
    });
    // db.ref().once('value').then(snap => snap.val()) //prościej
});
server.get('/app-update', (req, res) => {
    var newPostKey = db.ref().child('user').push().key;
    db.ref().update({
        [`/user/${newPostKey}`]: {
            newData: '1231343243241'
        }
    });
});
exports.app = functions.https.onRequest(server);
;
//# sourceMappingURL=index.js.map