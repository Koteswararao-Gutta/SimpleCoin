from flask import Flask, jsonify, request, render_template
from simple_chain import SimpleChain

app = Flask(__name__)
blockchain = SimpleChain()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/blocks', methods=['GET'])
def get_blocks():
    return jsonify(blockchain.chain), 200

@app.route('/transactions/new', methods=['POST'])
def new_transaction():
    data = request.get_json()
    required_fields = ['sender', 'recipient', 'amount']
    if not all(field in data for field in required_fields):
        return 'Missing fields', 400
    index = blockchain.new_transaction(data['sender'], data['recipient'], data['amount'])
    response = {'message': f'Transaction will be added to block {index}'}
    return jsonify(response), 201

@app.route('/mine', methods=['GET'])
def mine():
    last_block = blockchain.last_block
    last_proof = last_block['proof']
    proof = blockchain.proof_of_work(last_proof)
    previous_hash = blockchain.hash(last_block)
    block = blockchain.new_block(proof, previous_hash)
    response = {
        'message': 'New block forged',
        'index': block['index'],
        'transactions': block['transactions'],
        'proof': block['proof'],
        'previous_hash': block['previous_hash'],
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)
