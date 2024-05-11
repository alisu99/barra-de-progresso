from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Rota para a página HTML
@app.route('/')
def index():
    return render_template('progresso.html')

@app.route('/progresso')
def obter_progresso():
    return jsonify({'progresso': 68})

if __name__ == '__main__':
    app.run(debug=True)
