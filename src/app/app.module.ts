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
import { MatDialogModule } from '@angular/material/dialog'
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TableComponent,
    CryptoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
