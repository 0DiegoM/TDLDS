

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
        document.getElementById('result').innerHTML = '<img id="result" src="' + data_uri + '"/>';
    });
}

const classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7EeQs4qbb/model.json', modelLoaded);

function modelLoaded() {
    console.log('Modelo Cargado');
}

function check() {
    img = document.getElementById('result');
    classifier.classify(img, gotResult);
    
    
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").textContent = results[0].label;
        document.getElementById("result_object_accuracy").textContent = results[0].confidence.toFixed(3);
    }
}


