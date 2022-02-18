# create standard routes

# from crypt import methods
from distutils.command.config import config
from flask import Blueprint, render_template, flash, session, url_for, redirect
from flask_login import login_required, current_user
import stripe


views = Blueprint('views', __name__)
stripe.api_key = 'sk_test_51KOEoTEAaICJ0GdRPRiVmPSZIQQ9DVtzWqeNtuevHa01p74QcR5wCNOrPdisWya0OheTal3B6kIy7Tuk987Cuk3l00n89yrf6y'


@views.route('/', methods=['GET', 'POST'])
def home():
    return render_template("home.html", user=current_user)



@views.route('/menu', methods=['GET', 'POST'])
def menu():
    return render_template('menu.html', user=current_user, items=get_items())

@views.route('/item/<int:id>', methods=['GET', 'POST'])
def item(id):
    if id > len(get_items()):
        pass
    else:
        return render_template('item.html', user=current_user, current_item=get_items()[id])

@views.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    session = stripe.checkout.Session.create(
    line_items=[{
      'price_data': {
        'currency': 'usd',
        'product_data': {
          'name': 'Pizza',
        },
        'unit_amount': 1999,
      },
      'quantity': 1,
    }],
    mode='payment',
    success_url='http://127.0.0.1:5000/successful', 
    cancel_url='http://127.0.0.1:5000/menu',
  )
    return redirect(session.url, code=303)


# success page

@views.route('/successful', methods=['GET', 'POST'])
def successful():
    return render_template('successful.html', user=current_user)

def get_items():
    test_items = [
        {'id': 0, 'name': 'Pepperoni', 'price': 9.99, 'desc': 'A pizza topped with Pepperoni', 'toppings': ['Pepperoni']},
        {'id': 1, 'name': 'Veggie', 'price': 10.99, 'desc': 'A pizza topped with Peppers, black olives, onions, etc.', 'toppings': ['Peppers', 'Olives', 'Onions']},
        {'id': 2, 'name': "Meat Lover's", 'price': 10.99, 'desc': 'A pizza topped with Pepperoni, bacon, etc.', 'toppings': ['Pepperoni', 'Bacon']}
    ]
    return test_items

# @views.route('/create-payment-intent', methods=['POST', 'GET'])
# def create_payment():
    # try:
        # data = json.loads(request.data)
        # Create a PaymentIntent with the order amount and currency
        # intent = stripe.PaymentIntent.create(
            # amount=calculate_order_amount(data['items']),
            # currency='eur',
            # automatic_payment_methods={
                # 'enabled': True,
            # },
        # )
        # return jsonify({
            # 'clientSecret': intent['client_secret']
        # })
    # except Exception as e:
        # return jsonify(error=str(e)), 403

# def calculate_order_amount(data):
    # total = 0
    # for i in data:
        # total += i
    # return total
