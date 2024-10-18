import tensorflow as tf
import onnx_tf 

model = tf.keras.models.load_model('./model.keras')

onnx_model = onnx_tf.convert.from_keras_model(model)

with open("model.onnx", "wb") as f:
    f.write(onnx_model.SerializeToString())