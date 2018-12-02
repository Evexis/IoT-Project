import * as express from "express";
import { samples } from "./mock/mock-data";
import * as bodyParser from 'body-parser';
import { MongoCollection } from './mongo';

const server = express();

const url = 'mongodb://admin:Iot-Eit-Siu-2018@ds139193.mlab.com:39193/iot-project';
const db ={
    samples: new MongoCollection(url, 'Samples'),
    devices: new MongoCollection(url, 'Devices'),
    backup: new MongoCollection(url, 'Backup')
} 

server.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, DELETE, PATCH");
    next();
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.route('/api/data')
    .post(async (req: express.Request, res: express.Response) => {
        const device = await db.devices.findElement({"deviceId": req.headers.id})
        if(device[0]) {
            const data = req.body
            await db.samples.insertElements(data)
            res.json(data);
        }
        else{
            res.status(403).send("Forbidden");
        }
    })
    .get(async (req: express.Request, res: express.Response) => {
        const {date, deviceId} = req.query;
        const search = {};
        if(deviceId) search["deviceId"] = deviceId;
        if(date) search["date"] = {$gt: date};
        const result = await db.samples.findElement(search);
        res.json(result)
    });

server.route("/db")
    .get(async (req: express.Request, res: express.Response) => {
        const authKey = await db.devices.findElement({"authKey": req.headers.authkey, "deviceId": "none"})
        if(authKey[0]) {
            await db.samples.insertElements(samples)
            res.json(samples)
        }
        else {
            res.status(403).send("Forbidden");
        }
    })
    .delete(async (req: express.Request, res: express.Response) => {
        const authKey = await db.devices.findElement({"authKey": req.headers.authkey, "deviceId": "none"})
        if(authKey[0]) {
            const samplesArray = await db.samples.findElement();
            await db.backup.insertElements(samplesArray);
            db.samples.drop();
            res.status(200).send("DONE")
        }
        else {
            res.status(403).send("Forbidden");
        }
    })

    server.route("/metadata")
        .get(async (req: express.Request, res: express.Response) => {
            res.json({"meta": "todo"})
        })


server.listen(process.env.PORT || 8080)
