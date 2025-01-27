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

@app.route('/reports')
def reports():
    return render_template('reports.html')

@app.route('/config')
def config():
    return render_template('config.html')

@app.route('/logs')
def logs():
    return render_template('logs.html')

@app.route('/users')
def users():
    return render_template('users.html')

@app.route('/notifications')
def notifications():
    return render_template('notifications.html')

@app.route('/help')
def help():
    return render_template('help.html')

if __name__ == '__main__':
    app.run(debug=True)