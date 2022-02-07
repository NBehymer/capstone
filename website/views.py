# create standard routes

from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user



views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def home():
    return render_template("home.html", user=current_user)


@views.route('/menu', methods=['GET', 'POST'])
def menu():
    # create example menu item in database to display on html
    return render_template("menu.html", user=current_user)
