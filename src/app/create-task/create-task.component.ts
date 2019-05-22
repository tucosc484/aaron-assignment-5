import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, NgForm } from '@angular/forms';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {

  constructor(private _taskService: TaskService) { }

  public description; //used to hold dsecription within the form

  addTask(form){
    this.description = form.value.description; //stores the description string from the form
    this._taskService.createNewTaskv2(this.description); //passes description as argument into function within task service 
  }

  addTaskv2(form){
    //this.description = form.value.description; //stores the description string from the form
    this._taskService.createNewTaskv2(form.value.description); //passes description as argument into function within task service 
  }

  ngOnInit() {
    //this._taskService.createNewTask(this.description);
  }
}
