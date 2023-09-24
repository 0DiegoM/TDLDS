

const camera = document.getElementById("camera");

Webcam.attach("#camera");

Webcam.on("save", function (data_uri) {
    Pht = data_uri; 
});

const classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7EeQs4qbb/model.json', modelLoaded);

function modelLoaded() {
    console.log('Modelo Cargado');
}

function check() {
    if (Pht) {
        const img = new Image();
        img.src = Pht;
        classifier.classify(img, gotResult);
    } else {
        console.log("No image captured yet.");
    }
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


