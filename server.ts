import 'dotenv/config';
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
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// TESTING
app.get('/test', (req, res) => {
    console.log('gotted :D')
    res.send({
        "vastaus": "jeejee"
    })
})


app.post('/route', async (req, res): Promise<any> => {
    const startCoords: string = req.body.startCoords;
    const destCoords: string = req.body.coords;

    let queryUrl = 'http://api.publictransport.tampere.fi/prod/?request=route&'
                    + process.env.API_KEY + '&'
                    + process.env.API_PASS + '&'
                    + 'from=' + startCoords + '&'
                    + 'to=' + destCoords + '&'
                    + 'show=1&Detail=limited&epsg_in=wgs84';

    try {
        const response = await axios.get(queryUrl); // type of response?
        res.send(response.data);
    } catch (e) {
        console.error(e);
    }
})
