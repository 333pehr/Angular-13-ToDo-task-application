import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  itemcounter: number = 0;
  projecttext: string = 'Doing the math homework';
  projects: string[] = [];
  constructor() { }

  ngOnInit() {
     this.itemcounter = this.projects.length;
  }
  additem(){
    this.projects.push(this.projecttext);
    this.projecttext = '';
    this.itemcounter = this.projects.length;
  }
  removeitem(i: number){
    this.projects.splice(i,1);
    this.itemcounter = this.projects.length;
  }

}
