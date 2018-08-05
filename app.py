import logging

from flask import Flask, request, json
from flask import render_template
from flask_mail import Mail, Message

app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'mostaard.mailer@gmail.com'
app.config['MAIL_PASSWORD'] = 'mostaardmailer'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail()
mail.init_app(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/mail', methods=['POST'])
def send_mail():
    email = request.form['email']
    tel = request.form['tel']
    first_name = request.form['first-name']
    last_name = request.form['last-name']
    message = request.form['message']
    msg = Message('Bericht van de Villa Mona Luci website ', sender='mostaard.mailer@gmail.com',
                  recipients=['artist@nickymyny.com'])
    msg.html = "<p>Bericht van " + first_name + " " + last_name + " " + email + " " + tel + " </p>" + "<p>" + message + "</p>"
    mail.send(msg)

    return json.dumps(
        {'status': 'OK', 'email': email, 'tel': tel, 'first_name': first_name, 'last_name': last_name,
         'message': message})


if __name__ == '__main__':
    app.run()
