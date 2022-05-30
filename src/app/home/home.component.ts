import { Component, OnInit } from '@angular/core';
import * as fg from '3d-force-graph';
import { CovalentService } from 'src/services/covalent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mockData:any = {
  "nodes": [
    {"id":"dummynode"}
  ],
  "links": []
  }

  constructor(private covalent: CovalentService) { }

  ngOnInit(): void {

    this.covalent.getTransactionNetwork("0x69602cda969091c0d86fa75b3b59b2f81e241c03", "8217").subscribe(result => {
      let data:any = result;
      console.log(data)
      for (var node of data.nodes) {
        this.mockData.nodes.push({"id":`${node}`})
      }
      this.mockData.links = data.links
      console.log(data.links)
      const graph = fg.default()
      (document.getElementById('chart')!)
      .backgroundColor('#101020')
      .graphData(this.mockData)
      .linkCurvature('curvature')
      .nodeId('id')
      .linkColor(() => 'rgba(255,255,255,0.2)')
      .nodeAutoColorBy('node')
      .linkDirectionalParticles(2)
      .linkDirectionalParticleWidth(1.4)
      .onNodeClick(node => {
        console.log(node)
      });

      console.log(this.mockData)
    })
    
    }








  }