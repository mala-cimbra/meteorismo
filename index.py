#!/usr/bin/env python3
from flask import *
from meteorismo import app

@app.route("/")
def index():
    return render_template('index.html')