import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proyects = [
    {name: 'COVID-19 Statistics',language:'AngularJS',photo:'assets/Images/statistics.jpg'},
    {name: 'Enagena',language:'AngularJS/School Project',photo:'assets/Images/enagena.jpg'},
    {name: 'D-Plastico',language:'AngularJS/School Project',photo:'assets/Images/statistics.jpg'}
  ]

}
