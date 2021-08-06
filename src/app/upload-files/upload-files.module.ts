import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "src/app/shared/shared.module";
import { UploadFilesRoutingModule } from "./upload-files-routing.module";

import { UploadFilesComponent } from './upload-files.component';

import { UploadFilesDirective } from './upload-files.directive';

@NgModule({
  declarations: [
    UploadFilesComponent,
    UploadFilesDirective
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
