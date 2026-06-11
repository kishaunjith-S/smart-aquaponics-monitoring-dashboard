from flask import Flask, jsonify, send_from_directory
import serial
import threading

app = Flask(__name__)

latest = {
    "PH": 0.0,
    "EC": 0.0,
    "NTU": 0.0,
    "WT": 0.0,
    "DO": 0.0
}

def read_serial():
    SERIAL_PORT = "/dev/serial/by-id/usb-FTDI_FT232R_USB_UART_A5069RR4-if00-port0"

    ser = serial.Serial(
        SERIAL_PORT,
        9600,
        timeout=1
    )
    
    while True:

        try:

            line = ser.readline().decode(errors='ignore').strip()

            if not line:
                continue

            print(line)

            if line.startswith("PH="):

                values = {}

                for item in line.split('|'):
                    key, value = item.split('=')
                    values[key] = float(value)

                latest["PH"] = values.get("PH", 0)
                latest["EC"] = values.get("EC", 0)
                latest["NTU"] = values.get("NTU", 0)
                latest["WT"] = values.get("WT", 0)

        except Exception as e:
            print("Serial Error:", e)

threading.Thread(
    target=read_serial,
    daemon=True
).start()

@app.route("/")
def home():
    return send_from_directory(".", "index.html")

@app.route("/style.css")
def css():
    return send_from_directory(".", "style.css")

@app.route("/script.js")
def js():
    return send_from_directory(".", "script.js")

@app.route("/data")
def data():
    return jsonify(latest)

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000
    )