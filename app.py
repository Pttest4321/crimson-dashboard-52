from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/agents')
def agents():
    return render_template('agents.html')

@app.route('/tasks')
def tasks():
    return render_template('tasks.html')

@app.route('/data')
def data():
    return render_template('data.html')

@app.route('/config')
def config():
    return render_template('config.html')

if __name__ == '__main__':
    app.run(debug=True)