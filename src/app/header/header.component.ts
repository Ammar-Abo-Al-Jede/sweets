import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu')menu!:ElementRef ;
  @ViewChild('navbar')navbar!:ElementRef ;
  @ViewChild('header')header!:ElementRef ;
  constructor() { }

  ngOnInit(): void {
  }
  change(){
    this.menu.nativeElement.classList.toggle('bx-x');
	  this.navbar.nativeElement.classList.toggle('active');
    this.menu.nativeElement.onclick = () => {
      this.menu.nativeElement.classList.toggle('bx-x');
      this.navbar.nativeElement.classList.toggle('active');
    };
    window.onscroll = () => {
      this.menu.nativeElement.classList.remove('bx-x');
      this.navbar.nativeElement.classList.remove('active');
    };
  }
  rem(){
    this.menu.nativeElement.classList.remove('bx-x');
    this.navbar.nativeElement.classList.remove('active');
  }
}
