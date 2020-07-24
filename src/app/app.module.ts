import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { HomeComponent } from './home/components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
