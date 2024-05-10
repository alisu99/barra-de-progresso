from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Rota para a página HTML
@app.route('/')
def index():
    return render_template('progresso.html')

@app.route('/progresso')
def obter_progresso():
    lista = [ 50, 18 ,1, 1 ,1 , 25, 50, 18, 1, 1 ,1, 1 ,1 ,1 ,1 ,1 ,1 , 50, 18, 1, 1 ,1, 1 ,1 ,1 ,1 ,1 ,1 , 25, 50, 18, 1, 1 ,1, 1 ,1 ,1 ,1 ,1 ,1 ,]
    numero_progresso = len(lista)
    return jsonify({'progresso': numero_progresso})

if __name__ == '__main__':
    app.run(debug=True)
