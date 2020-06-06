import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  preserveWhitespaces: true,
})
export class AddTaskComponent implements OnInit {
  task;
  minDate: Date;
  category;
  ngOnInit(): void {
    this.task = new Task();
    this.minDate = new Date();
    this.getCatList();
  }
  getCatList() {
    this.service.getCategoryList().subscribe(res => {
      this.category = res
    })
  }
  constructor(private dialogueRef: MatDialogRef<AddTaskComponent>, private service: TaskService) {
  }

  save() {
    this.dialogueRef.close(this.task)
  }
  close() {
    this.dialogueRef.close()
  }
}
