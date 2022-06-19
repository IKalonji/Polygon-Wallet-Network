import { Component, Input, OnInit } from '@angular/core';
import * as fg from '3d-force-graph';
import { CovalentService } from 'src/services/covalent.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NodeDataComponent } from '../node-data/node-data.component';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  wallet:string = ""

  data:any = {
  "nodes": [],
  "links": []
  }

  constructor(private covalent: CovalentService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.data = this.covalent.getData();
    const graph = fg.default()
      (document.getElementById('chart')!)
      .backgroundColor('#0A0A08')
      .graphData(this.data)
      .linkCurvature('curvature')
      .nodeId('id')
      .nodeLabel('id')
      .linkColor(() => 'rgba(255,255,255,0.2)')
      .nodeAutoColorBy('group')
      .onNodeClick(node => {
        console.log(node)
        this.openNodeModal(node)
      });
  }

  async openNodeModal(node:any){

    const dialogConfig = new MatDialogConfig();
    let address = node.id;

    let transactionData: any;

    let walletBalance: any;

    this.covalent.getWalletTransactionData(address).subscribe(data => {
      let response: any = data;
      transactionData = response.transactions;
      console.log(transactionData);

      this.covalent.getWalletBalances(address).subscribe( data => {
        let response: any = data;
        walletBalance = response.balance
        console.log(walletBalance)

        dialogConfig.data = {
          wallet: address,
          transactionData: transactionData,
          balanceData: walletBalance 
        }
        this.dialog.open(NodeDataComponent, dialogConfig)
      })
    })
  }

  back(){
    this.router.navigate(["query-input"])
  }

}