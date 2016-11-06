#!/usr/bin/env python3

# importa flask
from flask import Flask, request, send_from_directory, render_template
app = Flask(__name__, static_folder='static', static_url_path='')

@app.route("/")
def index():
    return render_template('layout.html')

