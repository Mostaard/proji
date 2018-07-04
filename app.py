from flask import Flask

app = Flask(__name__)


@app.route('/mostaard')
def mostaard():
    return 'Hello Moste!'


@app.route('/monaluci')
def monaluci():
    return 'Hello Mona!'


if __name__ == '__main__':
    app.run()
