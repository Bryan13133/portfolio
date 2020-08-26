import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { }
  programd:any;
  ngOnInit(): void {
    AOS.init();
  }

  programs = [
    {name: 'CSS',percentage:'60%'},
    {name: 'HTML',percentage:'75%'},
    {name: 'JavaScript',percentage:'70%'},
    {name: 'Angular',percentage:'75%'},
    {name: 'Java',percentage:'80%'},
    {name: 'C#',percentage:'70%'},
    {name: 'Node.js',percentage:'50%'},
    {name: 'Objective-C',percentage:'35%'}
  ]

}
