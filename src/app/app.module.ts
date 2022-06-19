import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizeComponent } from './visualize/visualize.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'

import { FormsModule } from '@angular/forms';
import { QueryInputComponent } from './query-input/query-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { NodeDataComponent } from './node-data/node-data.component'

@NgModule({
  declarations: [
    AppComponent,
    VisualizeComponent,
    LoginComponent,
    QueryInputComponent,
    NodeDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents:[]
})
export class AppModule { }
