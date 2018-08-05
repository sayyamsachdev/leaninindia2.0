from flask import Flask, render_template, jsonify, request
import json as JSON
from flask_bower import Bower

app = Flask(__name__)
Bower(app)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/about", methods = ["GET"])
def render_team():
	return render_template("index.html")

@app.route("/circles", methods = ["GET"])
def render_circles():
	return render_template("index.html")

@app.route("/events", methods = ["GET"])
def render_events():
	return render_template("index.html")

@app.route("/awarenees", methods = ["GET"])
def render_awareness():
	return render_template("index.html")

@app.route("/blog", methods = ["GET"])
def render_blog():
	return render_template("index.html")

@app.route("/contact-us", methods = ["GET"])
def render_contact_us():
	return render_template("index.html")

@app.route('/<path:p>')
def ui(p):
	return render_template("index.html")

app.run(debug=True)