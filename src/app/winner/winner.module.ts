import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "src/app/shared/shared.module";
import { WinnerRoutingModule } from "./winner-routing.module";

import { WinnerComponent } from './winner.component';


@NgModule({
  declarations: [
    WinnerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WinnerRoutingModule
  ]
})
export class WinnerModule { }
