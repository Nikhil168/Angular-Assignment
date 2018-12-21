import { Component, OnInit } from '@angular/core';
import {ToDo} from 'src/app/models/ToDo';

import { ToDoService } from 'src/app/services/to-do.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css'],
  
})
export class EditformComponent implements OnInit {

id;
  constructor(
    public toDoService:ToDoService,
    private route:ActivatedRoute) {
      this.toDoService=toDoService;
  
   }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params)=>{
        this.id=params['id'];
      }
    );
  }
}

  // onSubmitClicked()
  //  {
  //   //console.log(index);
  //   // name:this.task.name,
  //   // Category: this.task.category,
  //   // status: this.task.status
    
  //   //this.showEditForm.emit();
  //     }


