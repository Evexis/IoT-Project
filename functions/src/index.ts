import * as functions from 'firebase-functions';
import * as express from "express";
import * as firebase from "firebase";
import { samples } from "./mock/mock-data";

const server = express();

const config = {
    apiKey: "",
    authDomain: "iotproject-eit.firebaseapp.com",
    databaseURL: "https://iotproject-eit.firebaseio.com",
    projectId: "iotproject-eit",
    storageBucket: "iotproject-eit.appspot.com",
    messagingSenderId: "192509429154"
}
firebase.initializeApp(config);

const db = firebase.database();


server.get('/app', (req: express.Request, res: express.Response) => {
    res.send("hello app")
});


server.get("/generate-mock", (req: express.Request, res: express.Response) => {
    db.ref("/samples").set(samples);
  });
  
server.post("/samples", (req: express.Request, res: express.Response) => {
    try {
        const result = db.ref("/samples").push(req.body);
        res.json(result.key);
    } catch (err) {
        res.send(err);
    }
});

server.get('/db-read', (req: express.Request, res: express.Response) => {
    db.ref('/user').on('value', snap => {
        console.log(snap.child('/metadata').val())
    })
    // db.ref().once('value').then(snap => snap.val()) //prościej
});


server.get('/samples', async (req: express.Request, res: express.Response) => {
    // res.send(req.query.date.split(','))
    const result = await db.ref('/samples').once('value');
    res.send(result.val());
})


server.get('/app-update', (req: express.Request, res: express.Response) => {
    var newPostKey = db.ref().child('user').push().key;
    db.ref().update({
        [`/user/${newPostKey}`]: {
            newData: '1231343243241'
        }
    })
});

export const app = functions.https.onRequest(server);



interface Data extends MeasuredValue {
    id: string;
    date: Date;
    result: {
        pm1: MeasuredValue;
        pm25: MeasuredValue;
        pm10: MeasuredValue;
        formaldehyde: MeasuredValue;
        temperature: MeasuredValue;
        humidity: MeasuredValue;
    }
}

interface MeasuredValue {
    value: number;
    unit: number;
};