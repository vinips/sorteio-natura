import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImagesComponent } from './upload-images.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    UploadImagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UploadImagesComponent
  ]
})
export class UploadImagesModule { }
