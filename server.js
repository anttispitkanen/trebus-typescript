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
const { URL, URLSearchParams } = require('url');
const app = express();
app.set('port', (process.env.PORT || 8080));
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
app.get('/api/test', (req, res) => {
    console.log('gotted :D');
    res.send({
        "vastaus": "jeejee"
    });
});
const apiURL = new URL('http://api.publictransport.tampere.fi/prod/');
app.post('/api/route', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const startCoords = req.body.startCoords;
    const destCoords = req.body.coords;
    const params = new URLSearchParams({
        user: process.env.API_KEY,
        pass: process.env.API_PASS,
        request: 'route',
        from: startCoords,
        to: destCoords,
        show: 1,
        detail: 'limited',
        epsg_in: 'wgs84'
    });
    apiURL.search = params.toString();
    const url = apiURL.toString();
    try {
        const response = yield axios.get(url); // type of response?
        res.send(response.data);
    }
    catch (e) {
        console.error(e);
        res.status(404);
        res.send({ error: 'Could not find route' });
        // FIXME: handle sending errors to client differently?
    }
}));
app.post('/api/get-address', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const coords = req.body.coords;
        const params = new URLSearchParams({
            user: process.env.API_KEY,
            pass: process.env.API_PASS,
            request: 'reverse_geocode',
            coordinate: coords,
            limit: 1,
            epsg_in: 'wgs84',
            format: 'json'
        });
        apiURL.search = params.toString();
        const url = apiURL.toString();
        const response = yield axios.get(url);
        res.send(response.data);
    }
    catch (e) {
        console.error(e);
        res.status(404);
        res.send({ error: 'Could not find address' });
        // FIXME: handle sending errors to client differently?
    }
}));
app.post('/api/get-coords', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const address = req.body.address;
    try {
        const params = new URLSearchParams({
            user: process.env.API_KEY,
            pass: process.env.API_PASS,
            request: 'geocode',
            format: 'json',
            cities: 'tampere',
            epsg_out: 'wgs84',
            key: address
        });
        apiURL.search = params.toString();
        const url = apiURL.toString();
        const response = yield axios.get(url);
        res.send({ coords: response.data[0].coords });
    }
    catch (e) {
        console.log(e);
        res.status(404);
        res.send({ error: `Could not find coordinates for ${address}` });
    }
}));
//# sourceMappingURL=server.js.map