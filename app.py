from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/agents')
def agents():
    return render_template('agents.html')

@app.route('/listeners')
def listeners():
    return render_template('listeners.html')

@app.route('/operations')
def operations():
    return render_template('operations.html')

if __name__ == '__main__':
    app.run(debug=True)