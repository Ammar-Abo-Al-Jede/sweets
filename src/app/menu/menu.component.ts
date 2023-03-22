import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
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
export class MenuComponent implements OnInit,OnDestroy {
  constructor() {
  }

  ngOnInit(): void {
    let x = localStorage.getItem('num');
    if (!x) {
      localStorage.setItem('num','1');
      window.location.reload();
    }
  }
  ngOnDestroy(): void {
    localStorage.removeItem('num')
  }
}
