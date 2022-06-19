from flask import Flask
import flask_cors
import covalent_request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/")
def requestHandler():
    return "<h1>Wallet Network Visualizer API Handler<h1>"

@cross_origin
@app.route("/wallet_network/<wallet_input>/chain/<chain_input>")
def walletData(wallet_input, chain_input):
    print("incoming request")
    response_data = covalent_request.handle_request(wallet=wallet_input, chain=chain_input)
    return response_data

@cross_origin
@app.route("/wallet_transactions/<wallet_input>/chain/<chain_input>")
def walletTransactions(wallet_input, chain_input):
    print("incoming request")
    response_data = {"transactions": covalent_request.call_covalent(wallet=wallet_input, chain=chain_input)}
    return response_data

@cross_origin
@app.route("/wallet_balance/<wallet_input>/chain/<chain_input>")
def walletBalance(wallet_input,chain_input):
    print("incoming request")
    response_data = covalent_request.requestBalance(wallet=wallet_input, chain=chain_input)
    return response_data
    

if __name__ == "__main__":
    app.run()

