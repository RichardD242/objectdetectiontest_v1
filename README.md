
# Object Detector DLM Web

## Overview

`Object-Detector-DLM-WEB` is a web-based application that utilizes deep learning models for real-time object detection and tracking using your camera feed. The application is built using HTML, CSS, and JavaScript, and leverages TensorFlow.js with the COCO-SSD model to detect and label objects in the video stream.

## Features

- Real-time object detection using TensorFlow.js and COCO-SSD model.
- Camera access to stream live video for detection.
- Display of detected object names and confidence scores.
- Responsive design with Google UI/UX styling.

## Getting Started

### Prerequisites

- A modern web browser that supports HTML5, CSS3, and JavaScript.
- Internet connection to load TensorFlow.js and COCO-SSD model from CDNs.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/harshitj183/Object-Detector-DLM-WEB.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Object-Detector-DLM-WEB
   ```

3. **Open `index.html` in Your Browser:**

   You can open the `index.html` file directly in your browser to view and use the application.

### Usage

1. **Allow Camera Access:**

   When you first load the application, you'll be prompted to allow access to your camera. Grant permission for the application to use the camera.

2. **View Object Detection:**

   Once camera access is granted, the application will start streaming video and detecting objects in real-time. The detected objects and their names will be displayed on the video feed.

## Files

- `index.html`: The main HTML file that sets up the page structure.
- `style.css`: Contains the styling for the application, including Google UI/UX design.
- `script.js`: Contains the JavaScript code for handling video streaming, object detection, and drawing bounding boxes.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your fork.
4. Open a pull request with a description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [TensorFlow.js](https://www.tensorflow.org/js) for providing deep learning capabilities in JavaScript.
- [COCO-SSD Model](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) for object detection.
- Google UI/UX for design inspiration.

## Contact

For any questions or feedback, please contact [Harshit Jaiswal](mailto:harshitj183@gmail.com).