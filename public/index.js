//Fragment Data presented in JSON
//The currentTime attribute of videos reports time in seconds, so they are presented here in seconds
//Since I am not adding a database for the challenge the complete fragment data is being sent at once separated by video

const fragments = {
    "videos": [
        {
            "id": 1,
            "fragments": [
                {"start" : 0,"stop": 154.839},
                {"start": 68.243, "stop": 300.145},
                {"start": 260.394, "stop": 356.724},
                {"start": 450.235, "stop": 592.954},
                {"start": 68.243, "stop": 122.395}
            ]
        },
        {
            "id": 2,
            "fragments": [
                {"start" : 0,"stop": 54.839},
                {"start": 68.243, "stop": 75.145},
                {"start": 130.394, "stop": 185.724},
                {"start": 10.235, "stop": 25.954}
            ]
        }
    ]
}

//Send fragments to /api/uvt endpoint or process here?
const submitVideoData = data => {
    console.log(data)
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