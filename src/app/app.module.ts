import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { UploadImagesModule } from './upload-images/upload-images.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UploadImagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
