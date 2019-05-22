import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  //taskModel = new Task(null, null, null, null, null);

  public y = localStorage.length;
  public taskArray = [];
  
  getAllTask() {
    var x = 0;
    var allTask = [];

    while ( x < this.y ) {
      var localData = JSON.parse(localStorage.getItem('x'));
      allTask[x] = localData; 
      x++;
    }
    console.log(allTask);
    return allTask; 
  }
/*
  createNewTask(description) {
    //var idNum = localStorage.length;

    //creates new JSON Object for newly created task
    var newTask = {  
      'id': this.y + '',
      'dateCreated': new Date(),
      'isComplete': false,
      'dateCompleted': null,
      'description': description //uses description from argument
    }
    //localStorage.setItem('tasks',JSON.stringify(newTask));

    this.taskArray[this.y] = newTask;
    localStorage.setItem('task', JSON.stringify(this.taskArray));

  }
*/
  createNewTaskv2(description) {
    console.log();
    console.log("Task Array Length (Before): " + this.taskArray.length);
    console.log("Local Storage Length (Before): " + localStorage.length);
    
    //creates new JSON Object for newly created task
    var newTask = {  
      "id": localStorage.length + '',
      "dateCreated": new Date(),
      "isComplete": false,
      "dateCompleted": null,
      "description": description
    }

    //this.taskArray.push(JSON.stringify(newTask));
    this.taskArray.push(newTask);
    
    localStorage.setItem('task', JSON.stringify(this.taskArray));
    //localStorage.setItem('task', this.taskArray.toString());

    console.log(localStorage);
    console.log("Task Array Length (After): " + this.taskArray.length);
    console.log("Local Storage Length (After): " + localStorage.length);
    console.log();
  }

  deleteTask(id){
    localStorage.removeItem(id);
  }

  getTask(id){
    var specifiedTask = JSON.parse(localStorage.getItem(id));
    return specifiedTask;
  }

  clearAllTask() {
    localStorage.clear();
  }

}
