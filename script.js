const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set up video stream
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing video stream: ", err);
    });

// Load COCO-SSD model
let model;
async function loadModel() {
    try {
        model = await cocoSsd.load();
        console.log('Model loaded.');
    } catch (error) {
        console.error('Error loading model:', error);
    }
}

// Draw bounding boxes and labels on canvas
function drawPredictions(predictions) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    if (!predictions || predictions.length === 0) {
        console.log('No predictions detected');
        return;
    }

    predictions.forEach(prediction => {
        // Draw bounding box
        ctx.beginPath();
        ctx.rect(prediction.bbox[0], prediction.bbox[1], prediction.bbox[2] - prediction.bbox[0], prediction.bbox[3] - prediction.bbox[1]);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.stroke();

        // Draw label and score
        ctx.font = '16px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText(`${prediction.class}: ${Math.round(prediction.score * 100)}%`, prediction.bbox[0], prediction.bbox[1] > 10 ? prediction.bbox[1] - 10 : 10);
    });
}

// Object detection function
async function detectObjects() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    try {
        const predictions = await model.detect(canvas);
        drawPredictions(predictions);
    } catch (error) {
        console.error('Error during object detection:', error);
    }

    setTimeout(detectObjects, 100);
}

// Initialize
loadModel().then(() => {
    detectObjects();
});
