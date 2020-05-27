import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
