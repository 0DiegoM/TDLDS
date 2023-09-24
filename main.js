


camera = document.getElementById("camera")



jQuery("#camera").webcam({

    width: 320,
    height: 240,
    mode: "callback",
    swffile: "/jscam_canvas_only.swf", // canvas only doesn't implement a jpeg encoder, so the file is much smaller

    

    onSave: function (data) {

        var col = data.split(";");
        Pht = webcam.save()
    },

    



    onLoad: function () {
        // Page load
        var cams = webcam.getCameraList();
        for (var i in cams) {
            jQuery("#cams").append("<li>" + cams[i] + "</li>");
        }
    }
});

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7EeQs4qbb/model.json', modelLoaded)
function modelLoaded() {
    console.log('Modelo Cargado');
}

function check() {
    img = document.getElementById(Pht);
    classifier.classify(img, gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
console.log("camara lista 3")