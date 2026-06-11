# Smart Aquaponics Monitoring Dashboard

## Overview

A real-time Smart Aquaponics Monitoring System developed using Arduino and Flask.

The system receives sensor data from an Arduino through Serial Communication and displays live values on a web dashboard with real-time trend charts.

---

## Features

- Live pH Monitoring
- Electrical Conductivity (EC) Monitoring
- Turbidity (NTU) Monitoring
- Water Temperature Monitoring
- Real-Time Dashboard
- Historical Trend Visualization
- Automatic Data Refresh Every 5 Seconds
- Arduino Serial Communication
- Flask REST API Backend

---

## Technology Stack

### Backend
- Python
- Flask
- PySerial

### Frontend
- HTML
- CSS
- JavaScript
- Chart.js

### Hardware
- Arduino Uno
- pH Sensor
- EC Sensor
- Turbidity Sensor
- Water Temperature Sensor

---

## System Architecture

Arduino Sensors
       │
       ▼
Serial Communication
       │
       ▼
Flask Backend
       │
       ▼
REST API (/data)
       │
       ▼
Web Dashboard

---

## Sensor Data Format

Arduino sends data in the format:

PH=7.10|EC=550|NTU=15|WT=26.5

Example:

PH=6.95|EC=620|NTU=12.4|WT=27.1

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/smart-aquaponics-monitoring-dashboard.git

cd smart-aquaponics-monitoring-dashboard
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Configure Serial Port

Update the serial port in app.py:

```python
SERIAL_PORT = "/dev/serial/by-id/your-device"
```

### Run Application

```bash
python app.py
```

Open:

```text
http://localhost:5000
```

---

## Dashboard Parameters

| Parameter | Description |
|-----------|------------|
| pH | Acidity/Alkalinity |
| EC | Electrical Conductivity |
| NTU | Water Turbidity |
| WT | Water Temperature |

---

## Future Improvements

- AWS Cloud Integration
- Remote Monitoring
- Database Storage
- Sensor Alert Notifications
- Historical Data Analytics
- Mobile Application

---

## Author

Kishaunjith S
---