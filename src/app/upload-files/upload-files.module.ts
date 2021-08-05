import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFilesComponent } from './upload-files.component';
import { SharedModule } from "src/app/shared/shared.module";

import { UploadFilesRoutingModule } from "./upload-files-routing.module";


@NgModule({
  declarations: [
    UploadFilesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UploadFilesRoutingModule
  ],
  exports: [
    UploadFilesComponent
  ]
})
export class UploadFilesModule { }
