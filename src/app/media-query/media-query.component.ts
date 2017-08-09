import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-query',
  templateUrl: './media-query.component.html',
  styleUrls: ['./media-query.component.css']
})
export class MediaQueryComponent implements OnInit {

  constructor() {
    const width=window.screen.width;
    console.log('Width--->',width);
   }

  ngOnInit() {
  }

}
