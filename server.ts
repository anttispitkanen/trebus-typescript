import 'dotenv/config';
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const { URL, URLSearchParams } = require('url');

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
    console.log('gotted :D')
    res.send({
        "vastaus": "jeejee"
    });
});


const apiURL = new URL('http://api.publictransport.tampere.fi/prod/');

app.post('/route', async (req, res): Promise<any> => {
    const startCoords: string = req.body.startCoords;
    const destCoords: string = req.body.coords;

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
    const url: string = apiURL.toString();

    try {
        const response = await axios.get(url); // type of response?
        res.send(response.data);
    } catch (e) {
        console.error(e);
        res.send({ error: 'Could not find route' });
        // FIXME: handle sending errors to client differently?
    }
});

app.post('/get-address', async (req, res) => {
    try {
        const coords: string = req.body.coords;

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
        const url: string = apiURL.toString();

        const response = await axios.get(url);
        res.send(response.data);

    } catch (e) {
        console.error(e);
        res.send({ error: 'Could not find address' });
        // FIXME: handle sending errors to client differently?
    }
});