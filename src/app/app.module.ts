import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './todo-list/footer/footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './todo-list/navbar/navbar.component';
import { MenubarComponent } from './todo-list/menubar/menubar.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { TaskListComponent } from './todo-list/task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './todo-list/add-task/add-task.component';
import { ArchivesComponent } from './todo-list/archives/archives.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptorService } from './interceptor/token-interceptor.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WarningComponent } from './shared/warning/warning.component';
import { CategoryComponent } from './todo-list/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoListComponent,
    NavbarComponent,
    MenubarComponent,
    TaskListComponent,
    AddTaskComponent,
    ArchivesComponent,
    ConfirmationDialogComponent,
    LoginComponent,
    RegisterComponent,
    SignInComponent,
    AboutComponent,
    ContactComponent,
    WarningComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    TodoListModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
