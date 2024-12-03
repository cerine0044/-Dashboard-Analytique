from flask import Flask, jsonify
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')  

@app.route('/api/data', methods=['GET'])
def get_data():
    data = [
        {"first_name": "Alice", "age": 25, "gender": "Female"},
        {"first_name": "Bob", "age": 30, "gender": "Male"},
        {"first_name": "Charlie", "age": 35, "gender": "Male"},
        {"first_name": "Diana", "age": 28, "gender": "Female"}
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
