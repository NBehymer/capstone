
from distutils.command.config import config
from flask import Blueprint, render_template, flash, session, url_for, redirect
from flask_login import login_required, current_user

# in development!
carts = Blueprint('cart', __name__)
items_in_cart = 0;

@carts.route('/cart', methods=['GET', 'POST'])
def cart():
    return render_template('cart.html', user=current_user)
