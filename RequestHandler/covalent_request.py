import re
import requests
import data_parser




def handle_request(wallet, chain):
    '''Main method to handle parsing and returning of data from request'''
    initial_wallet_call_items = call_covalent(wallet=wallet, chain=chain)
    first_iteration_nodes, first_iteration_links = first_iteration(initial_wallet_call_items)
    final_nodes, final_links = second_iteration(wallet, first_iteration_nodes, first_iteration_links, chain)
    return {"response": "OK", "nodes": final_nodes, "links": final_links}


def call_covalent(wallet, chain):
    '''Method calls covalent transaction data request on wallet'''
    covalentKey = "ckey_bc359eed184b4990ad1be0846cd"
    URL = f"https://api.covalenthq.com/v1/{chain}/address/{wallet}/transactions_v2/?key={covalentKey}&page-size=2"
    call_response = requests.get(URL)
    if call_response.status_code > 201:
        return dict()
    dict_response = call_response.json()
    print(dict_response)
    items_json = dict_response["data"]["items"]
    return items_json
    


def first_iteration(items_json):
    address_set = set()
    for item in items_json:
        from_addr = item["from_address"].lower()
        to_addr =  item["to_address"].lower()
        address_set.add(from_addr)
        address_set.add(to_addr)
            

    current_nodes = list(address_set)
    current_links = data_parser.add_to_links(items_json)

    return current_nodes, current_links


def second_iteration(initial_wallet, current_nodes, current_links, chain):

    current_nodes_set = set(current_nodes)

    for wallet in current_nodes:
        if not wallet == initial_wallet:
            call_items = call_covalent(wallet, chain)
            new_nodes, new_links = first_iteration(call_items)
            current_nodes_set = current_nodes_set.union(new_nodes)
            current_links = current_links + new_links

    current_nodes = list(current_nodes_set)

    return current_nodes, current_links


def walletData(wallet):
    try: 
        returnTransactions = {"transactions": walletData[wallet]}
        return returnTransactions
    except KeyError as error:
        return {"error": "Error finding the wallet"}

def requestBalance(wallet, chain):
    covalentKey = "ckey_bc359eed184b4990ad1be0846cd"
    URL = f"https://api.covalenthq.com/v1/{chain}/address/{wallet}/balances_v2/?key={covalentKey}"
    response_data = requests.get(URL)
    if response_data.status_code > 201:
        print(response_data)
        return {"error": "error obtaining the transactions"}
    else:
        call_response = response_data.json()
        transactions = call_response["data"]["items"]
        parsed_response = data_parser.parse_transactions(transactions=transactions)
        print(parsed_response)
        return {"balance": parsed_response}

# requestBalance("0x69602cda969091c0d86fa75b3b59b2f81e241c03", "8217")
     

# print(handle_request("0x69602cda969091c0d86fa75b3b59b2f81e241c03", "8217"))