#!/usr/bin/env python3

# importa flask
from flask import Flask, request, send_from_directory, render_template
app = Flask(__name__, static_url_path='/static')

# invio i js
@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

# invio i css
@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)

@app.route("/")
def index():
    return render_template('layout.html')

