import * as express from "express";
import { samples } from "./mock/mock-data";
import * as bodyParser from 'body-parser';
import { MongoCollection } from './mongo';
import * as bcrypt from 'bcrypt';

const server = express();

const url = 'mongodb://admin:Iot-Eit-Siu-2018@ds139193.mlab.com:39193/iot-project';
const db = {
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
        const device = await db.devices.findElement({ "deviceId": req.headers.deviceid })
        if (device[0]) {
            bcrypt.compare(req.headers.authkey, device[0].authKey, async (err, result) => {
                if (result) {
                    const data = req.body
                    await db.samples.insertElements(data)
                    res.json(data);
                }
                else {
                    res.status(403).send("Forbidden");
                }
            })
        }
        else {
            res.status(403).send("Forbidden");
        }
    })
    .get(async (req: express.Request, res: express.Response) => {
        const { date, deviceid } = req.query;
        const search = {};
        if (deviceid) search["deviceId"] = deviceid;
        if (date) search["date"] = { $gt: date };

        const result = await db.samples.findElement(search);
        res.json(result)
    });

server.route("/db")
    .get(async (req: express.Request, res: express.Response) => {
        const authKey = await db.devices.findElement({ "deviceId": "none" })
        bcrypt.compare(req.headers.authkey, authKey[0].authKey, async (err, result) => {
            if (result) {
                await db.samples.insertElements(samples)
                res.json(samples)
            }
            else {
                res.status(403).send("Forbidden");
            }
        })
    })
    .delete(async (req: express.Request, res: express.Response) => {
        const authKey = await db.devices.findElement({ "deviceId": "none" })
        bcrypt.compare(req.headers.authkey, authKey[0].authKey, async (err, result) => {
            if (result) {
                const samplesArray = await db.samples.findElement();
                await db.backup.insertElements(samplesArray);
                db.samples.drop();
                res.status(200).send("DONE")
            }
            else {
                res.status(403).send("Forbidden");
            }
        })
    })

server.route("/metadata")
    .get(async (req: express.Request, res: express.Response) => {
        res.json({ "meta": "todo" })
    })

server.listen(process.env.PORT || 8080)