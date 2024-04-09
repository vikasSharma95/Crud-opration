import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EmployeeRagistrationComponent } from './employee-ragistration/employee-ragistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Sort, MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeRagistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    FormsModule,
    MatSortModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
