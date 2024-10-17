import tensorflow as tf
import numpy as np
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

app = Flask(__name__)
app.debug = True
CORS(app)
ann = tf.keras.models.load_model('./model.keras')


@app.route('/', methods=['POST'])
def predict():
    data = request.get_json()
    try :
        pred = ann.predict(np.array([[data['AT'], data['V'], data['AP'], data['RH']]]))[0][0]
        return jsonify({'predictedValue' : float(pred)})
    except : 
        return jsonify({'error' : "Data formate is incorrect!"}), 400


@app.route('/report', methods=['GET'])
def download_report():
    path = "./report.pdf"
    return send_file(path, as_attachment=False, mimetype='application/pdf')

if __name__ == "__main__":
    app.run()
