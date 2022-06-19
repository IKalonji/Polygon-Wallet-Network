import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovalentService } from 'src/services/covalent.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-query-input',
  templateUrl: './query-input.component.html',
  styleUrls: ['./query-input.component.css']
})
export class QueryInputComponent implements OnInit {

  wallet:string= "";
  domain:string= "";
  loading:boolean = false;
  disableInput:boolean= false;

  user:string=""

  data:any = {
    "nodes": [],
    "links": []
  }

  constructor(private router: Router, private covalent: CovalentService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser()
  }

  resolveDomain(){
    console.log(this.domain)
    console.log(this.wallet)
    this.disableInput = true;
    this.query();
  }

  query(){
    console.log("Sending request");
    this.loading = true;
    this.covalent.getTransactionNetwork(this.wallet).subscribe(result => {
      let data:any = result;
      let i = 1
      for (var node of data.nodes) {
        this.data.nodes.push({"id":`${node}`, "group":i})
        i++;
        if (i > 15){
          i = 1
        }
      }
      this.data.links = data.links
      this.covalent.setData(this.data)
      this.visualize()
    })
  }

  visualize(){
    this.router.navigate(["/visualize", this.wallet])
  }
}
