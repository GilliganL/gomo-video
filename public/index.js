//Fragment Data presented in JSON
//The currentTime attribute of videos reports time in seconds, so they are presented here in seconds to be converted to ms
//Since I am not adding a database for the challenge the complete fragment data is being sent at once broken down by video

const fragments = {
    "videos": [
        {
            "id": 1,
            "fragments": [
                { "start": 0, "stop": 154.839 },
                { "start": 68.243, "stop": 300.145 },
                { "start": 260.394, "stop": 356.724 },
                { "start": 450.235, "stop": 592.954 },
                { "start": 68.243, "stop": 122.395 }
            ]
        },
        {
            "id": 2,
            "fragments": [
                { "start": 0, "stop": 54.839 },
                { "start": 68.243, "stop": 75.145 },
                { "start": 130.394, "stop": 185.724 },
                { "start": 10.235, "stop": 25.954 }
            ]
        }
    ]
}

//Display video data
const displayData = data => {
    $('#data').empty();

    for (let item of data.viewData) {
        let ranges = '';
        if (item.ranges) {
            item.ranges.forEach(item => {
                ranges = ranges + `<div class="range">
                <p>Start time: ${item.start} Stop time: ${item.stop}
            </div>`
            });
        }

        $('#data').append(
            `<div class="video-data" id="video${item.id}">
                <h3>Video: ${item.id}</h3>
                <p class="uvt">UVT: ${item.uvt}</p>
                ${ranges}
            </div>`
        );
    }
}

//Send fragments to /uvt api endpoint
const submitVideoData = (data) => {
    $.ajax({
        url: 'http://localhost:8080/uvt',
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(data),
        type: 'POST',
        success: (res) => displayData(res),
        error: (res) => console.log(`error is ${res.body}`)
    });
}

//Listen for user click on Process Button
const listenForProcessButton = () => {
    $('#process-button').on('click', event => {
        event.preventDefault();
        submitVideoData(fragments);
    })
}

$(function () {
    listenForProcessButton();
})