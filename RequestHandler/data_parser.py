def add_to_links(transactions):
    data_links = []
    for transaction in transactions:
        data_links.append({"source":transaction["from_address"].lower(), "target":transaction["to_address"].lower()})
    return data_links

def parse_transactions(transactions):
    transactions_list = []
    for transaction in transactions:
        transactions_list.append({
            "token": transaction["contract_name"],
            "symbol": transaction["contract_ticker_symbol"],
            "logo": transaction["logo_url"],
            "balance": str(int(transaction["balance"]) / (10**transaction["contract_decimals"]))
        })
    return transactions_list
