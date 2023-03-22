import { Component, Input, OnInit, ViewChild,ElementRef, AfterViewInit, AfterContentInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit  {
  loader = true ;
  ngOnInit(){
    setTimeout(() => {
      this.loader = false ;
    }, 2000);
  }
  }
