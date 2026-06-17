# Smart Aquaponics Monitoring Dashboard

## Overview

The Smart Aquaponics Monitoring Dashboard is an IoT-based monitoring system designed to continuously observe critical water quality parameters in an aquaponics environment.

The system uses an Arduino Uno to collect sensor data from multiple water quality sensors and transmits the readings through serial communication to a Flask-based backend server. The backend exposes a REST API that is consumed by a responsive web dashboard built using HTML, CSS, JavaScript, and Chart.js.

The dashboard provides real-time visualization of:

- pH
- Electrical Conductivity (EC)
- Turbidity (NTU)
- Water Temperature

This project was developed as part of a Smart Aquaponics System for real-time monitoring and future cloud integration.

---

## Features

- Real-time pH monitoring
- Real-time EC monitoring
- Real-time Turbidity monitoring
- Real-time Water Temperature monitoring
- Live web dashboard
- Automatic sensor updates every 5 seconds
- Historical trend visualization using Chart.js
- Flask REST API backend
- Arduino serial communication
- Easy deployment on Raspberry Pi
- Future-ready for AWS cloud integration

---

## System Architecture

```text
Sensors
   │
   ▼
Arduino Uno
   │
   ▼
Serial Communication (USB)
   │
   ▼
Flask Backend (Python)
   │
   ▼
REST API (/data)
   │
   ▼
Web Dashboard
```

---

## Hardware Components

### Microcontroller

- Arduino Uno

### Sensors

- PE-03 pH Sensor
- Atlas Scientific EC Probe with EZO EC Circuit
- Turbidity Sensor
- DS18B20 Waterproof Temperature Sensor

### Computing Platform

- Raspberry Pi 4B

---

## Software Stack

### Backend

- Python
- Flask
- PySerial

### Frontend

- HTML5
- CSS3
- JavaScript
- Chart.js

### Hardware Programming

- Arduino IDE
- C++

---

## Repository Structure

```text
smart-aquaponics-monitoring-dashboard/
│
├── app.py
├── index.html
├── script.js
├── style.css
├── ardi_v1.ino
├── requirements.txt
├── README.md
│
└── screenshots/
    └── dashboard.png
```

---

## File Description

### ardi_v1.ino

Arduino firmware responsible for:

- Reading pH values
- Reading EC values
- Reading Turbidity values
- Reading Water Temperature
- Applying calibration equations
- Sending formatted sensor data through serial communication

Example output:

```text
PH=7.10|EC=540.5|NTU=12.4|WT=26.8
```

---

### app.py

Flask backend application responsible for:

- Reading serial data from Arduino
- Parsing sensor values
- Storing latest readings
- Providing REST API endpoints
- Serving dashboard files

---

### index.html

Dashboard user interface containing:

- Live sensor cards
- Trend charts
- Connection status indicator

---

### script.js

Frontend logic responsible for:

- Fetching data from Flask API
- Updating live values
- Updating charts
- Monitoring connection status

---

### style.css

Dashboard styling and layout.

---

## Dashboard Parameters

| Parameter | Description |
|------------|-------------|
| pH | Water acidity/alkalinity |
| EC | Electrical conductivity |
| NTU | Water turbidity |
| WT | Water temperature |

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/kishaunjith-S/smart-aquaponics-monitoring-dashboard.git

cd smart-aquaponics-monitoring-dashboard
```

---

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 3. Configure Serial Port

Open `app.py` and update:

```python
SERIAL_PORT = "/dev/serial/by-id/your-device"
```

with your device serial port.

---

### 4. Upload Arduino Code

Open:

```text
ardi_v1.ino
```

using Arduino IDE and upload it to Arduino Uno.

---

### 5. Run Flask Server

```bash
python app.py
```

---

### 6. Open Dashboard

Visit:

```text
http://localhost:5000
```

or

```text
http://<raspberry-pi-ip>:5000
```

---

## Sensor Calibration

### pH Calibration

Calibration points:

| pH | ADC |
|-----|-----|
| 4.00 | 243 |
| 7.00 | 385.7 |
| 10.00 | 541 |

Calibration Equation:

```text
pH = 4.11 × Voltage - 0.88
```

---

### Turbidity Calibration

Calibration points:

| NTU | ADC |
|------|------|
| 0.1 | 798 |
| 2.6 | 784.9 |
| 65 | 762.7 |
| 130 | 737.7 |

Piecewise calibration function used.

---

### EC Calibration

Atlas Scientific EC Probe

Correction factor:

```text
Actual EC = Raw EC × 0.669
```

---

## API Endpoint

### Get Latest Sensor Data

```http
GET /data
```

Example Response:

```json
{
  "PH": 7.05,
  "EC": 530.8,
  "NTU": 11.7,
  "WT": 26.5,
  "DO": 0.0
}
```

---

## Future Improvements

- AWS Cloud Deployment
- Remote Monitoring Dashboard
- Historical Database Storage
- Sensor Alert Notifications
- SMS/Email Alerts
- Mobile Application
- Machine Learning-Based Water Quality Prediction
- Automated Aquaponics Control System

---

## Applications

- Aquaponics Systems
- Hydroponics Monitoring
- Smart Agriculture
- Water Quality Monitoring
- IoT Research Projects
- Educational Demonstrations

---

## Author

**Kishaunjith S**


---

## License

This project is released for educational and research purposes.



> ## ⚠️ This repo is archived
>
> The Smart Aquaponics project has been consolidated into a single monorepo
> with backend, frontend, Pi, and Arduino code. All active development moved to:
>
> **→ https://github.com/kishaunjith-S/smart-aquaponics**
>
> This repository is preserved for reference but receives no updates. Live
> demo: https://smart-aquaponics.vercel.app
