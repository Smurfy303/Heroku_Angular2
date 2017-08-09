import { Component, OnInit } from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { EventEmitter} from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-ng2-smart-table',
  templateUrl: './ng2-smart-table.component.html',
  styleUrls: ['./ng2-smart-table.component.css']
})
export class Ng2SmartTableComponent implements OnInit {

  settings = {
     mode: 'external',
      actions:{
        add:false,
        edit:true,
      },
      edit: {
          editButtonContent: ' <i class="material-icons">edit</i>',
      },
      delete: {
        deleteButtonContent: ' <i class="material-icons">delete_forever</i>',
        confirmDelete: true
      },
  columns: {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Full Name'
    },
    username: {
      title: 'User Name'
    },
    email: {
      title: 'Email'
    }
  }
};

data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },
  
  // ... list of items
  
  {
    id: 11,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];

  constructor(private sanitizer: DomSanitizer,private dialog: MdDialog) { }

  ngOnInit() {
  }

  private addData(event){
    alert('You Clicked ADD');
  }

  private EditConfirm(value :any){
   console.log('On edit',value);
  }
  
}

