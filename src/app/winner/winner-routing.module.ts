import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WinnerComponent } from './winner.component';

const routes: Routes = [
  { path: 'winner', component: WinnerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WinnerRoutingModule { }
