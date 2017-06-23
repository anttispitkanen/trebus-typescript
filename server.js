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
require("dotenv/config");
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
app.listen(app.get('port'), () => {
    console.log('listening on ' + app.get('port'));
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// TESTING
app.get('/test', (req, res) => {
    console.log('gotted :D');
    res.send({
        "vastaus": "jeejee"
    });
});
app.post('/route', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const startCoords = req.body.startCoords;
    const destCoords = req.body.coords;
    let queryUrl = 'http://api.publictransport.tampere.fi/prod/?request=route&'
        + process.env.API_KEY + '&'
        + process.env.API_PASS + '&'
        + 'from=' + startCoords + '&'
        + 'to=' + destCoords + '&'
        + 'show=1&Detail=limited&epsg_in=wgs84';
    try {
        const response = yield axios.get(queryUrl); // type of response?
        res.send(response.data);
    }
    catch (e) {
        console.error(e);
    }
}));
app.post('/get-address', (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log('/get-address registered');
    console.log(req.body);
    try {
        const latitude = req.body.latitude;
        const longitude = req.body.longitude;
        const coords = longitude + ',' + latitude;
        const url = `http://api.publictransport.tampere.fi/prod/?`
            + process.env.API_KEY + '&'
            + process.env.API_PASS + '&'
            + `request=reverse_geocode&`
            + `coordinate=${coords}&`
            + `limit=1&epsg_in=wgs84&format=json`;
        const response = yield axios.get(url);
        console.log(response.data);
        res.send(response.data);
    }
    catch (e) {
        console.error(e);
    }
}));
//# sourceMappingURL=server.js.map