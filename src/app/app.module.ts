import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatTabsModule } from '@angular/material/tabs'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';
import { CryptoDialogComponent } from './crypto-dialog/crypto-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component'
import { MatStepperModule } from '@angular/material/stepper'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TableComponent,
    CryptoDialogComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
