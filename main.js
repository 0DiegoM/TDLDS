const camera = document.getElementById("camera");

Webcam.attach("#camera");

Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        
        document.getElementById('result').innerHTML = '<img id="result_image" src="' + data_uri + '"/>';
    });
}

const classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7EeQs4qbb/model.json', modelLoaded);

function modelLoaded() {
    console.log('Modelo Cargado');
}

function check() {
   
    const imgElement = document.getElementById('result_image');

    if (imgElement) {
        classifier.classify(imgElement, gotResult);
    } else {
        console.error('No captured image found.');
    }
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").textContent = results[0].label;
        document.getElementById("result_object_accuracy").textContent = results[0].confidence.toFixed(3);
    }
}
