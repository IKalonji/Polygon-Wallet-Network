import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovalentService {

  covalentKey = environment.covalentKey;

  constructor(private http:HttpClient) { }

  getTransactionNetwork(wallet:string, chain:string){
    let BASE_URL = `http://127.0.0.1:5000/wallet/${wallet}/chain/${chain}`
    return this.http.get(BASE_URL)
  }
}
