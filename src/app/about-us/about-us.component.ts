import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations:[trigger('fade',[
    transition('void=>*',[
      style({opacity:0}),
      animate(1500,style({opacity:1}))
    ]) ,
    transition('*=>void',[
      animate(1500,style({opacity:0}))
    ])
  ])
  ]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
