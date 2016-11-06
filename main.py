#!/usr/bin/env python3

# importa flask
from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    return "questa è l'index"

if __name__ == "__main__":
    app.run()