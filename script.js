const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const instructions = document.getElementById('instructions');

// Function to set up video stream and handle permissions
async function setupCamera() {
    try {
        // Prompt user for camera access
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;

        // Update canvas size to match video size
        video.onloadedmetadata = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            // Hide instructions once the camera is active
            instructions.classList.add('hidden');
        };
    } catch (err) {
        // Handle the error if user denies camera access or other issues occur
        console.error("Error accessing video stream: ", err);
        instructions.textContent = "Camera access is required for this application to function. Please allow camera access.";
    }
}

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
async function initialize() {
    await loadModel();
    await setupCamera();
    detectObjects();
}

initialize();
