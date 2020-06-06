import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskListComponent } from './todo-list/task-list/task-list.component';
import { AppComponent } from './app.component';
import { ArchivesComponent } from './todo-list/archives/archives.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { RegisterComponent } from './login/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './todo-list/category/category.component';


const routes: Routes = [
  /*{
    path: "task",
    loadChildren: () => import('./todo-list/todo-list.module').then(module => module.TodoListModule)
  },*/
  {
    path: "", component: TodoListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "task", component: TodoListComponent,
    canActivate: [AuthGuard],
    children:
      [
        {
          path: "list", component: TaskListComponent,

        },
        {
          path: "archieve", component: ArchivesComponent
        },
        {
          path:"category/:cat",component:CategoryComponent
        }
      ]
  },
  {
    path: "login", component: LoginComponent,
    children: [
      {
        path: "sign", component: SignInComponent,
      },
      {
        path: "register", component: RegisterComponent
      }
    ]
  },
  {
    path: "sign", component: SignInComponent,
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "contact", component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
