import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  username;
  category;
  constructor(private service: LoginService,
    private router: Router,
    private taskService: TaskService) { }

  ngOnInit(): void {
    this.service.getUsername().subscribe(data => {
      this.username = data
    })
    this.getCatList();

  }
  getCatList() {
    this.taskService.getCategoryList().subscribe(res => {
      this.category = res
    })
  }
  logout() {
    this.service.logoutUser();
    this.router.navigate(['../login/sign']);
  }
  
}
