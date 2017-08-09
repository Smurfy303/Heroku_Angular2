import { Component, OnInit } from '@angular/core';
// flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { ObservableMedia } from '@angular/flex-layout';
import 'rxjs/add/observable/of';
// material
import { MdGridListModule } from '@angular/material';
// rxjs
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {
  test: any = 4;
  public cols: Observable<number>;
  public gutter:Observable<number>;

  tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'}
  ];

  constructor(private observableMedia: ObservableMedia) { }

  ngOnInit() {
     // set cols
    if (this.observableMedia.isActive("xs")) {
      this.cols = Observable.of(1);
    } else if (this.observableMedia.isActive("sm") || this.observableMedia.isActive("md")) {
      this.cols = Observable.of(2);
    } else if (this.observableMedia.isActive("lg") || this.observableMedia.isActive("xl")) {
      this.cols = Observable.of(3);
    }
    

    // observe changes
    this.observableMedia.asObservable()
    .subscribe(change => {
      switch (change.mqAlias) {
        case "xs":
          return this.cols = Observable.of(1);
        case "sm":
        case "md":
          return this.cols = Observable.of(2);
        case "lg":
        case "xl":
          return this.cols = Observable.of(3);
      }
    });
  }

  // onResize(event) {
  //   console.log('In event');
  //   const element = event.target.innerWidth;
  //   console.log(element);


  //   if (element < 950) {
  //     this.test = 2;
  //   }

  //   if (element > 1200) {
  //     this.test = 4;
  //   }

  //   if (element < 750) {
  //     this.test = 1;
  //   }
  // }
}
