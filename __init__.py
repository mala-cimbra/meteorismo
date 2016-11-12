#!/usr/bin/env python3

# flask
from flask import *
app = Flask(__name__, static_folder='static', static_url_path='')

import meteorismo.main
import meteorismo.index