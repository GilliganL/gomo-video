'use strict';

//import required modules
const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

//import config values
const { PORT } = require('./config');

//initialize a new express app
const app = express();

app.use(express.static('public'));

//reduce fragments array to unique time ranges
const uniqueRanges = fragments => {
    //initialize counter and add first fragement to range
    const ranges = [];
    let counter = 0;
    ranges[0] = { start: fragments[0].start, stop: fragments[0].stop };

    for (let fragment of fragments) {

        if (fragment.start <= ranges[counter].stop && fragment.stop > ranges[counter].stop) {
            ranges[counter].stop = fragment.stop;
        } else if (fragment.start > ranges[counter].stop) {
            counter++;
            ranges.push({
                start: fragment.start,
                stop: fragment.stop
            });
        }
    }
    return ranges;
}

//Calculate UVT and unique ranges
const calculateUVT = video => {
    let uvt = 0;
    const { fragments } = video;

    //convert from seconds to milliseconds
    fragments.forEach(fragment => {
        fragment.start = fragment.start * 1000;
        fragment.stop = fragment.stop * 1000;
    })
    //sort ranges by starting time
    fragments.sort((a, b) => a.start - b.start);

    const ranges = uniqueRanges(fragments);

    console.log(fragments)
    console.log(ranges)




}

//Endpoint that accepts fragment data and returns uvt
app.post('/uvt', jsonParser, (req, res) => {

    //validate data was sent with request
    if (!req.body || !req.body.videos) {
        res.status(422).json({ error: 'No video data received' });
    }

    const videos = req.body.videos;
    const results = []
    //process videos
    videos.forEach(video => {
        const uvt = calculateUVT(video);
        results.push(uvt);
    });

    //return uvt data

})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));