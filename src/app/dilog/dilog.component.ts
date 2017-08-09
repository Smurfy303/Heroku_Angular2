import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-dilog',
  templateUrl: './dilog.component.html',
  styleUrls: ['./dilog.component.css']
})
export class DilogComponent {

  selectedOption: string;

  constructor(public dialog: MdDialog) { }

  openDialog() {
    let dialogRef = this.dialog.open(MainComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}
