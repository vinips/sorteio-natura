import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "src/app/shared/shared.module";
import { UploadFilesModule } from './upload-files/upload-files.module';
import { WinnerModule } from './winner/winner.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UploadFilesModule,
    AppRoutingModule,
    SharedModule,
    WinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
