import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovalentService {

  data:any = {
    "nodes": [{"id":"a"},{"id":"b"},{"id":"c"}],
    "links": [{"source":"a","target": "b"},{"source":"b","target": "c"},{"source":"a","target": "c"}]
  }

  chainID = environment.chainID;

  constructor(private http:HttpClient) { }

  getTransactionNetwork(wallet:string){
    let BASE_URL = `http://127.0.0.1:5000/wallet_network/${wallet}/chain/${this.chainID}`
    return this.http.get(BASE_URL)
  }

  getWalletTransactionData(wallet:string) {
      let BASE_URL = `http://127.0.0.1:5000/wallet_transactions/${wallet}/chain/${this.chainID}`
      return this.http.get(BASE_URL)
  }

  getWalletBalances(wallet:string) {
    let BASE_URL = `http://127.0.0.1:5000/wallet_balance/${wallet}/chain/${this.chainID}`
    return this.http.get(BASE_URL)
}

  setData(data: any): boolean{
    this.data = data
    return true;
  }

  getData(){
    return this.data
  }

}
