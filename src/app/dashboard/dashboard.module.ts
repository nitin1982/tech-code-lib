import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDisplayComponent } from './components/dashboard-display/dashboard-display.component';



@NgModule({
  declarations: [DashboardDisplayComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardDisplayComponent
  ]
})
export class DashboardModule { }
