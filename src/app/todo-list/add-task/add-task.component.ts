import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task;
  ngOnInit(): void {
    this.task=new Task();
  }

  /**
   *
   */
  constructor(private dialogueRef: MatDialogRef<AddTaskComponent>) {


  }

  save() {
    //console.log(this.task);
    
    this.dialogueRef.close(this.task)
  }
  close() {
    this.dialogueRef.close()
  }
}
