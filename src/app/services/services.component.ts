import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations:[trigger('fade',[
    transition('void=>*',[
      style({opacity:0}),
      animate(2000,style({opacity:1}))
    ]) ,
    transition('*=>void',[
      animate(2000,style({opacity:0}))
    ])
  ])
  ]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
