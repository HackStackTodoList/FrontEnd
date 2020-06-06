import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from '../task';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TaskService } from '../task.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { WarningComponent } from 'src/app/shared/warning/warning.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'action',
    'task_name',
    'due_date',
    'status',
    'description'
  ];
  dataSource = new MatTableDataSource<Task>();
  task;
  category;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private service: TaskService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar) {

    this.task = new Task();
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get("cat");
    this.getTask();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getTask() {
    this.service.getByCategory(this.category).subscribe(res => {
      this.dataSource.data = res as unknown as Task[];
    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log("unauthorized ");

          }
        }
      })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  add() {
    this.openDialog();

  }
  openSnackBar(message) {
    this.snackbar.open(message, "Dismiss", { duration: 2000 })
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";
    const dialogueRef = this.dialog.open(AddTaskComponent, dialogConfig);
    dialogueRef.afterClosed().subscribe(data => {
      if (!!data) {
        data.start_date = new Date();
        data.status = "Running";
        this.task = data;
        this.service.addTask(this.task).subscribe(result => {
          this.getTask();
          if (!!result) {
            this.openSnackBar("Task added successfully")
          }
        }, err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              const dialogRef = this.dialog.open(WarningComponent, {
                data: err.error
              });

            }
          }
        })
      }
    })

  }

  delete(task: Task): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Are you sure ?"
    });
    dialogRef.afterClosed().subscribe(res => {

      if (!!res) {
        task.status = "Completed";
        this.service.updateTask(task).subscribe(result => {
          if (!!result) {
            this.openSnackBar("Task Updated Successfully")
          }
        });
      }
      setTimeout(() => { this.getTask() }, 100)

    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          const dialogRef = this.dialog.open(WarningComponent, {
            data: err.error
          });

        }
      }
    }
    );

  }

}
