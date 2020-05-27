import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from '../task.service';
import { MatSort } from '@angular/material/sort';
import { Task } from '../task';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'task_name',
    'start_date',
    'due_date',
    'status',
    'description'
  ];
  dataSource = new MatTableDataSource<Task>();
  task;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private service: TaskService, private dialog: MatDialog) {
    this.task = new Task();
  }

  ngOnInit(): void {
    this.getTask();

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getTask() {
    this.service.getAllTask().subscribe(res => {
      this.dataSource.data = res as unknown as Task[];
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  add() {
    this.openDialog();

  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";
    const dialogueRef = this.dialog.open(AddTaskComponent, { width: "100%" });
    dialogueRef.afterClosed().subscribe(data => {
      if (!!data) {
        data.start_date = new Date();
        data.status = "new";
        this.task = data;
        this.service.addTask(this.task).subscribe(result => {
          this.getTask()
        })
      }
    })

  }
}
