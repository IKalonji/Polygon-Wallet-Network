import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-node-data',
  templateUrl: './node-data.component.html',
  styleUrls: ['./node-data.component.css']
})
export class NodeDataComponent implements OnInit {

  address:string= "";
  transactionData:any;
  balanceData:any;
  dataLoading:boolean = true

  constructor(private dialogRef: MatDialogRef<NodeDataComponent>, @Inject(MAT_DIALOG_DATA) data:any) {
    this.address = data.address;
    this.transactionData = data.transactionData;
    this.balanceData = data.balanceData;

    console.log(this.address);
    console.log(this.transactionData)
    console.log(this.balanceData)
   }

  ngOnInit(): void {
    console.log(this.address);
    console.log(this.transactionData)
    console.log(this.balanceData)
  }

  close(){
    this.dialogRef.close();
  }

}
