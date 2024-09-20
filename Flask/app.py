from flask import Flask, request, jsonify, render_template
from data_predict import model_predict

app = Flask(__name__)

@app.route("/")
def Home():
    return render_template('index.html')

@app.route("/predict", methods=['POST'])
def predict():
    text = request.form['review']
    prediction = model_predict(text=text)
    
    return render_template('index.html', prediction_text = f'pred : {prediction}')

if __name__ == '__main__':
    app.run(debug=True)