"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const express = require("express");
const firebase = require("firebase");
const mock_data_1 = require("./mock/mock-data");
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
    db.ref('/samples').set(mock_data_1.samples);
});
server.get('/db-read', (req, res) => {
    db.ref('/user').on('value', snap => {
        console.log(snap.child('/metadata').val());
    });
    // db.ref().once('value').then(snap => snap.val()) //prościej
});
server.get('/samples', (req, res) => __awaiter(this, void 0, void 0, function* () {
    // res.send(req.query.date.split(','))
    const result = yield db.ref('/samples').once('value');
    res.send(result.val());
}));
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