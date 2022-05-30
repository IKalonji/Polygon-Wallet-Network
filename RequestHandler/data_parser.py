def add_to_links(transactions):
    data_links = []
    for transaction in transactions:
        data_links.append({"source":transaction["from_address"].lower(), "target":transaction["to_address"].lower()})
    return data_links